import mongoose from "mongoose";

const userschema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  usrname: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
  },
  profilepic: {
    type: String,
    default: "",
  },
});
export default mongoose.model('User',userschema)
