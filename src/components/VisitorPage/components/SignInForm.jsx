import { Link } from "react-router-dom";
import { SignUpButton, UserLoginButton } from "../../../utils/Button";
import { useContext } from "react";
import { UserDetailContext } from "../../../contexts/UserDetailContext";
import {
  doSignInWithEmailAndPassword,
  doSignInWithGoogle,
} from "../../../utils/authUtils";

const SignInForm = () => {
  const {
    loginEmail,
    setLoginEmail,
    loginPwd,
    setLoginPwd,
    isSigningIn,
    setisSigningIn,
    errorMessage,
    setErrorMessage,
  } = useContext(UserDetailContext);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setisSigningIn(true);
      await doSignInWithEmailAndPassword(loginEmail, loginPwd);
    }
  };

  const onGoogleSignIn = () => {
    if (!isSigningIn) {
      setisSigningIn(true);
      doSignInWithGoogle().catch((err) => {
        setisSigningIn(false);
      });
    }
  };

  return (
    <div>
      {/* {userLoggedIn && <Navigate to={"/home"} replace={true} />} */}
      <div className="bg-neutral-800 w-screen h-screen">
        <div className="w-full h-full flex flex-col justify-center items-center gap-10">
          <h1 className="text-5xl font-bold text-neutral-300">Join Comuner</h1>

          <form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <div className="flex flex-col gap-3">
              <label htmlFor="">
                <input
                  type="text"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-96 p-2 outline-none"
                  placeholder="Enter Gmail"
                />
              </label>
              <label htmlFor="">
                <input
                  type="password"
                  value={loginPwd}
                  onChange={(e) => setLoginPwd(e.target.value)}
                  className="w-96 p-2 outline-none"
                  placeholder="Enter password"
                />
              </label>
            </div>
            <UserLoginButton label={"Sign In"} />
          </form>
          <div>
            <SignUpButton
              icon={`images/google.png`}
              iconType={`google`}
              label={`Sign Up With Google`}
              onBtnClicked={onGoogleSignIn}
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
    </div>
  );
};

export default SignInForm;
