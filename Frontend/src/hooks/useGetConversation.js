import React, { useEffect } from 'react'
import { useState } from 'react'

const useGetConversation = () => {
  const [loading, setloading] = useState(false);
  const [conversations, setconversations] = useState([]);

  useEffect(() => {
    
    const getConversations= async()=>{
        setloading(true);
        try {
            const res=await fetch("http://localhost:4600/api/users");
            const data=await res.json();
            if(data.error){
                throw new Error("error in useGetConversation try block",data.error)
            }
            setconversations(data);
        } catch (error) {
            // toast.error(error.message);
        }finally{
            setloading(false);
        }
    }
    getConversations();
    
    
  }, []);
  return {loading,conversations};
}

export default useGetConversation