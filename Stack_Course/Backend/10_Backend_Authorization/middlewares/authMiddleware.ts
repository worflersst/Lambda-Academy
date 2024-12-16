import {NextFunction, Request, Response} from "express";
import jwt from "jsonwebtoken";

export interface CustomJwtPayload extends jwt.JwtPayload {
    email: string;
}

export interface CustomRequest extends Request {
    user?: CustomJwtPayload;
}

const authMiddleware = (req: CustomRequest, res: Response, next: NextFunction): void => {
    if (req.method === "OPTIONS") {
        return next();
    }

    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            res.status(403).json({ message: "Authorization header missing" });
            return;
        }

        const token = authHeader.split(" ")[1];
        if (!token) {
            res.status(403).json({ message: "User not authenticated" });
            return;
        }

        const secret = process.env.SECRET || "secret";
        const decodedData = jwt.verify(token, secret) as CustomJwtPayload;
        console.log("Decoded token data:", decodedData);

        req.user = decodedData;
        next();
    } catch (error) {
        console.log(error);
        res.status(403).json({ message: "User not authenticated" });
    }
};

export default authMiddleware;
