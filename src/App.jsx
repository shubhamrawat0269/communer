import React from "react";
import { Home, VisitorPage } from "./components";

const App = () => {
  const auth = false;
  return <div>{auth ? <Home /> : <VisitorPage />}</div>;
};

export default App;
