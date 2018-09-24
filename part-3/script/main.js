$(document).ready(function() {
  console.log('main.js is connected!');
});

let allData = null, index =0;
const main = $('main');

// TOGGLE ACTIVE CLASS NAVIGATION
$('.nav-item').click(function(){
  $('.nav-item').removeClass('active');
  $(this).addClass('active');
});

// TOGGLE ACTIVE CLASS NAVIGATION
$('.nav-bttn').click(function(){
  $('.nav-bttn').removeClass('active');
  $(this).addClass('active');
});

// PROCESS THE DATA COMING FROM API
const processData = function(){
  let title = allData.data[index].title;
  let description = allData.data[index].description;
  console.log(title,description);
}

//  ADD ELEMENTS TO DOM
const buildDOM = function(response){
  main.append('<article class="clearfix wrapper"><section id="module0" class="place"><div><div class="city"></div><div class="zip"></div></div></section></article>');
  processData();
}

// MAKE AJAX CALL TO PROVIDED API
const makeCall = function(eventType){
  $.ajax({
    url: `https://sv-reqres.now.sh/api/${eventType}/?per_page=2`,
    type: "Get",
    dataType: 'json'
  }).then(function(response){
    allData = response
    buildDOM();
  })
}
