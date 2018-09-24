$(document).ready(function() {
  console.log('showall.js is connected!');
  displayAll('listings', true);
});

let allData2 = null, index2 =0;
const main2 = $('main');

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

// MAKE CALLS TO ADD CONTENT TO DOM
const populateDOM2 = function() {
  while(index2 <= 5) {
    processData2();
    index2 += 1;
  };
};

// MANIPULATE DOM - ADD DATA TO DOM
const manipulateDom2 = function(title,description){
  let module = `#module${index2}`;
  $(`${module} .grid-heading`).text(title);
  $(`${module} .grid-text`).text(description);
}

// PROCESS THE DATA COMING FROM API
const processData2 = function(){
  let title = allData2.data[index2].title;
  let description = allData2.data[index2].description;
  manipulateDom2(title,description);
};


// CHECK DOM FOR ALREADY EXISTING ELEMENTS
const checkDOM2 = function(){
  if ($('article').length) {
    $('article').remove();
    index2 = 0;
  }
  buildDOM2();
};

// MAKE AJAX CALL TO PROVIDED API
const makeCall2 = function(eventType,keyword){
  $.ajax({
    url: `https://sv-reqres.now.sh/api/${eventType}/?per_page=6`,
    type: "Get",
    dataType: 'json'
  }).then(function(response){
    allData2 = response;
    if(keyword){
      buildDOM2();
    } else {
      checkDOM2();
    }
  })
}

// DISPLAY ALL LISTINGS
const displayAll = function(eventType,keyword){
  makeCall2(eventType,keyword);
}

//  ADD ELEMENTS TO DOM
const buildDOM2 = function(){
  let i = 0;
  while(index2 <= 2){
    let module0 = `module${i}`;
    i+=1;
    let module1 = `module${i}`;
    i+=1;
    let module2 = `module${i}`;
    i+=1;
    let module3 = `module${i}`;
    i+=1;
    let module4 = `module${i}`;
    i+=1;
    let module5 = `module${i}`;
    main2.append(`
      <article class="clearfix wrapper">
        <section id="${module0}" class="landscape col">
          <div class="image"></div>
          <div class="text">
            <h1 class="grid-heading"></h1>
            <p class="grid-text"></p>
            <div class="bttn">
              <button type="button">Read More</button>
            </div>
          </div>
        </section>
        <section id="${module1}" class="portrait col">
          <div class="image"></div>
          <div class="text">
            <h1 class="grid-heading"></h1>
            <p class="grid-text"></p>
            <div class="bttn">
              <button type="button">Read More</button>
            </div>
          </div>
        </section>
        <section id="${module2}" class="portrait col">
          <div class="image"></div>
          <div class="text">
            <h1 class="grid-heading"></h1>
            <p class="grid-text"></p>
            <div class="bttn">
              <button type="button">Read More</button>
            </div>
          </div>
        </section>
      </article>
      <article class="clearfix">
        <section id="${module3}" class="portrait col">
          <div class="image"></div>
          <div class="text">
            <h1 class="grid-heading"></h1>
            <p class="grid-text"></p>
            <div class="bttn">
              <button type="button">Read More</button>
            </div>
          </div>
        </section>
        <section id="${module4}" class="portrait col">
          <div class="image"></div>
          <div class="text">
            <h1 class="grid-heading"></h1>
            <p class="grid-text"></p>
            <div class="bttn">
              <button type="button">Read More</button>
            </div>
          </div>
        </section>
        <section id="${module5}" class="landscape col">
          <div class="image inner-col-img"></div>
          <div class="text inner-col-txt">
            <h1 class="grid-heading"></h1>
            <p class="grid-text"></p>
            <div class="bttn">
              <button type="button">Read More</button>
            </div>
          </div>
        </section>
      </article>`);
    i+=1;
    index2 += 1;
  }
  index2 = 0;
  populateDOM2()
}
