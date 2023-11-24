import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Display = ({counter,user}) => {
  const [target, setTarget] = useState(0);
  const [targetId, setTargetId] = useState('')
  useEffect(() => {
    async function fetch() {
      const user = JSON.parse(localStorage.getItem("counterUser"));
      if (user) {
        try {
          const res = await axios(
            `http://localhost:3000/counter/get-counters/${user.username}`
          );
          const target = res.data.counters;
          const activeTarget = target.filter((t) => t.active === true);
          setTarget(activeTarget[0]);
          setTargetId(activeTarget[0]._id)
          console.log(targetId)
        } catch (err) {
          console.log(err);
        }
      } else {
        console.log("no user");
      }
    }
    fetch();
  }, [counter]);

  useEffect(()=>{
    const updateCounter = async () =>{
      try {
        const res = await axios.patch(`http://localhost:3000/counter/update-counter/${targetId}`,{
          counter
        })
      } catch (err) {
        console.log(err)
      }
    }
    updateCounter()
  },[counter, targetId])

  return (
    <div className=" capitalize bg-white shadow-lg flex flex-col  items-end justify-between py-7 rounded-sm px-4">
      <div>zikr name : {target.name}</div>
      <div className="text-7xl py-2">{target.count}</div>
      <div className="flex gap-72">
        {user && <div style={{}}> target: {target.target}</div>}
        {user && (
          <div>
            reminder:{" "}
            {target.target - target.count <= 0 ? (
              <span>{0}</span>
            ) : (
              <span> {target.target - target.count}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
