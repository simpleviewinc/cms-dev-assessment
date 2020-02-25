/**
 * @author: John Yang
 * @date: 2020/02/24
 * 
 * Simpleview CMS Developer Assessment
 * Part 1: REST-API
 * script.js
 */

const fallbackURL = "window.location/../../comps/fallback.jpg";
const contentURL = "https://sv-reqres.now.sh/api";
const breakpoints = {
						large: 1024,
						medium: 640,
					};
const newDivClasses = 
{
	largeVert: "item item-largeVert",
	smallVert: "item item-smallVert",
	largeHoriz: "item item-largeHoriz"
}

/**
 * 
 * @param method "GET", "POST", "PUT", "DELETE"
 * @param url 
 * @param async true, false
 * @param processResponse function to pass response for processing
 */
function doXMLHttpRequest(method, url, async, processResponse)
{
	var ajax = new XMLHttpRequest();
	ajax.open(method, url, async);
	ajax.onreadystatechange = function()
		{
			if (ajax.readyState == 4 && ajax.status == 200)
			{
				processResponse(JSON.parse(ajax.responseText));
			}
		};
	ajax.send();
}

function loadPage()
{
	doXMLHttpRequest("GET", contentURL + "/listings", true, processListings);
	window.onresize = function ()
	{
		if (window.innerWidth <= 640)
		{
			
		}
	}
}

function processListings(response)
{
	console.log(response);
	
	for (var i = 0; i < response["data"].length; i++)
	{
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
		
		var img = document.createElement("IMG");
		img.src = response.data[i].src
		img.onerror = function()
			{
				this.src = fallbackURL;
			}
		newDiv.appendChild(img);
		
		var text = document.createElement("div");
		
		var h3 = document.createElement("h3");
		h3.innerHTML = response.data[i].title;
		text.appendChild(h3);
		
		var descr = document.createElement("p");
		descr.innerHTML = response.data[i].description;
		text.appendChild(descr);
		
		newDiv.append(text);
		
		document.getElementById("main").appendChild(newDiv);
	}
	//document.getElementById("div").innerHTML = response;
	
	
}