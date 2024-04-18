import "./_global.css";

import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Error from "./utils/Error";
import { SignInForm } from "./components";
import RegistrationForm from "./components/VisitorPage/components/RegistrationForm";
import { AuthProvider } from "./contexts/AuthContext";
import { UserDetailProvider } from "./contexts/UserDetailContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <SignInForm />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <RegistrationForm />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <UserDetailProvider>
        <RouterProvider router={router} />
      </UserDetailProvider>
    </AuthProvider>
  </React.StrictMode>
);
