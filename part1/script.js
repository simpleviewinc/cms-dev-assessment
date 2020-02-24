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
				processResponse(ajax.responseText);
			}
		};
	ajax.send();
}

function loadPage()
{
	doXMLHttpRequest("GET", contentURL + "/listings", true, processListings);
	doXMLHttpRequest("GET", contentURL + "/events", true, processEvents);
	doXMLHttpRequest("GET", contentURL + "/offers", true, processOffers);
}

function processListings(response)
{
	//document.getElementById("div").innerHTML = response;
	img = document.createElement("IMG");
	img.src = fallbackURL;
	document.body.appendChild(img);
}

function processEvents(response)
{
	//document.getElementById("div").innerHTML += response;
}

function processOffers(response)
{
	//document.getElementById("div").innerHTML += response;
}
