import React from "react";

export const MessagesInput = () => {
  return (
    <form class="bg-white border-t border-gray-300 p-4  ">
      <div class="flex items-center">
        <input
          type="text"
          placeholder="Type a message..."
          class="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
        />
        <button class="bg-indigo-500 text-white px-4 py-2 rounded-md ml-2">
          Send
        </button>
      </div>
    </form>
  );
};
