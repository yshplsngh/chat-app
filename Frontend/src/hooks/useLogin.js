import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

export const useLogin = () => {
  const [loading, setloading] = useState(false);
  const { setAuthuser } = useAuthContext();

  const login = async (username, password) => {
    const success = handleInputError(username, password);
    if (!success) return;
    setloading(true);
    
    try {
      
      const res = await fetch("http://localhost:4600/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      
      const data = await res.json();
      
      if (data.error) {
        throw new Error(error.message);
      }
      
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthuser(data);
    } catch (error) {
        toast.error(error.message);
      console.log("error in uselogin");
    } finally {
      setloading(false);
    }
  };

  return { login, loading };
};
const handleInputError = (username, password) => {
  if (!username || !password) {
    toast.error("please fill all field");
    return false;
  }

  return true;
};
