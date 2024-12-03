import React from 'react'
import { SearchInput } from '../SearchInput'
import { Conversatons } from './Conversatons'
import { Logout } from './Logout'

export const Sidebar = () => {
  return (
    <div>
      <SearchInput />
      <Conversatons />
      {/* <Users /> */}
      <div className="mt-0">
        <Logout />
      </div>
    </div>
  )
}
