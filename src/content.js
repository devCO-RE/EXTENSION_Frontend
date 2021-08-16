
/* eslint-disable no-undef */
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {

    // If the received message has the expected format...
    if (msg.text === 'report_back') {
        const script = document.createElement('script');
        script.setAttribute("type", "module");
        script.setAttribute("src", chrome.extension.getURL('main.js'));
        const head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
        head.insertBefore(script, head.lastChild);
        sendResponse(document.body.outerHTML); 
        console.log("message in content:", document.getElementsByTagName('body')[0]);

    }
});
