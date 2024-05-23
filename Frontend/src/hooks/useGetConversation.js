import React, { useEffect } from "react";
import { useState } from "react";
import Cookies from 'js-cookie';

const useGetConversation = () => {
  const [loading, setloading] = useState(false);
  const [conversations, setconversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setloading(true);
      try {
        const token = Cookies.get("jwt"); // Retrieve the token from cookies
        if (!token) {
          throw new Error("No token found");
        }
        console.log(1);
        const res = await fetch("http://localhost:4600/api/users", {
          method: "Get",
          headers: {
            'Authorization': `${token}`,
            "Content-Type": "application/json",
          },
        });
        console.log(2);
        const data = await res.json();
        console.log(3);
        if (data.error) {
          throw new Error("error in useGetConversation try block", data.error);
        }
        console.log(4);
        console.log(data);
        setconversations(data);
        console.log(5);
      } catch (error) {
        // toast.error(error.message);
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
