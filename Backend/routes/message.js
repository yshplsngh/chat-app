import express from "express"
import { sendMessage,getMessage } from "../controller/message.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";
// import sendMessage from "..message.controller.js"
const route=express.Router();

route.get("/:id",protectRoute,getMessage)
route.post("/send/:id",protectRoute,sendMessage)

export default route