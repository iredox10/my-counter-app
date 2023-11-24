import React from 'react'

export const CounterBtn = ({setCounter}) => {
  return (
    <div className='flex flex-col items-center justify-center my-5'>
      <p>count</p>
      <button onClick={() => setCounter(counter => counter + 1)} className='bg-white shadow-xl w-32 h-32 rounded-full '></button>
    </div>
  )
}
