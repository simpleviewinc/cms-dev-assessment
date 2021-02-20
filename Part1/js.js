var listings_url = 'https://sv-reqres.now.sh/api/listings';

var request = new XMLHttpRequest()
request.open('GET', listings_url, true)

function itemDivHover(itemButton) {
	document.getElementById('itemDivButton' + itemButton).style.display = 'inline';
}

function itemDivMOut(itemButton) {
	document.getElementById('itemDivButton' + itemButton).style.display = 'none';
}



request.onload = function() {
	var results = JSON.parse(this.response);

	if (request.status >= 200 && request.status < 400) {

//		documant.getElementById('page').innerHTML = results['page'];
		var per_page = results['per_page'];
		var total = results['total'];
		var total_pages = results['total_pages'];
		console.log(results);
		var itemCount = 0;

		for(var z=0; z < results['data'].length; z++) {
			itemCount++;
			var itemDiv = document.createElement('div');
			itemDiv.setAttribute('id', 'item' + z);
			itemDiv.setAttribute('onmouseover', 'itemDivHover(' + z + ')')
			itemDiv.setAttribute('onmouseout', 'itemDivMOut(' + z + ')')
			document.getElementById('grid-wrapper').appendChild(itemDiv);
			if ( itemCount != 7 ) {
				var itemImage = document.createElement('img');
				itemImage.setAttribute('src', results['data'][z]['mediaurl']);
				itemImage.setAttribute('class', 'itemImage');
				itemImage.setAttribute('id', 'itemImage' + z);
				itemImage.setAttribute('onerror', "this.src='fallback.jpg'");
				itemDiv.appendChild(itemImage);
			}
			if ( itemCount != 6 ) {
				var itemTitle = document.createElement('h2');
				itemTitle.setAttribute('class', 'itemTitle');
				itemTitle.innerHTML = results['data'][z]['title'];
				itemDiv.appendChild(itemTitle);
				var itemDesc = document.createElement('span');
				itemDesc.innerHTML = results['data'][z]['description'] + "<p class='read-more'><a href='#' class='button' id='itemDivButton" + z +"'>Read More</a></p>";
				itemDesc.setAttribute('class', 'itemDesc');
				itemDiv.appendChild(itemDesc);
			}
			
		}
			
	} else {
		console.log('error')
	}
}

request.send()






//	console.log(results);
//	document.getElementById('grid-wrapper').innerHTML = results['data'][0]['description'];