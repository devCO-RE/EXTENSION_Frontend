/*global chrome*/
import React, { useState, useEffect } from "react";
import { Header } from "../../components/basis";
import {TransferPageTemplate} from "../../components/template"
function Main() {
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
  return (
    <div>
      <Header />
      <TransferPageTemplate />
      <button onClick={testGetDoc}>pdf test</button>
      <button onClick={testAPI}>api test</button>
    </div>
  );
}

export default Main;
