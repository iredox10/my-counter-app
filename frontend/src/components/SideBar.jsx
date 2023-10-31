import React from 'react'

export const SideBar = ({user,closeSiderbar}) => {
    const handleSignOut = ()=>{
        localStorage.removeItem('counterUser')
    }
  return (
    <div>
        <button onClick={()=> closeSiderbar()}>close</button>
      <div>
        <p>welcome {user.username}</p>
        <p>stats</p>
        <p>history</p>
      </div>
      <div>
        <button onClick={() => handleSignOut()}>sign out</button>
      </div>
    </div>
  );
}
