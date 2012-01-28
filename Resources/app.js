global = this;

Titanium.UI.setBackgroundColor('#ffffff');
var tw = {};
var name = "";
require('ui');

//tw.ui.createTwitterWindowLogin = function() {
var win = Ti.UI.createWindow({
	titleImage : 'img/twitters.png',
	barImage : 'img/header-bg.png',
	layout : 'vertical',
	modal : 'true'
});
var username = Titanium.UI.createTextField({
	color : '#336699',
	top : 10,
	left : 10,
	width : 300,
	height : 40,
	hintText : 'Username',
	keyboardType : Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
win.add(username);

var loginBtn = Titanium.UI.createButton({
	title : 'Login',
	top : 30,
	width : 90,
	height : 35,
	borderRadius : 1,
	font : {
		fontFamily : 'Arial',
		fontWeight : 'bold',
		fontSize : 14
	}
});
loginBtn.addEventListener('click', function(e) {
	var usr=require('user');
	usr.setName(username.value); 
	name=username.value;
	Ti.API.info('App.js: '+usr.getName());
	win.close();
	
	var tabs = tw.ui.createApplicationTabGroup();
	tabs.open();
});
win.add(loginBtn);
//return win;
win.open();