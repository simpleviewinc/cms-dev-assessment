const createGridFive = (data) => {
    if(document.querySelector(".container")){
        removeAllChildNodes(document.querySelector(".container"));
    }
    let container = document.createElement('div');
    container.className = 'container';
 
    document.querySelector("#append").appendChild(container);
    let theRow;
    let rowCount = 0;
    let boxCount = 1;
    let buttonCount = 1;
    var uniqueId = "index-1";
    var queryId = "#index-1" ;
    const mq = window.matchMedia( "(min-width: 1025px)" );
    data.map((item, index) => {
        const descriptionStart = item.description.substring(0, 150);
        const descriptionEnd = item.description.substring(150);
        let buttonText;
        moreIndex = "more-" + index.toString();
        buttonIndex = "button-" + index.toString();
        if(index%3===0){
            rowCount++;
            theRow =  document.createElement('div');
            theRow.className = 'row'
            theRow.id = "index-" + rowCount.toString();
            queryId = "#index-" + rowCount.toString();
            document.querySelector(".container").appendChild(theRow);
            console.log("the rowCount is incrementing " + rowCount);
        }

        if(boxCount === 1) {
            toInsert =  `
            <div class="col-6-lg col-4-md">
            <img src="${item.mediaurl}" 
                  onError="this.src = '../comps/fallback.jpg'"
            ></img>
            <h4>${item.title}</h4>
            <p>${descriptionStart}<span class="more" id=${moreIndex}>${descriptionEnd}</span></p>
            <button onclick=readMore(${index}) id="${buttonIndex}">Read More</button>
            </div>
        `;
        } else if(boxCount === 6){
               toInsert =  `
                <div class="col-3-lg" id="md-hack">

                    <img src="${item.mediaurl}" 
                        onError="this.src = '../comps/fallback.jpg'"
                        style="height:500px;"
                        id="md-hack"
                        ></img>
                </div>
                <div class="col-3-lg" id="md-hack">
                    <h4>${item.title}</h4>
                    <p>${descriptionStart}<span class="more" id=${moreIndex}>${descriptionEnd}</span></p>
                    <button onclick=readMore(${index}) id="${buttonIndex}">Read More</button>
                </div>

                <div class="col-4-md" id="lg-hack">
                    <img src="${item.mediaurl}" id="lg-hack"
                        onError="this.src = '../comps/fallback.jpg'"
                    ></img>
                    <h4>${item.title}</h4>
                    <p>${descriptionStart}<span class="more" id=${moreIndex}>${descriptionEnd}</span></p>
                    <button onclick=readMore(${index}) id="${buttonIndex}">Read More</button>
                 </div>
            `;
            
        } else {
            toInsert =  `
            <div class="col-3-lg col-4-md">
                <img src="${item.mediaurl}" 
                    onError="this.src = '../comps/fallback.jpg'"
                ></img>
                <h4>${item.title}</h4>
                <p>${descriptionStart}<span class="more" id=${moreIndex}>${descriptionEnd}</span></p>
                <button onclick=readMore(${index}) id="${buttonIndex}">Read More</button>
            </div>
        `;
        }
        if(boxCount === 6){
            boxCount = 1;
        } else {
            boxCount++;
        }
        uniqueId= "index-" + rowCount.toString();
        queryId = "#index-" + rowCount.toString();
        document.querySelector(queryId).insertAdjacentHTML("beforeend", toInsert);
    })
}


