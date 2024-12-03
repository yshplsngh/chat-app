import React from "react";
import { Sidebar } from "../components/sidebar/Sidebar";
import { Messages } from "../components/messages/Messages";

export const Home = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="flex gap-5 sm:h-[450px] op md:h-[550px] w-fit overflow-hidden rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg backdrop-filter border-opacity-0">
        <Sidebar />
        {/* <div className='p-3 border-b-2'></div>  */}
        <Messages />
      </div>
    </div>
  );
};
