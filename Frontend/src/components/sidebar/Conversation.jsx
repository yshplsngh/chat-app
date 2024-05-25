
import React from "react";
import useConversation from "../../zustand/useConversation";

export const Conversation = ({ conversation, lastIdx, emoji }) => {
  const{selectedConversation,setSelectedConversation}=useConversation();
  const isSelected=selectedConversation?.id===conversation._id;
  // console.log(selectedConversation)
  return (
    <>
      <div className={`flex gap-2 hover:bg-sky-300 p-3 py-1 rounded cursor-pointer ${isSelected?"bg-sky-400":""}`}
      onClick={() => setSelectedConversation(conversation)}
      >
        <div className="avatar online">
          <div className="w-14 rounded-full">
            <img 
            src={conversation.profilepic}
            alt="user avatar" />
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center">
          <div className="flex justify-between">
            <p>{conversation.fullname} </p>
            <span>{emoji}</span>
          </div>
        </div>
      </div>
      {!lastIdx && <div className="border-b mt-1 m-3"></div>}
    </>
    
  );
 
};
