'use strict';

(function() {
  const buttons = document.querySelectorAll('button');
  const slideOne = document.querySelector('.slide-one');
  const slideTwo = document.querySelector('.slide-two');
  const slideThree = document.querySelector('.slide-three');
  const slideFour = document.querySelector('.slide-four');

  fetch('https://sv-reqres.now.sh/api/listings?per_page=20')
    .then(res => {
      return res.json()
    }).then(data => {
      slideOne.innerHTML = createGrid(2, [2, 3], data.data)
      slideTwo.innerHTML = createGrid(3, [2, 2, 1], data.data)
      slideThree.innerHTML = createGrid(2, [2, 1], data.data)
      slideFour.innerHTML = createGrid(2, [1, 1], data.data)
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

  const createRowsInsideCol = function(numOfRows, data) {
    let gridItem = ''
    for(let i = 0; i < numOfRows; i++) {
      if(data.length > 0) {
        gridItem += `<div class="grid-item"><h2>${data[0].title}</h2><img src=${data[0].mediaurl} onerror="this.onerror=null;this.src='../comps/fallback.jpg'" alt="farmland"></div>`
        data.shift()
      }
    }
    return `<div class="grid-container-${numOfRows}row">${gridItem}</div>`
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