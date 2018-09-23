$(document).ready(function() {
  console.log('main.js is connected!');
  // FUNCTION FOR AJAX API CALL
  makeCall();
});

// PROCESS THE DATA COMING FROM API
const processData = function(response){
  let index = 0;
  let city = response.data[index].city;
  let zip = response.data[index].zip;

  console.log(index,city,zip);
}

// MAKE AJAX CALL TO PROVIDED API
const makeCall = function(){
  $.ajax({
    url: 'https://sv-reqres.now.sh/api/listings/?per_page=2',
    type: "Get",
    dataType: 'json'
  }).then(function(response){
    processData(response);
  })
}
