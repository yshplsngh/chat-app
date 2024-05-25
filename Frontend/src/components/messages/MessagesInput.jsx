import React, { useState } from "react";
import { useSendMessages } from "../../hooks/useSendMessages";

export const MessagesInput = () => {
  const [message, setMessage] = useState("");
  const {loading,sendMessage}= useSendMessages();
  const handlesubmit=async(e)=>{
    e.preventDefault();
    if(!message) return;
    console.log("Submitting message:", message); // Log the message content
    await sendMessage(message)
    setMessage("")

  }

  return (
    <form className="bg-white border-t border-gray-300 p-4 rounded-l-xl   " onSubmit={handlesubmit}>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
        />
        <button className="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2">
          Send
        </button>
      </div>
    </form>
  );
};
