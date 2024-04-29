import React from 'react'
import { Message } from './Message'

export const MessagesInbox = () => {
  return (
    <div className=' flex-1 overflow-auto px-4'>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
    </div>
  )
}
