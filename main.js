/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ aboutPage)
/* harmony export */ });
function aboutPage() {
    //create box that contains the contents of about page
    const aboutBox = document.createElement('div')
    aboutBox.classList.add('about-box')

    //create container and contents of About Us section
    const aboutUsContainer = document.createElement('div')
    const aboutUs = document.createElement('h2')
    const para1 = document.createElement('p')
    const para2 = document.createElement('p')

    aboutUs.textContent = "About Us"
    para1.textContent = "A bit of history. The founder Francesco Simali grew up in a small town in Spain.Spanish food was great, but pizza seduced Francesco away from typical Spanish Cuisine.After moving to New York in his teens, Francesco was given the opportunity to work on his skills. In 2007 at the age of 32, he opened this restaurant."
    para2.textContent = "The food we make is filled with love and passion from out team. The team works hard to make the best pizza in New York. Unlike many other pizza restaurants, we offer dine in with some of the most comfortable furniture. We are proud of the design of our restaurantand we make our guests as comfortable as possible."

    aboutUsContainer.appendChild(aboutUs)
    aboutUsContainer.appendChild(para1)
    aboutUsContainer.appendChild(para2)

    //create container and contents of Contact section
    const contactUsContainer = document.createElement('div')
    const contact = document.createElement('h2')
    const smallPara = document.createElement('p')
    const number = document.createElement('h3')
    const email = document.createElement('h3')
    const address = document.createElement('h3')

    contact.textContent = "Get In Touch"
    smallPara.textContent = "Contact us for delivery, reservations or any general info."
    number.textContent = "(123) 456-7890"
    email.textContent = "lapizzeria@lapizzeria.com"
    address.textContent = "732 West Road, New York"

    contactUsContainer.appendChild(contact)
    contactUsContainer.appendChild(smallPara)
    contactUsContainer.appendChild(number)
    contactUsContainer.appendChild(email)
    contactUsContainer.appendChild(address)

    //Append the two containers to the main container and add to DOM
    const content = document.querySelector('#content')
    aboutBox.appendChild(aboutUsContainer)
    aboutBox.appendChild(contactUsContainer)
    content.appendChild(aboutBox)
}

/***/ }),

/***/ "./src/pages/homepage.js":
/*!*******************************!*\
  !*** ./src/pages/homepage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ homepage)
/* harmony export */ });
function homepage() {
    //create the div that holds all the main text
    const titleDiv = document.createElement('div')
    titleDiv.classList.add('title-div')

    //create the header
    const title = document.createElement('h1')
    title.textContent = "La Pizzeria"

    //create the two paragraphs below
    const para1 = document.createElement('p')
    para1.textContent = "La finnest pizza in the world! Unique flavors only found here!"
    const para2 = document.createElement('p')
    para2.textContent = "We strive for the best food and the best customer service. Chefs from all over the world give us 4.5 stars! Come visit sometime to try out our world famous pizza."

    titleDiv.appendChild(title)
    titleDiv.appendChild(para1)
    titleDiv.appendChild(para2)

    // select content div to append new elements
    const content = document.querySelector('#content')
    content.appendChild(titleDiv)
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/homepage */ "./src/pages/homepage.js");
/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/about */ "./src/pages/about.js");



