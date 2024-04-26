import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.js";
// import cookieParser from "cookie-parser;"
import cookieParser from "cookie-parser";
import messageroute from "./routes/message.js";
import userRoute from "./routes/user.js";
import { connectTomongoDB } from "./db/connectTomongoDB.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 4000;

app.use(express.json()); // to parse the incoming request with json payload (from req.body)
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/message", messageroute);
app.use("/api/users",userRoute)

app.listen(PORT, () => {
  connectTomongoDB();
  console.log(`server running on port ${PORT}`);
});
