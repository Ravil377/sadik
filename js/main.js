/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/components.js":
/*!**************************************!*\
  !*** ./src/components/components.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal/modal */ "./src/components/modal/modal.js");
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modal_modal__WEBPACK_IMPORTED_MODULE_0__);
// Form
// import './form/form'
// Hamburger
// import './hamburger/hamburger'
 // import './schedule/schedule'
// import './overlay/overlay'

/***/ }),

/***/ "./src/components/modal/modal.js":
/*!***************************************!*\
  !*** ./src/components/modal/modal.js ***!
  \***************************************/
/***/ (() => {

var modalOpenBtns = document.querySelectorAll('[data-id="openmodal"]');
var modalCloseBtns = document.querySelectorAll('[data-id="closemodal"]');
var modal = document.querySelector('.modal-js');
var arrowLeft = modal.querySelector('.arrow-left-js');
var arrowRight = modal.querySelector('.arrow-right-js');
var imgModal = modal.querySelector('.img-js');
var currentImg;

var closeModal = function closeModal() {
  modal.classList.remove('modal_opened');
  modalCloseBtns.forEach(function (btn) {
    return btn.removeEventListener('click', closeModal);
  });
};

var checkKeyPress = function checkKeyPress(e) {
  if (e.code === "Escape") {
    closeModal();
  }
};

var checkPressOverlay = function checkPressOverlay(e) {
  if (e.target === modal) {
    closeModal();
  }
};

var replaceImage = function replaceImage(img) {
  imgModal.src = img.src;
  imgModal.alt = img.alt;
  currentImg = img;
};

var openModal = function openModal(e) {
  var img = e.target;
  modal.classList.add('modal_opened');
  modalCloseBtns.forEach(function (btn) {
    return btn.addEventListener('click', closeModal);
  });
  currentImg = img;
  replaceImage(img);
};

document.addEventListener('keydown', function (e) {
  return checkKeyPress(e);
});
modal && modal.addEventListener("click", function (e) {
  return checkPressOverlay(e);
});
modalCloseBtns.forEach(function (btn) {
  return btn.addEventListener('click', closeModal);
});
modalOpenBtns.forEach(function (btn) {
  return btn.addEventListener('click', function (e) {
    return openModal(e);
  });
});
arrowLeft && arrowLeft.addEventListener('click', function () {
  var stime;

  if (currentImg.previousElementSibling) {
    stime = clearTimeout();
    imgModal.classList.add('fadeInLeft');
    replaceImage(currentImg.previousElementSibling);
    stime = setTimeout(function () {
      imgModal.classList.remove('fadeInLeft');
    }, 500);
  }
});
arrowRight && arrowRight.addEventListener('click', function () {
  var stime;

  if (currentImg.nextElementSibling) {
    console.log(currentImg.nextElementSibling);
    stime = clearTimeout();
    imgModal.classList.add('fadeInRight');
    replaceImage(currentImg.nextElementSibling);
    stime = setTimeout(function () {
      imgModal.classList.remove('fadeInRight');
    }, 500);
  }
});

/***/ }),

/***/ "./src/vendor/go-top/go-top.js":
/*!*************************************!*\
  !*** ./src/vendor/go-top/go-top.js ***!
  \*************************************/
/***/ (() => {

function scrollTo(to) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 700;
  var element = document.scrollingElement || document.documentElement;
  var start = element.scrollTop;
  var change = to - start;
  var startDate = +new Date(); // t = current time
  // b = start value
  // c = change in value
  // d = duration

  var easeInOutQuad = function easeInOutQuad(t, b, c, d) {
    t /= d / 2;

    if (t < 1) {
      return c / 2 * t * t + b;
    }

    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  var animateScroll = function animateScroll() {
    var currentDate = +new Date();
    var currentTime = currentDate - startDate;
    element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration), 10);

    if (currentTime < duration) {
      requestAnimationFrame(animateScroll);
    } else {
      element.scrollTop = to;
    }
  };

  animateScroll();
}

document.addEventListener('DOMContentLoaded', function () {
  var $btn = document.querySelector('.go-top--js');

  if ($btn) {
    window.addEventListener('scroll', function () {
      if (pageYOffset > 100) {
        $btn.classList.add('is-show');
      } else {
        $btn.classList.remove('is-show');
      }
    }); // Click on $btn

    $btn.addEventListener('click', function (event) {
      event.preventDefault();
      scrollTo(0, 200);
    });
  }
});

/***/ }),

/***/ "./src/vendor/vendor.js":
/*!******************************!*\
  !*** ./src/vendor/vendor.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _go_top_go_top__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./go-top/go-top */ "./src/vendor/go-top/go-top.js");
/* harmony import */ var _go_top_go_top__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_go_top_go_top__WEBPACK_IMPORTED_MODULE_0__);
 // Magnific Popup
// import './magnific-popup/init'
// Owl Carousel
// import './owl-carousel/init'
// Simple ajax form
// import './simple-ajax-form-submit/jquery.simple-ajax-form'
// Fixed block
// import './fixedblock'

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./src/base/js/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../vendor/vendor */ "./src/vendor/vendor.js");
/* harmony import */ var _components_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/components */ "./src/components/components.js");
// Vendor
 // Components


if (document.querySelector('[id="map"]')) ymaps.ready(init);

function init() {
  var map = new ymaps.Map('map', {
    center: [55.77206977373309, 37.3915745],
    zoom: 16.5
  });
  var placemark = new ymaps.Placemark([55.77206977373309, 37.3915745], {
    hintContent: '',
    balloonContent: ''
  }, {
    iconLayout: 'default#image',
    iconImageSize: [38, 55],
    iconImageOffset: [-25, -40]
  });
  map.geoObjects.add(placemark);
}
})();

/******/ })()
;
//# sourceMappingURL=main.js.map