import React from 'react'

export const Display = ({counter}) => {
  return (
    <div className='flex flex-col items-end justify-between py-7 border-2 px-2'>
        <div>target</div>
        <div className='text-6xl'>{counter}</div>
    </div>
  )
}
