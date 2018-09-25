window.onload = function(){

    // One single ajax api request; then populate the page
    let req = new XMLHttpRequest();
    req.open("GET", "https://sv-reqres.now.sh/api/listings/?per_page=20");
    req.send(null);
    req.onreadystatechange = function() {
        if(req.readyState === 4 && req.status === 200) {
            // console.log(JSON.parse(req.response));
            let response = JSON.parse(req.response);
            let container = document.getElementsByClassName("grid-container")[0];
            for(let i = 0; i < response.data.length; i ++) {
                
                // console.log(container);
                let gridItem =  document.createElement("div");
                gridItem.setAttribute("class", "grid-item");
                
                // first and ever 6th element is a wide grid item:
                if(i == 0 || i % 6 == 0){
                    gridItem.setAttribute("id", "grid-item-wide");
                }
                if(i == 5 || (i + 1) % 6 == 0){
                    gridItem.setAttribute("id", "grid-item-narrow");
                }
                let img = document.createElement("img");
                img.setAttribute("src", response.data[i].mediaurl);
                img.setAttribute("onerror", "this.src = '../comps/fallback.jpg'");
                gridItem.appendChild(img);
                
                let header = document.createElement("div");
                header.setAttribute("class", "card-header");
                header.innerHTML= response.data[i].title;
                gridItem.appendChild(header);

                let content = document.createElement("div");
                content.setAttribute("class", "card-content");
                content.innerHTML= response.data[i].description;
                // console.log(content);
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
    }
}