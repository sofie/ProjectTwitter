Titanium.UI.setBackgroundColor('#ffffff');
var tw = {};
require('ui');
var tabCount = 0;

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
var tabs;
loginBtn.addEventListener('click', function(e) {
	if(username.value != "") {
		win.close();
		if(tabCount > 0) {
			tabs.close();
		} else {
			tabCount++;
		}
		tabs = tw.ui.createApplicationTabGroup(username.value);
		tabs.open();
	} else {
		var alertBox = Ti.UI.createAlertDialog({
			message : 'Gelieve username in te vullen',
			title : 'Twitter',
			buttonNames : ['Ok']
		});
		alertBox.show();
	}
});

win.add(loginBtn);

Titanium.App.addEventListener('app:btnclicked', function(e) {
	win.open();
	username.value = "";
});
win.open();
