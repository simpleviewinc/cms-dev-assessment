$(document).ready(function() {
  console.log('main.js is connected!');
  // FUNCTION FOR AJAX API CALL
  makeCall();
});

const makeCall = function(){
  // MAKE AJAX CALL TO PROVIDED API
  $.ajax({
    url: 'https://sv-reqres.now.sh/api/listings/?per_page=2',
    type: "Get",
    dataType: 'json'
  }).then(function(response){
    console.log(response);
  })
}
