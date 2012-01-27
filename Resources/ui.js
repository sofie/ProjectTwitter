(function() {
	tw.ui = {};

	//Window 1
	tw.ui.createTwitterWindow1 = function() {
		var win = Ti.UI.createWindow({
			titleImage : 'img/twitters.png',
			barImage : 'img/header-bg.png',
			url : 'winTweets.js'
		});

		return win;
	};
	//Window 2
	tw.ui.createTwitterWindow2 = function() {
		var win = Ti.UI.createWindow({
			titleImage : 'img/twitters.png',
			barImage : 'img/header-bg.png',
			layout : 'vertical',
			url : 'winAdd.js'
		});
		var lbl = Ti.UI.createLabel({
			text : 'What is happening?',
			top : 15,
			textAlign:'center',
			font:{fontWeight:'bold',fontSize:18},
			height:'auto'
		});
		
		win.add(lbl);
		

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
			icon : 'img/KS_nav_ui.png'
		});

		//Tab tweets in detail
		tw.tab2 = Ti.UI.createTab({
			title : 'New tweet',
			window : win2,
			icon : 'img/KS_nav_views.png'
		});
		var btnTweet = tw.ui.createBtnNewTweet();
		
		tabGroup
		tabGroup.addTab(tw.tab1);
		tabGroup.addTab(tw.tab2);

		return tabGroup;
	};
})();
