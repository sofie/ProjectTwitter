Titanium.UI.setBackgroundColor('#ffffff');
 var tw = {};
 Ti.include('ui.js');

 var tabs = tw.ui.createApplicationTabGroup();
 tabs.open({transition:Titanium.UI.iPhone.AnimationStyle.CURL_UP});
 
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