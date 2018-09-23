$(document).ready(function() {
  console.log('main.js is connected!');
  // FUNCTION FOR AJAX API CALL
  makeCall();
});

let allData = null;

// MANIPULATE DOM - ADD DATA TO DOM
const manipulateDom = function(index,title,description){
  let moduleX = `#module${index}`;
  $(`${moduleX} .grid-heading`).text(title);
  $(`${moduleX} .grid-text`).text(description);
}

// PROCESS THE DATA COMING FROM API
const processData = function(){
  let index = 0;
  let title = allData.data[index].title;
  let description = allData.data[index].description;

  manipulateDom(index,title,description);
}

// MAKE AJAX CALL TO PROVIDED API
const makeCall = function(){
  $.ajax({
    url: 'https://sv-reqres.now.sh/api/listings/?per_page=2',
    type: "Get",
    dataType: 'json'
  }).then(function(response){
    allData = response;
    processData();
  })
}
