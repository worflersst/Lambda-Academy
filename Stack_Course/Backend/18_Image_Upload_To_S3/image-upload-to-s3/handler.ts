import {APIGatewayProxyHandler} from "aws-lambda";
import * as AWS from 'aws-sdk'
import {jwtDecode} from "jwt-decode";

const Cognito = new AWS.CognitoIdentityServiceProvider()
const S3 = new AWS.S3()
const DynamoDB = new AWS.DynamoDB.DocumentClient()

const USER_POOL_ID = process.env.USER_POOL_ID!
const CLIENT_ID = process.env.USER_POOL_CLIENT_ID!
const BUCKET_NAME = process.env.S3_BUCKET!;
const DYNAMODB_TABLE = process.env.DYNAMODB_TABLE!

const jsonParser = (data: string) => {
    return JSON.parse(data)
}
const returnObjectMessage = (statusCode: number,  data: string | object) => {
    return {
        statusCode: statusCode,
        body: JSON.stringify(typeof data === 'string' ? {message: data} : data)
    }
}
const generateAlphanumericId = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
};
// ======== Регистрация ======== //
export const registerUser: APIGatewayProxyHandler = async (event) => {
    try {
        if (!event.body) return returnObjectMessage(400, 'Invalid Request body')

        const {email, password} = jsonParser(event.body)

        if (!email || !password) return returnObjectMessage(400, 'Pls provide email and password')

        const signUpParams = {
            ClientId: CLIENT_ID,
            Username: email,
            Password: password,
            UserAttributes: [
                {Name: 'email', Value: email},
            ]
        }
        await Cognito.signUp(signUpParams).promise()

        const adminConfirmParams = {
            UserPoolId: USER_POOL_ID,
            Username: email
        }
        await Cognito.adminConfirmSignUp(adminConfirmParams).promise()

        return returnObjectMessage(200, "User registered successfully and no email confirmation needed");
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error occurred"
        return returnObjectMessage(500, errorMessage);
    }
}

// ======== Авторизация ======== //
export const signInUser: APIGatewayProxyHandler = async (event) => {
    try {
        if (!event.body) return returnObjectMessage(400, 'Invalid request body')

        const {email, password} = jsonParser(event.body!)
        if (!email || !password) return  returnObjectMessage(400, 'Please provide email and password')


        const authParams = {
            AuthFlow: 'USER_PASSWORD_AUTH',
            ClientId: CLIENT_ID,
            AuthParameters: {
                USERNAME: email,
                PASSWORD: password
            }
        }

        const authResponse = await Cognito.initiateAuth(authParams).promise()
        if (!authResponse.AuthenticationResult) return returnObjectMessage(400, 'Authentication failed');


       return  returnObjectMessage(200, {
                message: 'User signed in successfully',
                // accessToken: authResponse.AuthenticationResult.AccessToken,
                // это ниже idToken, но там какие-то приколы, так что акцесс ))
                accessToken: authResponse.AuthenticationResult.IdToken,
                // refreshToken: authResponse.AuthenticationResult.RefreshToken
        })
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
        return returnObjectMessage(500, errorMessage);
    }
}

// ======== Получение ссылки на загрузку изображения и его id ======== //
export const uploadImage: APIGatewayProxyHandler = async (event) => {
    try {
        const authHeader = event.headers.Authorization;
        if (!authHeader) return returnObjectMessage(401, "Missing Authorization token");

        const idToken = authHeader.split(' ')[1];
        if (!idToken) return returnObjectMessage(401, "Invalid Authorization token format");

        let userId: string;
        try {
            const decodedToken: { sub: string } = jwtDecode(idToken);
            userId = decodedToken.sub;
        } catch (error) {
            return returnObjectMessage(403, "Invalid ID token: Decoding failed");
        }

        if (!userId) return returnObjectMessage(403, "Invalid ID token: User ID not found");

        if (!event.queryStringParameters || !event.queryStringParameters.imageName) {
            return returnObjectMessage(400, "Image name parameter is missing");
        }        const fileName = `${event.queryStringParameters.imageName}.png`;

        const paramsForPresignedPost = {
            Bucket: BUCKET_NAME,
            Fields: {
                key: fileName,
                "Content-Type": "image/png",
                "Content-Disposition": "inline"
            },
            Conditions: [
                ["content-length-range", 0, 10485760],
                ["eq", "$Content-Type", "image/png"],
                ["eq", "$Content-Disposition", "inline"]
            ],
            Expires: 60 * 5,
        };
        const presignedPost = await S3.createPresignedPost(paramsForPresignedPost);

        const imageId = generateAlphanumericId();
        await DynamoDB.put({
            TableName: DYNAMODB_TABLE,
            Item: {
                userId,
                imageId,
                fileName,
                uploadedAt: Date.now()
            }
        }).promise();


        return returnObjectMessage(200, {
            message: "Presigned URL generated successfully",
            fileName,
            imageIdInDynamoDB: imageId,
            url: presignedPost.url,
            fields: presignedPost.fields
        });

    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
        return returnObjectMessage(500, errorMessage);
    }
};

