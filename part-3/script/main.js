$(document).ready(function() {
  console.log('main.js is connected!');
});

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

// MAKE AJAX CALL TO PROVIDED API
const makeCall = function(eventType){
  $.ajax({
    url: `https://sv-reqres.now.sh/api/${eventType}/?per_page=2`,
    type: "Get",
    dataType: 'json'
  }).then(function(response){
    console.log(response);
  })
}
