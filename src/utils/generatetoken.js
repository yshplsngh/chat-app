import jwt from "jsonwebtoken"
 

export const generatetokenandsetcookie =(userid,res)=>{
    const token=jwt.sign({userid},process.env.JWT_TOKEN,{
        expiresIn:"15d"
    });

    res.cookie("jwt",token,{
        maxAge: 15*24*60*60*1000,  //ms
        // httpOnly:true,  //prevent xss attacks cross-site scripting attacks
        // sameSite:"strict", //CSRF attacks cross-site request forgery attacks 
        secure: process.env.NODE_ENV!=="development"
    })

}