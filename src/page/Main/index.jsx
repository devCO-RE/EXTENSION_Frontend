/*global chrome*/
import React, { useState, useEffect } from "react";
import { Header } from "../../components/basis";
import { Spinner } from "../../components/molecules"
import { TransferPageTemplate, DetectPageTemplate } from "../../components/template"
function Main() {
  const [mainState, setMainState] = useState("detect");
  const [isBadWord, setIsBadWord] = useState(false);
  const [spinnerConfig, setSpinnerConfig] = useState({
    text: "파일을 생성 중 입니다...",
    time: 7
  });
  /* eslint-disable no-undef */
  const detectBadWord  = async () => {
    fetch("http://115.85.182.11:8080/badword").then((response) => response.json())
    .then((data) => setIsBadWord(data));
  }

  const checkRenderTemplate = () => {
    if(mainState==="transfer") return (<TransferPageTemplate setSpinnerConfig={setSpinnerConfig} setMainState={setMainState}/>);
    if(mainState==="detect") return (<DetectPageTemplate setSpinnerConfig={setSpinnerConfig} setMainState={setMainState} isBadWord={isBadWord}/>);
    else if(mainState==="progress") return (<Spinner title={spinnerConfig.text} time={spinnerConfig.time}/>);
    else if(mainState==="progress_detect") return (<Spinner title={"악플을 탐지중 입니다..."} time={10}/>);

  }

  return (
    <div>
      <Header />
      {checkRenderTemplate()}
      
    </div>
  );
}

export default Main;
