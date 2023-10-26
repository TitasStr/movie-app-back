import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

function jwtGenerator(user_id: number): string {
    const payload = {
        user: user_id
    };

    return jwt.sign(payload, process.env.jwtSecret as string, { expiresIn: '1hr' });
}

export default jwtGenerator;