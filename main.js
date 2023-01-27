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




//auto load homepage
(0,_pages_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])()

const btns = document.querySelectorAll('button')

//add eventListener to all buttons
btns.forEach(btn => {
    btn.addEventListener('click', event => {
        const currentContent = document.querySelector('#content > div')
        //check what content is already loaded by comparing btn id with 
        //content class. If they are different then load the new content
        if (event.target.id != currentContent.classList.value) {
            //remove current content
            currentContent.remove()
            addContent(event.target.id)
        }
    })
})

//adds content to the webpage
function addContent(id) {
    switch(id) {
        case 'title-div': ;(0,_pages_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])();
        break;
        case 'menu-box': (0,_pages_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
        break;
        case 'about-box': (0,_pages_about__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzVDZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdEJlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7VUN0RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTndDO0FBQ0Y7QUFDRjs7QUFFcEM7QUFDQSwyREFBUTs7QUFFUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDREQUFRO0FBQ2xDO0FBQ0EseUJBQXlCLHVEQUFRO0FBQ2pDO0FBQ0EsMEJBQTBCLHdEQUFTO0FBQ25DO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLXByb2plY3QvLi9zcmMvcGFnZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4tcHJvamVjdC8uL3NyYy9wYWdlcy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi1wcm9qZWN0Ly4vc3JjL3BhZ2VzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4tcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4tcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLXByb2plY3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJvdXRQYWdlKCkge1xuICAgIC8vY3JlYXRlIGJveCB0aGF0IGNvbnRhaW5zIHRoZSBjb250ZW50cyBvZiBhYm91dCBwYWdlXG4gICAgY29uc3QgYWJvdXRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGFib3V0Qm94LmNsYXNzTGlzdC5hZGQoJ2Fib3V0LWJveCcpXG5cbiAgICAvL2NyZWF0ZSBjb250YWluZXIgYW5kIGNvbnRlbnRzIG9mIEFib3V0IFVzIHNlY3Rpb25cbiAgICBjb25zdCBhYm91dFVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhYm91dFVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGNvbnN0IHBhcmExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgY29uc3QgcGFyYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcblxuICAgIGFib3V0VXMudGV4dENvbnRlbnQgPSBcIkFib3V0IFVzXCJcbiAgICBwYXJhMS50ZXh0Q29udGVudCA9IFwiQSBiaXQgb2YgaGlzdG9yeS4gVGhlIGZvdW5kZXIgRnJhbmNlc2NvIFNpbWFsaSBncmV3IHVwIGluIGEgc21hbGwgdG93biBpbiBTcGFpbi5TcGFuaXNoIGZvb2Qgd2FzIGdyZWF0LCBidXQgcGl6emEgc2VkdWNlZCBGcmFuY2VzY28gYXdheSBmcm9tIHR5cGljYWwgU3BhbmlzaCBDdWlzaW5lLkFmdGVyIG1vdmluZyB0byBOZXcgWW9yayBpbiBoaXMgdGVlbnMsIEZyYW5jZXNjbyB3YXMgZ2l2ZW4gdGhlIG9wcG9ydHVuaXR5IHRvIHdvcmsgb24gaGlzIHNraWxscy4gSW4gMjAwNyBhdCB0aGUgYWdlIG9mIDMyLCBoZSBvcGVuZWQgdGhpcyByZXN0YXVyYW50LlwiXG4gICAgcGFyYTIudGV4dENvbnRlbnQgPSBcIlRoZSBmb29kIHdlIG1ha2UgaXMgZmlsbGVkIHdpdGggbG92ZSBhbmQgcGFzc2lvbiBmcm9tIG91dCB0ZWFtLiBUaGUgdGVhbSB3b3JrcyBoYXJkIHRvIG1ha2UgdGhlIGJlc3QgcGl6emEgaW4gTmV3IFlvcmsuIFVubGlrZSBtYW55IG90aGVyIHBpenphIHJlc3RhdXJhbnRzLCB3ZSBvZmZlciBkaW5lIGluIHdpdGggc29tZSBvZiB0aGUgbW9zdCBjb21mb3J0YWJsZSBmdXJuaXR1cmUuIFdlIGFyZSBwcm91ZCBvZiB0aGUgZGVzaWduIG9mIG91ciByZXN0YXVyYW50YW5kIHdlIG1ha2Ugb3VyIGd1ZXN0cyBhcyBjb21mb3J0YWJsZSBhcyBwb3NzaWJsZS5cIlxuXG4gICAgYWJvdXRVc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dFVzKVxuICAgIGFib3V0VXNDb250YWluZXIuYXBwZW5kQ2hpbGQocGFyYTEpXG4gICAgYWJvdXRVc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJhMilcblxuICAgIC8vY3JlYXRlIGNvbnRhaW5lciBhbmQgY29udGVudHMgb2YgQ29udGFjdCBzZWN0aW9uXG4gICAgY29uc3QgY29udGFjdFVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGNvbnN0IHNtYWxsUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGNvbnN0IG51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuXG4gICAgY29udGFjdC50ZXh0Q29udGVudCA9IFwiR2V0IEluIFRvdWNoXCJcbiAgICBzbWFsbFBhcmEudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgdXMgZm9yIGRlbGl2ZXJ5LCByZXNlcnZhdGlvbnMgb3IgYW55IGdlbmVyYWwgaW5mby5cIlxuICAgIG51bWJlci50ZXh0Q29udGVudCA9IFwiKDEyMykgNDU2LTc4OTBcIlxuICAgIGVtYWlsLnRleHRDb250ZW50ID0gXCJsYXBpenplcmlhQGxhcGl6emVyaWEuY29tXCJcbiAgICBhZGRyZXNzLnRleHRDb250ZW50ID0gXCI3MzIgV2VzdCBSb2FkLCBOZXcgWW9ya1wiXG5cbiAgICBjb250YWN0VXNDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdClcbiAgICBjb250YWN0VXNDb250YWluZXIuYXBwZW5kQ2hpbGQoc21hbGxQYXJhKVxuICAgIGNvbnRhY3RVc0NvbnRhaW5lci5hcHBlbmRDaGlsZChudW1iZXIpXG4gICAgY29udGFjdFVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtYWlsKVxuICAgIGNvbnRhY3RVc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRyZXNzKVxuXG4gICAgLy9BcHBlbmQgdGhlIHR3byBjb250YWluZXJzIHRvIHRoZSBtYWluIGNvbnRhaW5lciBhbmQgYWRkIHRvIERPTVxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG4gICAgYWJvdXRCb3guYXBwZW5kQ2hpbGQoYWJvdXRVc0NvbnRhaW5lcilcbiAgICBhYm91dEJveC5hcHBlbmRDaGlsZChjb250YWN0VXNDb250YWluZXIpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dEJveClcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lcGFnZSgpIHtcbiAgICAvL2NyZWF0ZSB0aGUgZGl2IHRoYXQgaG9sZHMgYWxsIHRoZSBtYWluIHRleHRcbiAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgndGl0bGUtZGl2JylcblxuICAgIC8vY3JlYXRlIHRoZSBoZWFkZXJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiTGEgUGl6emVyaWFcIlxuXG4gICAgLy9jcmVhdGUgdGhlIHR3byBwYXJhZ3JhcGhzIGJlbG93XG4gICAgY29uc3QgcGFyYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwYXJhMS50ZXh0Q29udGVudCA9IFwiTGEgZmlubmVzdCBwaXp6YSBpbiB0aGUgd29ybGQhIFVuaXF1ZSBmbGF2b3JzIG9ubHkgZm91bmQgaGVyZSFcIlxuICAgIGNvbnN0IHBhcmEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcGFyYTIudGV4dENvbnRlbnQgPSBcIldlIHN0cml2ZSBmb3IgdGhlIGJlc3QgZm9vZCBhbmQgdGhlIGJlc3QgY3VzdG9tZXIgc2VydmljZS4gQ2hlZnMgZnJvbSBhbGwgb3ZlciB0aGUgd29ybGQgZ2l2ZSB1cyA0LjUgc3RhcnMhIENvbWUgdmlzaXQgc29tZXRpbWUgdG8gdHJ5IG91dCBvdXIgd29ybGQgZmFtb3VzIHBpenphLlwiXG5cbiAgICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICB0aXRsZURpdi5hcHBlbmRDaGlsZChwYXJhMSlcbiAgICB0aXRsZURpdi5hcHBlbmRDaGlsZChwYXJhMilcblxuICAgIC8vIHNlbGVjdCBjb250ZW50IGRpdiB0byBhcHBlbmQgbmV3IGVsZW1lbnRzXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlRGl2KVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVQYWdlKCkge1xuICAgIC8vY3JlYXRlIHRoZSBib3ggdGhhdCBjb250YWlucyB0aGUgbWVudSBpdGVtc1xuICAgIGNvbnN0IG1lbnVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lbnVCb3guY2xhc3NMaXN0LmFkZCgnbWVudS1ib3gnKVxuXG4gICAgLy9hcHBlbmQgdGhlIGNyZWF0ZWQgbm9kZSB0byB0aGUgRE9NXG4gICAgbWVudUJveC5hcHBlbmRDaGlsZChjcmVhdGVNZW51Q2FyZCgnUGVwcGVyb25pIFBpenphJyxcbiAgICAgJyQxNycsIFxuICAgICAnU2F2b3IgdGhlIGJvbGQgZmxhdm9ycyBvZiBvdXIgY2xhc3NpYyBwZXBwZXJvbmkgcGl6emEsIHdpdGggYSBjcmlzcHkgY3J1c3QsIHJpY2ggdG9tYXRvIHNhdWNlLCBhbmQgbWVsdGVkIG1venphcmVsbGEgY2hlZXNlLCB0b3BwZWQgd2l0aCBwcmVtaXVtIHBlcHBlcm9uaSBzbGljZXMuJylcbiAgICApXG5cbiAgICBtZW51Qm94LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVDYXJkKCdIYXdhaWlhbiBQaXp6YScsXG4gICAgJyQyMCcsXG4gICAgJ0V4cGVyaWVuY2UgYSB0YXN0ZSBvZiBwYXJhZGlzZSB3aXRoIG91ciBIYXdhaWlhbiBwaXp6YSwgZmVhdHVyaW5nIGEgY3Jpc3B5IGNydXN0LCB0b21hdG8gc2F1Y2UsIG1lbHRlZCBtb3p6YXJlbGxhIGNoZWVzZSBhbmQgYSB0cm9waWNhbCBtZWRsZXkgb2YgcGluZWFwcGxlIGFuZCBoYW0uJylcbiAgICApXG5cbiAgICBtZW51Qm94LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVDYXJkKCdNYXJnaGVyaXRhIFBpenphJyxcbiAgICAnJDIwJyxcbiAgICAnQSB0cnVlIGNsYXNzaWMsIG91ciBNYXJnaGVyaXRhIHBpenphIGlzIGEgY2VsZWJyYXRpb24gb2Ygc2ltcGxpY2l0eSwgZmVhdHVyaW5nIGEgd29vZC1maXJlZCBjcnVzdCwgZnJlc2ggdG9tYXRvIHNhdWNlLCBtb3p6YXJlbGxhIGNoZWVzZSwgYmFzaWwgbGVhdmVzLCBhbmQgYSBkcml6emxlIG9mIG9saXZlIG9pbC4nKVxuICAgIClcblxuICAgIG1lbnVCb3guYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUNhcmQoJ01lYXQgTG92ZXJzIFBpenphJyxcbiAgICAnJDIzJyxcbiAgICBcIlNhdGlzZnkgeW91ciBjYXJuaXZvcm91cyBjcmF2aW5ncyB3aXRoIG91ciBtZWF0IGxvdmVyJ3MgcGl6emEsIGZlYXR1cmluZyBhIGNyaXNweSBjcnVzdCwgcmljaCB0b21hdG8gc2F1Y2UsIG1lbHRlZCBtb3p6YXJlbGxhIGNoZWVzZSwgYW5kIGEgZ2VuZXJvdXMgdG9wcGluZyBvZiBwZXBwZXJvbmksIHNhdXNhZ2UsIGJhY29uIGFuZCBoYW0uXCIpXG4gICAgKVxuXG4gICAgbWVudUJveC5hcHBlbmRDaGlsZChjcmVhdGVNZW51Q2FyZCgnVmVnZXRhcmlhbiBQaXp6YScsXG4gICAgJyQyMycsXG4gICAgXCJPdXIgdmVnZXRhcmlhbiBwaXp6YSBpcyBhIHN5bXBob255IG9mIGZsYXZvcnMsIHdpdGggYSBjcmlzcHkgY3J1c3QsIHJpY2ggdG9tYXRvIHNhdWNlLCBtZWx0ZWQgbW96emFyZWxsYSBjaGVlc2UgYW5kIGEgbWVkbGV5IG9mIGZyZXNoIHZlZ2V0YWJsZXMsIGluY2x1ZGluZyBtdXNocm9vbXMsIGJlbGwgcGVwcGVycywgb25pb25zLCBhbmQgb2xpdmVzLlwiKVxuICAgIClcblxuICAgIG1lbnVCb3guYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUNhcmQoJ0NoZWVzZSBQaXp6YScsXG4gICAgJyQxNScsXG4gICAgXCJPdXIgZ291cm1ldCBjaGVlc2UgcGl6emEgYm9hc3RzIGEgZGVsaWNhdGUgY3J1c3QsIGZyZXNoIHRvbWF0byBzYXVjZSwgYW5kIHByZW1pdW0gbW96emFyZWxsYSBjaGVlc2UgbWVsdGVkIHRvIHBlcmZlY3Rpb24uXCIpXG4gICAgKVxuXG4gICAgLy9hZGQgdGhlIGVsZW1lbnRzIHRvIHRoZSBET01cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudUJveClcblxuXG59XG5cbi8vdGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgZG9tIGVsZW1lbnRzIHRvIGZpbGwgYSBtZW51IGNhcmRcbi8vYXBwZW5kcyB0aGUgRE9NIGVsZW1lbnRzIHRvIHRoZSBtZW51IGNhcmQgaW4gdGhlIGZ1bmN0aW9uXG5mdW5jdGlvbiBjcmVhdGVNZW51Q2FyZCh0aXRsZSwgcHJpY2UsIHRleHQpIHtcbiAgICAvL2NyZWF0ZSB0aGUgZGl2IHRvIGNvbnRhaW4gdGhlIGNvbnRlbnRzXG4gICAgLy90aGlzIGRpdiBpcyBhIG1lbnUtY2FyZFxuICAgIGNvbnN0IG1lbnVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtZW51Q2FyZC5jbGFzc0xpc3QuYWRkKCdtZW51LWNhcmQnKVxuXG4gICAgLy9jcmVhdGUgdGhlIGhlYWRlciBmb3IgZWFjaCBtZW51IGNhcmRcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gdGl0bGVcblxuICAgIC8vY3JlYXRlIHRoZSBkZXNjcmlwdGlvbiBvZiBlYWNoIG1lbnUgaXRlbVxuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBpbmZvLnRleHRDb250ZW50ID0gdGV4dFxuXG4gICAgLy9hZGQgdGhlIHByaWNlIGZvciBlYWNoIG1lbnUgY2FyZFxuICAgIGNvbnN0IGNvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBjb3N0LmlkID0gXCJwcmljZVwiXG4gICAgY29zdC50ZXh0Q29udGVudCA9IHByaWNlXG4gICAgXG4gICAgLy9hcHBlbmQgYWxsIHRoZSB0ZXh0IGNvbnRlbnQgdG8gdGhlIG1lbnUgY2FyZFxuICAgIG1lbnVDYXJkLmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICBtZW51Q2FyZC5hcHBlbmRDaGlsZChpbmZvKVxuICAgIG1lbnVDYXJkLmFwcGVuZENoaWxkKGNvc3QpXG5cbiAgICByZXR1cm4gbWVudUNhcmRcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBob21lcGFnZSBmcm9tIFwiLi9wYWdlcy9ob21lcGFnZVwiO1xuaW1wb3J0IGFib3V0UGFnZSBmcm9tIFwiLi9wYWdlcy9hYm91dFwiO1xuaW1wb3J0IG1lbnVQYWdlIGZyb20gXCIuL3BhZ2VzL21lbnVcIjtcblxuLy9hdXRvIGxvYWQgaG9tZXBhZ2VcbmhvbWVwYWdlKClcblxuY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpXG5cbi8vYWRkIGV2ZW50TGlzdGVuZXIgdG8gYWxsIGJ1dHRvbnNcbmJ0bnMuZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCA+IGRpdicpXG4gICAgICAgIC8vY2hlY2sgd2hhdCBjb250ZW50IGlzIGFscmVhZHkgbG9hZGVkIGJ5IGNvbXBhcmluZyBidG4gaWQgd2l0aCBcbiAgICAgICAgLy9jb250ZW50IGNsYXNzLiBJZiB0aGV5IGFyZSBkaWZmZXJlbnQgdGhlbiBsb2FkIHRoZSBuZXcgY29udGVudFxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmlkICE9IGN1cnJlbnRDb250ZW50LmNsYXNzTGlzdC52YWx1ZSkge1xuICAgICAgICAgICAgLy9yZW1vdmUgY3VycmVudCBjb250ZW50XG4gICAgICAgICAgICBjdXJyZW50Q29udGVudC5yZW1vdmUoKVxuICAgICAgICAgICAgYWRkQ29udGVudChldmVudC50YXJnZXQuaWQpXG4gICAgICAgIH1cbiAgICB9KVxufSlcblxuLy9hZGRzIGNvbnRlbnQgdG8gdGhlIHdlYnBhZ2VcbmZ1bmN0aW9uIGFkZENvbnRlbnQoaWQpIHtcbiAgICBzd2l0Y2goaWQpIHtcbiAgICAgICAgY2FzZSAndGl0bGUtZGl2JzogaG9tZXBhZ2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21lbnUtYm94JzogbWVudVBhZ2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2Fib3V0LWJveCc6IGFib3V0UGFnZSgpO1xuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=