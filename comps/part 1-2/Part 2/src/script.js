// Show/Hide tabs
const activateTab = (e) => {
  clearActive(); // clear all active classes

  const tab = e.getAttribute('name');
  const targetPane = document.getElementById(tab);

  // add an active class to the button clicked
  e.classList.add('active');

  // add activeTab class to the pane that was selected
  targetPane.classList.add('activeTab');

  // fetch data based on the clicked button
  fetshData(tab);
};

// clear active tabs function
const clearActive = () => {
  const allTabs = document.querySelectorAll('.tab-pane');
  const allBtns = document.querySelectorAll('.btn');

  // clear active class from the panes
  allTabs.forEach((tab) => {
    tab.classList.remove('activeTab');
  });
  // clear active class from the buttons
  allBtns.forEach((tab) => {
    tab.classList.remove('active');
  });
};

// fetsh data using dynamic variables
const fetshData = (val) => {
  // if all is pressed
  if (val === 'all') {
    const target = document.getElementById('all');
    const API_Handles = ['listings', 'events', 'offers'];
    let allData = [];

    API_Handles.forEach((call) => {
      fetch(`https://sv-reqres.now.sh/api/${call}`)
        .then((data) => {
          return data.json();
        })
        .then(({ data }) => {
          allData = [...allData, data];
          const content = allData
            .flat()
            .map(
              (elem) =>
                `<div class="element"  name="all-${elem.recid}"><div class="img" style="background: url('${elem.mediaurl}'), url('./assets/fallback.jpg');min-height: 350px;"></div><div class="element-content"><h3>${elem.title}</h3><p>${elem.description}</p><input id="all-${elem.recid}" type="button" value="See More" class="seeMoreBtn" /></div></div>`,
            )
            .join('');

          //display on the DOM
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
        })
        .catch((err) => console.log(err));
    });
  } else {
    const target = document.getElementById(val);

    fetch(`https://sv-reqres.now.sh/api/${val}`)
      .then((data) => {
        return data.json();
      })
      .then(({ data }) => {
        const content = data
          .map(
            (elem) =>
              `<div class="element"  name="${elem.recid}"><div class="img" style="background: url('${elem.mediaurl}'), url('./assets/fallback.jpg');min-height: 350px;"></div><div class="element-content"><h3>${elem.title}</h3><p>${elem.description}</p><input id="${elem.recid}" type="button" value="See More" class="seeMoreBtn" /></div></div>`,
          )
          .join('');
        //display on the DOM
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
  }
};

// show seeMore btn on mouseEnter
const showBtn = (e) => {
  const name = e.target.getAttribute('name');
  const targetBtn = document.getElementById(name);

  targetBtn.classList.add('slideUp');
};
// hide seeMore btn on mouseLeave
const hideBtn = (e) => {
  const name = e.target.getAttribute('name');
  const targetBtn = document.getElementById(name);

  targetBtn.classList.remove('slideUp');
};

// initiate
fetshData('all');
