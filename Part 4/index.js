'use strict';

(function() {
  const buttons = document.querySelectorAll('.controllers button');
  const slideOne = document.querySelector('.slide-one');
  const slideTwo = document.querySelector('.slide-two');
  const slideThree = document.querySelector('.slide-three');
  const slideFour = document.querySelector('.slide-four');

  fetch('https://sv-reqres.now.sh/api/listings?per_page=20')
    .then(res => {
      return res.json()
    }).then(data => {
      let randomizedData = randomize(data.data)
      slideOne.innerHTML = createGrid(2, [2, 3], randomizedData)
      slideTwo.innerHTML = createGrid(3, [2, 2, 1], randomizedData)
      slideThree.innerHTML = createGrid(2, [2, 1], randomizedData)
      slideFour.innerHTML = createGrid(2, [1, 1], randomizedData)
    }).catch(err => {
      console.error(err);
    })

  //create grid by inputting number of columns
  //rowsPerColArr is an array of numbers, each number represents amount of rows per column given as first argument
  const createGrid = function(numOfCols, rowsPerColArr, data) {
    let rowsInsideCol = ''
    rowsPerColArr.forEach(num => {
      //need to randomize data in part 4
      rowsInsideCol += createRowsInsideCol(num, data)
    })
    return `<div class="grid-container-${numOfCols}col">${rowsInsideCol}</div>`
  }
  // create number of rows needed for each column
  const createRowsInsideCol = function(numOfRows, data) {
    let gridItem = ''
    for(let i = 0; i < numOfRows; i++) {
      if(data.length > 0) {
        gridItem += `<div class="grid-item"><h2 class="heading">${data[0].title}</h2><img src=${data[0].mediaurl} onerror="this.onerror=null;this.src='../comps/fallback.jpg'" alt="farmland"></div>`
        data.shift()
      }
    }
    return `<div class="grid-container-${numOfRows}row">${gridItem}</div>`
  }

  //randomizer function for api data
  const randomize = function(data){
    let currIdx = data.length;
    let temp;
    let randomIdx;
    while(currIdx > 0) {
      randomIdx = Math.floor(Math.random() * currIdx);
      currIdx -= 1;
      temp = data[currIdx];
      data[currIdx] = data[randomIdx];
      data[randomIdx] = temp;
    }
    return data;
  }

//Slider
  let slideIndex = 1;
  showSlides(slideIndex);
  // next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  // change display of slides
  function showSlides(n) {
    var slides = document.querySelectorAll('.slide');
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex-1].style.display = 'block';
  }
  //add event to prev/next buttons
  buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      if(event.target.id === 'prev') {
        plusSlides(-1)
      } else {
        plusSlides(1)
      }
    })
  })

})()