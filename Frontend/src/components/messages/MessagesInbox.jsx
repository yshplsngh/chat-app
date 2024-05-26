import React, { useEffect, useState } from 'react'
import { Message } from './Message'
import { useGetMessages } from '../../hooks/useGetMessages'
import { Messageskeleton } from '../skeleton/Messageskeleton.jsx';
import { useRef } from 'react';

export const MessagesInbox = () => {
  const{loading,messages}=useGetMessages();
  const LastMessageRef=useRef();
  useEffect(() => {
    
    setTimeout(() => {
      LastMessageRef.current?.scrollIntoView({behavior:"smooth"});
    }, 100);
  }, [messages]);
  
  // console.log("message",messages);
  return (
    <div className=' flex-1 overflow-auto px-4'>
      {!loading&&messages.length>0&&messages.map((message)=>(
        <div ref={LastMessageRef} key={message._id} >
          <Message message={message}/>
        </div>
      ))}
      {loading&&[...Array(2)].map((_,idx)=> <Messageskeleton key={idx}/>)}
      {!loading&&messages.length===0&&(
        <p>start a conversation</p>
      )}
        {/* <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/> */}
    </div>
  )
}
