import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

export const useLogout = () => {
  const [loading, setloading] = useState(false);
  const{setAuthuser}=useAuthContext();

  const logout = async () => {
    setloading(true);
    try {
      const res = await fetch("http://localhost:4600/api/auth/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data=await res.json();
      if(data.error){
        throw new Error(error.message,"hello")
      }
      localStorage.removeItem("chat-user")
      setAuthuser(null)
    } catch (error) {
      toast.error(error.message);
      console.log("hello error")
    } finally {
      setloading(false);
    }
  };

  return { logout, loading };
};
