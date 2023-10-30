import React, { useState } from "react";
import { FormInput } from "./FormInput";
import { Btn } from "./Btn";

export const SignupModel = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="">
      <h1 className="text-center">sign up</h1>
      <form>
        <FormInput type={"text"} labelFor={"name"} label={"name"} />
        <FormInput type={"text"} labelFor={"username"} label={"username"} />
        <FormInput type={"password"} labelFor={"password"} label={"password"} />
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
