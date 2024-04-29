import React from 'react'
import { Sidebar } from '../components/sidebar/Sidebar'
import { Messages } from '../components/messages/Messages'

export const Home = () => {
  return (
    <div className='flex gap-5 sm:h-[450px] md:h-[550px] overflow-hidden rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-blur-lg backdrop-filter border-opacity-0'>
      <Sidebar/>
      {/* <div className='p-3 border-b-2'></div>  */}
      <Messages/>
      </div>
  )
}
