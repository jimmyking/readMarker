// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

$(document).ready(function(){
	$('#addReadMarker').live('click',addReadMarker);
});
function addReadMarker() {
  //var temp=chrome.extension.getBackgroundPage().pageCurrentPageY;
  //chrome.tabs.executeScript(null,{code:"$(document).scrollTop("+temp+");"});
  chrome.tabs.create({url:"http://www.cnbeta.com"},function(){
  	chrome.tabs.executeScript(null,{code:"$(document).scrollTop(111);"});
  });
  //chrome.tabs.executeScript(null,{code:"alert('sd');"});
}