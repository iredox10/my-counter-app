import React, { useEffect, useState } from "react";
import axios from 'axios'
import { FormInput } from "./FormInput";
import { Btn } from "./Btn";

export const SignupModel = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name || !username || !repeatPassword || !password) {
      setError("fill all the fields");
      return;
    }
    if (password !== repeatPassword) {
      setError("password did not match");
      return;
    }
    try {
      const res = await axios.post('http://localhost:3000/user/signup', {name,username,password})
      if(res.status !== 201){
        setError(res.data)
      }
      console.log(res.data)
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="">
      <h1 className="text-center">sign up</h1>
      <form onSubmit={handleSubmit}>
        {error}
        <FormInput
          type={"text"}
          labelFor={"name"}
          label={"name"}
          onchange={(e) => setName(e.target.value)}
        />
        <FormInput
          type={"text"}
          labelFor={"username"}
          label={"username"}
          onchange={(e) => setUsername(e.target.value)}
        />
        <FormInput
          type={"password"}
          labelFor={"password"}
          label={"password"}
          onchange={(e) => setPassword(e.target.value)}
        />
        <FormInput
          type={"password"}
          labelFor={"repeat-password"}
          label={"repeat password"}
          onchange={(e) => setRepeatPassword(e.target.value)}
        />
        <Btn text="sign up" />
      </form>
    </div>
  );
};
