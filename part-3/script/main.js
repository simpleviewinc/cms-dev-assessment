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

// MANIPULATE DOM - ADD DATA TO DOM
const manipulateDom = function(title,description){
  let module = `#module${index}`
  $(`${module} .grid-heading`).text(title);
  $(`${module} .grid-text`).text(description);
  console.log(title, ' ', description);
}

// PROCESS THE DATA COMING FROM API
const processData = function(){
  let title = allData.data[index].title;
  let description = allData.data[index].description;
  manipulateDom(title,description);
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

//  ADD ELEMENTS TO DOM
const buildDOM = function(){
  main.append(`
    <article class="clearfix wrapper">
      <section id="module0" class="landscape col">
        <div class="image"></div>
        <div class="text">
          <h1 class="grid-heading"></h1>
          <p class="grid-text"></p>
          <div class="bttn">
            <button type="button">Read More</button>
          </div>
        </div>
      </section>
      <section id="module1" class="portrait col">
        <div class="image"></div>
        <div class="text">
          <h1 class="grid-heading"></h1>
          <p class="grid-text"></p>
          <div class="bttn">
            <button type="button">Read More</button>
          </div>
        </div>
      </section>
      <section id="module2" class="portrait col">
        <div class="image"></div>
        <div class="text">
          <h1 class="grid-heading"></h1>
          <p class="grid-text"></p>
          <div class="bttn">
            <button type="button">Read More</button>
          </div>
        </div>
      </section>
    </article>`);
  processData()
}
