import React, { useEffect, useState } from "react";
import { Message } from "./Message";
import { useGetMessages } from "../../hooks/useGetMessages";
import { Messageskeleton } from "../skeleton/Messageskeleton.jsx";
import { useRef } from "react";
import useListenMessages from "../../hooks/useListenMessages.js";

export const MessagesInbox = () => {
  const { loading, messages } = useGetMessages();
  useListenMessages();
  const LastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      LastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

 
  return (
    <div className=" flex-1 overflow-auto px-4">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={LastMessageRef}>
            <Message message={message} />
            {console.log("message._id", message._id)}
            
          </div>
        ))}
      {loading && [...Array(2)].map((_, idx) => <Messageskeleton key={idx} />)}
      {!loading && messages.length === 0 && <p>start a conversation</p>}
    </div>
  );
};


// import React, { useEffect, useRef } from "react";
// import { Message } from "./Message";
// import { useGetMessages } from "../../hooks/useGetMessages";
// import { Messageskeleton } from "../skeleton/Messageskeleton.jsx";
// import useListenMessages from "../../hooks/useListenMessages.js";

// export const MessagesInbox = () => {
//   const { loading, messages } = useGetMessages();
//   useListenMessages();
//   const LastMessageRef = useRef();

//   useEffect(() => {
//     setTimeout(() => {
//       LastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
//     }, 100);
//   }, [messages]);

//   return (
//     <div className="flex-1 overflow-auto px-4">
//       {!loading &&
//         messages.length > 0 &&
//         messages.map((message, index) => {
//           const isLastMessage = index === messages.length - 1;
//           if (isLastMessage) {
//             console.log("Last message._id", message._id);
//           } else {
//             console.log("message._id", message._id);
//           }
//           return (
//             <div key={message._id} ref={isLastMessage ? LastMessageRef : null}>
//               <Message message={message} />
//             </div>
//           );
//         })}
//       {loading && [...Array(2)].map((_, idx) => <Messageskeleton key={idx} />)}
//       {!loading && messages.length === 0 && <p>start a conversation</p>}
//     </div>
//   );
// };
