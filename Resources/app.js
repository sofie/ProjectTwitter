Titanium.UI.setBackgroundColor('#ffffff');
var tw = {};
Ti.include('ui.js');


var tabs = tw.ui.createApplicationTabGroup();
tabs.open({transition:Titanium.UI.iPhone.AnimationStyle.CURL_UP});