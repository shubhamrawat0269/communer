import React, { useState } from "react";
import { SignUpButton } from "../../../utils/Button";

const SignInForm = () => {
  const [isCreateUser, setCreateUser] = useState(false);

  return (
    <div className="bg-orange-500 w-screen h-screen">
      <div className="w-full h-full flex flex-col justify-center items-center gap-10">
        <h1 className="text-5xl font-bold text-orange-300">
          {isCreateUser ? "Welcome Comuner" : "Join Comuner"}
        </h1>
        <div className="flex flex-col gap-3 items-center justify-center">
          <SignUpButton
            icon={`images/google.png`}
            iconType={`google`}
            label={`${isCreateUser ? "Sign In" : "Sign Up"} With Google`}
          />
          <SignUpButton
            icon={`images/facebook.png`}
            iconType={`facebook`}
            label={`${isCreateUser ? "Sign In" : "Sign Up"} With Google`}
          />
          <SignUpButton
            icon={`images/mail.png`}
            iconType={`mail`}
            label={`${isCreateUser ? "Sign In" : "Sign Up"} With Gmail`}
          />
        </div>
        <div>
          <p>
            {isCreateUser ? "Already have an account" : "Don't have Account"}
            <span
              className="text-green-900 font-bold pl-2 cursor-pointer"
              onClick={() => setCreateUser(!isCreateUser)}
            >
              {isCreateUser ? "Sing In" : "Create one"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
