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
var lbl = Ti.UI.createLabel({
	text : 'Login',
	left : 20,
	top : 15,
	textAlign : 'left',
	font : {
		fontWeight : 'bold',
		fontSize : 18
	},
	height : 'auto'
});
win.add(lbl);

var username = Titanium.UI.createTextField({
	color : '#888',
	top : 10,
	left : 20,
	right : 20,
	height : 40,
	hintText : 'Username',
	keyboardType : Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType : Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
win.add(username);

var lbl = Titanium.UI.createLabel({
	text : 'Gebruik @username',
	left : 17,
	height : 'auto',
	width : 'auto',
	top : 10,
	color : '#909090',
	font : {
		fontSize : 12
	}
});
win.add(lbl);

var loginBtn = Titanium.UI.createButton({
	title : 'Login',
	top : -15,
	width : 90,
	height : 30,
	right : 20,
	borderRadius : 1,
	color : '#a7a7a7',
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
Titanium.App.addEventListener('app:notweets', function(e) {
	var alertBox = Titanium.UI.createAlertDialog({
		message : 'Geen tweets gevonden voor deze @username',
		title : 'Twitter',
		buttonNames : ['Ok']
	});
	alertBox.show();
	win.open();
	username.value = "";
});
win.open();
