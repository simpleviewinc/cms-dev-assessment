function itemDivHover(itemButton) {
	document.getElementById('itemDivButton' + itemButton).style.display = 'inline';
}

function itemDivMOut(itemButton) {
	document.getElementById('itemDivButton' + itemButton).style.display = 'none';
}

console.log(window.location.search.substr(1).split('=')[1]);

if ( typeof(window.location.search.substr(1)) !== 'undefined' ) { var filter = window.location.search.substr(1).split('=')[1]; }
else { var filter = "All"; }

// var filter = "All";

var menuItems = ['All','Listings','Events','Offers'];

for ( var b=0; b < menuItems.length; b++ ) {
	var menuItem = menuItems[b];
	var menuItemDiv = document.createElement('div');
	if ( filter == menuItem ) { menuItemDiv.setAttribute('class', 'activeOuter'); } else { menuItemDiv.setAttribute('class', 'menuOuter') }
	menuItemDiv.innerHTML = '<div><a href="index.htm?filter=' + menuItem + '">' + menuItem + '</a></div>';
	document.getElementById('menuOfFilters').appendChild(menuItemDiv);
	
}

var url = 'https://sv-reqres.now.sh/api/';

var apis = ['listings', 'events', 'offers'];
var quantities = [];

for ( var i=0; i < (apis.length); i++ ) {
	var thisAPI = apis[i];
	console.log(thisAPI);
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		
		var results = JSON.parse(this.response);
		var thisAPIQty = {};
		thisAPIQty.api = thisAPI;
		thisAPIQty.total = results['total'];
		quantities.push(thisAPIQty);
		} else { console.log('ERROR') }
	};
	xhttp.open("GET", url + thisAPI, true)
	xhttp.send();
		
}
console.log(quantities);