var currentPageY=0;
var currentUrl="";
function addMarker(){
	chrome.extension.sendRequest({currentPageY: currentPageY,currentUrl:window.location.href});
}


$(document).bind('mouseup',function(e){ 
	currentPageY = e.pageY;
});
