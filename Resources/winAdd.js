
var add_field = Ti.UI.createTextField({
	hintText:'Compose new tweet...',
	top : 10,
	height : 40,
	width : 250,
	keyboardType : Ti.UI.KEYBOARD_DEFAULT,
	returnkeyType : Ti.UI.RETURNKEY_DONE,
	borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});
Ti.UI.currentWindow.add(add_field);