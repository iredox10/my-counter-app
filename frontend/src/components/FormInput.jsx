import React from 'react'

export const FormInput = ({type,label,labelFor,value,name,onchange}) => {
  return (
    <div className='flex flex-col'>
        <label htmlFor={labelFor}>{label}</label>
        <input type={type} name={name} value={value} onChange={onchange} className='border-2 border-black' />
    </div>
  )
}
