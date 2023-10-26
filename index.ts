import express from "express";
import cors from "cors";
import auth from './routes/auth'
import movies from './routes/movies'

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.use("/auth", auth);
app.use("/movies", movies);

app.listen(PORT, () => {
    console.log(`Server is now listening on port ${PORT}`);
})