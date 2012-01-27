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
	
	tw.ui.createBtnNewTweet = function(){
		var btn = Ti.UI.createButton({
			label: 'New tweet'
		});
		return btn;
	};
	//Main application tabgroup maken
	tw.ui.createApplicationTabGroup = function() {
		var tabGroup = Ti.UI.createTabGroup();

		//Windows aanmaken
		var win1 = tw.ui.createTwitterWindow1();
		var win2 = tw.ui.createTwitterWindow2();

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
		var btnTweet = tw.ui.createBtnNewTweet();
		
		tabGroup
		tabGroup.addTab(tw.tab1);
		tabGroup.addTab(tw.tab2);

		return tabGroup;
	};
})();
