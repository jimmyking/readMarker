var currentPageY=0;
function tt(){
	chrome.extension.sendRequest({currentPageY: currentPageY});
}


$(document).bind('mouseup',function(e){ 
	currentPageY = e.pageY;
    //alert("e.pageX: " + e.pageX + ", e.pageY: " + e.pageY);
});
