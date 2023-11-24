import React, { useState } from 'react'
import { FormInput } from './FormInput'
import axios from 'axios'
import { Btn } from './Btn'
import { FaBeer, FaTimes, FaTimesCircle } from "react-icons/fa";

export const SetTarget = ({user,close}) => {
    const [name, setName] = useState('')
    const [target, setTarget] = useState(0)

    const handleSetTarget = async (e)=>{
      e.preventDefault()
        try {
            const res = await axios.post('http://localhost:3000/counter/set-target',{
            username: user.username,
            name,
            target,
            active: true
            })
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }
  return (
    <div className="bg-green-400 p-5 capitalize shadow-lg ">
      <div className='flex justify-between'>
        <h1 className="text-white font-bold text-xl my-2">set new zikr</h1>
        <button onClick={() =>close(false)}> <FaTimesCircle className='text-white text-2xl hover:text-green-700'/> </button>
      </div>
      <form onSubmit={handleSetTarget}>
        <FormInput
          type="text"
          label="zikr name"
          labelFor="zikr name"
          onchange={(e) => setName(e.target.value)}
        />
        <FormInput
          type="number"
          label="target"
          labelFor="target"
          onchange={(e) => setTarget(e.target.value)}
        />
        <button className="bg-white text-green-500 py-2 px-4 mt-4">set</button>
      </form>
      {/* <button onClick={() => handleSetTarget()}>click</button> */}
    </div>
  );
}
