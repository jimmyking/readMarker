var pageCurrentPageY=0;
chrome.contextMenus.create({"title": "add a new read marker","onclick": addReadMarker,"contexts" : ["selection"]});


function addReadMarker() {
	chrome.tabs.executeScript(null,{code:"tt();"});
}

chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
  	//alert(request.currentPageY);
    pageCurrentPageY=request.currentPageY;
    sendResponse({result: "good"});
  });

