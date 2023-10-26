import { Router, Request, Response } from 'express';
import pool from '../db';
import * as bcrypt from 'bcrypt';
import jwtGenerator from '../utils/jwtGenerator';
import authorization from '../middleware/authorizaton';
import validInfo from '../middleware/validInfo';

const router = Router();

router.post("/register", validInfo, async (req: Request, res: Response) => {
    try {

        const { email, password, name } = req.body;

        const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [email]);

        if (user.rows.length > 0) {
            return res.status(401).json("User already exists!");
        }

        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const bcryptPassword = await bcrypt.hash(password, salt);

        const newUser = await pool.query("INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *", [name, email, bcryptPassword])

        const token = jwtGenerator(newUser.rows[0].user_id);

        res.json({ token, user_name: newUser.rows[0].user_name });

    } catch (err: any) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

//login
router.post("/login", validInfo, async (req: Request, res: Response) => {
    try {

        const { email, password } = req.body;
        const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [email]);

        if (user.rows.length === 0) {
            return res.status(401).json("Password or Email is incorrect");
        }

        const validPassowrd = await bcrypt.compare(password, user.rows[0].user_password);

        if (!validPassowrd) {
            return res.status(401).json("Password or Email is incorrect");
        }

        const token = jwtGenerator(user.rows[0].user_id);
        const user_name = user.rows[0].user_name;

        res.json({ token, user_name });

    } catch (err: any) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})

router.get("/is-verify", authorization, async (req: Request, res: Response) => {
    try {
        res.json(true);
    } catch (err: any) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
})

export default router;