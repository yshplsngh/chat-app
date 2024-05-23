import React from "react";
import { Conversation } from "./Conversation";
import useGetConversation from "../../hooks/useGetConversation";

export const Conversatons = () => {
  const {loading,conversatons}=useGetConversation();
  // console.log(conversatons)
  return (
    <div className="">
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  );
};
