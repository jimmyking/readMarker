// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

$(document).ready(function(){
	$('#addReadMarker').live('click',addReadMarker);
	flashMarkers();
});
function addReadMarker() {
  //var temp=chrome.extension.getBackgroundPage().pageCurrentPageY;
  //chrome.tabs.executeScript(null,{code:"$(document).scrollTop("+temp+");"});
  // chrome.tabs.create({url:"http://www.cnbeta.com"},function(){
  // 	chrome.tabs.executeScript(null,{code:"$(document).scrollTop(111);"});
  // });
  //chrome.tabs.executeScript(null,{code:"alert('sd');"});
}

function flashMarkers(){
	var listhtml="<ul>";
	var index=window.localStorage.getItem('Markers:index');
	if(!index){
		index=0;
	}
	for (var i = 0; i <= index; i++) {		
		var marker=window.localStorage.getItem("marker:"+i);
		var jsonmarker=JSON.parse(marker);
		
		listhtml=listhtml+"<li>"+jsonmarker.url+"</li>"
	}
	listhtml=listhtml+"</ul>"
	$('#markerlist').html(listhtml);
}

