var win = Ti.UI.currentWindow;
var twitter_name = win.myValue;
win.title = '@' + twitter_name;

if(Titanium.Platform.osname != 'iphone') {
	Ti.UI.currentWindow.activity.onCreateOptionsMenu = function(e) {
		var menuitem = e.menu.add({
			title : 'Refresh Tweets'
		});
		menuitem.addEventListener('click', function(e) {
			getTweets(twitter_name);
		});
	};
} else {
	var button = Ti.UI.createButton({
		systemButton : Ti.UI.iPhone.SystemButton.REFRESH
	});

	button.addEventListener('click', function(e) {
		var actInd = Ti.UI.createActivityIndicator({
			bottom : 10,
			height : 50,
			width : 10,
			style : Titanium.UI.iPhone.ActivityIndicatorStyle.PLAIN
		})
		actInd.font = {
			fontFamily : 'Helvetica Neue',
			fontSize : 15,
			fontWeight : 'bold'
		};
		actInd.color = 'black';
		actInd.message = 'Loading...';
		actInd.width = 210;

		actInd.show();
		getTweets(twitter_name);
	});

	Ti.UI.currentWindow.rightNavButton = button;
}

// Get the tweets for 'twitter_name'
getTweets(twitter_name);
function getTweets(screen_name) {

	// Table view data object
	var data = [];

	var xhr = Ti.Network.createHTTPClient();
	xhr.timeout = 1000000;
	xhr.open("GET", "http://api.twitter.com/1/statuses/user_timeline.json?screen_name=" + screen_name);
	//xhr.open("GET", "https://api.twitter.com/1/geo/similar_places.json?long="+-122+"&lat="+37+"&strict=false&name="+ Twitter+HQ);

	xhr.onload = function() {
		try {
			var tweets = JSON.parse(this.responseText);
			if(tweets.error) {
				Ti.App.fireEvent('app:notweets', {
					action : 'No tweets'
				});
			} else {

				for(var c = 0; c < tweets.length; c++) {

					var tweet = tweets[c].text;
					var screen_name = tweets[c].user.screen_name;
					var name = tweets[c].user.name;
					var avatar = tweets[c].user.profile_image_url;
					var created_at = prettyDate(strtotime(tweets[c].created_at));
					var bgcolor = (c % 2) == 0 ? '#fff' : '#eee';
					var location = tweets[c].user.location;

					var row = Ti.UI.createTableViewRow({
						height : 'auto',
						backgroundColor : bgcolor,
						rightImage : 'img/arrow.png'
					});

					// Layout view met alle info per tweet
					var post_view = Ti.UI.createView({
						height : 'auto',
						layout : 'vertical',
						left : 7,
						top : 7,
						bottom : 7,
						right : 7
					});

					var av = Ti.UI.createImageView({
						image : avatar,
						borderRadius : 5,
						left : 0,
						top : 0,
						height : 48,
						width : 48
					});
					// Add the avatar image to the view
					post_view.add(av);

					var name_label = Ti.UI.createLabel({
						text : name,
						left : 54,
						width : 'auto',
						top : -48,
						bottom : 2,
						height : 16,
						textAlign : 'left',
						font : {
							fontSize : 13,
							fontWeight : 'bold'
						}
					});
					// Add the username to the view
					post_view.add(name_label);

					var name_width = name_label.width;

					var screenname_label = Ti.UI.createLabel({
						text : "@" + screen_name,
						top : -18,
						left : name_width + 60,
						width : 'auto',
						textAlign : 'right',
						height : 16,
						color : '#444444',
						font : {
							fontSize : 11
						}
					});
					// Add the username to the view
					post_view.add(screenname_label);

					var date_label = Ti.UI.createLabel({
						text : created_at,
						width : 'auto',
						top : -18,
						height : 16,
						right : 0,
						textAlign : 'right',
						color : '#444444',
						font : {
							fontFamily : 'Trebuchet MS',
							fontSize : 11
						}
					});
					// Add the date to the view
					post_view.add(date_label);

					var tweet_text = Ti.UI.createLabel({
						text : tweet,
						left : 54,
						top : 0,
						bottom : 2,
						height : 'auto',
						//width : 236,
						textAlign : 'left',
						font : {
							fontSize : 12
						}
					});
					// Add the tweet to the view
					post_view.add(tweet_text);

					var tweet_location = Ti.UI.createLabel({
						text : location,
						left : 54,
						width : 'auto',
						height : 16,
						textAlign : 'right',
						color : '#444444',
						font : {
							fontFamily : 'Trebuchet MS',
							fontSize : 11
						}
					});
					// Add the location to the view
					post_view.add(tweet_location);

					// Add the vertical layout view to the row
					row.add(post_view);
					row.className = 'item' + c;
					data[c] = row;
				}
				// Create the tableView and add it to the window.
				var tableview = Titanium.UI.createTableView({
					data : data,
					style:Titanium.UI.iPhone.TableViewStyle.GROUPED,
					backgroundColor:'#eaf6f1',
					minRowHeight : 58
				});

				tableview.addEventListener('click', function(_e) {

					// Open detail window
					var win = Ti.UI.createWindow({
						layout : 'vertical',
						barColor : '#3b8c84',
						barImage : 'img/header-bg.png',
						titleImage : 'img/twitters.png'

					});
					var imgview = Ti.UI.createImageView({
						image : tweets[_e.index].user.profile_image_url_https,
						borderRadius : 5,
						left : 20,
						top : 20,
						height : 48,
						width : 48
					});
					win.add(imgview);

					var lblName = Ti.UI.createLabel({
						text : tweets[_e.index].user.name,
						top : -45,
						left : 75,
						textAlign : 'left',
						font : {
							fontSize : 14
						},
						height : 'auto'
					});
					win.add(lblName);

					var lblNameAt = Ti.UI.createLabel({
						text : '@' + tweets[_e.index].user.screen_name,
						top : 0,
						left : 75,
						textAlign : 'left',
						color : '#909090',
						font : {
							fontSize : 12
						},
						height : 'auto'
					});
					win.add(lblNameAt);

					var lblNumTweets = Ti.UI.createLabel({
						text : tweets[_e.index].user.statuses_count,
						top : -35,
						textAlign : 'right',
						right : 20,
						font : {
							fontSize : 14
						},
						height : 'auto'
					});
					win.add(lblNumTweets);

					var lblTweets = Ti.UI.createLabel({
						text : 'TWEETS',
						top : 0,
						textAlign : 'right',
						right : 20,
						color : '#909090',
						font : {
							fontSize : 11
						},
						height : 'auto'
					});
					win.add(lblTweets);
					/*
					var TwitterParser = function(text) {
					var html = text;
					var urlRegex = /((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi;

					this.linkifyURLs = function() {
					html = html.replace(urlRegex, '<a href="$1">$1</a>');
					};

					this.getHTML = function() {
					return html;
					};
					};
					var tweet = "Hallo http://yfrog.com/oex5mwej";
					// parse the tweet and set it as the HTML for the web view
					var parser = new TwitterParser(tweet);
					parser.linkifyURLs();

					var web = Ti.UI.createWebView({
					html : parser.getHTML()
					});

					win.add(web);
					*/
					//window.open();

					var tweetLink = tweets[_e.index].text.replace(/((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi,'* $1');
					
					var lblText = Ti.UI.createLabel({
						text : tweetLink,
						top : 30,
						left : 20,
						right : 15,
						textAlign : 'left',
						font : {
							fontSize : 16
						},
						height : 'auto'
					});
					win.add(lblText);

					var lblDate = Ti.UI.createLabel({
						text : prettyDate(strtotime(tweets[_e.index].created_at)),
						top : 10,
						left : 20,
						right : 15,
						textAlign : 'left',
						color : '#909090',
						font : {
							fontSize : 12
						},
						height : 'auto'
					});
					win.add(lblDate);

					// Geef toegang tot row data
					win.rowData = tweets[_e.index].rowData;

					Ti.UI.currentTab.open(win);

				});

				win.add(tableview);
			}
		} catch(E) {
			alert(E);
		}
	};
	// Get the data
	xhr.send();
}

function strtotime(str, now) {
	// Emlulates the PHP strtotime function in JavaScript
	// obtained from http://phpjs.org/functions/strtotime:554
	var i, match, s, strTmp = '', parse = '';
	strTmp = str;
	strTmp = strTmp.replace(/\s{2,}|^\s|\s$/g, ' ');
	// unecessary spaces
	strTmp = strTmp.replace(/[\t\r\n]/g, '');
	// unecessary chars
	if(strTmp == 'now') {
		return (new Date()).getTime() / 1000;
		// Return seconds, not milli-seconds
	} else if(!isNaN( parse = Date.parse(strTmp))) {
		return (parse / 1000);
	} else if(now) {
		now = new Date(now * 1000);
		// Accept PHP-style seconds
	} else {
		now = new Date();
	}
	strTmp = strTmp.toLowerCase();
	var __is = {
		day : {
			'sun' : 0,
			'mon' : 1,
			'tue' : 2,
			'wed' : 3,
			'thu' : 4,
			'fri' : 5,
			'sat' : 6
		},
		mon : {
			'jan' : 0,
			'feb' : 1,
			'mar' : 2,
			'apr' : 3,
			'may' : 4,
			'jun' : 5,
			'jul' : 6,
			'aug' : 7,
			'sep' : 8,
			'oct' : 9,
			'nov' : 10,
			'dec' : 11
		}
	};
	var process = function(m) {
		var ago = (m[2] && m[2] == 'ago');
		var num = ( num = m[0] == 'last' ? -1 : 1) * ( ago ? -1 : 1);

		switch (m[0]) {
			case 'last':
			case 'next':
				switch (m[1].substring(0, 3)) {
					case 'yea':
						now.setFullYear(now.getFullYear() + num);
						break;
					case 'mon':
						now.setMonth(now.getMonth() + num);
						break;
					case 'wee':
						now.setDate(now.getDate() + (num * 7));
						break;
					case 'day':
						now.setDate(now.getDate() + num);
						break;
					case 'hou':
						now.setHours(now.getHours() + num);
						break;
					case 'min':
						now.setMinutes(now.getMinutes() + num);
						break;
					case 'sec':
						now.setSeconds(now.getSeconds() + num);
						break;
					default:
						var day;
						if( typeof ( day = __is.day[m[1].substring(0, 3)]) != 'undefined') {
							var diff = day - now.getDay();
							if(diff == 0) {
								diff = 7 * num;
							} else if(diff > 0) {
								if(m[0] == 'last') {
									diff -= 7;
								}
							} else {
								if(m[0] == 'next') {
									diff += 7;
								}
							}
							now.setDate(now.getDate() + diff);
						}
				}
				break;
			default:
				if(/\d+/.test(m[0])) {
					num *= parseInt(m[0], 10);
					switch (m[1].substring(0, 3)) {
						case 'yea':
							now.setFullYear(now.getFullYear() + num);
							break;
						case 'mon':
							now.setMonth(now.getMonth() + num);
							break;
						case 'wee':
							now.setDate(now.getDate() + (num * 7));
							break;
						case 'day':
							now.setDate(now.getDate() + num);
							break;
						case 'hou':
							now.setHours(now.getHours() + num);
							break;
						case 'min':
							now.setMinutes(now.getMinutes() + num);
							break;
						case 'sec':
							now.setSeconds(now.getSeconds() + num);
							break;
					}
				} else {
					return false;
				}
				break;
		}
		return true;
	};
	match = strTmp.match(/^(\d{2,4}-\d{2}-\d{2})(?:\s(\d{1,2}:\d{2}(:\d{2})?)?(?:\.(\d+))?)?$/);
	if(match != null) {
		if(!match[2]) {
			match[2] = '00:00:00';
		} else if(!match[3]) {
			match[2] += ':00';
		}
		s = match[1].split(/-/g);
		for(i in __is.mon) {
			if(__is.mon[i] == s[1] - 1) {
				s[1] = i;
			}
		}
		s[0] = parseInt(s[0], 10);
		s[0] = (s[0] >= 0 && s[0] <= 69) ? '20' + (s[0] < 10 ? '0' + s[0] : s[0] + '') : (s[0] >= 70 && s[0] <= 99) ? '19' + s[0] : s[0] + '';
		return parseInt(this.strtotime(s[2] + ' ' + s[1] + ' ' + s[0] + ' ' + match[2]) + (match[4] ? match[4] / 1000 : ''), 10);
	}

	var regex = '([+-]?\\d+\\s' + '(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?' + '|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday' + '|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday)' + '|(last|next)\\s' + '(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?' + '|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday' + '|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday))' + '(\\sago)?';
	match = strTmp.match(new RegExp(regex, 'gi'));
	// Brett: seems should be case insensitive per docs, so added 'i'
	if(match == null) {
		return false;
	}
	for( i = 0; i < match.length; i++) {
		if(!process(match[i].split(' '))) {
			return false;
		}
	}
	return (now.getTime() / 1000);
}

// creates a 'pretty date' from a unix time stamp
function prettyDate(time) {
	var monthname = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	var date = new Date(time * 1000), diff = (((new Date()).getTime() - date.getTime()) / 1000), day_diff = Math.floor(diff / 86400);
	if(isNaN(day_diff) || day_diff < 0) {
		return '';
	}
	if(day_diff >= 31) {
		var date_year = date.getFullYear();
		var month_name = monthname[date.getMonth()];
		var date_month = date.getMonth() + 1;
		if(date_month < 10) {
			date_month = "0" + date_month;
		}
		var date_monthday = date.getDate();
		if(date_monthday < 10) {
			date_monthday = "0" + date_monthday;
		}
		return date_monthday + " " + month_name + " " + date_year;
	}
	return day_diff == 0 && (diff < 60 && "just now" || diff < 120 && "1min" || diff < 3600 && Math.floor(diff / 60) + "min" || diff < 7200 && "1u" || diff < 86400 && "about " + Math.floor(diff / 3600) + "u") || day_diff == 1 && "Yesterday" || day_diff < 7 && day_diff + " days ago" || day_diff < 31 && Math.ceil(day_diff / 7) + " week" + ((Math.ceil(day_diff / 7)) == 1 ? "" : "s") + " ago";
}