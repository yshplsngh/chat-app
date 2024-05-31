import express from "express";

import { protectRoute } from "../middleware/protectRoute.js";
import { getuserfromsidebar } from "../controller/user.controller.js";

const route = express.Router();
route.get("/", protectRoute, getuserfromsidebar);
 export default route