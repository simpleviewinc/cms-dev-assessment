// On load run
document.onload = sendAjaxRequest();

function generateCards(imageURL, title, description) {
  // We pass the data from GET method result and store it in a variable as a HTML string
  // Handle the onError event for the image to reassign its source using Jquery
  let divCard = `<div class='card col-'>
                <image class=image  src=${imageURL} alt=${title}
                onerror="this.onerror=null;this.src='./assets/images/fallback.jpg';"></image>
                <h2 class=header>${title}</h2>
                <p class=description>${description}</p>
                </div>`;
  // After creating each card we append it to 'id=cards'
  $("#cards").append(divCard);
}

function addCellIndex() {
  // Give each card a cell+index+1 class to start from 1
  $(".card").each(function(index) {
    {
      $(this).addClass("cell-" + (index + 1));
    }
  });
}

function generateButtons() {
  // Created buttons using JQuery added 'individual and btn' classes and data-field attribute for onClick
  let allBtn = $("<btn>All</btn>")
    .addClass("allBtn btn")
    .attr("data-field", "listings");
  let listingsBtn = $("<button>Listings</button>")
    .addClass("listingsBtn btn")
    .attr("data-field", "listings");
  let eventsBtn = $("<button>Events</button>")
    .addClass("eventsBtn btn")
    .attr("data-field", "events");
  let offersBtn = $("<button>Offers</button>")
    .addClass("offersBtn btn")
    .attr("data-field", "offers");
  // Append buttons to filtes-btns div
  $("#filter-btns").append(allBtn, listingsBtn, eventsBtn, offersBtn);
}
function handleOnClick() {
  // Saved click button event in function
  $(".btn").click(function(event) {
    event.preventDefault();
    // Clear cards div to replace each time clicked
    $("#cards").empty();
    // Get data-field from button when clicked
    query = $(this).attr("data-field");
    // Run AJAX requeste passing data field as parameter
    sendAjaxRequest(query, 1, 12);
    toggleCardClass("grid");
  });
}

function sendAjaxRequest(query, page, elements) {
  // Saved AJAX GET request in function
  // If no query use listings as default
  if (query == null && page == null && elements == null) {
    query = "listings";
    page = 1;
    elements = 12;
  }
  // Saved query in variable passed query parameter
  let queryURL = `https://sv-reqres.now.sh/api/${query}/?page${page}&per_page=${elements}`;
  console.log(queryURL)
  // AJAX call with GET method
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    // GET array of results store in data variable
    let data = response.data;
    // This method allow us to generateCards() and addCellINdex() on each result
    data.forEach(element => {
      generateCards(element.mediaurl, element.title, element.description);
      addCellIndex();
    });
  });
}

function generatePagesButtons() {
  // Created buttons using JQuery added 'individual and btn' classes and data-field attribute for onClick
  let pagesBtns = `<ul>
  <li><a href="#" rel="previous"><<</a></li>
  <li><a href="#" data-field="5" page="1" id='one' class="active page">1</a></li>
  <li><a href="#" data-field="5" page="2" id='two' class="page">2</a></li>
  <li><a href="#" data-field="3" page="3" id='three' class="page">3</a></li>
  <li><a href="#" data-field="2" page="4" id='four' class="page">4</a></li>
  <li><a href="#" rel="next">>></a></li>
</ul>`;
  // Append buttons to pages-btns div
  $("#pages-btns").append(pagesBtns);
}

function handlePageChange() {
  // Saved click button event in function
  $(".page").click(function(event) {
    event.preventDefault();
    // Clear cards div to replace each time clicked
    $("#cards").empty();
    // Get data-field from button when clicked
    let page = $(this).attr("page");
    let elements = $(this).attr("data-field");
    let name =  $(this).attr("id");
    toggleCardClass(name);
    console.log(page, elements);
    // Run AJAX requeste passing data field as parameter
    sendAjaxRequest("listings", page, elements);
  });
}

function toggleCardClass(name) {
  // Give each card a cell+index+1 class to start from 1
  $("#cards").removeClass();
  $("#cards").addClass(name);
}

generateButtons();
handleOnClick();
generatePagesButtons();
handlePageChange();
