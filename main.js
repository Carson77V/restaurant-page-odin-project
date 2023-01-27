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

/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuPage)
/* harmony export */ });
function menuPage() {
    //create the box that contains the menu items
    const menuBox = document.createElement('div')
    menuBox.classList.add('menu-box')

    //append the created node to the DOM
    menuBox.appendChild(createMenuCard('Pepperoni Pizza',
     '$17', 
     'Savor the bold flavors of our classic pepperoni pizza, with a crispy crust, rich tomato sauce, and melted mozzarella cheese, topped with premium pepperoni slices.')
    )

    menuBox.appendChild(createMenuCard('Hawaiian Pizza',
    '$20',
    'Experience a taste of paradise with our Hawaiian pizza, featuring a crispy crust, tomato sauce, melted mozzarella cheese and a tropical medley of pineapple and ham.')
    )

    menuBox.appendChild(createMenuCard('Margherita Pizza',
    '$20',
    'A true classic, our Margherita pizza is a celebration of simplicity, featuring a wood-fired crust, fresh tomato sauce, mozzarella cheese, basil leaves, and a drizzle of olive oil.')
    )

    menuBox.appendChild(createMenuCard('Meat Lovers Pizza',
    '$23',
    "Satisfy your carnivorous cravings with our meat lover's pizza, featuring a crispy crust, rich tomato sauce, melted mozzarella cheese, and a generous topping of pepperoni, sausage, bacon and ham.")
    )

    menuBox.appendChild(createMenuCard('Vegetarian Pizza',
    '$23',
    "Our vegetarian pizza is a symphony of flavors, with a crispy crust, rich tomato sauce, melted mozzarella cheese and a medley of fresh vegetables, including mushrooms, bell peppers, onions, and olives.")
    )

    menuBox.appendChild(createMenuCard('Cheese Pizza',
    '$15',
    "Our gourmet cheese pizza boasts a delicate crust, fresh tomato sauce, and premium mozzarella cheese melted to perfection.")
    )

    //add the elements to the DOM
    const content = document.querySelector('#content')
    content.appendChild(menuBox)


}

//this function is used to create the dom elements to fill a menu card
//appends the DOM elements to the menu card in the function
function createMenuCard(title, price, text) {
    //create the div to contain the contents
    //this div is a menu-card
    const menuCard = document.createElement('div')
    menuCard.classList.add('menu-card')

    //create the header for each menu card
    const header = document.createElement('h2')
    header.textContent = title

    //create the description of each menu item
    const info = document.createElement('p')
    info.textContent = text

    //add the price for each menu card
    const cost = document.createElement('p')
    cost.id = "price"
    cost.textContent = price
    
    //append all the text content to the menu card
    menuCard.appendChild(header)
    menuCard.appendChild(info)
    menuCard.appendChild(cost)

    return menuCard
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
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menu */ "./src/pages/menu.js");




