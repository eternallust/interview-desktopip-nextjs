import React from "react";
import FormLogin from "./FormLogin";

export default function SignIn() {
  return (
    <div className="max-md:h-[calc(100vh_-_80px)] md:h-screen w-full flex flex-col justify-center items-center bg-light-blue">
      <div className="w-full max-md:max-w-xs md:w-[40rem] bg-white shadow-md rounded">
        <h4 className="text-black text-2xl font-bold px-8 pt-6">Sign In</h4>
        <FormLogin />
        <div className="mt-4 text-center">
          <a
            href="#"
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            Forgot Password?
          </a>
        </div>
        <div className="mt-4 mb-8 text-center">
          <a
            href="#"
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            Dont have an account? Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
