import React from "react";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../Utils/extractTime";

export const Message = ({ message }) => {
  const { selectedConversation } = useConversation();
  const { Authuser } = useAuthContext();
  const fromme = message.senderId === Authuser._id;
  const profilepic = fromme
    ? Authuser.profilepic
    : selectedConversation.profilepic;
  const time = extractTime(message.createdAt);
  return (
    <>
      {fromme ? (
        <div className="flex justify-end mb-4 cursor-pointer ">
          <div className="flex max-w-96 bg-indigo-500 text-white rounded-lg p-3 gap-3">
            <p>{message.messages}</p>
          </div>
          <div className="w-9 h-9 rounded-full flex flex-col items-center justify-center ml-2 pt-4">
            <img
              src={profilepic}
              alt="My Avatar"
              className="w-8 h-8 rounded-full"
            />
            <p className="text-xs text-gray-500">{time}</p>
          </div>
        </div>
      ) : (
        <div className="flex mb-4 cursor-pointer ">
          <div className="w-9 h-9 rounded-full flex flex-col items-center justify-center mr-2 pt-4">
            <img
              src={profilepic}
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
            <p className="text-xs text-gray-500">{time}</p>
          </div>
          <div className="flex max-w-96 bg-white rounded-lg p-3 gap-3">
            <p className="text-gray-700">{message.messages}</p>
          </div>
        </div>
      )}
    </>
  );
};
