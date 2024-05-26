import React, { useState } from 'react'
import { Message } from './Message'
import { useGetMessages } from '../../hooks/useGetMessages'
import { Messageskeleton } from '../skeleton/Messageskeleton.jsx';

export const MessagesInbox = () => {
  const{loading,messages}=useGetMessages();

  
  console.log("message",messages);
  return (
    <div className=' flex-1 overflow-auto px-4'>
      {!loading&&messages.length>0&&messages.map((message)=>(
        <Message key={message._id} message={message}/>
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
