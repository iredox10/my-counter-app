import { useEffect, useState } from "react";
import { Display } from "./components/Display";
import { CounterBtn } from "./components/CounterBtn";
import { Btn } from "./components/Btn";
import { FormInput } from "./components/FormInput";
import { SignupModel } from "./components/SignupModel";
import { SigninModel } from "./components/SigninModel";
import { SideBar } from "./components/SideBar";

function App() {

  const [counter, setCounter] = useState(0)
  const [showModel, setShowModel] = useState(false)
  const [showSignupModel, setShowSignupModel] = useState(true)
  const [user, setUser] = useState()
  const [showSiderbar, setShowSiderbar] = useState(false)
  useEffect(()=>{
    const user = localStorage.getItem('counterUser')
    user && setUser(JSON.parse(user))
    !user && console.log('')
  },[])
  // useEffect(() =>{
  //   fetch('http://localhost:300/')
  // })
  const closeSidebar = ()=>{
    setShowSiderbar(false)
  }
  return (
    <div className="m-5 relative">
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
          <Btn text="save" />
          <Btn text="clear" />
          <Btn text="set" />
        </div>
      </div>
      {showModel && (
        <div className="capitalize p-2 border-4 absolute top-1/4 left-2/4 w-3/4 bg-slate-700/60   translate-x-[-50%]">
          <button onClick={() => setShowModel(false)}>close</button>
          <div className="flex">
            <button
              className="bg-gray-300 w-full capitaliflexze p-2 border-r-4 hover:bg-gray-500 "
              onClick={() => setShowSignupModel(true)}>
              sign up
            </button>
            <button
              className="bg-gray-300 w-full capitalize p-2 hover:bg-gray-500"
              onClick={() => setShowSignupModel(false)}>
              sign in
            </button>
          </div>
          {showSignupModel ? <SignupModel /> : <SigninModel />}
        </div>
      )}
      {showSiderbar && (
        <div className="absolute right-0 top-0 bg-gray-500 w-2/4 h-2/3">
          <SideBar user={user} closeSidebar={closeSidebar}/>
        </div>
      )}
    </div>
  );
}

export default App;
