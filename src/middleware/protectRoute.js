import jwt from "jsonwebtoken";
import User from "../model/user.model.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({ error: "unauthorized-no token provided" });
    }

   
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);

    if (!decoded || !decoded.userid) {
      return res.status(401).json({ error: "unauthorized- invaild token " });
    }

    const user = await User.findById(decoded.userid).select("-password");

    if (!user) {
      return res.status(404).json({ error: "unauthorized- user not find " });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log("error in protectRoute middleware", error.message);
    res.status(500).json({ error: "internal server error" });
  }
};
