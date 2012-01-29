var lbl = Ti.UI.createLabel({
	text : 'What is happening?',
	left : 15,
	top : 15,
	textAlign : 'left',
	font : {
		fontWeight : 'bold',
		fontSize : 18
	},
	height : 'auto'
});
Ti.UI.currentWindow.add(lbl);

if(Ti.Platform.osname == 'iphone') {
	var scherm_breedte = Ti.UI.currentWindow.width - 30;
} else {
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
	borderColor : '#a7a7a7',
	borderRadius : 10
});

add_area.addEventListener('change', function(e) {
	var length_area = 140 - add_area.value.length;
	num_lbl.text = length_area;
});
Ti.UI.currentWindow.add(add_area);

var num_lbl = Ti.UI.createLabel({
	top : 12,
	right : 115,
	width : 'auto',
	height : 'auto',
	text : '140',
	color : '#a7a7a7',
	font : {
		fontSize : '12'
	}
});
Ti.UI.currentWindow.add(num_lbl);

var tweet_btn = Ti.UI.createButton({
	title : 'Tweet',
	height : 30,
	width : 90,
	top : -20,
	right : 15,
	borderRadius : 1,
	color : '#a7a7a7',
	font : {
		fontFamily : 'Arial',
		fontWeight : 'bold',
		fontSize : 14
	}
});

tweet_btn.addEventListener('click', function(e) {
	Ti.API.info("Er is geklikt: "+add_area.value);

	var url = "http://api.twitter.com/1/statuses/update.json";
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onload = function() {
		//Ti.API.info("Er is gerespond");
	};
	xhr.open("POST", url);
	xhr.send({
		status : add_area.value
	});
});
Ti.UI.currentWindow.add(tweet_btn);
