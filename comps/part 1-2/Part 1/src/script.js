// fetsh data using dynamic variables
(function fetshData() {
  const target = document.getElementById('listings');

  fetch(`https://sv-reqres.now.sh/api/listings`)
    .then((data) => {
      return data.json();
    })
    .then(({ data }) => {
      const content = data
        .map(
          (elem) =>
            `<div mouseenter="showMore(this)" class="element"  name="${elem.recid}"><div class="img" style="background: url('${elem.mediaurl}'), url('./assets/fallback.jpg');min-height: 350px;"></div><div class="element-content"><h3>${elem.title}</h3><p>${elem.description}</p><input id="${elem.recid}" type="button" value="Read More" class="readMoreBtn" /></div></div>`,
        )
        .join('');
      // dat = data.split(',').join('');
      target.innerHTML = content;
    })
    .then(() => {
      // add hover function to each elements
      let allElements = document.querySelectorAll('.element');
      allElements = Array.from(allElements);

      allElements.forEach((element) => {
        element.addEventListener('mouseenter', showBtn);
        element.addEventListener('mouseleave', hideBtn);
      });
    });
})();

// show readMore btn on mouseEnter
const showBtn = (e) => {
  const name = e.target.getAttribute('name');
  const targetBtn = document.getElementById(name);
  
  targetBtn.classList.add('slideUp');
};

// hide readMore btn on mouseLeave
const hideBtn = (e) => {
  const name = e.target.getAttribute('name');
  const targetBtn = document.getElementById(name);

  targetBtn.classList.remove('slideUp');
};
