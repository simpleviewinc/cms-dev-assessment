'use strict';

(function() {
  const buttons = document.querySelectorAll('button')

  let slideIndex = 1;
  showSlides(slideIndex);

  // next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function showSlides(n) {
    var slides = document.querySelectorAll('.slide');
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex-1].style.display = 'block';
  }

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