/* eslint-disable no-undef */
chrome.tabs.onActivated.addListener( function(activeInfo){

    chrome.tabs.get(activeInfo.tabId, function(tab){
        y = tab.url;
        console.log("you are here: "+y);
    });
});