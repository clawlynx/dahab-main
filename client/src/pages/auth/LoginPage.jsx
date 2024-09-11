import React from "react";
import FormInput from "../../components/FormInput";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="bg-white p-5 rounded-lg w-1/3 flex flex-col items-center">
      <h1 className="text-xl font-semibold ">Admin Login</h1>
      <div className="w-full my-5">
        <FormInput title={"Email"} type={"email"} />
        <FormInput title={"Password"} type={"password"} />
        <button className="p-2 w-full bg-btnGreen rounded-lg font-semibold mt-3 hover:bg-btnHover nav-link">
          Login
        </button>
      </div>
      <Link to={"/auth/forgot-password"} className="text-blue-700">
        Forgot Password?
      </Link>
    </div>
  );
}
