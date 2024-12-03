import React from 'react'
import { useLogout } from '../../hooks/useLogout'

export const Logout = () => {
  const {logout,loading}=useLogout()
  return (
    <button onClick={logout} className='  fixed bottom-2 p-3'>Logout</button>
  )
}
