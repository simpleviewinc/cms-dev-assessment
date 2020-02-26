/**
 * @author: John Yang
 * @date: 2020/02/26
 * 
 * Simpleview CMS Developer Assessment
 * Part 4: Randomizing
 * script.js
 */

const fallbackURL = "window.location/../../comps/fallback.jpg";
const contentURL = "https://sv-reqres.now.sh/api";
const contentTypes = ["listings"];
const pageItemCount = [
						[2, 3],
						[2, 2, 1],
						[2, 1],
						[1, 1]
					]

/**
 * 
 * Sends a (get, post ...) request to given url
 * 	Parses response as a JSON object and passes it into the given function
 * 
 * @param method "GET", "POST", "PUT", "DELETE"
 * @param url 
 * @param async true, false
 * @param processResponse function to pass response for processing
 * @param type string "listings", "events", "offers"
 */
function doXMLHttpRequest(method, url, async, processResponseFunc, type)
{
	var ajax = new XMLHttpRequest();
	ajax.open(method, url, async);
	ajax.onreadystatechange = function()
		{
			if (ajax.readyState == 4 && ajax.status == 200)
			{
				processResponseFunc(JSON.parse(ajax.responseText), type);
			}
		};
	ajax.send();
}

/**
 * Sets up the page
 */
function loadPage()
{
	var i;
	
	for (var i = 0; i < contentTypes.length; i++)
	{
		doXMLHttpRequest("GET", contentURL + "/" + contentTypes[i], true, processResponse, contentTypes[i]);
	}
}

/**
 * Processes the data for the page
 * 	paramater type to determine which type of data to process
 * @param response JSON object containing details for page
 * @param type string "listings", "events", "offers"
 */
function processResponse(response, type)
{
	var i, j;
	//console.log(response);
	
	var pageType = 0;
	var pageNum = 0;
	var colNum = 0;
	var rowNum = 0;
	var page;
	
	// Generate random order of items
	var origOrder = [];
	for (i = 0; i < response["data"].length; i++)
	{
		origOrder.push(i);
	}
	
	var actualOrder = [];
	for (i = 0; i < response["data"].length; i++)
	{
		var rand = Math.floor(Math.random() * origOrder.length);
		actualOrder.push(origOrder[rand]);
		origOrder.splice(rand, 1);
	}
	
	//go through each piece of data and creates divs for each
	for (i = 0; i < response["data"].length; i++)
	{
		if (colNum == 0 && rowNum == 0)
		{
			// create as div with classes
			page = document.createElement("div");
			page.className = "page";
			page.id = pageNum;
			pageNum++;
			
			console.log(pageNum);
			
			if (i == 0)
			{
				page.className += " active";
			}
			
			for (j = 0; j < pageItemCount[pageType].length; j++)
			{
				var column = document.createElement("div");
				column.className = "column";
				column.style.width = Math.floor((1/pageItemCount[pageType].length) * 100).toString() + "%";
				page.appendChild(column);
			}
			
			document.getElementById("main").appendChild(page);
		}
		
		var item = document.createElement("div");
		item.className = "item";
		//page.style.background = "url(\"" + response.data[i].mediaurl + "\"), url(\"" + fallbackURL + "\")";
		//console.log(newDiv.style.backgroundImage);
		
		// add image
		var img = document.createElement("IMG");
		img.src = response.data[actualOrder[i]].mediaurl;
		img.onerror = function()
			{
				this.src = fallbackURL;
			}
		item.appendChild(img);
		
		var title = document.createElement("div");
		title.className = "title";
		
		
		// add title
		var num = (i + 1).toString() + ". ";
		
		while (num.length < 4)
		{
			num = "0" + num;
		}
		num = document.createTextNode(num);
		title.appendChild(num);
		
		var name = document.createElement("h3");
		name.innerHTML = response.data[actualOrder[i]].title;
		title.appendChild(name);
		
		item.appendChild(title);
		
		// add description
		var descr = document.createElement("p");
		descr.className = "descr";
		descr.appendChild(document.createTextNode(response.data[actualOrder[i]].description));
		item.appendChild(descr);
		
		
		// add item to main page
		page.children[colNum].appendChild(item);
		
		// update which row, column, page we are on
		rowNum++;
		if (rowNum >= pageItemCount[pageType][colNum])
		{
			rowNum = 0;
			colNum++;
		}
		
		if (colNum >= pageItemCount[pageType].length)
		{
			colNum = 0;
			pageType++;
			if (pageType >= pageItemCount.length)
			{
				pageType = 0;
			}
		}
	}
}

/**
 * Changes the current page on button click (next or prev.)
 * @param event button click event
 */
function changePage(event)
{
	// deactivate current page
	var active = document.getElementsByClassName("active")[0];
	active.className = active.className.replace(" active", "");

	// identify page to switch to
	var newActive;
	var totalPages = document.getElementsByClassName("page").length;
	//console.log(totalPages);
	if (event.target.id == "Next")
	{
		var newId = parseInt(active.id) + 1;
		if (newId >= totalPages)
		{
			newId = 0;
		}
		
		newActive = document.getElementById(newId.toString());
	}
	else if (event.target.id == "Prev.")
	{
		var newId = parseInt(active.id) - 1;
		if (newId < 0)
		{
			newId = totalPages - 1;
		}
		newActive = document.getElementById(newId.toString());
	}
	else
	{
		// shouldn't reach this code
	}
	
	// activate page
	newActive.className += " active";
}