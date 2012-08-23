function continueReadMarker(event) {
  //var temp=chrome.extension.getBackgroundPage().pageCurrentPageY;
  //chrome.tabs.executeScript(null,{code:"$(document).scrollTop("+temp+");"});
  //alert(url);
  chrome.tabs.create({url:event.data.url},function(){
   	chrome.tabs.executeScript(null,{code:"$(document).scrollTop("+event.data.py+");"});
   });
  //chrome.tabs.executeScript(null,{code:"alert('sd');"});
}