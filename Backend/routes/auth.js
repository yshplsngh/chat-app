import express from "express";
import { signup, login, logout } from "../controller/auth.js";

const route = express.Router();

route.post("/signup", signup);
route.post("/login", login);
route.post("/logout", logout);

route.get("/login", (req, res) => {
    res.send("login page!!");
    console.log("login page!!");
});

export default route;
