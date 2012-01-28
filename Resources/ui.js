(function() {
	tw.ui = {};

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
	
	//Login
	tw.ui.createTwitterWindow3 = function() {
		var win = Ti.UI.createWindow({
			titleImage : 'img/twitters.png',
			barImage : 'img/header-bg.png',
			layout : 'vertical',
			url : 'login.js'
		});

		return win;
	};

	//Main application tabgroup maken
	tw.ui.createApplicationTabGroup = function() {
		var tabGroup = Ti.UI.createTabGroup();

		//Windows aanmaken
		var win1 = tw.ui.createTwitterWindow1();
		var win2 = tw.ui.createTwitterWindow2();
		var win3 = tw.ui.createTwitterWindow3();

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
		
		tabGroup.addTab(tw.tab1);
		tabGroup.addTab(tw.tab2);
		tabGroup.addTab(tw.tab3);

		return tabGroup;
	};
})();