//homepage()
(0,_pages_about__WEBPACK_IMPORTED_MODULE_1__["default"])()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzVDZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ3RCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ053QztBQUNGOztBQUV0QztBQUNBLHdEQUFTLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi1wcm9qZWN0Ly4vc3JjL3BhZ2VzL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLXByb2plY3QvLi9zcmMvcGFnZXMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4tcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJvdXRQYWdlKCkge1xuICAgIC8vY3JlYXRlIGJveCB0aGF0IGNvbnRhaW5zIHRoZSBjb250ZW50cyBvZiBhYm91dCBwYWdlXG4gICAgY29uc3QgYWJvdXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFib3V0Qm94LmNsYXNzTGlzdC5hZGQoJ2Fib3V0LWJveCcpXG5cbiAgICAvL2NyZWF0ZSBjb250YWluZXIgYW5kIGNvbnRlbnRzIG9mIEFib3V0IFVzIHNlY3Rpb25cbiAgICBjb25zdCBhYm91dFVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhYm91dFVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGNvbnN0IHBhcmExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgY29uc3QgcGFyYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcblxuICAgIGFib3V0VXMudGV4dENvbnRlbnQgPSBcIkFib3V0IFVzXCJcbiAgICBwYXJhMS50ZXh0Q29udGVudCA9IFwiQSBiaXQgb2YgaGlzdG9yeS4gVGhlIGZvdW5kZXIgRnJhbmNlc2NvIFNpbWFsaSBncmV3IHVwIGluIGEgc21hbGwgdG93biBpbiBTcGFpbi5TcGFuaXNoIGZvb2Qgd2FzIGdyZWF0LCBidXQgcGl6emEgc2VkdWNlZCBGcmFuY2VzY28gYXdheSBmcm9tIHR5cGljYWwgU3BhbmlzaCBDdWlzaW5lLkFmdGVyIG1vdmluZyB0byBOZXcgWW9yayBpbiBoaXMgdGVlbnMsIEZyYW5jZXNjbyB3YXMgZ2l2ZW4gdGhlIG9wcG9ydHVuaXR5IHRvIHdvcmsgb24gaGlzIHNraWxscy4gSW4gMjAwNyBhdCB0aGUgYWdlIG9mIDMyLCBoZSBvcGVuZWQgdGhpcyByZXN0YXVyYW50LlwiXG4gICAgcGFyYTIudGV4dENvbnRlbnQgPSBcIlRoZSBmb29kIHdlIG1ha2UgaXMgZmlsbGVkIHdpdGggbG92ZSBhbmQgcGFzc2lvbiBmcm9tIG91dCB0ZWFtLiBUaGUgdGVhbSB3b3JrcyBoYXJkIHRvIG1ha2UgdGhlIGJlc3QgcGl6emEgaW4gTmV3IFlvcmsuIFVubGlrZSBtYW55IG90aGVyIHBpenphIHJlc3RhdXJhbnRzLCB3ZSBvZmZlciBkaW5lIGluIHdpdGggc29tZSBvZiB0aGUgbW9zdCBjb21mb3J0YWJsZSBmdXJuaXR1cmUuIFdlIGFyZSBwcm91ZCBvZiB0aGUgZGVzaWduIG9mIG91ciByZXN0YXVyYW50YW5kIHdlIG1ha2Ugb3VyIGd1ZXN0cyBhcyBjb21mb3J0YWJsZSBhcyBwb3NzaWJsZS5cIlxuXG4gICAgYWJvdXRVc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dFVzKVxuICAgIGFib3V0VXNDb250YWluZXIuYXBwZW5kQ2hpbGQocGFyYTEpXG4gICAgYWJvdXRVc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJhMilcblxuICAgIC8vY3JlYXRlIGNvbnRhaW5lciBhbmQgY29udGVudHMgb2YgQ29udGFjdCBzZWN0aW9uXG4gICAgY29uc3QgY29udGFjdFVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGNvbnN0IHNtYWxsUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGNvbnN0IG51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuXG4gICAgY29udGFjdC50ZXh0Q29udGVudCA9IFwiR2V0IEluIFRvdWNoXCJcbiAgICBzbWFsbFBhcmEudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgdXMgZm9yIGRlbGl2ZXJ5LCByZXNlcnZhdGlvbnMgb3IgYW55IGdlbmVyYWwgaW5mby5cIlxuICAgIG51bWJlci50ZXh0Q29udGVudCA9IFwiKDEyMykgNDU2LTc4OTBcIlxuICAgIGVtYWlsLnRleHRDb250ZW50ID0gXCJsYXBpenplcmlhQGxhcGl6emVyaWEuY29tXCJcbiAgICBhZGRyZXNzLnRleHRDb250ZW50ID0gXCI3MzIgV2VzdCBSb2FkLCBOZXcgWW9ya1wiXG5cbiAgICBjb250YWN0VXNDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdClcbiAgICBjb250YWN0VXNDb250YWluZXIuYXBwZW5kQ2hpbGQoc21hbGxQYXJhKVxuICAgIGNvbnRhY3RVc0NvbnRhaW5lci5hcHBlbmRDaGlsZChudW1iZXIpXG4gICAgY29udGFjdFVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtYWlsKVxuICAgIGNvbnRhY3RVc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRyZXNzKVxuXG4gICAgLy9BcHBlbmQgdGhlIHR3byBjb250YWluZXJzIHRvIHRoZSBtYWluIGNvbnRhaW5lciBhbmQgYWRkIHRvIERPTVxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG4gICAgYWJvdXRCb3guYXBwZW5kQ2hpbGQoYWJvdXRVc0NvbnRhaW5lcilcbiAgICBhYm91dEJveC5hcHBlbmRDaGlsZChjb250YWN0VXNDb250YWluZXIpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dEJveClcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lcGFnZSgpIHtcbiAgICAvL2NyZWF0ZSB0aGUgZGl2IHRoYXQgaG9sZHMgYWxsIHRoZSBtYWluIHRleHRcbiAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgndGl0bGUtZGl2JylcblxuICAgIC8vY3JlYXRlIHRoZSBoZWFkZXJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiTGEgUGl6emVyaWFcIlxuXG4gICAgLy9jcmVhdGUgdGhlIHR3byBwYXJhZ3JhcGhzIGJlbG93XG4gICAgY29uc3QgcGFyYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwYXJhMS50ZXh0Q29udGVudCA9IFwiTGEgZmlubmVzdCBwaXp6YSBpbiB0aGUgd29ybGQhIFVuaXF1ZSBmbGF2b3JzIG9ubHkgZm91bmQgaGVyZSFcIlxuICAgIGNvbnN0IHBhcmEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcGFyYTIudGV4dENvbnRlbnQgPSBcIldlIHN0cml2ZSBmb3IgdGhlIGJlc3QgZm9vZCBhbmQgdGhlIGJlc3QgY3VzdG9tZXIgc2VydmljZS4gQ2hlZnMgZnJvbSBhbGwgb3ZlciB0aGUgd29ybGQgZ2l2ZSB1cyA0LjUgc3RhcnMhIENvbWUgdmlzaXQgc29tZXRpbWUgdG8gdHJ5IG91dCBvdXIgd29ybGQgZmFtb3VzIHBpenphLlwiXG5cbiAgICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICB0aXRsZURpdi5hcHBlbmRDaGlsZChwYXJhMSlcbiAgICB0aXRsZURpdi5hcHBlbmRDaGlsZChwYXJhMilcblxuICAgIC8vIHNlbGVjdCBjb250ZW50IGRpdiB0byBhcHBlbmQgbmV3IGVsZW1lbnRzXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlRGl2KVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGhvbWVwYWdlIGZyb20gXCIuL3BhZ2VzL2hvbWVwYWdlXCI7XG5pbXBvcnQgYWJvdXRQYWdlIGZyb20gXCIuL3BhZ2VzL2Fib3V0XCI7XG5cbi8vaG9tZXBhZ2UoKVxuYWJvdXRQYWdlKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=