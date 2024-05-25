import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

export const useSendMessages = () => {
  const [loading, setloading] = useState(false);
  const { messages, setMessage, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    setloading(true);
    try {
      const res = await fetch(
        `http://localhost:4600/api/message/send/${selectedConversation._id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ message }),
        }
      );
      const data = await res.json();
      if (data.error) throw new Error(data.message);
      console.log(data)
      setMessage([...messages, data.newMessage]);
    } catch (error) {
      console.error("Error in sendMessage:", error); // Log error details
      toast.error(error.message);
    } finally {
      setloading(false);
    }
  };
  return { loading, sendMessage };
};
