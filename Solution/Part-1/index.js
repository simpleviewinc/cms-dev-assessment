console.log("im working!");

console.log($(".header"));
const queryURL = "https://sv-reqres.now.sh/api/listings/?per_page=4";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
  let data = response.data;

  data.forEach(element => {
    generateCards(element.mediaurl, element.title, element.description);
  });
});

function generateCards(imageURL, title, description) {
  let divCard = `<div class='card'>
                <image class=image style='height:500px; width:500px;' src=${imageURL}></image>
                <h2 class=header>${title}</h2>
                <p class=description>${description}</p>
                </div>`;
  $(".cards").append(divCard);
  console.log(divCard)
}
