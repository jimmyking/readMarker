var pageCurrentPageY=0;
var pageCurrentUrl="";
chrome.contextMenus.create({"title": "add a new read marker","onclick": addReadMarker,"contexts" : ["selection"]});


function addReadMarker() {
	chrome.tabs.executeScript(null,{code:"addMarker();"});
}

chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    pageCurrentPageY=request.currentPageY;
    pageCurrentUrl=request.currentUrl;
    addMarkerToStorage(pageCurrentUrl,pageCurrentPageY)
    sendResponse({result: "good"});
});

function addMarkerToStorage(page_url,page_pagey){
	var index=window.localStorage.getItem('Markers:index');
	if(index){
		index++;
		window.localStorage.setItem('Markers:index',index);
	}else{
		window.localStorage.setItem('Markers:index',0);
		index=0;
	}
	window.localStorage.setItem("marker:"+index,'{"url":"'+page_url+'","pagey":'+page_pagey+'}');
}


