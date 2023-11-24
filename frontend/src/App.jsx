import { useEffect, useState } from "react";
import { Display } from "./components/Display";
import { CounterBtn } from "./components/CounterBtn";
import { Btn } from "./components/Btn";
import { SignupModel } from "./components/SignupModel";
import { SigninModel } from "./components/SigninModel";
import { SideBar } from "./components/SideBar";
import { SetTarget } from "./components/SetTarget";
import axios from "axios";
import './App.css'
import { FaTimesCircle } from "react-icons/fa";
function App() {

  const [counter, setCounter] = useState(0)
  const [showModel, setShowModel] = useState(false)
  const [showSignupModel, setShowSignupModel] = useState(true)
  const [user, setUser] = useState()
  const [showSiderbar, setShowSiderbar] = useState(false)
  const [showTarget, setShowTarget] = useState()

  useEffect(()=>{
    const user = localStorage.getItem('counterUser')
    user && setUser(JSON.parse(user))
    !user && console.log('no user')
  },[])
  
  const closeSidebar = (value)=>{
    setShowSiderbar(value)
  }


  const handleTarget = () =>{
    if (!user) {
      setShowModel(true)
      setShowTarget(false)
    }else{
      setShowTarget(!showTarget)
    }
  }

  const close = (value) =>{
    setShowTarget(value)
  }
  

  return (
    <div className="bg-green-400 my-10 relative md:w-[40%] md:mx-auto mx-5">
      <div className="border-2 p-2">
        <div className="flex justify-between">
          <div>logo</div>
          {user ? (
            <button onClick={() => setShowSiderbar(!showSiderbar)}>menu</button>
          ) : (
            <button onClick={() => setShowModel(!showModel)}>login</button>
          )}
        </div>
        <Display counter={counter} user={user} />
        <CounterBtn counter={counter} setCounter={setCounter} />
        <div className="flex gap-3 justify-center my-5">
          {/* <Btn text="save" /> */}
          <Btn text="clear" />
          <Btn text="set" action={handleTarget} />
        </div>
      </div>
      {showModel && (
        <div className="absolute top-1/4 left-2/4 w-3/4 bg-green-400 p-5 capitalize shadow-lg    translate-x-[-50%]">
          <button onClick={() => setShowModel(false)}>
            <FaTimesCircle className="text-white text-2xl hover:text-green-700" />
          </button>
          <div className="flex">
            <button
              className="bg-green-300 w-full capitaliflexze p-2 border-r-4 hover:bg-gray-500 "
              onClick={() => setShowSignupModel(true)}>
              sign up
            </button>
            <button
              className="bg-green-300 w-full capitalize p-2 hover:bg-gray-500"
              onClick={() => setShowSignupModel(false)}>
              sign in
            </button>
          </div>
          {showSignupModel ? <SignupModel /> : <SigninModel />}
        </div>
      )}
      {showSiderbar && (
        <div className="absolute right-0 top-0 bg-green-400 shadow-lg w-2/4 h-2/3">
          <SideBar user={user} setShowSiderbar={closeSidebar} />
        </div>
      )}
      {showTarget && (
        <div className="absolute top-5 left-2/4 translate-x-[-50%] bg-gray-400">
          <SetTarget user={user} close={close} />
        </div>
      )}
    </div>
  );
}

export default App;
