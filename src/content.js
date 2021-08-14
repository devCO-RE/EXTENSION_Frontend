const test = () => {
    var queryInfo = {

        active: true,
        currentWindow: true
    
      };
    /* eslint-disable no-undef */
    chrome.tabs.query(queryInfo, function(tabs) {

        var tab = tabs[0];
        var url = tab.url;
    
        alert(url);
        alert(tab);
    
      });
    
};
export default test;