$(document).ready(function() {
  console.log('showall.js is connected!');
  buildAllListings(true);
});

let allListData = [], index2 = 0, count = 0, modIndex = 0, modIdNum = 0, arrInd = 0;
const $main = $('main');
const categories = ['listings', 'events', 'offers'];

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
const populateDOMallLsit = function() {
  while(index2 <= 5) {
    processDataAllList();
    modIdNum += 1;
    index2 += 1;
  };
  arrInd += 1;
};

// MANIPULATE DOM - ADD DATA TO DOM
const manipulateDomAllList = function(imgUrl,title,description){
  let module = `#module${modIdNum}`;
  $(`${module} .image`).css('background-image', `url(${imgUrl})`);
  $(`${module} .grid-heading`).text(title);
  $(`${module} .grid-text`).text(description);
};

// PROCESS THE DATA COMING FROM API
const processDataAllList = function(){
  let imgUrl = allListData[0].data[2].mediaurl;
  let title = allListData[arrInd].data[index2].title;
  let description = allListData[arrInd].data[index2].description;
  manipulateDomAllList(imgUrl,title,description);
};


// CHECK DOM FOR ALREADY EXISTING ELEMENTS
const checkDOMAllList = function(){
  if ($('article').length) {
    $('article').remove();
    index2 = 0; modIndex = 0; modIdNum = 0; arrInd = 0;
  };
  buildDOMallList();
};

// MAKE AJAX CALL TO PROVIDED API
const makeCallAllList = function(eventType,keyword){
  $.ajax({
    url: `https://sv-reqres.now.sh/api/${eventType}/?per_page=6`,
    type: "Get",
    dataType: 'json'
  }).then(function(response){
    allListData.push(response);
    if(keyword){
      buildDOMallList();
    } else {
      checkDOMAllList();
    };
  });
};

// DISPLAY ALL LISTINGS
const displayAll = function(eventType,keyword){
  makeCallAllList(eventType,keyword);
};

// RECURSIVE CALL TO DISPLY ALL LISTINGS
const buildAllListings = function(boolean){
  setTimeout(function(){
    displayAll(categories[count], boolean);
    count += 1;
  }, 1000);
  setTimeout(function(){
    displayAll(categories[count], boolean);
    count += 1;
  }, 2000);
  setTimeout(function(){
    displayAll(categories[count], boolean);
    count = 0;
  }, 3000);
};

//  ADD ELEMENTS TO DOM
const buildDOMallList = function(){
  while(index2 <= 2){
    let module0 = `module${modIndex}`;
    modIndex+=1;
    let module1 = `module${modIndex}`;
    modIndex+=1;
    let module2 = `module${modIndex}`;
    modIndex+=1;
    let module3 = `module${modIndex}`;
    modIndex+=1;
    let module4 = `module${modIndex}`;
    modIndex+=1;
    let module5 = `module${modIndex}`;
    $main.append(`
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
    modIndex += 1;
    index2 += 1;
  };
  index2 = 0;
  populateDOMallLsit();
};
