import User from "../model/user.model.js";

export const getuserfromsidebar = async (req, res) => {
  try {
    //get id of logged in user
    const loggedinuser = req.user._id;

    //get alluser except logged in user
    const alluser = await User.find({ _id: { $ne: loggedinuser } }).select("-password");

    res.status(200).json(alluser);
  } catch (error) {
    console.log(
      "error in getuserfromsidebar user.controller.js ",
      error.messages
    );
    res.status(500).json({ error: "internal server error" });
  }
};
