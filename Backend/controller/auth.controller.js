import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
import { generatetokenandsetcookie } from "../utils/generatetoken.js";

export const signup = async (req, res) => {
  // res.send("hello")
  try {
    const { fullname, username, password, confirmpassword, gender } = req.body;

    if (password != confirmpassword) {
      return res.status(400).json({ error: "password dont match" });
    }

    const user = await User.findOne({ username });

    if (user) {
      return res.status(400).json({ error: "user already exist" });
    }

    //hashcode here
    const salt = await bcrypt.genSalt(10);

    const hashpassword = await bcrypt.hash(password, salt);

    //https://avatar.iran.liara.run/public/boy

    const boypicprofile = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlpicprofile = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newuser = new User({
      fullname,
      username,
      password: hashpassword,
      gender,
      profilepic: gender == "male" ? boypicprofile : girlpicprofile,
    });

    if (newuser) {
      //generate token here
      generatetokenandsetcookie(newuser._id, res);
      await newuser.save();

      res.status(201).json({
        _id: newuser._id,
        fullname: newuser.fullname,
        username: newuser.username,
        profilepic: newuser.profilepic,
      });
    } else {
      res.status(400).json({ error: "invaild user data" });
    }
  } catch (error) {
    console.log("error in signup controller", error.message);
    res.status(401).json({ error: error.message });
  }
};

export const login = async (req, res) => {
//   res.send("login page!!");
  try {
    const { username, password } = req.body;
    //check the username is correct or not
    const user = await User.findOne({ username });
    //check the password is correct or not
    const ispassword = await bcrypt.compare(password, user?.password || "");
    //if credential is mismatch
    if (!user || !ispassword) {
      return res.status(400).json({ error: "incorrect password or username" });
    }

    generatetokenandsetcookie(user._id,res)

    res.status(200).json({
        _id: user._id,
        fullname: user.fullname,
        username: user.username,
        profilepic: user.profilepic,
      });

  } catch (error) {
    console.log("error in login controller", error.message);
    res.status(401).json({ error: error.message });
  }
};

export const logout = async (req, res) => {
//   res.send("logout page!!");

 try {
    res.cookie("jwt","",{maxAge:0})
    res.status(200).json({message:"logout successfully"})
 } catch (error) {
    console.log("error in login controller", error.message);
    res.status(401).json({ error: error.message });
 }
};
