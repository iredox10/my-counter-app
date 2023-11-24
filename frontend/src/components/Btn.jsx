import React from 'react'

export const Btn = ({text, action}) => {
  return (
    <div className='flex justify-center '>
      <button className='px-6 py-2 bg-white text-green-600 shadow-lg' type='submit' onClick={action}>{text}</button>
    </div>
  );
}