//homepage()
//aboutPage()
(0,_pages_menu__WEBPACK_IMPORTED_MODULE_2__["default"])()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzVDZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdEJlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7VUN0RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTndDO0FBQ0Y7QUFDRjs7QUFFcEM7QUFDQTtBQUNBLHVEQUFRLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi1wcm9qZWN0Ly4vc3JjL3BhZ2VzL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLXByb2plY3QvLi9zcmMvcGFnZXMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4tcHJvamVjdC8uL3NyYy9wYWdlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFib3V0UGFnZSgpIHtcbiAgICAvL2NyZWF0ZSBib3ggdGhhdCBjb250YWlucyB0aGUgY29udGVudHMgb2YgYWJvdXQgcGFnZVxuICAgIGNvbnN0IGFib3V0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBhYm91dEJveC5jbGFzc0xpc3QuYWRkKCdhYm91dC1ib3gnKVxuXG4gICAgLy9jcmVhdGUgY29udGFpbmVyIGFuZCBjb250ZW50cyBvZiBBYm91dCBVcyBzZWN0aW9uXG4gICAgY29uc3QgYWJvdXRVc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWJvdXRVcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBjb25zdCBwYXJhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGNvbnN0IHBhcmEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG5cbiAgICBhYm91dFVzLnRleHRDb250ZW50ID0gXCJBYm91dCBVc1wiXG4gICAgcGFyYTEudGV4dENvbnRlbnQgPSBcIkEgYml0IG9mIGhpc3RvcnkuIFRoZSBmb3VuZGVyIEZyYW5jZXNjbyBTaW1hbGkgZ3JldyB1cCBpbiBhIHNtYWxsIHRvd24gaW4gU3BhaW4uU3BhbmlzaCBmb29kIHdhcyBncmVhdCwgYnV0IHBpenphIHNlZHVjZWQgRnJhbmNlc2NvIGF3YXkgZnJvbSB0eXBpY2FsIFNwYW5pc2ggQ3Vpc2luZS5BZnRlciBtb3ZpbmcgdG8gTmV3IFlvcmsgaW4gaGlzIHRlZW5zLCBGcmFuY2VzY28gd2FzIGdpdmVuIHRoZSBvcHBvcnR1bml0eSB0byB3b3JrIG9uIGhpcyBza2lsbHMuIEluIDIwMDcgYXQgdGhlIGFnZSBvZiAzMiwgaGUgb3BlbmVkIHRoaXMgcmVzdGF1cmFudC5cIlxuICAgIHBhcmEyLnRleHRDb250ZW50ID0gXCJUaGUgZm9vZCB3ZSBtYWtlIGlzIGZpbGxlZCB3aXRoIGxvdmUgYW5kIHBhc3Npb24gZnJvbSBvdXQgdGVhbS4gVGhlIHRlYW0gd29ya3MgaGFyZCB0byBtYWtlIHRoZSBiZXN0IHBpenphIGluIE5ldyBZb3JrLiBVbmxpa2UgbWFueSBvdGhlciBwaXp6YSByZXN0YXVyYW50cywgd2Ugb2ZmZXIgZGluZSBpbiB3aXRoIHNvbWUgb2YgdGhlIG1vc3QgY29tZm9ydGFibGUgZnVybml0dXJlLiBXZSBhcmUgcHJvdWQgb2YgdGhlIGRlc2lnbiBvZiBvdXIgcmVzdGF1cmFudGFuZCB3ZSBtYWtlIG91ciBndWVzdHMgYXMgY29tZm9ydGFibGUgYXMgcG9zc2libGUuXCJcblxuICAgIGFib3V0VXNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRVcylcbiAgICBhYm91dFVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhcmExKVxuICAgIGFib3V0VXNDb250YWluZXIuYXBwZW5kQ2hpbGQocGFyYTIpXG5cbiAgICAvL2NyZWF0ZSBjb250YWluZXIgYW5kIGNvbnRlbnRzIG9mIENvbnRhY3Qgc2VjdGlvblxuICAgIGNvbnN0IGNvbnRhY3RVc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBjb25zdCBzbWFsbFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBjb25zdCBudW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcblxuICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkdldCBJbiBUb3VjaFwiXG4gICAgc21hbGxQYXJhLnRleHRDb250ZW50ID0gXCJDb250YWN0IHVzIGZvciBkZWxpdmVyeSwgcmVzZXJ2YXRpb25zIG9yIGFueSBnZW5lcmFsIGluZm8uXCJcbiAgICBudW1iZXIudGV4dENvbnRlbnQgPSBcIigxMjMpIDQ1Ni03ODkwXCJcbiAgICBlbWFpbC50ZXh0Q29udGVudCA9IFwibGFwaXp6ZXJpYUBsYXBpenplcmlhLmNvbVwiXG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiNzMyIFdlc3QgUm9hZCwgTmV3IFlvcmtcIlxuXG4gICAgY29udGFjdFVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3QpXG4gICAgY29udGFjdFVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHNtYWxsUGFyYSlcbiAgICBjb250YWN0VXNDb250YWluZXIuYXBwZW5kQ2hpbGQobnVtYmVyKVxuICAgIGNvbnRhY3RVc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbWFpbClcbiAgICBjb250YWN0VXNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkcmVzcylcblxuICAgIC8vQXBwZW5kIHRoZSB0d28gY29udGFpbmVycyB0byB0aGUgbWFpbiBjb250YWluZXIgYW5kIGFkZCB0byBET01cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuICAgIGFib3V0Qm94LmFwcGVuZENoaWxkKGFib3V0VXNDb250YWluZXIpXG4gICAgYWJvdXRCb3guYXBwZW5kQ2hpbGQoY29udGFjdFVzQ29udGFpbmVyKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRCb3gpXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9tZXBhZ2UoKSB7XG4gICAgLy9jcmVhdGUgdGhlIGRpdiB0aGF0IGhvbGRzIGFsbCB0aGUgbWFpbiB0ZXh0XG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ3RpdGxlLWRpdicpXG5cbiAgICAvL2NyZWF0ZSB0aGUgaGVhZGVyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkxhIFBpenplcmlhXCJcblxuICAgIC8vY3JlYXRlIHRoZSB0d28gcGFyYWdyYXBocyBiZWxvd1xuICAgIGNvbnN0IHBhcmExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcGFyYTEudGV4dENvbnRlbnQgPSBcIkxhIGZpbm5lc3QgcGl6emEgaW4gdGhlIHdvcmxkISBVbmlxdWUgZmxhdm9ycyBvbmx5IGZvdW5kIGhlcmUhXCJcbiAgICBjb25zdCBwYXJhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHBhcmEyLnRleHRDb250ZW50ID0gXCJXZSBzdHJpdmUgZm9yIHRoZSBiZXN0IGZvb2QgYW5kIHRoZSBiZXN0IGN1c3RvbWVyIHNlcnZpY2UuIENoZWZzIGZyb20gYWxsIG92ZXIgdGhlIHdvcmxkIGdpdmUgdXMgNC41IHN0YXJzISBDb21lIHZpc2l0IHNvbWV0aW1lIHRvIHRyeSBvdXQgb3VyIHdvcmxkIGZhbW91cyBwaXp6YS5cIlxuXG4gICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQocGFyYTEpXG4gICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQocGFyYTIpXG5cbiAgICAvLyBzZWxlY3QgY29udGVudCBkaXYgdG8gYXBwZW5kIG5ldyBlbGVtZW50c1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZURpdilcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51UGFnZSgpIHtcbiAgICAvL2NyZWF0ZSB0aGUgYm94IHRoYXQgY29udGFpbnMgdGhlIG1lbnUgaXRlbXNcbiAgICBjb25zdCBtZW51Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZW51Qm94LmNsYXNzTGlzdC5hZGQoJ21lbnUtYm94JylcblxuICAgIC8vYXBwZW5kIHRoZSBjcmVhdGVkIG5vZGUgdG8gdGhlIERPTVxuICAgIG1lbnVCb3guYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUNhcmQoJ1BlcHBlcm9uaSBQaXp6YScsXG4gICAgICckMTcnLCBcbiAgICAgJ1Nhdm9yIHRoZSBib2xkIGZsYXZvcnMgb2Ygb3VyIGNsYXNzaWMgcGVwcGVyb25pIHBpenphLCB3aXRoIGEgY3Jpc3B5IGNydXN0LCByaWNoIHRvbWF0byBzYXVjZSwgYW5kIG1lbHRlZCBtb3p6YXJlbGxhIGNoZWVzZSwgdG9wcGVkIHdpdGggcHJlbWl1bSBwZXBwZXJvbmkgc2xpY2VzLicpXG4gICAgKVxuXG4gICAgbWVudUJveC5hcHBlbmRDaGlsZChjcmVhdGVNZW51Q2FyZCgnSGF3YWlpYW4gUGl6emEnLFxuICAgICckMjAnLFxuICAgICdFeHBlcmllbmNlIGEgdGFzdGUgb2YgcGFyYWRpc2Ugd2l0aCBvdXIgSGF3YWlpYW4gcGl6emEsIGZlYXR1cmluZyBhIGNyaXNweSBjcnVzdCwgdG9tYXRvIHNhdWNlLCBtZWx0ZWQgbW96emFyZWxsYSBjaGVlc2UgYW5kIGEgdHJvcGljYWwgbWVkbGV5IG9mIHBpbmVhcHBsZSBhbmQgaGFtLicpXG4gICAgKVxuXG4gICAgbWVudUJveC5hcHBlbmRDaGlsZChjcmVhdGVNZW51Q2FyZCgnTWFyZ2hlcml0YSBQaXp6YScsXG4gICAgJyQyMCcsXG4gICAgJ0EgdHJ1ZSBjbGFzc2ljLCBvdXIgTWFyZ2hlcml0YSBwaXp6YSBpcyBhIGNlbGVicmF0aW9uIG9mIHNpbXBsaWNpdHksIGZlYXR1cmluZyBhIHdvb2QtZmlyZWQgY3J1c3QsIGZyZXNoIHRvbWF0byBzYXVjZSwgbW96emFyZWxsYSBjaGVlc2UsIGJhc2lsIGxlYXZlcywgYW5kIGEgZHJpenpsZSBvZiBvbGl2ZSBvaWwuJylcbiAgICApXG5cbiAgICBtZW51Qm94LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVDYXJkKCdNZWF0IExvdmVycyBQaXp6YScsXG4gICAgJyQyMycsXG4gICAgXCJTYXRpc2Z5IHlvdXIgY2Fybml2b3JvdXMgY3JhdmluZ3Mgd2l0aCBvdXIgbWVhdCBsb3ZlcidzIHBpenphLCBmZWF0dXJpbmcgYSBjcmlzcHkgY3J1c3QsIHJpY2ggdG9tYXRvIHNhdWNlLCBtZWx0ZWQgbW96emFyZWxsYSBjaGVlc2UsIGFuZCBhIGdlbmVyb3VzIHRvcHBpbmcgb2YgcGVwcGVyb25pLCBzYXVzYWdlLCBiYWNvbiBhbmQgaGFtLlwiKVxuICAgIClcblxuICAgIG1lbnVCb3guYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUNhcmQoJ1ZlZ2V0YXJpYW4gUGl6emEnLFxuICAgICckMjMnLFxuICAgIFwiT3VyIHZlZ2V0YXJpYW4gcGl6emEgaXMgYSBzeW1waG9ueSBvZiBmbGF2b3JzLCB3aXRoIGEgY3Jpc3B5IGNydXN0LCByaWNoIHRvbWF0byBzYXVjZSwgbWVsdGVkIG1venphcmVsbGEgY2hlZXNlIGFuZCBhIG1lZGxleSBvZiBmcmVzaCB2ZWdldGFibGVzLCBpbmNsdWRpbmcgbXVzaHJvb21zLCBiZWxsIHBlcHBlcnMsIG9uaW9ucywgYW5kIG9saXZlcy5cIilcbiAgICApXG5cbiAgICBtZW51Qm94LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVDYXJkKCdDaGVlc2UgUGl6emEnLFxuICAgICckMTUnLFxuICAgIFwiT3VyIGdvdXJtZXQgY2hlZXNlIHBpenphIGJvYXN0cyBhIGRlbGljYXRlIGNydXN0LCBmcmVzaCB0b21hdG8gc2F1Y2UsIGFuZCBwcmVtaXVtIG1venphcmVsbGEgY2hlZXNlIG1lbHRlZCB0byBwZXJmZWN0aW9uLlwiKVxuICAgIClcblxuICAgIC8vYWRkIHRoZSBlbGVtZW50cyB0byB0aGUgRE9NXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVCb3gpXG5cblxufVxuXG4vL3RoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGRvbSBlbGVtZW50cyB0byBmaWxsIGEgbWVudSBjYXJkXG4vL2FwcGVuZHMgdGhlIERPTSBlbGVtZW50cyB0byB0aGUgbWVudSBjYXJkIGluIHRoZSBmdW5jdGlvblxuZnVuY3Rpb24gY3JlYXRlTWVudUNhcmQodGl0bGUsIHByaWNlLCB0ZXh0KSB7XG4gICAgLy9jcmVhdGUgdGhlIGRpdiB0byBjb250YWluIHRoZSBjb250ZW50c1xuICAgIC8vdGhpcyBkaXYgaXMgYSBtZW51LWNhcmRcbiAgICBjb25zdCBtZW51Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudUNhcmQuY2xhc3NMaXN0LmFkZCgnbWVudS1jYXJkJylcblxuICAgIC8vY3JlYXRlIHRoZSBoZWFkZXIgZm9yIGVhY2ggbWVudSBjYXJkXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHRpdGxlXG5cbiAgICAvL2NyZWF0ZSB0aGUgZGVzY3JpcHRpb24gb2YgZWFjaCBtZW51IGl0ZW1cbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgaW5mby50ZXh0Q29udGVudCA9IHRleHRcblxuICAgIC8vYWRkIHRoZSBwcmljZSBmb3IgZWFjaCBtZW51IGNhcmRcbiAgICBjb25zdCBjb3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgY29zdC5pZCA9IFwicHJpY2VcIlxuICAgIGNvc3QudGV4dENvbnRlbnQgPSBwcmljZVxuICAgIFxuICAgIC8vYXBwZW5kIGFsbCB0aGUgdGV4dCBjb250ZW50IHRvIHRoZSBtZW51IGNhcmRcbiAgICBtZW51Q2FyZC5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgbWVudUNhcmQuYXBwZW5kQ2hpbGQoaW5mbylcbiAgICBtZW51Q2FyZC5hcHBlbmRDaGlsZChjb3N0KVxuXG4gICAgcmV0dXJuIG1lbnVDYXJkXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaG9tZXBhZ2UgZnJvbSBcIi4vcGFnZXMvaG9tZXBhZ2VcIjtcbmltcG9ydCBhYm91dFBhZ2UgZnJvbSBcIi4vcGFnZXMvYWJvdXRcIjtcbmltcG9ydCBtZW51UGFnZSBmcm9tIFwiLi9wYWdlcy9tZW51XCI7XG5cbi8vaG9tZXBhZ2UoKVxuLy9hYm91dFBhZ2UoKVxubWVudVBhZ2UoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==