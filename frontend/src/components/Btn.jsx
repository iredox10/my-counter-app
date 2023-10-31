import React from 'react'

export const Btn = ({text}) => {
  return (
    <div className='flex justify-center '>
      <button className='p-2 bg-gray-500' type='submit'>{text}</button>
    </div>
  );
}
