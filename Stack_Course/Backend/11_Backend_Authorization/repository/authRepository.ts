import {mongoCollection} from "../db/mongoDB";

class AuthRepository {
    async findUser(email: string) {
      return  await mongoCollection.findOne( {email})
    }

    async createUser(email: string, hashPassword: string) {
        const createStatus = await mongoCollection.insertOne({email, hashPassword})
        if (createStatus) {
            return true
        }
        return false
    }

    async updateRefreshToken(email: string, refreshToken: string) {
        await mongoCollection.updateOne(
            { email },
            { $set: { refreshToken } }
        );
    }


}

export default new AuthRepository()