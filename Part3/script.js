document.getElementById('prev').addEventListener('click',prevPage);
document.getElementById('next').addEventListener('click',nextPage);
let outputDiv = document.getElementById('output');
let listings =[];
let output = ``;
let startIndex = 0;
let endIndex = 0;
let layout = 1;
let arrLength = 0;

async function fetchListings() {
    let res = await fetch('https://sv-reqres.now.sh/api/listings');
    let data = await res.json();
    const total = data.total;
    res = await fetch(`https://sv-reqres.now.sh/api/listings?per_page=${total}`)
    data = await res.json();
    listings = data.data;
    arrLength = listings.length;
    output = ``;
    layoutLoop(5);
    endIndex = 5;
    outputDiv.classList.add('layout-1');
}

fetchListings();

function buildLayout(){
    switch(layout) {
        case 1:
            layoutLoop(5);
            outputDiv.classList.remove('layout-2');
            outputDiv.classList.remove('layout-3');
            outputDiv.classList.remove('layout-4');
            outputDiv.classList.add('layout-1');
        break;
        case 2:
            layoutLoop(5);
            outputDiv.classList.remove('layout-1');
            outputDiv.classList.remove('layout-3');
            outputDiv.classList.remove('layout-4');
            outputDiv.classList.add('layout-2');
        break;
        case 3:
            layoutLoop(3);
            outputDiv.classList.remove('layout-2');
            outputDiv.classList.remove('layout-1');
            outputDiv.classList.remove('layout-4');
            outputDiv.classList.add('layout-3');
        break;
        case 4:
            layoutLoop(2);
            outputDiv.classList.remove('layout-2');
            outputDiv.classList.remove('layout-3');
            outputDiv.classList.remove('layout-1');
            outputDiv.classList.add('layout-4');
        break;
        default:
            return;
    }
}

function layoutLoop(num){
    output = ``;
    for(let i = startIndex; (i<num+startIndex)&&(i<arrLength);i++){
        let itemNum = i%15 + 1;
        output += `
        <div class="grid-item grid-item-${itemNum}">
            <img class="grid-item-img" src=${listings[i].mediaurl} onerror="this.onerror=null;this.src='img/fallback.jpg';" >
            <div class="grid-item-title">
                <h4>0${i+1} . </h4><h3>  ${listings[i].title}</h3>
            </div>
        </div>
        `;
        endIndex++;
    }
    outputDiv.innerHTML = output;;
}

function nextPage(){
    if(endIndex == arrLength){
        output = ``;
        startIndex = 0;
        layout = 1;
        layoutLoop(5);
        endIndex = 5;
        outputDiv.classList.remove('layout-2');
        outputDiv.classList.remove('layout-3');
        outputDiv.classList.remove('layout-4');
        outputDiv.classList.add('layout-1');
    } else {
        if(layout == 4){
            layout = 1;
        } else {
            layout++;
        }
        startIndex = endIndex;
        buildLayout();
    }
}  

function prevPage(){
    if(startIndex == 0){
        output = ``;
        let remainder = arrLength%15;

        switch(true){
            case(remainder>0 && remainder<=5):
                layout = 1;
                break;
            case(remainder>5 && remainder<=10):
                layout = 2;
                break;
            case(remainder>10 && remainder<=13):
                layout = 3;
                break;
            case(remainder>13 || remainder==0):
                layout = 1;
                break;
            default:
                return;
        }

        startIndex = arrLength - remainder;
        endIndex = startIndex;
        buildLayout(); 
    } else {
        
        switch(layout){
            case 1:
                layout = 4;
                startIndex -= 2;
                break;
            case 2:
                layout = 1;
                startIndex -=5;
                break;
            case 3:
                layout = 2;
                startIndex -=5;
                break;
            case 4:
                layout = 3;
                startIndex -= 3;
                break;
            default:
                return;
        }
        endIndex = startIndex;
        buildLayout();
    }
}
