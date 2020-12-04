import React from "react";

import Header from "./components/Header/Header";
import Routes from "./routes";
import { useHandleAuth } from "./hooks";

import "./App.css";

const App = () => {
  useHandleAuth();

  return (
    <>
      <Header />
      <div className="container py-3">
        <Routes />
      </div>
    </>
  );
};

export default App;
