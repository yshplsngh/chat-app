import User from "../model/user.model.js";

export const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmpassword, gender } = req.body;
    
    if(password!=confirmpassword){
        return res.send(400).json({error:"password dont match"})
    }

    const user= await User.findOne({username})
    
    if(user){
        return res.send(400).json({error:"user already exist"})
    }

    //hashcode here


    //https://avatar.iran.liara.run/public/boy

    const boypicprofile=`https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlpicprofile=`https://avatar.iran.liara.run/public/girl?username=${username}`

    const newuser=new User({
        fullname,
        username,
        password,
        gender,
        profilepic:gender=='male'?boypicprofile:girlpicprofile
    })

    await newuser.save()

    res.status(201).json({
        _id:newuser._id,
        fullname:newuser.fullname,
        username:newuser.usrname,
        profilepic:newuser.profilepic

    })

  } catch (error) {}
};

export const login = (req, res) => {
  res.send("login page!!");
  console.log("login page!!");
};

export const logout = (req, res) => {
  res.send("logout page!!");

  console.log("logout page!!");
};
