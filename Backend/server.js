import express from "express";

import dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import cookieParser from "cookie-parser";
import messageroute from "./routes/message.js";
import userRoute from "./routes/user.js";
import { connectTomongoDB } from "./db/connectTomongoDB.js";
import cors from "cors";
import { app, server } from "./socket/socket.js";

dotenv.config();

const PORT = process.env.PORT || 4000;



app.use(cors({origin:"http://localhost:5173",credentials:true}))

app.use(express.json()); // to parse the incoming request with json payload (from req.body)
app.use(cookieParser());
// app.use(express.urlencoded({extended:true}))

app.use("/api/auth", authRouter);
app.use("/api/message", messageroute);
app.use("/api/users", userRoute);

server.listen(PORT, () => {
  connectTomongoDB();
  console.log(`server running on port ${PORT}`);
});
