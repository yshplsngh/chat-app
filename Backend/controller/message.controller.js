import Conversation from "../model/conversation.model.js";
import Message from "../model/message.model.js";
import { getReceiverSocketId,io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const { messages } = req.body;
    const { id: receiverId } = req.params; //reciver id
    const senderId = req.user._id; //sender id

    let conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, receiverId],
      },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      messages,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    // this will run in parallel
		await Promise.all([conversation.save(), newMessage.save()]);
    

    //socket IO functionality will go here
    const receiverSocketId = getReceiverSocketId(receiverId);
		if (receiverSocketId) {
			// io.to(<socket_id>).emit() used to send events to specific client
			io.to(receiverSocketId).emit("newMessage", newMessage);
		}

    res.status(201).json({ newMessage });
  } catch (error) {
    console.log("error in sendmessage controller", error.message);
    res.status(500).json({ error: "internal server error" });
  }
};
export const getMessage = async (req, res) => {
  try {
    const { id: usertochatId } = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: {
        $all: [senderId, usertochatId],
      },
    }).populate("messages");
    if (!conversation) return res.status(200).json([]);
    const messages = conversation.messages;

    res.status(200).json(messages);
  } catch (error) {
    console.log("error in getmessage controller", error.message);
    res.status(500).json({ error: "internal server error" });
  }
};
