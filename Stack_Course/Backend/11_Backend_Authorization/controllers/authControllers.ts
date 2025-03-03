import {Request, Response} from "express";
import authRepository from "../repository/authRepository";
import bcrypt from 'bcryptjs'
import {validationResult} from "express-validator";
import jwt from 'jsonwebtoken'
import {CustomJwtPayload, CustomRequest} from "../middlewares/authMiddleware";


const generateAccesToken = ( email: string ) => {
    const payload = {
        email
    }
    const secret = process.env.SECRET || 'secret'
    const expiresIn = Math.floor(Math.random() * (60 - 30 + 1)) + 30;

    return jwt.sign(payload, secret, { expiresIn: `${expiresIn}s` })
}

const generateRefreshToken = ( email: string ) => {
    const payload = {
        email
    }
    const secret = process.env.SECRET_REFRESH || 'refreshSecret'
    const expiresIn = '7d';

    return jwt.sign(payload, secret, {expiresIn} )
}

class AuthControllers  {
    async sing_up(req: Request, res: Response): Promise<void> {
    try {
        const error = validationResult(req)
        if (!error.isEmpty()) {
            res.status(400).json(error)
            return
        }
        const {email, password} = req.body
        const candidate = await authRepository.findUser(email)
        if (candidate) {
             res.status(400).json({message: 'User with this name already exists'})
            return
        }

        const hashPassword = bcrypt.hashSync(password, 7);
        const user = await authRepository.createUser(email, hashPassword)
        if (user) {
            res.json({message: 'User sing_up'})
        }
    }catch(e) {
        console.log(e)
        res.status(400).json({message: 'sign_up error!'})
    }
    }

    async login(req: Request, res: Response) {
    try {
    const {email, password} = req.body
        const user = await authRepository.findUser(email)
        if (!user) {
            res.status(400).json({message: `User ${email} not search`})
            return
        }
        const validePassword = bcrypt.compareSync(password, user.hashPassword )
        if (!validePassword) {
            res.status(400).json({message: `Password not valide`})
            return
        }

        const token =  generateAccesToken(email)
        const refreshToken = generateRefreshToken(email)

        await authRepository.updateRefreshToken(email, refreshToken);

        res.json({token, refreshToken})
    }catch(e) {
        console.log(e)
        res.status(400).json({message: 'login error!'})
    }
    }

    async refresh(req: Request, res: Response) {
    try {
        const refreshString = req.headers.authorization
        const refreshToken = refreshString?.split(' ')[1]
        if (!refreshToken) {
             res.status(403).json({ message: "Refresh token is required" });
            return
        }

        const secret = process.env.SECRET_REFRESH || 'refreshSecret'
        const decodedData = jwt.verify(refreshToken, secret) as CustomJwtPayload;
        if (!decodedData) {
            res.status(403).json({message: 'Invalid or expired refresh token'})
            return
        }
        const user = await authRepository.findUser(decodedData.email);
        if (!user || user.refreshToken !== refreshToken) {
            res.status(403).json({ message: "Invalid refresh token" });
            return;
        }

        const newAccessToken = generateAccesToken(decodedData.email)
        const newRefreshToken = generateRefreshToken(decodedData.email);

        await authRepository.updateRefreshToken(decodedData.email, newRefreshToken);

        res.status(200).json({ accessToken: newAccessToken, refreshToken: newRefreshToken })
        return

    }catch(e) {
        console.error(e);
        res.status(500).json({ message: 'Internal server error' });
    }
    }

    async getDataUser(req: CustomRequest, res: Response){
        try {
            if (!req.user || !req.user.email) {
                res.status(401).json({ message: 'user Email not found' });
                return;
            }
            const userPayload = (req.user as CustomJwtPayload).email;
            const userData = await authRepository.findUser(userPayload);
            if (!userData) {
                res.status(404).json({ message: 'User not found' });
                return;
            }

            const responseData = {
                request_num: req.params.request_num,
                data: {
                    username: userData.email,
                },
            };

            res.json(responseData);
        } catch (e) {
            console.log(e);
            res.status(401).json({ message: 'Token has expired or invalid' });
        }
    }
}

export default new AuthControllers();

