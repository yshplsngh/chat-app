import React from "react";

export const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 hover:bg-sky-300 p-3 py-1 rounded cursor-pointer">
        <div className="avatar online">
          <div className="w-14 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center">
          <div className="flex justify-between">
            <p>shiva</p>
            <span>😀</span>
          </div>
        </div>
        
      </div>
      <div className='border-b mt-1 m-3'></div>
    </>
  );
};
