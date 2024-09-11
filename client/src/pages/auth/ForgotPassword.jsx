import React from "react";
import FormInput from "../../components/FormInput";

export default function ForgotPassword() {
  return (
    <div className="bg-white p-5 rounded-lg w-1/3 flex flex-col items-center">
      <h1 className="text-xl font-semibold ">Reset Password</h1>
      <div className="w-full my-5">
        <FormInput
          title={"Email"}
          type={"email"}
          placeholder={"Enter Registered Email"}
        />
        <button className="p-2 w-full bg-btnGreen rounded-lg font-semibold mt-3 hover:bg-btnHover nav-link">
          Submit
        </button>
      </div>
    </div>
  );
}
