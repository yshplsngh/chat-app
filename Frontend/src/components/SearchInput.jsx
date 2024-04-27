import React from 'react'

export const SearchInput = () => {
  return (
        <>
        <form className='flex items-center gap-2 m-3 mt-5 '>
            <input className=' outline-none h-10 w-[15rem]  rounded-full text-center' type='text' placeholder='Search'  />
            <button className='outline-none w-10 h-10 bg-blue-500 rounded-full' type='submit'><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
        <div className='border-b m-3 mt-5'></div>
        <div className='pb-7'></div>
        </>
  
  )
}
