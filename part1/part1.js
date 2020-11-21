const listingsURL = "https://sv-reqres.now.sh/api/listings"; // global for API

/*
 * getContent(url)
 * Parameter: url -- string containing the url to the API provided
 * Description: uses fetch to retrieve API data and uses a loop to
 * embed data into part1.html
 *  
 */
async function getContent(url){
    const response = await fetch(url);
    const dataObj = await response.json();
    const objArray = dataObj.data;
    var i;
    for(i = 0; i < objArray.length; i++){
        const { title, description, mediaurl} = objArray[i];
        document.getElementById("loc".concat((i+1).toString()).concat("-img")).src = mediaurl;
        document.getElementById("loc".concat((i+1).toString()).concat("-title")).innerHTML = title;
        document.getElementById("loc".concat((i+1).toString()).concat("-des")).innerHTML = description;
    }
}

async function backupImg(loc){
    document.getElementById("loc".concat(loc.toString()).concat("-img")).src = "fallback.jpg";
}

getContent(listingsURL);