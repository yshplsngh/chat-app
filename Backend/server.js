import express from "express";
import dotenv from "dotenv";
import authRouter from './routes/auth.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  // root route localhost 6000
  res.send("hello");
});

app.use("/api/auth", authRouter);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
