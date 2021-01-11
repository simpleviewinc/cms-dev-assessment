"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(function () {
  var els = {
    homeGrid: document.querySelector('#homeGrid')
  };
  var proxyURL = 'https://cors-anywhere.herokuapp.com/';
  var apiURL = 'https://sv-reqres.now.sh/api/';
  var listings = "".concat(apiURL, "listings");
  var events = "".concat(apiURL, "events");
  var offers = "".concat(apiURL, "offers");

  function gridItemTemplate(data) {
    var markup = "\n            <div class=\"homeGrid__item\">\n                <div class=\"homeGrid__imgWrp\">\n                    <img class=\"homeGrid__img\" src=\"".concat(data.mediaurl, "\" alt=\"").concat(data.title, " image\" onError=\"this.onerror = null; this.src = '/images/fallback.jpg';\" />\n                </div>\n\n                <div class=\"homeGrid__content\">\n                    <h2 class=\"homeGrid__heading\">").concat(data.title, "</h2>\n\n                    <div class=\"homeGrid__desc\">\n                        <p>").concat(data.description, "</p>\n                    </div>\n                </div>\n            </div>");
    return markup;
  }

  var renderData = function renderData(data) {
    for (var i = 0; i < data.length; i++) {
      var cur = data[i];
      els.homeGrid.insertAdjacentHTML('beforeend', gridItemTemplate(cur));
    }
  };

  var getAndRenderData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
      var response, responseJSON, data;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch(url);

            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();

            case 6:
              responseJSON = _context.sent;
              data = responseJSON.data;
              renderData(data);
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }));

    return function getAndRenderData(_x) {
      return _ref.apply(this, arguments);
    };
  }(); // -- INIT -- //


  getAndRenderData(listings);
})();