// ======== Удаление изображений ======== //
export const deleteImage: APIGatewayProxyHandler = async (event) => {
try {
    const authHeader = event.headers.Authorization;
    if (!authHeader) return returnObjectMessage(401, "Missing Authorization token");

    const idToken = authHeader.split(' ')[1];
    if (!idToken) return returnObjectMessage(401, "Invalid Authorization token format");

    let userId: string;
    try {
        const decodedToken: { sub: string } = jwtDecode(idToken);
        userId = decodedToken.sub;
    } catch (error) {
        return returnObjectMessage(403, "Invalid ID token: Decoding failed");
    }

    if (!userId) return returnObjectMessage(403, "Invalid ID token: User ID not found");

    if (!event.queryStringParameters || !event.queryStringParameters.imageId) {
        return returnObjectMessage(400, "Image ID parameter is missing");
    }
    const imageId = event.queryStringParameters.imageId;

    const getParams = {
        TableName: DYNAMODB_TABLE,
        Key: {
            userId,
            imageId
        }
    };

    const imageRecord = await DynamoDB.get(getParams).promise();
    if (!imageRecord.Item) {
        return returnObjectMessage(404, "Image not found");
    }

    const s3DeleteParams = {
        Bucket: BUCKET_NAME,
        Key: imageRecord.Item.fileName
    };

    await S3.deleteObject(s3DeleteParams).promise();

    const deleteParams = {
        TableName: DYNAMODB_TABLE,
        Key: {
            userId,
            imageId
        }
    };

    await DynamoDB.delete(deleteParams).promise();

    return returnObjectMessage(200, { message: "Image deleted successfully" });
}catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return returnObjectMessage(500, errorMessage);
}
};

// ======== Получение списка ссылок ======== //
export const getImageLinks: APIGatewayProxyHandler = async (event) => {
    const authHeader = event.headers.Authorization;
    if (!authHeader) return returnObjectMessage(401, "Missing Authorization token");

    const idToken = authHeader.split(' ')[1];
    if (!idToken) return returnObjectMessage(401, "Invalid Authorization token format");

    let userId: string;
    try {
        const decodedToken: { sub: string } = jwtDecode(idToken);
        userId = decodedToken.sub;
    } catch (error) {
        return returnObjectMessage(403, "Invalid ID token: Decoding failed");
    }

    if (!userId) return returnObjectMessage(403, "Invalid ID token: User ID not found");

    const params = {
        TableName: DYNAMODB_TABLE,
        KeyConditionExpression: "userId = :userId",
        ExpressionAttributeValues: {
            ":userId": userId
        }
    };

    try {
        const result = await DynamoDB.query(params).promise();

        if (!result.Items || result.Items.length === 0) {
            console.log('No images found for user:', userId); // Для отладки
            return returnObjectMessage(404, "No images found for this user");
        }

        console.log('Found images:', result.Items); // Для отладки

        const imageLinks = result.Items.map(item => {
            const fileName = item.fileName;
            const s3Url = `https://${BUCKET_NAME}.s3.amazonaws.com/${fileName}`;
            return {
                fileName,
                url: s3Url
            };
        });

        return returnObjectMessage(200, {
            message: "Image links retrieved successfully",
            images: imageLinks
        });

    } catch (error) {
        console.error('Error fetching images from DynamoDB:', error); // Для отладки
        return returnObjectMessage(500, `Internal server error: ${(error as Error).message}`);
    }
};

