(function() {
	tw.ui = {};
	tw.ui.createTwitterLogin = function() {
		var win = Ti.UI.createWindow({
			titleImage : 'img/twitters.png',
			barImage : 'img/header-bg.png',
			url : 'login.js'
		});

		return win;
	};
	//Window Lijst Tweets
	tw.ui.createTwitterWindow1 = function() {
		var win = Ti.UI.createWindow({
			titleImage : 'img/twitters.png',
			barImage : 'img/header-bg.png',
			url : 'tweetsWindow.js'
		});

		return win;
	};
	//Window Add Tweet
	tw.ui.createTwitterWindow2 = function() {
		var win = Ti.UI.createWindow({
			titleImage : 'img/twitters.png',
			barImage : 'img/header-bg.png',
			layout : 'vertical',
			url : 'addWindow.js'
		});
		return win;
	};

	tw.ui.createBtnNewTweet = function() {
		var btn = Ti.UI.createButton({
			label : 'New tweet'
		});
		return btn;
	};
	//Main application tabgroup maken
	tw.ui.createApplicationTabGroup = function() {
		var tabGroup = Ti.UI.createTabGroup();

		//Windows aanmaken
		var win1 = tw.ui.createTwitterWindow1();
		var win2 = tw.ui.createTwitterWindow2();
		var win3 = tw.ui.createTwitterLogin();
		
		//Tab lijst met tweets
		tw.tab1 = Ti.UI.createTab({
			title : 'Lijst tweets in de buurt',
			window : win1,
			icon : 'img/home.png'
		});

		//Tab tweets in detail
		tw.tab2 = Ti.UI.createTab({
			title : 'New tweet',
			window : win2,
			icon : 'img/add.png'
		});
		tw.tab3 = Ti.UI.createTab({
			title : 'Login',
			window : win3,
			icon : 'img/add.png'
		});
		var btnTweet = tw.ui.createBtnNewTweet();
		tabGroup.addTab(tw.tab1);
		tabGroup.addTab(tw.tab2);
		tabGroup.addTab(tw.tab3);

		return tabGroup;
	};
})();
