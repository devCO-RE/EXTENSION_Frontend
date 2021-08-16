
/* eslint-disable no-undef */
// const script1 = document.createElement('script');
// script1.setAttribute("type", "module");
// script1.setAttribute("src", chrome.extension.getURL('modules/html2canvas.js'));
// const head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
// head.insertBefore(script1, head.lastChild);

// const script2 = document.createElement('script');
// script2.setAttribute("type", "module");
// script2.setAttribute("src", chrome.extension.getURL('modules/jspdf.min.js'));
// head.insertBefore(script2, head.lastChild);


// const script = document.createElement('script');
// script.setAttribute("type", "module");
// script.setAttribute("src", chrome.extension.getURL('main.js'));
// const head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
// head.insertBefore(script, head.lastChild);
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {

    // If the received message has the expected format...
    if (msg.text === 'report_back') {
        const script = document.createElement('script');
        script.setAttribute("type", "module");
        script.setAttribute("src", chrome.extension.getURL('main.js'));
        const head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
        head.insertBefore(script, head.lastChild);
        alert("content!!")
        sendResponse(document.body.outerHTML);
        // captureFullPage();
        // Call the specified callback, passing
        // the web-page's DOM content as argument
      
        console.log("message in content:", document.getElementsByTagName('body')[0]);
        // alert("message in content:", document.getElementsByTagName('body')[0]);

        
    }
});
