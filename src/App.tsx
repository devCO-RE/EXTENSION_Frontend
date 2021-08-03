import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Main, Login } from "./page";
function App() {
  const [userInfo, setUserInfo] = useState("" as string);
  return (
    <div className="App">
      {userInfo === "" ? <Login setUserInfo={setUserInfo} /> : <Main />}
    </div>
  );
}

export default App;
