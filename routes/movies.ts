import { Router, Request, Response } from 'express';
import pool from "../db";
import authorization from '../middleware/authorizaton';
const router = Router();

router.get("/", authorization, async (req: Request, res: Response) => {
  try {
    const movies = await pool.query("SELECT * FROM movies");
    res.json(movies.rows);

  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

export default router;