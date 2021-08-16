/*global chrome*/
import React, { useState, useEffect } from "react";
import { Header } from "../../components/basis";
import { Spinner } from "../../components/molecules"
import { TransferPageTemplate } from "../../components/template"
function Main() {
  const [mainState, setMainState] = useState("default");
  function doStuffWithDom(domContent) {
    const domTemplate = document.createElement("div"); // body에 추가할 span 태그를 추가
    domTemplate.innerHTML = domContent; // innerHTML을 사용하여 text를 html로 파싱 후 자식노드로 추가

    document.body.append(domTemplate);
    console.log("I received the following DOM content:\n" + domTemplate);
  }
  /* eslint-disable no-undef */
  const testGetDoc = async () => {
    // A function to use as callback
    let queryOptions = { active: true, currentWindow: true };
    chrome.tabs.query(queryOptions, function (tabs) {
      var tab = tabs[0];
      chrome.tabs.sendMessage(tab.id, { text: "report_back" }, doStuffWithDom);
    });
  };
  const testAPI  = async () => {
    fetch("http://115.85.182.11:8080/user/123").then((response) => response.json())
    .then((data) => console.log(data));
  }

  const checkRenderTemplate = () => {
    if(mainState==="transfer") return (<TransferPageTemplate/>);
    else if(mainState==="progress") return (<Spinner title={"파일을 생성 중 입니다..."}/>);
    else if(mainState==="default") return(
      <div>
        <button onClick={testGetDoc}>pdf test</button>
        <button onClick={testAPI}>api test</button>
        <button onClick={()=> {
          setMainState("transfer");
        }}>set transfer</button>
        <button onClick={() => {
          setMainState("progress");
        }}>set progress</button>
      </div>
    )
  }

  return (
    <div>
      <Header />
      {checkRenderTemplate()}
      
    </div>
  );
}

export default Main;
