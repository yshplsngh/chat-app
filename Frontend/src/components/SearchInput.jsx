import React, { useState } from "react";
import toast from "react-hot-toast";
import useConversation from "../zustand/useConversation";
import useGetConversation from "../hooks/useGetConversation";

export const SearchInput = () => {
  const{selectedConversation,setSelectedConversation}=useConversation();
  const {conversations}= useGetConversation();
  const [search, setsearch] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    if(!search)return;
    if(search<3){
      return toast.error("search must be atleast more than 3 character long")
    };
  const conversation=conversations.find((c)=> c.fullname.toLowerCase().includes(search.toLowerCase()))
  if(conversation){
    setSelectedConversation(conversation);
    setsearch('')
  }
  };

  return (
    <>
      <form
        onSubmit={handlesubmit}
        className="flex items-center gap-2 m-3 mt-5 "
      >
        <input
          className=" outline-none h-10 w-[15rem]  rounded-full text-center"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e)=>setsearch(e.target.value)}
        />
        <button
          className="outline-none w-10 h-10 bg-blue-500 rounded-full"
          type="submit"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <div className="border-b m-3 mt-5"></div>
      <div className="pb-7"></div>
    </>
  );
};
