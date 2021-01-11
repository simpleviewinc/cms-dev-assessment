"use strict";

(function () {
  var cssClasses = {
    active: 'active',
    filterBtn: 'button--filter',
    homeGrid: 'homeGrid',
    homeGridNoBorder: 'homeGrid--noBorder'
  };
  var els = {
    filterBtns: Array.from(document.querySelectorAll(".".concat(cssClasses.filterBtn))),
    gridsWrp: document.querySelector('#gridsWrp')
  };
  var apiURL = 'https://sv-reqres.now.sh/api/';
  var urls = {
    proxy: 'https://cors-anywhere.herokuapp.com/',
    listings: "".concat(apiURL, "listings"),
    events: "".concat(apiURL, "events"),
    offers: "".concat(apiURL, "offers")
  };
  var dataTypes = {
    all: 'all',
    listings: 'listings',
    events: 'events',
    offers: 'offers'
  };
  var data = {
    listings: fetch(urls.listings).then(function (response) {
      return response.json();
    }),
    events: fetch(urls.events).then(function (response) {
      return response.json();
    }),
    offers: fetch(urls.offers).then(function (response) {
      return response.json();
    })
  };
  var dataAttr = 'data-type';
  var dataJson = new Object();

  function renderData(dataObj) {
    var dataArr = new Array();
    var keyArr = new Array();

    for (var key in dataObj) {
      keyArr.push(key);
      dataArr.push(dataObj[key]);
    }

    Promise.all(dataArr).then(function (arr) {
      for (var i = 0; i < arr.length; i++) {
        dataJson[keyArr[i]] = arr[i];
      }

      for (var key in dataJson) {
        createMarkup(dataJson[key].data, key);
      }
    }).catch(function (error) {
      return console.error(error);
    });
  }

  function createMarkup(data, dataType) {
    var markup = "\n            <div class=\"homeGrid\" ".concat(dataAttr, "=\"").concat(dataType, "\">\n                ").concat(data.map(function (cur) {
      return "\n                        <div class=\"homeGrid__item\">\n                            <div class=\"homeGrid__imgWrp\">\n                                <img class=\"homeGrid__img\" src=\"".concat(cur.mediaurl, "\" alt=\"").concat(cur.title, " image\" onError=\"this.onerror = null; this.src = '/images/fallback.jpg';\" />\n                            </div>\n\n                            <div class=\"homeGrid__content\">\n                                <h2 class=\"homeGrid__heading\">").concat(cur.title, "</h2>\n\n                                <div class=\"homeGrid__desc\">\n                                    <p>").concat(cur.description, "</p>\n                                </div>\n                                \n                                <span class=\"homeGrid__itemBtn button button--primary\">Read More</span>\n                            </div>\n\n                        </div>");
    }).join(''), "\n            </div>");
    els.gridsWrp.insertAdjacentHTML('beforeend', markup);
  }

  function eventListeners() {
    // click event for filter buttons
    els.filterBtns.forEach(function (cur) {
      return cur.addEventListener('click', function () {
        var grids = Array.from(document.querySelectorAll(".".concat(cssClasses.homeGrid)));
        var activeBtn = document.querySelector(".".concat(cssClasses.filterBtn, ".").concat(cssClasses.active));
        var thisCat; // remove active class from active button

        activeBtn.classList.remove(cssClasses.active); // add active class to clicked button

        cur.classList.add(cssClasses.active); // if this is not the "all" button, show the category and hide the others

        if (cur.getAttribute(dataAttr) !== dataTypes.all) {
          thisCat = grids.filter(function (g) {
            return g.getAttribute(dataAttr) === cur.getAttribute(dataAttr);
          })[0];
          grids.forEach(function (g) {
            return g.style.display = 'none';
          });
          thisCat.removeAttribute('style');
          thisCat.classList.add(cssClasses.homeGridNoBorder);
        } // otherwise, show all categories
        else {
            grids.forEach(function (g) {
              g.removeAttribute('style');
              g.classList.remove(cssClasses.homeGridNoBorder);
            });
          }
      });
    });
  } // -- INIT -- //


  renderData(data);
  eventListeners();
})();