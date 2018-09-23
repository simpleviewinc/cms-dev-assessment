$(document).ready(function() {
  console.log('main.js is connected!');
  // FUNCTION FOR AJAX API CALL
  makeCall();
});

let allData = null, index =0;

// MAKE CALLS TO ADD CONTENT TO DOM
const populateDOM = function() {
  while(index <= 5) {
    processData();
    index += 1;
  }
}

// MANIPULATE DOM - ADD DATA TO DOM
const manipulateDom = function(imageUrl,title,description){
  let moduleX = `#module${index}`;
  $(`${moduleX} .image`).css('background-image', `url(${imageUrl})`);
  $(`${moduleX} .grid-heading`).text(title);
  $(`${moduleX} .grid-text`).text(description);
}

// PROCESS THE DATA COMING FROM API
const processData = function(){
  let imageUrl = allData.data[2].mediaurl;
  let title = allData.data[index].title;
  let description = allData.data[index].description;

  manipulateDom(imageUrl,title,description);
}

// MAKE AJAX CALL TO PROVIDED API
const makeCall = function(){
  $.ajax({
    url: 'https://sv-reqres.now.sh/api/listings/?per_page=6',
    type: "Get",
    dataType: 'json'
  }).then(function(response){
    allData = response;
    populateDOM();
  })
}
