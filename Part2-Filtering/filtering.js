document.getElementById("listings").innerHTML = allData.listings
  .map((item, index) => {
    return `
        <div class='show-listings ${"div" + index}'>
        <img src=${
          item.mediaurl &&
          "https://github.com/simpleviewinc/cms-dev-assessment/blob/master/comps/fallback.jpg?raw=true"
        } />
        <div><h2>${item.title}</h2>
        <p>${item.description}</p>
        </div>
        <button>Read more</button>
        </div>
        `;
  })
  .join("");

document.getElementById("events").innerHTML = allData.events
  .map((item, index) => {
    return `
        <div class='show-events ${"div" + index}'>
        <img src=${
          item.mediaurl &&
          "https://github.com/simpleviewinc/cms-dev-assessment/blob/master/comps/fallback.jpg?raw=true"
        } />
        <div>
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        </div>
        <button>Read more</button>
        </div>
        `;
  })
  .join("");

document.getElementById("offers").innerHTML = allData.offers
  .map((item, index) => {
    return `
        <div id="offers" class='show-offerings ${"div" + index}'>
        <img src=${
          item.mediaurl &&
          "https://github.com/simpleviewinc/cms-dev-assessment/blob/master/comps/fallback.jpg?raw=true"
        } />
        <div>
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        </div>
        <button>Read more</button>
        </div>
        `;
  })
  .join("");

const addClass = (element, name) => {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
};

const removeClass = (element, name) => {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
};

const filterSelection = (c) => {
  let x, i;
  x = document.getElementsByClassName("grid");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
};
filterSelection("all");

let btnContainer = document.getElementById("btn-container");
let btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
