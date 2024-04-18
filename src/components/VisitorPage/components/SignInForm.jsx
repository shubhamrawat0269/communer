import React from "react";
import { SignUpButton, UserLoginButton } from "../../../utils/Button";
import { Link } from "react-router-dom";

const SignInForm = () => {
  return (
    <div className="bg-neutral-800 w-screen h-screen">
      <div className="w-full h-full flex flex-col justify-center items-center gap-10">
        <h1 className="text-5xl font-bold text-neutral-300">Join Comuner</h1>

        <div className="flex flex-col gap-3">
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
        <UserLoginButton label={"Sign In"} />
        <div className="flex gap-3 items-center justify-center">
          <SignUpButton
            icon={`images/mail.png`}
            iconType={`mail`}
            label={`Sign Up With Github`}
          />
          <SignUpButton
            icon={`images/google.png`}
            iconType={`google`}
            label={`Sign Up With Google`}
          />
        </div>
        <div>
          <p className="text-white">
            Don't have Account
            <Link to="/register">
              <span className="text-gray-500 font-bold pl-2 cursor-pointer">
                Create One
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
