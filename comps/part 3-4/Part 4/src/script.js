let state = {
  items: [],
  pattern: [5, 5, 3, 2],
  layout: [],
  page: 0,
};

// deconstructing
let { layout, pattern, items, page } = state;

// fetch data onload
fetch('https://sv-reqres.now.sh/api/listings?per_page=16')
  .then((data) => {
    return data.json();
  })
  .then(({ data }) => {
    state.items = data; // locally store items
    shuffleArray(state.items); // shuffle the items
    decompose(); // arrange items based on the desired pattern
  })
  .then(() => {
    displayLayout(page); // display the result
    animate(true); // show content
  });

// shuffle the api data
const shuffleArray = (array) => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

// next layout
const next = () => {
  // if page is the last
  if (page === 3) {
    // bring it back to the beginning
    page = 0;
    // and display content
    animate(false);
    setTimeout(() => {
      displayLayout(page);
      setTimeout(() => {
        animate(true);
      }, 100);
    }, 700);
  } else {
    // increment page
    page++;
   // annimate and display content
   animate(false);
   setTimeout(() => {
     displayLayout(page);
     setTimeout(() => {
       animate(true);
     }, 100);
   }, 700);
  }
};

// previous layout
const prev = () => {
  // if page is the last
  if (page === 0) {
    // bring it back to the beginning
    page = 3;
   // annimate and display content
    animate(false);
    setTimeout(() => {
      displayLayout(page);
      setTimeout(() => {
        animate(true);
      }, 100);
    }, 700);
  } else {
    // increment page
    page--;
   // annimate and display content
   animate(false);
   setTimeout(() => {
     displayLayout(page);
     setTimeout(() => {
       animate(true);
     }, 100);
   }, 700);
  }
};

// Animate the transition
const animate = (on) => {
  const layers = document.querySelectorAll('.transitionLayer');
  const content = document.getElementById('content');
  layers.forEach((layer) => {
    if (on) {
      layer.style.cssText =
        'transform: skewY(0deg) translateY(-110%)!important';
        content.classList.remove('slideContent')
      } else {
        layer.style.cssText = 'transform: skewY(-3deg) translateY(0%)!important';
        content.classList.add('slideContent')
    }
  });
};

// arrange items in the required pattern
const decompose = () => {
  // loop through the pattern
  pattern.forEach((val) => {
    let list = [];
    // based on the current pattern step, collect the number of items from the data
    for (let i = 0; i < val; i++) {
      // push them to the list in this scope
      list.push(state.items[i]);
    }
    // push list to the layout
    layout.push(list);
    // remove all the pushed items from the main items list
    state.items = state.items.slice(val, state.items.length);
  });
};

const displayLayout = (page) => {
  const htmlElement = document.getElementById('content');

  const data = layout[page]
    .map(
      (item, i) =>
        `<div name="${
          item.title
        }" class="element element-${page}" style="background:url('${
          item.mediaurl
        }'), url('./assets/fallback.jpg')"><div class="transitionLayer"></div><h3><span>${itemNumber(
          i,
        )}</span> ${item.title}</h3><p class="description" id="${item.title}">${
          item.address1
        }</p></div>`,
    )
    .join('');

  htmlElement.innerHTML = `<div class="layout" id="grid-${page}">${data}</div>`;

  // add hover function to each elements
  let allElements = document.querySelectorAll('.element');
  allElements = Array.from(allElements);

  allElements.forEach((element) => {
    element.addEventListener('mouseenter', showDescription);
    element.addEventListener('mouseleave', hideDescription);
  });
};

// generate item number
const itemNumber = (i) => {
  if (page === 0) {
    return `0${i + 1}.`;
  } else {
    let count = 0;
    for (let i = 0; i < page; i++) {
      count += pattern[i];
    }
    const output = count + (i + 1);

    return output < 10 ? `0${output}.` : output + '.';
  }
};

// show seeMore btn on mouseEnter
const showDescription = (e) => {
  const name = e.target.getAttribute('name');
  const targetBtn = document.getElementById(name);

  targetBtn.classList.add('slideUp');
};
// hide seeMore btn on mouseLeave
const hideDescription = (e) => {
  const name = e.target.getAttribute('name');
  const targetBtn = document.getElementById(name);

  targetBtn.classList.remove('slideUp');
};
