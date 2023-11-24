import React from 'react'
import { FaTimesCircle } from 'react-icons/fa';

export const SideBar = ({ user, setShowSiderbar }) => {
  const handleSignOut = () => {
    localStorage.removeItem("counterUser");
    window.location.reload(false)
  };
  return (
    <div className="p-5 text-white text-xl  ">
      <div className="flex items-center justify-between ">
        <h1 className="capitalize"> {user.username}</h1>
        <button onClick={() => setShowSiderbar(false)}>
          <FaTimesCircle className="text-white text-2xl hover:text-green-700" />{" "}
        </button>
      </div>
      <div className="flex flex-col gap-2 items-start my-2 ">
        <button className='capitalize'>stats</button>
        <button className='capitalize'>history</button>
      </div>
      <div className='my-5'>
        <button className='bg-yellow-500 px-6 py-2 capitalize hover:bg-yellow-600' onClick={() => handleSignOut()}>sign out</button>
      </div>
    </div>
  );
};
