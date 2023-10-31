import React, { useState } from "react";
import { FormInput } from "./FormInput";
import { Btn } from "./Btn";
import axios from "axios";

export const SigninModel = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if ( !username || !password) {
      setError("fill all the fields");
      return;
    }
    try {
      const res = await axios.post("http://localhost:3000/user/signin", {
        name,
        username,
        password,
      });
      setError('')
      localStorage.setItem("counterUser", JSON.stringify(res.data.user));
      // if (res.status !== 200) {
      //   setError(res.data);
      // }
      console.log(res.data);
    } catch (err) {
      // console.log(err)
      setError(err.response.data.message);
    }
  };
  return (
    <div className="">
      <h1 className="text-center">sign in</h1>
      <form onSubmit={handleSubmit}>
        {error}
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
        <Btn text="sign in" />
      </form>
    </div>
  );
};
