// On load run AJAX request
document.onload =  sendAjaxRequest(),
generateButtons(), handleOnClick();
 

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
  let allBtn = $("<btn>All</btn>").addClass("allBtn btn");
  let listingsBtn = $("<button>Listings</button>")
    .addClass("listingsBtn btn")
    .attr("data-field", "listings");
  let eventsBtn = $("<button>Events</button>").addClass("eventsBtn btn").attr("data-field", "events");
  let offersBtn = $("<button>Offers</button>").addClass("offersBtn btn").attr("data-field", "offers");
  // Append buttons to filtes-btns div
  $("#filter-btns").append(allBtn, listingsBtn, eventsBtn, offersBtn);
}
function handleOnClick(){
  // Saved click button event in function
$(".btn").click(function(event) {
  event.preventDefault();
  // Clear cards div to replace each time clicked
  $('#cards').empty()
  // Get data-field from button when clicked
  query = $(this).attr("data-field");
  // Run AJAX requeste passing data field as parameter
  sendAjaxRequest(query);
});
}

function sendAjaxRequest(query) {
  // Saved AJAX GET request in function
  // If no query use listings as default
  if(query==null){
    query = 'listings'
  }
  // Saved query in variable passed query parameter
  let queryURL = `https://sv-reqres.now.sh/api/${query}/?per_page=4`;
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
  <li><a href="#"><<</a></li>
  <li><a href="#" class="active">1</a></li>
  <li><a href="#">2</a></li>
  <li><a href="#">3</a></li>
  <li><a href="#">4</a></li>
  <li><a href="#">>></a></li>
</ul>`
  // Append buttons to pages-btns div
  $("#pages-btns").append(pagesBtns);
}
generatePagesButtons();