/* eslint-disable no-undef */
chrome.tabs.onActivated.addListener( function(activeInfo){
    // chrome.scripting.executeScript({
    //     target: { tabId: tab.id },
    //     files: ['content.js']
    //   });
    chrome.tabs.get(activeInfo.tabId, function(tab){
        y = tab.url;
        console.log("you are here: "+y);
    });
});