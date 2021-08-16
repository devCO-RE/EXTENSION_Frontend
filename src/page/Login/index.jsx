/*global chrome*/
import React, { useState, useEffect } from "react";

function Login() {
  const [doc, setDoc] =useState(null);
  const retinaRatio = window.devicePixelRatio * 2;

 
  const stringToHTML = function (str) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    return doc.body;
  };

  function doStuffWithDom(domContent) {
    const domTemplate = document.createElement('div'); // body에 추가할 span 태그를 추가
    domTemplate.innerHTML = domContent; // innerHTML을 사용하여 text를 html로 파싱 후 자식노드로 추가

    document.body.append(domTemplate)
    console.log("I received the following DOM content:\n" + domTemplate);

  }
  /* eslint-disable no-undef */
  const testGetDoc = async () => {
    // A function to use as callback
    let queryOptions = { active: true, currentWindow: true };
       chrome.tabs.query(queryOptions, function(tabs) {

        var tab = tabs[0];
        chrome.tabs.sendMessage(tab.id, { text: "report_back" }, doStuffWithDom);
    
      });

  };
  return (
    <div>
      Login page
      <button onClick={testGetDoc}>test</button>
    </div>
  );
}
export default Login;
