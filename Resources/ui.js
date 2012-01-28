(function() {
	tw.ui = {};
	//tw.name = "";
	
	//Window Lijst Tweets
	tw.ui.createTwitterWindowTweets = function() {
		var win = Ti.UI.createWindow({
			titleImage : 'img/twitters.png',
			barImage : 'img/header-bg.png',
			url : 'tweetsWindow.js'
		});
		return win;
	};
	//Window Add Tweet
	tw.ui.createTwitterWindowAdd = function() {
		var win = Ti.UI.createWindow({
			titleImage : 'img/twitters.png',
			barImage : 'img/header-bg.png',
			layout : 'vertical',
			url : 'addWindow.js'
		});
		return win;
	};
	
	//Main application tabgroup maken
	tw.ui.createApplicationTabGroup = function() {
		var tabGroup = Ti.UI.createTabGroup();

		//Windows aanmaken
		var winTweets = tw.ui.createTwitterWindowTweets();
		var winAdd = tw.ui.createTwitterWindowAdd();
		
		//Tab lijst met tweets
		tw.tabTweets = Ti.UI.createTab({
			title : 'Lijst tweets in de buurt',
			window : winTweets,
			icon : 'img/home.png'
		});

		//Tab add tweet
		tw.tabAdd = Ti.UI.createTab({
			title : 'New tweet',
			window : winAdd,
			icon : 'img/add.png'
		});

		tabGroup.addTab(tw.tabTweets);
		tabGroup.addTab(tw.tabAdd);

		return tabGroup;
	};
})();
