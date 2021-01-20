const apiRoot = `https://sv-reqres.now.sh/api`;
const itemsPerPage = `?per_page=20`;
const pageLimits = [5, 5, 3, 2];
let currentPage = 1;

async function getData(endpoint = "listings") {
    const request = `${apiRoot}/${endpoint}/${itemsPerPage}`;
    const response = await fetch(request);
    const data = await response.json();
    return data.data;
}

async function getAllData() {

    let allData;
    try {
        let data = await Promise.all([
            getData(),
            getData("events"),
            getData("offers")
        ]);

        allData = [].concat(...data);
    } catch (error) {
        console.log(error)
    }
    return allData;
}

// Returns a new array of truly-random items
async function randomizedItems() {

    const data = await getAllData();
  
    let randomized = data
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value)
      .slice(0, 15);
    return randomized;
  }

// Display randomized items on page
async function getAndDisplay() {

    const data = await randomizedItems();
    let markup = ``;
    let itemNum = 0;

    for (let p = 0; p < pageLimits.length; p++) {

        // Create a parent grid with the page class set 
        markup += `<div class="flexGrid page${p + 1}" hidden>`;

        // Populate grid with max number of results for each page
        for (let i = 0; i < pageLimits[p]; i++) {
            
            // Total count of items used for itemNum text
            itemNum++;

            let thisItem = data[itemNum - 1];
            markup += `
                        <div class="item">
                            <div class="item_header">
                                <span class="item_num">${itemNum.toString().length < 2 ? `0${itemNum}` : itemNum}.</span>
                                <h2 class="item_title">${thisItem.title}</h2>
                            </div>
                            <div class="item_imageContainer">
                                <img class="item_image" src="${thisItem.mediaurl}" alt="${thisItem.title} image" onError="this.src = '../comps/fallback.jpg';" />
                            </div>
                        </div>`;
        }

        markup += `</div>`;
    }

    $("#mainGrid").html(markup);
    $(".flexGrid").hide();
    $('.page' + currentPage).show();
}

function initEventListeners() {

    $("#prev").click(function (e) {

        // Hide all other grids
        $(".flexGrid").hide();

        // If current page is 1, round-robin back to page 4, else nav to prev
        currentPage === 1 ? currentPage = 4 : currentPage--;

        // Show the new page
        $('.page' + currentPage).show();
        
    });

    $("#next").click(function (e) {
        // Hide all other grids
        $(".flexGrid").hide();

        // If current page is 4, round-robin back to page 1, else nav to next
        currentPage === 4 ? currentPage = 1 : currentPage++;

        // Show the new page
        $('.page' + currentPage).show();
    });
}

function handleError(error)
{
    console.log(error)
}

// Get data and init event listeners
getAndDisplay().catch(handleError);
initEventListeners();