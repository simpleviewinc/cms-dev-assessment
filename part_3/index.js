window.onload = function(){

    // Functions

    // Generic api call function
    function callApi (endpoint, callback) {
        let req = new XMLHttpRequest();
        req.open("GET", endpoint);
        req.send(null);
        req.onreadystatechange = function(error) {
            if(req.readyState === 4 && req.status === 200) {
                let response = JSON.parse(req.response);
                callback(response.data);
            }
            else{
                throw(error);
            }
        }
    }

    // Populate page data with data returned from api
    function populatePage(data) {
        let container = document.getElementsByClassName("grid-container")[0];
        while (container.firstChild){
            container.removeChild(container.firstChild);
        }
        for(let i = 0; i < data.length; i ++){
            let gridItem =  document.createElement("div");
            gridItem.setAttribute("class", "grid-item");
                
            // first and every 6th element is a wide grid item:
            if(i == 0 || i % 6 == 0){
                gridItem.setAttribute("id", "grid-item-wide");
            }
            if(i == 5 || (i + 1) % 6 == 0){
                gridItem.setAttribute("id", "grid-item-narrow");
            }
            let img = document.createElement("img");
            img.setAttribute("src", data[i].mediaurl);
            img.setAttribute("onerror", "this.src = '../comps/fallback.jpg'");
            gridItem.appendChild(img);
                
            let header = document.createElement("div");
            header.setAttribute("class", "card-header");
            header.innerHTML= data[i].title;
            gridItem.appendChild(header);

            let content = document.createElement("div");
            content.setAttribute("class", "card-content");
            content.innerHTML= data[i].description;
            gridItem.appendChild(content);

            let buttonDiv = document.createElement("div");
            buttonDiv.setAttribute("class", "moreBtn");
            buttonDiv.setAttribute("style", "visibility: hidden");
            let button = document.createElement("button");
            button.innerHTML = "Read More";
            buttonDiv.appendChild(button);
            gridItem.appendChild(buttonDiv);
            container.appendChild(gridItem);
        }
    }

    // Function to determine how to display data based on sort buttons
    function sort (show) {
        switch (show) {
            case "all":
                callApi("https://sv-reqres.now.sh/api/listings/?per_page=20", function(response) {
                    data = response;
                    callApi("https://sv-reqres.now.sh/api/events/?per_page=20", function(response) {
                        data = data.concat(response);
                        callApi("https://sv-reqres.now.sh/api/offers/?per_page=20", function(response) {
                            data = data.concat(response);
                            populatePage(data);
                        })
                    })
                })
                break;
            case "listings":
                callApi("https://sv-reqres.now.sh/api/listings/?per_page=20", function(response) {
                    data = response;
                    populatePage(data);
                })
                break;
            case "events":
                callApi("https://sv-reqres.now.sh/api/events/?per_page=20", function(response) {
                    data = response;
                    populatePage(data);
                })
                break;
            case "offers":
                callApi("https://sv-reqres.now.sh/api/offers/?per_page=20", function(response) {
                    data = response;
                    populatePage(data);
                })
        }
    }

    // Function to remove purple highlight from buttons
    // when other button clicked
    function removeClass(callback) {
        let wasSelected = document.getElementsByClassName("selected")[0];
        if(wasSelected) {
            wasSelected.classList.remove("selected");
        }
        callback();
    }

    // On initial load, load all api data:
    let data = [];

    sort("all");
    document.getElementById("all").classList.add("selected");


    // Event listener for sort button clicks:
    document.getElementById("parent-list").addEventListener("click", function(event) {
        event.preventDefault();
        if(event.target.nodeName == "BUTTON"){
            removeClass(function() {
                event.target.classList.add("selected");
                let show = event.target.getAttribute("data-id");
                // Call sort function passing in which data we want to see:
                sort(show);
            });
        }
    })
}