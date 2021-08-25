/*global chrome*/
import React, { useState, useEffect } from "react";
import { Header } from "../../components/basis";
import { Spinner } from "../../components/molecules"
import { TransferPageTemplate, DetectPageTemplate } from "../../components/template"


function Main() {
  const [mainState, setMainState] = useState("detect");
  const [url, setUrl] = useState("");
  const [isBadWord, setIsBadWord] = useState(true);
  const [spinnerConfig, setSpinnerConfig] = useState({
    text: "파일을 생성 중 입니다...",
    time: 7, 
    isOpen: false
  });
  /* eslint-disable no-undef */
  useEffect(()=> {
    let queryOptions = { active: true, currentWindow: true };
    chrome.tabs.query(queryOptions, function (tabs) {
      var tab = tabs[0];
      setUrl(tab.url);
      console.log("in main:", tab.url);
  });

    chrome.storage.local.get(['hasFile'], function(result) {
      console.log('Value currently is ' + result.hasFile);
      if(result.hasFile==="hasFile") setMainState("transfer");
    });
  });

  const checkRenderTemplate = () => {
    if(mainState==="transfer") return (<TransferPageTemplate setSpinnerConfig={setSpinnerConfig} setMainState={setMainState} curUrl={url}/>);
    if(mainState==="detect") return (<DetectPageTemplate setSpinnerConfig={setSpinnerConfig} setMainState={setMainState} isBadWord={isBadWord} curUrl={url}/>);
  }

  return (
    <div>
      <Header />
      <Spinner title={spinnerConfig.text} time={spinnerConfig.time} isOpen={spinnerConfig.isOpen}/>
      {checkRenderTemplate()}
      
    </div>
  );
}

export default Main;
