import React from "react";
import { Conversation } from "./Conversation";
import useGetConversation from "../../hooks/useGetConversation";
import { getRandomEmoji } from "../../Utils/emojis";

export const Conversatons = () => {
  const {loading,conversations}=useGetConversation();
  // console.log(conversations)
  return (
    <div className="overflow-y-auto max-h-80 ">
      {conversations.map((conversation,idx)=>(
        <Conversation
        key={conversation._id}
        conversation={conversation}
        emoji={getRandomEmoji()}
        lastIdx={idx === conversations.length-1}
        ></Conversation>
      ))}
      {loading?<span><img src="/Users/shivayadav/Desktop/full stack/chat app/Frontend/src/gif/spinner.gif" alt="" /></span>:null}
    </div>
  );
};
