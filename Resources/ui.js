(function() {
	tw.ui = {};

	//Window Lijst Tweets
	tw.ui.createTwitterWindowTweets = function(aValue) {
		var win = Ti.UI.createWindow({
			titleImage : 'img/twitters.png',
			barImage : 'img/header-bg.png',
			url : 'tweetsWindow.js',
			barColor:'#3b8c84',
			myValue : aValue
		});
		
		var b = Titanium.UI.createButton({
			title : 'Logout',
			style : Titanium.UI.iPhone.SystemButtonStyle.PLAIN
		});
		b.addEventListener('click', function() {
			Ti.App.fireEvent('app:btnclicked', {action:'Logout klik'});
		});
		win.setLeftNavButton(b);

		
		return win;

	};
	//Window Add Tweet
	tw.ui.createTwitterWindowAdd = function() {
		var win = Ti.UI.createWindow({
			titleImage : 'img/twitters.png',
			barImage : 'img/header-bg.png',
			layout : 'vertical',
			barColor:'#3b8c84',
			url : 'addWindow.js'
		});
		var b = Titanium.UI.createButton({
			title : 'Logout',
			style : Titanium.UI.iPhone.SystemButtonStyle.PLAIN
		});
		b.addEventListener('click', function() {
			Ti.App.fireEvent('app:btnclicked', {action:'Logout klik'});
		});
		win.setLeftNavButton(b);


		return win;
	};
	//Main application tabgroup maken
	tw.ui.createApplicationTabGroup = function(aVal) {
		var tabGroup = Ti.UI.createTabGroup();
		
		//Windows aanmaken
		var winTweets = tw.ui.createTwitterWindowTweets(aVal);
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
