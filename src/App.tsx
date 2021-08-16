import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Main, Login } from "./page";
import { getUserInfo } from "./utils";
function App() {
  return <div className="App">{getUserInfo() === "" ? <Login /> : <Main />}</div>;
}

export default App;
