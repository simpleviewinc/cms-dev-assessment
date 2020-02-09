// Query string for Ajax GET method and save it in a variable
const queryURL = "https://sv-reqres.now.sh/api/listings/?per_page=12";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  // GET array of results store in data variable
  let data = response.data;
  // This method allow us to use the function generateCards() on each result
  data.forEach(element => {
    generateCards(element.mediaurl, element.title, element.description);
    addIndex()
  });

});

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

function addIndex(){
$(".card").each(function(index) {
  if(index==0){
  $(this).attr("dataset",index);
  }
});
}

012
633
345
336

678
633

911
336

111
633

111
336