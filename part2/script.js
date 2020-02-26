/**
 * @author: John Yang
 * @date: 2020/02/24
 * 
 * Simpleview CMS Developer Assessment
 * Part 2: Filtering
 * script.js
 */

const fallbackURL = "window.location/../../comps/fallback.jpg";
const contentURL = "https://sv-reqres.now.sh/api";
const breakpoints = {
						large: 1024,
						medium: 640,
					};
const newDivClasses = {
						largeVert: "item item-largeVert",
						smallVert: "item item-smallVert",
						largeHoriz: "item item-largeHoriz"
					};
const contentTypes = ["listings", "events", "offers"];

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
	// console.log(response);
	
	//go through each piece of data and creates divs for each
	for (i = 0; i < response["data"].length; i++)
	{
		// create as div with classes
		var newDiv = document.createElement("div");
		
		if (i % 6 == 0)
		{
			newDiv.className = newDivClasses.largeVert; 
		}
		else if (i % 6 == 5)
		{
			newDiv.className = newDivClasses.largeHoriz; 
		}
		else
		{
			newDiv.className = newDivClasses.smallVert;
		}
		
		// add class listings, events or offers
		for (j = 0; j < contentTypes.length; j++)
		{
			if (type == contentTypes[j])
			{
				newDiv.className += " " + type;
			}
		}
		
		// add image
		var img = document.createElement("IMG");
		img.src = response.data[i].mediaurl;
		img.onerror = function()
			{
				this.src = fallbackURL;
			}
		newDiv.appendChild(img);
		
		
		// add title, description
		var text = document.createElement("div");
		
		var h3 = document.createElement("h3");
		h3.innerHTML = response.data[i].title;
		text.appendChild(h3);
		
		var descr = document.createElement("p");
		descr.innerHTML = response.data[i].description;
		text.appendChild(descr);
		
		// add Read More button
		var button = document.createElement("button");
		button.className = "readMoreButton";
		button.innerHTML = "Read More";
		/*button.onclick = function () {};*/
		descr.appendChild(button);
		
		newDiv.appendChild(text);
		
		// add item to main page
		document.getElementById("main").appendChild(newDiv);
	}
}

/**
 * Shows items depending on the filter
 * 
 * @param event button click event
 * @param filter string "all", "listings", "events", "offers" 
 * @returns
 */
function showItems(event, filter)
{
	var i, j;
	//console.log("showing " + filter);
	
	var tabbuttons = document.getElementsByClassName("tabbutton");
	for (i = 0; i < tabbuttons.length; i++) {
		tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
	}
	event.currentTarget.className += " active";
	
	// modify rulesheet to hide/show appropriate items
	//	! Assumes that the style sheet is the second one !
	var cssRules= document.styleSheets[1].cssRules;
	var done = 0;
	
	for (i = 0; i < cssRules.length && done < 3; i++)
	{
		for (j = 0; j < contentTypes.length; j++)
		{
			if (cssRules[i].selectorText == "." + contentTypes[j])
			{
				if (filter == contentTypes[j] || filter == "all")
				{
					cssRules[i].style.display = "flex";
				}
				else
				{
					cssRules[i].style.display = "none";
				}
				
				done++;
				break;
			}
		}
	}
	
	/*
	// Select each item individually to show/hide
	items = document.getElementsByClassName("item");
	*/
}