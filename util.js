function continueReadMarker(url,py) {
  //var temp=chrome.extension.getBackgroundPage().pageCurrentPageY;
  //chrome.tabs.executeScript(null,{code:"$(document).scrollTop("+temp+");"});
  //alert(url);
  chrome.tabs.create({url:url},function(){
   	chrome.tabs.executeScript(null,{code:"$(document).scrollTop("+py+");"});
   });
  //chrome.tabs.executeScript(null,{code:"alert('sd');"});
}