import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Main, Login } from "./page";
import { getLoginInfo } from "./utils";
function App() {
  return <div className="App">{getLoginInfo() === "" ? <Login /> : <Main />}</div>;
}

export default App;
