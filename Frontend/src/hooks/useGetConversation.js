import React, { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";

const useGetConversation = () => {
  const [loading, setloading] = useState(false);
  const [conversations, setconversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setloading(true);
      try {
        const res = await fetch("http://localhost:4600/api/users",{
          method:"GET",
          credentials:"include"
        });

        const data = await res.json();

        if (data.error) {
          throw new Error("error in useGetConversation try block", data.error);
        }

        console.log(data);
        setconversations(data);
      } catch (error) {
        toast.error(error.message);
        console.log("error in useGetConversation catch block", error.message);
      } finally {
        setloading(false);
      }
    };
    getConversations();
  }, []);
  return { loading, conversations };
};

export default useGetConversation;
