import React from "react";
import { MessagesInbox } from "./MessagesInbox";
import { MessagesInput } from "./MessagesInput";

export const Messages = () => {
  const nochatSelected=false;
  return (
    <div className="flex flex-col md:min-w-[450px]">
      {nochatSelected?(<NoChatSelected/>):(
        <>
        {/* Header */}
        <div className="bg-white px-2 py-4 mb-3">
         <span>To:</span>{" "} 
         <span className="font-bold text-blue-300">Shiva</span> 
        </div>
        <MessagesInbox/>
        <MessagesInput/>
          </>
      )}
    </div>
  );
};


const NoChatSelected=()=>{
  return(
    <div className="flex justify-center items-center w-full h-full border-l">
      <div className=" text-center flex flex-col">
        <p>hello shiva</p>
        <p>Select a chat to start chatting</p>
      </div>

    </div>
  )
}