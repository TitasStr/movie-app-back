import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const authorization = async (req: Request | any, res: Response, next: NextFunction) => {
    try {

        const token: string | undefined = req.header("token");

        if (!token) {
            return res.status(403).json("Authorization declined");
        }

        const payload = jwt.verify(token, process.env.jwtSecret as string) as { user: string };
        req.user = payload.user;
        
    } catch (err: any) {
        console.error(err.message);
        return res.status(403).json("Authorization declined");
    }
    next();
}

export default authorization;