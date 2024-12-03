import React, { useEffect } from "react";
import { MessagesInbox } from "./MessagesInbox";
import { MessagesInput } from "./MessagesInput";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";

export const Messages = () => {

  const{selectedConversation,setSelectedConversation}=useConversation();

  useEffect(() => {
    
    return () => {
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);

  return (
    <div className="flex flex-col md:min-w-[450px] text-black">
      {!selectedConversation?(<NoChatSelected/>):(
        <>
        {/* Header */}
        <div className="bg-white px-2 pt-2  rounded-l-full rounded-r-full mr-2  mb-3 mt-5 h-10">
         <span>To:</span>{" "} 
         <span className="font-bold text-blue-300">{selectedConversation.fullname}</span> 
        </div>
        <MessagesInbox/>
        <MessagesInput/>
          </>
      )}
    </div>
  );
};


const NoChatSelected=()=>{
  const {Authuser}=useAuthContext()
  return(
    <div className="flex justify-center items-center w-full h-full border-l">
      <div className=" text-center flex flex-col">
        <p>{Authuser.fullname}</p>
        <p>Select a chat to start chatting</p>
      </div>

    </div>
  )
}