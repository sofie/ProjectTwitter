Titanium.UI.setBackgroundColor('#ffffff');
var tw = {};
tw.name = "";
Ti.include('ui.js');
Ti.include('User.js');

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
	tw.name = username.value;
	Ti.API.info(tw.name);
	var myuser = new User();
	myuser.name=username.value;
	win.close();
	
	var tabs = tw.ui.createApplicationTabGroup(tw.name);
	tabs.open();
});
win.add(loginBtn);
//return win;
win.open();
//};

//var user = new user();

/*Ti.include('oauth_adapter.js');
 var oAuthAdapter = new OAuthAdapter('YKFb0kShvD8HTdy9QOCPTm9p6r64zpTQtj6odF4lK0', 'pFigWOAq3606firc5mllA', 'HMAC-SHA1');

 // load the access token for the service (if previously saved)
 oAuthAdapter.loadAccessToken('twitter');

 oAuthAdapter.send('https://api.twitter.com/1/statuses/update.json', [['status', 'hey @ziodave, I successfully tested the #oauth adapter with #twitter and @appcelerator #titanium!']], 'Twitter', 'Published.', 'Not published.');

 // if the client is not authorized, ask for authorization.
 // the previous tweet will be sent automatically after authorization
 if(oAuthAdapter.isAuthorized() == false) {
 // this function will be called as soon as the application is authorized
 var receivePin = function() {
 // get the access token with the provided pin/oauth_verifier
 oAuthAdapter.getAccessToken('http://twitter.com/oauth/access_token');
 // save the access token
 oAuthAdapter.saveAccessToken('twitter');
 };
 // show the authorization UI and call back the receive PIN function
 oAuthAdapter.showAuthorizeUI('http://twitter.com/oauth/authorize?oauth_token=' + oAuthAdapter.getRequestToken('http://twitter.com/oauth/request_token', [['oauth_callback', 'oob']]), receivePin, PinFinder.twitter);
 };*/