import React, { useState } from "react";
import useConversation from "../zustand/useConversation";
import { useEffect } from "react";

import toast from "react-hot-toast";

export const useGetMessages = () => {
  const [loading, setloading] = useState(false);
  const { messages, setMessage, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setloading(true);
      try {
        const res = await fetch(
          `http://localhost:4600/api/message/${selectedConversation._id}`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        const data = await res.json();
        if (data.error) throw new Error(error.message);
        setMessage(data);
        console.log(messages)
        
      } catch (error) {
        toast.error(error.message)
      } finally {
        setloading(false);
        
      }
    };
    if(selectedConversation?._id) getMessages()

  }, [selectedConversation?._id,setMessage]);
  return{loading,messages}
};
