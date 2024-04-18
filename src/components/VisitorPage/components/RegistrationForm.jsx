import React from "react";
import { UserLoginButton } from "../../../utils/Button";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  return (
    <div className="bg-neutral-800 w-screen h-screen">
      <div className="w-full h-full flex flex-col justify-center items-center gap-10">
        <h1 className="text-5xl font-bold text-neutral-300">Welcome Comuner</h1>
        <div className="flex flex-col gap-3">
          <label htmlFor="">
            <input
              type="text"
              className="w-96 p-2 outline-none"
              placeholder="Enter Username"
            />
          </label>
          <label htmlFor="">
            <input
              type="text"
              className="w-96 p-2 outline-none"
              placeholder="Enter Gmail"
            />
          </label>
          <label htmlFor="">
            <input
              type="password"
              className="w-96 p-2 outline-none"
              placeholder="Enter password"
            />
          </label>
        </div>
        <UserLoginButton label={"Register"} />
        <div>
          <p className="text-white">
            Already have an Account
            <Link to="/login">
              <span className="text-gray-500 font-bold pl-2 cursor-pointer">
                Sign In
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
