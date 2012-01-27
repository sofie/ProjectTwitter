var lbl = Ti.UI.createLabel({
	text : 'What is happening?',
	top : 15,
	textAlign : 'center',
	font : {
		fontWeight : 'bold',
		fontSize : 18
	},
	height : 'auto'
});
Ti.UI.currentWindow.add(lbl);


if (Ti.Platform.osname=='iphone'){
	var scherm_breedte = Ti.UI.currentWindow.width - 30;
}else{
	var scherm_breedte = 300;
}

var add_area = Titanium.UI.createTextArea({
	height : 100,
	width : scherm_breedte,
	top : 10,
	color : '#888',
	textAlign : 'left',
	keyboardType : Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType : Titanium.UI.RETURNKEY_DONE,
	borderWidth : 1,
	borderColor : '#8fb4c7',
	borderRadius : 5
});

add_area.addEventListener('change', function(e) {
	var length_area=140-add_area.value.length;
	num_lbl.text=length_area;
});
Ti.UI.currentWindow.add(add_area);

var num_lbl = Ti.UI.createLabel({
	top : 10,
	right : 85,
	width : 'auto',
	height : 'auto',
	text : '140',
	color : '#909090',
	font : {
		fontSize : '12'
	}
});
Ti.UI.currentWindow.add(num_lbl);

var tweet_btn = Ti.UI.createButton({
	title : 'Tweet',
	height : 20,
	width : 60,
	top : -22,
	right : 15
});
tweet_btn.addEventListener('click', function(e) {
	var alert_msg= Ti.UI.createAlertDialog({
		title:'Geklikt',
		buttonNames:'Ok'
	});
	alert_msg.show();
});
Ti.UI.currentWindow.add(tweet_btn);
