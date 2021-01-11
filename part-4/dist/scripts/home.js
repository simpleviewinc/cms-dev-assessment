"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var mainController = function () {
  var cssClasses = {
    active: 'active',
    pagePrefix: 'homeGrid--page'
  };
  var els = {
    gridsWrp: document.querySelector('#gridsWrp'),
    prevPageBtn: document.querySelector('#prevPageBtn'),
    nextPageBtn: document.querySelector('#nextPageBtn')
  };
  var apiURL = 'https://sv-reqres.now.sh/api/';
  var urls = {
    proxy: 'https://cors-anywhere.herokuapp.com/',
    listings: "".concat(apiURL, "listings"),
    events: "".concat(apiURL, "events"),
    offers: "".concat(apiURL, "offers")
  };
  var _data = {
    listings: fetch(urls.listings).then(function (response) {
      return response.json();
    }),
    allData: new Array(),
    pages: {
      totalPages: 0,
      totalItems: 0,
      perPage: 0,
      pagePattern: [5, 5, 3, 2],
      apiPageData: new Object(),
      newPageData: new Object(),
      urls: new Array()
    }
  };
  var curPage = window.location.hash.replace('#', '');

  function shuffleArr(arr) {
    var curIndex = arr.length;
    var randoCalrissian;
    var tempVal;

    while (curIndex !== 0) {
      randoCalrissian = Math.floor(Math.random() * curIndex);
      curIndex--;
      tempVal = arr[curIndex];
      arr[curIndex] = arr[randoCalrissian];
      arr[randoCalrissian] = tempVal;
    }

    return arr;
  }

  function renderData(promiseArr) {
    Promise.all(promiseArr).then(function (results) {
      var trimmedData;
      results.forEach(function (r) {
        var _data$allData;

        return (_data$allData = _data.allData).push.apply(_data$allData, _toConsumableArray(r.data));
      });
      console.log(_data.allData); // randomize data

      _data.allData = shuffleArr(_data.allData);
      console.log(_data.allData);
      trimmedData = _data.allData; // file randomize data into pages

      for (var i = 0; i < _data.pages.totalPages; i++) {
        var numOfItems = _data.pages.pagePattern[i > _data.pages.pagePattern.length ? i - _data.pages.pagePattern.length : i];
        var items = trimmedData.slice(0, numOfItems);
        _data.pages.newPageData[i + 1] = items;
        trimmedData = trimmedData.slice(numOfItems);
      }

      while (trimmedData.length > 0) {
        for (var _i = 0; _i < _data.pages.pagePattern.length; _i++) {
          if (trimmedData.length) {
            var page = Object.keys(_data.pages.newPageData).length + 1;
            _data.pages.newPageData[page] = trimmedData.slice(0, _data.pages.pagePattern[_i]);
            trimmedData = trimmedData.slice(_data.pages.pagePattern[_i]);
          } else {
            break;
          }
        }
      }

      _data.pages.totalPages = Object.keys(_data.pages.newPageData).length;
      createPageMarkup();
    }).catch(function (error) {
      return console.error(error);
    });
  }

  function createData(thisData, dataURL) {
    Promise.resolve(thisData).then(function (d) {
      _data.pages.totalPages = d.total_pages;
      _data.pages.totalItems = d.total;
      _data.pages.perPage = d.per_page;

      for (var i = 0; i < _data.pages.totalPages; i++) {
        _data.pages.urls.push(fetch("".concat(dataURL, "?page=").concat(i + 1)).then(function (response) {
          return response.json();
        }));
      }

      renderData(_data.pages.urls);
    }).catch(function (error) {
      return console.error(error);
    });
  }

  function createPageMarkup() {
    var items = _data.pages.newPageData[curPage];
    var titleNum = 0;
    var markup;

    for (var i = 1; i < curPage; i++) {
      titleNum += _data.pages.newPageData[i].length;
    }

    markup = "\n            <div class=\"homeGrid ".concat(cssClasses.pagePrefix).concat(curPage, "\">\n                ").concat(items.map(function (cur) {
      titleNum += 1;
      return "\n                        <div class=\"homeGrid__item\">\n                            <div class=\"homeGrid__titleCard\">\n                                <span class=\"homeGrid__titleNum\">".concat(titleNum.toString().length < 2 ? "0".concat(titleNum) : titleNum, ".</span>\n                                <h2 class=\"homeGrid__title\">").concat(cur.title, "</h2>\n                            </div>\n\n                            <div class=\"homeGrid__imgWrp\">\n                                <img class=\"homeGrid__img\" src=\"").concat(cur.mediaurl, "\" alt=\"\" onError=\"this.onerror = null; this.src = '/images/fallback.jpg';\" />\n                            </div>\n                        </div>");
    }).join(''), "\n            </div>");
    els.gridsWrp.insertAdjacentHTML('beforeend', markup);
  }

  function nextPage() {
    var nextPage = parseInt(curPage) + 1 > _data.pages.totalPages ? 1 : parseInt(curPage) + 1;
    window.location.hash = nextPage;
    curPage = nextPage;
    els.gridsWrp.innerHTML = '';
    createPageMarkup();
  }

  function prevPage() {
    var prevPage = parseInt(curPage) - 1 < 1 ? _data.pages.totalPages : parseInt(curPage) - 1;
    window.location.hash = prevPage;
    curPage = prevPage;
    els.gridsWrp.innerHTML = '';
    createPageMarkup();
  }

  function setDefaultSearchParam() {
    if (curPage === null || curPage.length === 0) {
      window.location.hash = '#1';
      curPage = 1;
    }
  }

  function eventListeners() {
    // move to previous page
    els.prevPageBtn.addEventListener('click', prevPage); // move to next page

    els.nextPageBtn.addEventListener('click', nextPage);
  }

  function init() {
    setDefaultSearchParam();
    createData(_data.listings, urls.listings);
    eventListeners();
  } // -- INIT -- //


  init(); // -- PUBLIC -- //

  return {
    data: function data() {
      return _data;
    },
    nextPage: nextPage,
    prevPage: prevPage
  };
}();