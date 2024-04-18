import { createContext, useState } from "react";

const UserDetailContext = createContext();

const UserDetailProvider = ({ children }) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPwd, setLoginPwd] = useState("");
  const [isSigningIn, setisSigningIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const contexts = {
    loginEmail,
    setLoginEmail,
    loginPwd,
    setLoginPwd,
    isSigningIn,
    setisSigningIn,
    errorMessage,
    setErrorMessage,
  };

  return (
    <UserDetailContext.Provider value={contexts}>
      {children}
    </UserDetailContext.Provider>
  );
};

export { UserDetailContext, UserDetailProvider };
