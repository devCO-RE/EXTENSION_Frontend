/* eslint-disable no-undef */
chrome.tabs.onActivated.addListener( function(activeInfo){
 let y;
    chrome.tabs.get(activeInfo.tabId, function(tab){
        y = tab.url;
        console.log("you are here: "+y);
        
    });
});