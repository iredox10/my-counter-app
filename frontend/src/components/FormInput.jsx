import React from 'react'

export const FormInput = ({type,label,labelFor,value,name,onchange}) => {
  return (
    <div className='flex flex-col mt-2'>
        <label htmlFor={labelFor} className='text-white'>{label}</label>
        <input type={type} name={name} value={value} onChange={onchange} className='border-2 border-green-500 p-1 capitalize' />
    </div>
  )
}
