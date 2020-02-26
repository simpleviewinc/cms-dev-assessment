/**
 * @author: John Yang
 * @date: 2020/02/24
 * 
 * Simpleview CMS Developer Assessment
 * Part 3: Paging & Dynamic Layouts
 * script.js
 */

const fallbackURL = "window.location/../../comps/fallback.jpg";
const contentURL = "https://sv-reqres.now.sh/api";
const contentTypes = ["listings"];

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
	console.log(response);
	
	//go through each piece of data and creates divs for each
	for (i = 0; i < response["data"].length; i++)
	{
		// create as div with classes
		var newDiv = document.createElement("div");
		newDiv.className = "item";
		//newDiv.style.background = "url(\"" + response.data[i].mediaurl + "\"), url(\"" + fallbackURL + "\")";
		//console.log(newDiv.style.backgroundImage);
		
		var title = document.createElement("div");
		title.className = "title";
		
		var num = document.createTextNode(i.toString() + ".");
		title.appendChild(num);
		
		var name = document.createTextNode(response.data[i].title);
		title.appendChild(name);
		
		newDiv.appendChild(title);
		
		// add image
		var img = document.createElement("IMG");
		img.src = response.data[i].mediaurl;
		img.onerror = function()
			{
				this.src = fallbackURL;
			}
		newDiv.appendChild(img);
		
		
		// add item to main page
		document.getElementById("main").appendChild(newDiv);
	}
}