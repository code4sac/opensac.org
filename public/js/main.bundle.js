/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected character '@' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> @use 'home';\\n| @use 'navigation-bar';\\n| @import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');\");\n\n//# sourceURL=webpack://opensac.org/./styles/main.scss?");

/***/ }),

/***/ "./javascript/app.js":
/*!***************************!*\
  !*** ./javascript/app.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navigationBar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigationBar.js */ \"./javascript/navigationBar.js\");\n/* harmony import */ var _github_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./github.js */ \"./javascript/github.js\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/main.scss */ \"./styles/main.scss\");\n\n\n\n(0,_navigationBar_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://opensac.org/./javascript/app.js?");

/***/ }),

/***/ "./javascript/github.js":
/*!******************************!*\
  !*** ./javascript/github.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nwindow.onload = function () {\n  //saystuff(\"{{ project.title }}\");\n\n  function show_contributors($el, data) {\n    console.log(data.length);\n    $el.find('.contributors').html(data.length);\n  }\n  function show_issues($el, data) {\n    $el.find('.issues').html(data.length);\n  }\n\n  // $('.gh-data').each(function (idx, el) {\n  //     var $el = $(el);\n  //     var repo = $el.data().repo;\n  //\n  //\n  //     /* Fetch Contributors **/\n  //     var contrib_api = 'https://api.github.com/repos/Code4Sac/' + repo + '/contributors?access_token=651cc1d00dc6164548dbc04e83d0e4daaa00d8da';\n  //\n  //     $.getJSON(contrib_api).done(function(data) {\n  //         show_contributors($el, data);\n  //     });\n  //\n  //     /* Fetch open issues **/\n  //     var issues_api = 'https://api.github.com/repos/Code4Sac/' + repo + '/issues?access_token=651cc1d00dc6164548dbc04e83d0e4daaa00d8da';\n  //\n  //     $.getJSON(issues_api).done(function(data) {\n  //         show_issues($el, data);\n  //     });\n  //\n  // });\n};\n\n//# sourceURL=webpack://opensac.org/./javascript/github.js?");

/***/ }),

/***/ "./javascript/navigationBar.js":
/*!*************************************!*\
  !*** ./javascript/navigationBar.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar initNavigationBar = function initNavigationBar() {};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initNavigationBar);\n\n//# sourceURL=webpack://opensac.org/./javascript/navigationBar.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./javascript/app.js");
/******/ 	
/******/ })()
;