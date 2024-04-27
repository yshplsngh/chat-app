import React from 'react'

export const Gender = () => {
  return (
    <div className='flex mt-2 gap-5'>
        <div className=''>
            <label className=''>
                <span className='mr-2'>
                    Male
                </span>
                <input type="checkbox"   />
            </label>
        </div>
        <div>
            <label className=''>
                <span className='mr-2'>
                    Female
                </span>
                <input type="checkbox"   />
            </label>
        </div>
    </div>
  )
}
