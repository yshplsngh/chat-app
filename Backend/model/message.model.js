import mongoose from "mongoose";

const messageschema = mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    messages: {
      type: String,
      required: true,
    },
    //createAt updateAt => Member since <created>
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageschema);
export default Message;
