// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

$(document).ready(function(){
	flashMarkers();
	$("button").live("click",function(){alert("sd")});
});


function flashMarkers(){
	var listhtml="";
	var provinceEl = $('#markerlist');
	var index=window.localStorage.getItem('Markers:index');
	if(!index){
		index=0;
	}
	for (var i = 0; i <= index; i++) {		
		var marker=window.localStorage.getItem("marker:"+i);
		var jsonmarker=JSON.parse(marker);
		var el = $("<li>"+jsonmarker.url+"<button>test</button></li>");
		el.bind("click",function(){
			
			continueReadMarker(jsonmarker.url,jsonmarker.py);
		});
		provinceEl.append(el);
	}
	
	//$('#markerlist').html(listhtml);
}

