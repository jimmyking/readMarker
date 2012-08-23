function continueReadMarker(event) {
  //var temp=chrome.extension.getBackgroundPage().pageCurrentPageY;
  //chrome.tabs.executeScript(null,{code:"$(document).scrollTop("+temp+");"});
  //alert(url);
  chrome.tabs.create({url:event.data.url},function(){
   	chrome.tabs.executeScript(null,{code:"$(document).scrollTop("+event.data.py+");"});
   });
  //chrome.tabs.executeScript(null,{code:"alert('sd');"});
}

function deleteAllMarker(){
	// var index=window.localStorage.getItem('Markers:index');
	// if(!index){
	// 	index=0;
	// 	window.localStorage.removeItem('Markers:index');
	// }else{
	// 	for (var i = 0; i <= index; i++) {		
	// 		var marker=window.localStorage.removeItem("marker:"+i);
	// 	}
	// }
	window.localStorage.clear()
	flashMarkers();	
}