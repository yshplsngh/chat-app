import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import { connectTomongoDB } from "./db/connectTomongoDB.js";

const app = express();
const PORT = process.env.PORT || 4000;
dotenv.config();

app.use(express.json()); // to parse the incoming request with json payload (from req.body)

app.use("/api/auth", authRouter);

// app.get("/", (req, res) => {
//   // root route localhost 6000
//   res.send("hello");
// });

app.listen(PORT, () => {
  connectTomongoDB();
  console.log(`server running on port ${PORT}`);
});
