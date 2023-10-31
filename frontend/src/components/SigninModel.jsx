import React from "react";
import { FormInput } from "./FormInput";
import { Btn } from "./Btn";

export const SigninModel = () => {
  
  return (
    <div className="">
      <h1 className="text-center">sign up</h1>
      <form>
        <FormInput type={"text"} labelFor={"username"} label={"username"} />
        <FormInput type={"password"} labelFor={"password"} label={"password"} />
        <Btn text='sign in' />
      </form>
    </div>
  );
};
