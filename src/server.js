import express from "express";

import dotenv from "dotenv";
import authRouter from "./routes/auth.js";
import cookieParser from "cookie-parser";
import messageroute from "./routes/message.js";
import userRoute from "./routes/user.js";
import { connectTomongoDB } from "./db/connectTomongoDB.js";
import cors from "cors";
import { app, server } from "./socket/socket.js";

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

const PORT = process.env.PORT || 4000;



app.use(cors({origin:"http://localhost:5173",credentials:true}))

app.use(express.json()); // to parse the incoming request with json payload (from req.body)
app.use(cookieParser());
// app.use(express.urlencoded({extended:true}))

app.use("/api/auth", authRouter);
app.use("/api/message", messageroute);
app.use("/api/users", userRoute);

app.use(express.static(path.join(__dirname,"dist")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname,"dist", "index.html"));
});

server.listen(PORT, () => {
  connectTomongoDB();
  console.log(`server running on port ${PORT}`);
});
