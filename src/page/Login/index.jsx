/*global chrome*/
import React, { useState, useEffect } from "react";

// import html2canvas from "html2canvas";
// import jsPdf from "jspdf";

function Login() {
  const [doc, setDoc] =useState(null);
  const retinaRatio = window.devicePixelRatio * 2;
  // const captureFullPage = (doc) => {
  //   html2canvas(doc, {
  //     scale: retinaRatio,
  //   }).then((canvas) => {
  //     const pdf = new jsPdf();
  //     const imgData = canvas.toDataURL("image/jpeg", 1.0);
  //     pdf.addImage(imgData, "JPEG", 0, 0, 0, 0);
  //     pdf.save("screenshot.pdf");
  //   });
  // };
 
  const stringToHTML = function (str) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(str, 'text/html');
    return doc.body;
  };

  function doStuffWithDom(domContent) {
    const domTemplate = document.createElement('div'); // body에 추가할 span 태그를 추가
    domTemplate.innerHTML = domContent; // innerHTML을 사용하여 text를 html로 파싱 후 자식노드로 추가

    document.body.append(domTemplate)
    // const domTemplate =  stringToHTML(domContent);
    console.log("I received the following DOM content:\n" + domTemplate);
    // captureFullPage(domTemplate)
    // setDoc(domTemplate);
  }
  /* eslint-disable no-undef */
  const testGetDoc = async () => {
    // A function to use as callback
    let queryOptions = { active: true, currentWindow: true };
       chrome.tabs.query(queryOptions, function(tabs) {

        var tab = tabs[0];
        chrome.tabs.sendMessage(tab.id, { text: "report_back" }, doStuffWithDom);
    
      });
    // let [tab] = await chrome.tabs.query(queryOptions);
    // if(tab!==undefined){
    // chrome.tabs.query.addListener(function (tab) {
    //   // ...check the URL of the active tab against our pattern and...
    //   if (urlRegex.test(tab.url)) {
        // ...if it matches, send a message specifying a callback too
        // chrome.tabs.sendMessage(tab.id, { text: "report_back" }, doStuffWithDom);
    //   }
    // });
    // }
  };
  return (
    <div>
      Login page
      <button onClick={testGetDoc}>test</button>
    </div>
  );
}
export default Login;
