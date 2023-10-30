import React from 'react'

export const CounterBtn = ({setCounter}) => {
  return (
    <div className='flex flex-col items-center justify-center my-5'>
      <p>count</p>
      <button onClick={() => setCounter(counter => counter + 1)} className='bg-black w-20 h-20 rounded-full'></button>
    </div>
  )
}
