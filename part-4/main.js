

const state = {
    count: 0
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const createGridFour = function(data){
    if(document.querySelector(".container")){
        removeAllChildNodes(document.querySelector(".container"));
    }
    let container = document.createElement('div');
    container.className = 'container';
    document.querySelector("#append").appendChild(container);
    let theRow;
    let rowCount = 0;
    let boxCount = 1;
   //first we insert column with images 0, 3
   //then we insert column with images  1, 4
   //then we insert column image 5
   const toMap = [];
   toMap.push(data[0]);
   toMap.push(data[1]);
   console.log("this is toMAp in grid 4 ", toMap);

    toMap.map((item, index) => {
        let theRow =  document.createElement('div');
        theRow.className = 'row'
        document.querySelector(".container").appendChild(theRow);
        console.log("the rowCount is incrementing " + rowCount);

        // if(index === 0){
        //     toInsert =  `
        //     <p>grid four</p>
        //     <div class="col-6-lg">
        //         <div class="row-2-image-wrapper">
        //         <img src="${item.mediaurl}" 
        //             onError="this.src = '../comps/fallback.jpg'"
        //             style="height:500px;"
        //         ></img>
        //         </div>
        //     </div>
        // `;
        // } else {
            toInsert =  `
            <div class="col-6-lg">
                <div class="row-2-image-wrapper">
                <img src="${item.mediaurl}" 
                    onError="this.src = '../comps/fallback.jpg'"
                    style="height:500px;"
                ></img>
                </div>
            </div>
        `
        // }
        document.querySelector(".row").insertAdjacentHTML("beforeend", toInsert);
    })
};

const createGridThree = function(data){
    if(document.querySelector(".container")){
        removeAllChildNodes(document.querySelector(".container"));
    }
    let container = document.createElement('div');
    container.className = 'container';
    document.querySelector("#append").appendChild(container);
    let rowCount = 0;
    let boxCount = 1;
   //first we insert column with images 0, 3
   //then we insert column with images  1, 4
   //then we insert column image 5
   const firstColumn = [];
   firstColumn.push(data[0]);
   firstColumn.push(data[1]);
   const toMap = [];
   toMap.push(firstColumn);
   toMap.push(data[2]);

    toMap.map((item, index) => {
        let theRow =  document.createElement('div');
        theRow.className = 'row'
        document.querySelector(".container").appendChild(theRow);
        console.log("the rowCount is incrementing " + rowCount);

        if(index === 0){
            toInsert =  `
            <p>grid three</p>
            <div class="col-6-lg">
                <div class="row-2-image-wrapper">
                <img src="${item[0].mediaurl}" 
                    onError="this.src = '../comps/fallback.jpg'"
                    style="height:250px;"
                ></img>
                </div>
                <div class="row-2-image-wrapper">
                <img src="${item[1].mediaurl}" 
                    onError="this.src = '../comps/fallback.jpg'"
                    style="height:250px;"
                ></img>
                </div>
            </div>
        `;
        } else {
            toInsert =  `
            <div class="col-6-lg">
                <div class="row-2-image-wrapper">
                <img src="${item.mediaurl}" 
                    onError="this.src = '../comps/fallback.jpg'"
                    style="height:500px;"
                ></img>
                </div>
            </div>
        `
        }
        document.querySelector(".row").insertAdjacentHTML("beforeend", toInsert);
    })
};




const createGridTwo = function(data){
    if(document.querySelector(".container")){
        removeAllChildNodes(document.querySelector(".container"));
    }
    let container = document.createElement('div');
    container.className = 'container';
    document.querySelector("#append").appendChild(container);
    let theRow;
    let rowCount = 0;
    let boxCount = 1;
    var uniqueId = "index-1";
    var queryId = "#index-1" ;

   //first we insert column with images 0, 3
   //then we insert column with images  1, 4
   //then we insert column image 5
   const firstColumn = [];
   const secondColumn = [];
   firstColumn.push(data[0]);
   firstColumn.push(data[1]);
   secondColumn.push(data[2]);
   secondColumn.push(data[3]);
   
   const toMap = [];
   toMap.push(firstColumn);
   toMap.push(secondColumn);
   toMap.push(data[4]);
   console.log("this is toMap of grid two ", toMap);

    toMap.map((item, index) => {
        console.log("item in grid two ", item);
        let theRow =  document.createElement('div');
        theRow.className = 'row'
        document.querySelector(".container").appendChild(theRow);
        console.log("the rowCount is incrementing " + rowCount);
        console.log("this ")
        if(index === 0){
            toInsert =  `
            <p>grid two</p>
            <div class="col-4-lg">
                <div class="row-2-image-wrapper">
                <img src="${item[0].mediaurl}" 
                    onError="this.src = '../comps/fallback.jpg'"
                    style="height:250px;"
                ></img>
                </div>
                <div class="row-2-image-wrapper">
                <img src="${item[1].mediaurl}" 
                    onError="this.src = '../comps/fallback.jpg'"
                    style="height:250px;"
                ></img>
                </div>
            </div>
        `;
        } else if(index === 1){
            toInsert =  `
            <div class="col-4-lg">
                <div class="row-2-image-wrapper">
                <img src="${item[0].mediaurl}" 
                    onError="this.src = '../comps/fallback.jpg'"
                    style="height:250px;"
                ></img>
                </div>
                <div class="row-2-image-wrapper">
                <img src="${item[1].mediaurl}" 
                    onError="this.src = '../comps/fallback.jpg'"
                    style="height:250px;"
                ></img>
                </div>
            </div>
        `;
        } else {
            toInsert =  `
            <div class="col-4-lg">
                <div class="row-2-image-wrapper">
                <img src="${item.mediaurl}" 
                    onError="this.src = '../comps/fallback.jpg'"
                    style="height:500px;"
                ></img>
                </div>
            </div>
        `
        }
        document.querySelector(".row").insertAdjacentHTML("beforeend", toInsert);
    })
};

const createGridOne = function(data){
    console.log("create grid one firing ");
    if(document.querySelector(".container")){
        removeAllChildNodes(document.querySelector(".container"));
    }
    let container = document.createElement('div');
    container.className = 'container';
    document.querySelector("#append").appendChild(container);
    let theRow;
    let rowCount = 0;
    let boxCount = 1;
    var uniqueId = "index-1";
    var queryId = "#index-1" ;

   //first we insert column with images 0, 3
   //then we insert column with images  1, 4
   //then we insert column image 5
   const firstColumn = [];
   const secondColumn = [];
   firstColumn.push(data[0]);
   firstColumn.push(data[1]);
   secondColumn.push(data[2]);
   secondColumn.push(data[3]);
   secondColumn.push(data[4]);
   const toMap = [];
   toMap.push(firstColumn);
   toMap.push(secondColumn);
    toMap.map((item, index) => {
        let theRow =  document.createElement('div');
        theRow.className = 'row'
        document.querySelector(".container").appendChild(theRow);
        console.log("the rowCount is incrementing " + rowCount);

        if(index === 0){
            toInsert =  `
            <p>grid one</p>
            <div class="col-6-lg">
                <div class="row-2-image-wrapper">
                <img src="${item[0].mediaurl}" 
                    onError="this.src = '../comps/fallback.jpg'"
                    style="height:250px;"
                ></img>
                </div>
                <div class="row-2-image-wrapper">
                <img src="${item[1].mediaurl}" 
                    onError="this.src = '../comps/fallback.jpg'"
                    style="height:250px;"
                ></img>
                </div>
            </div>
        `;
        } else {
            toInsert =  `
            <div class="col-6-lg">
                <div class="row-2-image-wrapper">
                <img src="${item[0].mediaurl}" 
                    onError="this.src = '../comps/fallback.jpg'"
                    style="height:166px;"
                ></img>
                </div>
                <div class="row-2-image-wrapper">
                <img src="${item[1].mediaurl}" 
                    onError="this.src = '../comps/fallback.jpg'"
                    style="height:166px;"
                ></img>
                </div>
                <div class="row-2-image-wrapper">
                <img src="${item[2].mediaurl}" 
                    onError="this.src = '../comps/fallback.jpg'"
                    style="height:166px;"
                ></img>
                </div>
            </div>
        `;
        }
        document.querySelector(".row").insertAdjacentHTML("beforeend", toInsert);
    })
};
//pattern is 5, 5, 3, 2
const createPagesArray = (data, count) => {
    console.log("create pages array firing ");
    const pagesArray = [];
    const patternArray = [5, 5, 3, 2];
    let patternIndexCount = 0;

    for(let j = 0; j < 4; j++){
        const num = patternArray[patternIndexCount];
        const subArray = createSubArray(data, num);
        pagesArray.push(subArray);
        if(patternIndexCount === 3){
            patternIndexCount = 0;
        } else {
            patternIndexCount++;
        }
    }
    for(let page of pagesArray){
        console.log("this is the page:  ", page);
    }
    state.pagesArray = pagesArray;
    return pagesArray[count];
}

const createSubArray = (data, num) => {
    const subArray = [];
     for(let i = 0; i < num; i++){
        subArray.push(data[num]);
     }
     return subArray;
}



   fetchListings = async(count = 0) => {
        const response = await fetch("https://sv-reqres.now.sh/api/listings", {mode: 'cors'});
        const toJson = await response.json();
        const data = toJson.data;
        console.log("this is the data async", data);
        //we need to change this to get all
        const pagesArray = await createPagesArray(data, count);
        if(count === 0){
            const gridOne = await createGridOne(pagesArray);
        }
        if(count === 1){
            const gridOne = await createGridTwo(pagesArray);
        }
        if(count === 2){
            const gridOne = await createGridThree(pagesArray);
        }
        if(count === 3){
            const gridOne = await createGridFour(pagesArray);
        }
        
    }




// async function fetchListingsstate.count= 0){
//     const response = await fetch("https://sv-reqres.now.sh/api/listings", {mode: 'cors'});
//     const toJson = await response.json();
//     const data = toJson.data;
//     console.log("this is the data async", data);
//     //we need to change this to get all
//     const pagesArray = await createPagesArray(data);
//     //const finished = wait create

// }
fetchListings();

console.log("pages array in state ", state.pagesArray);

function next(){

    if(state.count === 3){
        state.count = 0;
    } else {
        state.count ++;
    }
     const  grid = fetchListings(state.count);
}

function previous(){
    if(state.count=== 0){
        state.count = 3;
    } else {
        state.count --;
    }
     const grid = fetchListings(state.count);
}

