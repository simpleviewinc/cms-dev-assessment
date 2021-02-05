

const createGrid = (data) => {
    const numOfRows = Math.ceil(data.length/3);
    let container = document.createElement('div');
    container.className = 'container';
    document.querySelector("#append").appendChild(container);
    let theRow;
    let boxCount = 1;
    var rowCount = 0;
    var uniqueId = "index-1"
    var queryId = "#index-1" 
    data.map((item, index) => {
        const descriptionStart = item.description.substring(0, 75);
        const descriptionEnd = item.description.substring(75);
        if(index%3===0){
            rowCount++;
            theRow =  document.createElement('div');
            theRow.className = 'row'
            theRow.id = "index-" + rowCount.toString();
            document.querySelector(".container").appendChild(theRow);
            console.log("the rowCount is incrementing " + rowCount);
        }

        if(boxCount === 1) {
            toInsert =  `
            <div class="col-6">
            <img src="${item.mediaurl}" 
                  onError="this.src = '../comps/fallback.jpg'"
            ></img>
            <h1>${item.title}</h1>
            <p>${descriptionStart}</p>
            </div>
        `;
        } else if(boxCount === 6){
               toInsert =  `
                <div class="col-3">
                    <img src="${item.mediaurl}" 
                        onError="this.src = '../comps/fallback.jpg'"
                        height="500px"
                        ></img>
                </div>
                <div class="col-3">
                    <h1>${item.title}</h1>
                    <p>${descriptionStart}</p>
                 </div>
            `;
        } else {
            toInsert =  `
            <div class="col-3">
            <img src="${item.mediaurl}" 
                  onError="this.src = '../comps/fallback.jpg'"
            ></img>
            <h1>${item.title}</h1>
            <p>${descriptionStart}</p>
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
        console.log("this is the query id ", queryId);
        document.querySelector(queryId).insertAdjacentHTML("beforeend", toInsert);
    })
}

async function fetchApi(){
    const response = await fetch("https://sv-reqres.now.sh/api/listings", {mode: 'cors'});
    const toJson = await response.json();
    const data = toJson.data;
    console.log("this is the data async", data);
    const toAppend = await createGrid(data);

}

fetchApi();
console.log("loaded");
