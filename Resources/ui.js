(function(){
	tw.ui={};
	
	//Main application tabgroup maken
	tw.ui.createApplicationTabGroup = function(){
		var tabGroup = Ti.UI.createTabGroup();
		
		//Windows aanmaken
		var win1 = tw.ui.createTwitterWindow();
		var win2 = tw.ui.createTwitterWindow();
		
		//Tab lijst met tweets
		tw.tab1 = Ti.UI.createTab({
			title:'Lijst tweets in de buurt',
			window:win1
		});
		 	
		//Tab tweets in detail
		tw.tab2 = Ti.UI.createTab({
			title:'Tweets in detail',
			window:win2
		});
		
		tabGroup.addTab(tw.tab1);
		tabGroup.addTab(tw.tab2);
		
		return tabGroup;
	};
	
	//Windows
	tw.ui.createTwitterWindow = function () {
	  var win = Ti.UI.createWindow({
	  	title:'Twitter'
	  });
	  
	  win.add(Ti.UI.createView({
	  	height:'70',
	  	backgroundImage:'header-bg.png'
	  }));
	 
	  return win;
	};
	
	
})();
