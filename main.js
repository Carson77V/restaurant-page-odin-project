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
        }
    })
})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzVDZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdEJlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7VUN0RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTndDO0FBQ0Y7QUFDRjs7QUFFcEM7QUFDQSwyREFBUTs7QUFFUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4tcHJvamVjdC8uL3NyYy9wYWdlcy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi1wcm9qZWN0Ly4vc3JjL3BhZ2VzL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLXByb2plY3QvLi9zcmMvcGFnZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4tcHJvamVjdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhYm91dFBhZ2UoKSB7XG4gICAgLy9jcmVhdGUgYm94IHRoYXQgY29udGFpbnMgdGhlIGNvbnRlbnRzIG9mIGFib3V0IHBhZ2VcbiAgICBjb25zdCBhYm91dEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgYWJvdXRCb3guY2xhc3NMaXN0LmFkZCgnYWJvdXQtYm94JylcblxuICAgIC8vY3JlYXRlIGNvbnRhaW5lciBhbmQgY29udGVudHMgb2YgQWJvdXQgVXMgc2VjdGlvblxuICAgIGNvbnN0IGFib3V0VXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGFib3V0VXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgY29uc3QgcGFyYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBjb25zdCBwYXJhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuXG4gICAgYWJvdXRVcy50ZXh0Q29udGVudCA9IFwiQWJvdXQgVXNcIlxuICAgIHBhcmExLnRleHRDb250ZW50ID0gXCJBIGJpdCBvZiBoaXN0b3J5LiBUaGUgZm91bmRlciBGcmFuY2VzY28gU2ltYWxpIGdyZXcgdXAgaW4gYSBzbWFsbCB0b3duIGluIFNwYWluLlNwYW5pc2ggZm9vZCB3YXMgZ3JlYXQsIGJ1dCBwaXp6YSBzZWR1Y2VkIEZyYW5jZXNjbyBhd2F5IGZyb20gdHlwaWNhbCBTcGFuaXNoIEN1aXNpbmUuQWZ0ZXIgbW92aW5nIHRvIE5ldyBZb3JrIGluIGhpcyB0ZWVucywgRnJhbmNlc2NvIHdhcyBnaXZlbiB0aGUgb3Bwb3J0dW5pdHkgdG8gd29yayBvbiBoaXMgc2tpbGxzLiBJbiAyMDA3IGF0IHRoZSBhZ2Ugb2YgMzIsIGhlIG9wZW5lZCB0aGlzIHJlc3RhdXJhbnQuXCJcbiAgICBwYXJhMi50ZXh0Q29udGVudCA9IFwiVGhlIGZvb2Qgd2UgbWFrZSBpcyBmaWxsZWQgd2l0aCBsb3ZlIGFuZCBwYXNzaW9uIGZyb20gb3V0IHRlYW0uIFRoZSB0ZWFtIHdvcmtzIGhhcmQgdG8gbWFrZSB0aGUgYmVzdCBwaXp6YSBpbiBOZXcgWW9yay4gVW5saWtlIG1hbnkgb3RoZXIgcGl6emEgcmVzdGF1cmFudHMsIHdlIG9mZmVyIGRpbmUgaW4gd2l0aCBzb21lIG9mIHRoZSBtb3N0IGNvbWZvcnRhYmxlIGZ1cm5pdHVyZS4gV2UgYXJlIHByb3VkIG9mIHRoZSBkZXNpZ24gb2Ygb3VyIHJlc3RhdXJhbnRhbmQgd2UgbWFrZSBvdXIgZ3Vlc3RzIGFzIGNvbWZvcnRhYmxlIGFzIHBvc3NpYmxlLlwiXG5cbiAgICBhYm91dFVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0VXMpXG4gICAgYWJvdXRVc0NvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJhMSlcbiAgICBhYm91dFVzQ29udGFpbmVyLmFwcGVuZENoaWxkKHBhcmEyKVxuXG4gICAgLy9jcmVhdGUgY29udGFpbmVyIGFuZCBjb250ZW50cyBvZiBDb250YWN0IHNlY3Rpb25cbiAgICBjb25zdCBjb250YWN0VXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgY29uc3Qgc21hbGxQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgY29uc3QgbnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG5cbiAgICBjb250YWN0LnRleHRDb250ZW50ID0gXCJHZXQgSW4gVG91Y2hcIlxuICAgIHNtYWxsUGFyYS50ZXh0Q29udGVudCA9IFwiQ29udGFjdCB1cyBmb3IgZGVsaXZlcnksIHJlc2VydmF0aW9ucyBvciBhbnkgZ2VuZXJhbCBpbmZvLlwiXG4gICAgbnVtYmVyLnRleHRDb250ZW50ID0gXCIoMTIzKSA0NTYtNzg5MFwiXG4gICAgZW1haWwudGV4dENvbnRlbnQgPSBcImxhcGl6emVyaWFAbGFwaXp6ZXJpYS5jb21cIlxuICAgIGFkZHJlc3MudGV4dENvbnRlbnQgPSBcIjczMiBXZXN0IFJvYWQsIE5ldyBZb3JrXCJcblxuICAgIGNvbnRhY3RVc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0KVxuICAgIGNvbnRhY3RVc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzbWFsbFBhcmEpXG4gICAgY29udGFjdFVzQ29udGFpbmVyLmFwcGVuZENoaWxkKG51bWJlcilcbiAgICBjb250YWN0VXNDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1haWwpXG4gICAgY29udGFjdFVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZHJlc3MpXG5cbiAgICAvL0FwcGVuZCB0aGUgdHdvIGNvbnRhaW5lcnMgdG8gdGhlIG1haW4gY29udGFpbmVyIGFuZCBhZGQgdG8gRE9NXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50JylcbiAgICBhYm91dEJveC5hcHBlbmRDaGlsZChhYm91dFVzQ29udGFpbmVyKVxuICAgIGFib3V0Qm94LmFwcGVuZENoaWxkKGNvbnRhY3RVc0NvbnRhaW5lcilcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGFib3V0Qm94KVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWVwYWdlKCkge1xuICAgIC8vY3JlYXRlIHRoZSBkaXYgdGhhdCBob2xkcyBhbGwgdGhlIG1haW4gdGV4dFxuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKCd0aXRsZS1kaXYnKVxuXG4gICAgLy9jcmVhdGUgdGhlIGhlYWRlclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJMYSBQaXp6ZXJpYVwiXG5cbiAgICAvL2NyZWF0ZSB0aGUgdHdvIHBhcmFncmFwaHMgYmVsb3dcbiAgICBjb25zdCBwYXJhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHBhcmExLnRleHRDb250ZW50ID0gXCJMYSBmaW5uZXN0IHBpenphIGluIHRoZSB3b3JsZCEgVW5pcXVlIGZsYXZvcnMgb25seSBmb3VuZCBoZXJlIVwiXG4gICAgY29uc3QgcGFyYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwYXJhMi50ZXh0Q29udGVudCA9IFwiV2Ugc3RyaXZlIGZvciB0aGUgYmVzdCBmb29kIGFuZCB0aGUgYmVzdCBjdXN0b21lciBzZXJ2aWNlLiBDaGVmcyBmcm9tIGFsbCBvdmVyIHRoZSB3b3JsZCBnaXZlIHVzIDQuNSBzdGFycyEgQ29tZSB2aXNpdCBzb21ldGltZSB0byB0cnkgb3V0IG91ciB3b3JsZCBmYW1vdXMgcGl6emEuXCJcblxuICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlKVxuICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKHBhcmExKVxuICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKHBhcmEyKVxuXG4gICAgLy8gc2VsZWN0IGNvbnRlbnQgZGl2IHRvIGFwcGVuZCBuZXcgZWxlbWVudHNcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGVEaXYpXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudVBhZ2UoKSB7XG4gICAgLy9jcmVhdGUgdGhlIGJveCB0aGF0IGNvbnRhaW5zIHRoZSBtZW51IGl0ZW1zXG4gICAgY29uc3QgbWVudUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudUJveC5jbGFzc0xpc3QuYWRkKCdtZW51LWJveCcpXG5cbiAgICAvL2FwcGVuZCB0aGUgY3JlYXRlZCBub2RlIHRvIHRoZSBET01cbiAgICBtZW51Qm94LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVDYXJkKCdQZXBwZXJvbmkgUGl6emEnLFxuICAgICAnJDE3JywgXG4gICAgICdTYXZvciB0aGUgYm9sZCBmbGF2b3JzIG9mIG91ciBjbGFzc2ljIHBlcHBlcm9uaSBwaXp6YSwgd2l0aCBhIGNyaXNweSBjcnVzdCwgcmljaCB0b21hdG8gc2F1Y2UsIGFuZCBtZWx0ZWQgbW96emFyZWxsYSBjaGVlc2UsIHRvcHBlZCB3aXRoIHByZW1pdW0gcGVwcGVyb25pIHNsaWNlcy4nKVxuICAgIClcblxuICAgIG1lbnVCb3guYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUNhcmQoJ0hhd2FpaWFuIFBpenphJyxcbiAgICAnJDIwJyxcbiAgICAnRXhwZXJpZW5jZSBhIHRhc3RlIG9mIHBhcmFkaXNlIHdpdGggb3VyIEhhd2FpaWFuIHBpenphLCBmZWF0dXJpbmcgYSBjcmlzcHkgY3J1c3QsIHRvbWF0byBzYXVjZSwgbWVsdGVkIG1venphcmVsbGEgY2hlZXNlIGFuZCBhIHRyb3BpY2FsIG1lZGxleSBvZiBwaW5lYXBwbGUgYW5kIGhhbS4nKVxuICAgIClcblxuICAgIG1lbnVCb3guYXBwZW5kQ2hpbGQoY3JlYXRlTWVudUNhcmQoJ01hcmdoZXJpdGEgUGl6emEnLFxuICAgICckMjAnLFxuICAgICdBIHRydWUgY2xhc3NpYywgb3VyIE1hcmdoZXJpdGEgcGl6emEgaXMgYSBjZWxlYnJhdGlvbiBvZiBzaW1wbGljaXR5LCBmZWF0dXJpbmcgYSB3b29kLWZpcmVkIGNydXN0LCBmcmVzaCB0b21hdG8gc2F1Y2UsIG1venphcmVsbGEgY2hlZXNlLCBiYXNpbCBsZWF2ZXMsIGFuZCBhIGRyaXp6bGUgb2Ygb2xpdmUgb2lsLicpXG4gICAgKVxuXG4gICAgbWVudUJveC5hcHBlbmRDaGlsZChjcmVhdGVNZW51Q2FyZCgnTWVhdCBMb3ZlcnMgUGl6emEnLFxuICAgICckMjMnLFxuICAgIFwiU2F0aXNmeSB5b3VyIGNhcm5pdm9yb3VzIGNyYXZpbmdzIHdpdGggb3VyIG1lYXQgbG92ZXIncyBwaXp6YSwgZmVhdHVyaW5nIGEgY3Jpc3B5IGNydXN0LCByaWNoIHRvbWF0byBzYXVjZSwgbWVsdGVkIG1venphcmVsbGEgY2hlZXNlLCBhbmQgYSBnZW5lcm91cyB0b3BwaW5nIG9mIHBlcHBlcm9uaSwgc2F1c2FnZSwgYmFjb24gYW5kIGhhbS5cIilcbiAgICApXG5cbiAgICBtZW51Qm94LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVDYXJkKCdWZWdldGFyaWFuIFBpenphJyxcbiAgICAnJDIzJyxcbiAgICBcIk91ciB2ZWdldGFyaWFuIHBpenphIGlzIGEgc3ltcGhvbnkgb2YgZmxhdm9ycywgd2l0aCBhIGNyaXNweSBjcnVzdCwgcmljaCB0b21hdG8gc2F1Y2UsIG1lbHRlZCBtb3p6YXJlbGxhIGNoZWVzZSBhbmQgYSBtZWRsZXkgb2YgZnJlc2ggdmVnZXRhYmxlcywgaW5jbHVkaW5nIG11c2hyb29tcywgYmVsbCBwZXBwZXJzLCBvbmlvbnMsIGFuZCBvbGl2ZXMuXCIpXG4gICAgKVxuXG4gICAgbWVudUJveC5hcHBlbmRDaGlsZChjcmVhdGVNZW51Q2FyZCgnQ2hlZXNlIFBpenphJyxcbiAgICAnJDE1JyxcbiAgICBcIk91ciBnb3VybWV0IGNoZWVzZSBwaXp6YSBib2FzdHMgYSBkZWxpY2F0ZSBjcnVzdCwgZnJlc2ggdG9tYXRvIHNhdWNlLCBhbmQgcHJlbWl1bSBtb3p6YXJlbGxhIGNoZWVzZSBtZWx0ZWQgdG8gcGVyZmVjdGlvbi5cIilcbiAgICApXG5cbiAgICAvL2FkZCB0aGUgZWxlbWVudHMgdG8gdGhlIERPTVxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51Qm94KVxuXG5cbn1cblxuLy90aGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBkb20gZWxlbWVudHMgdG8gZmlsbCBhIG1lbnUgY2FyZFxuLy9hcHBlbmRzIHRoZSBET00gZWxlbWVudHMgdG8gdGhlIG1lbnUgY2FyZCBpbiB0aGUgZnVuY3Rpb25cbmZ1bmN0aW9uIGNyZWF0ZU1lbnVDYXJkKHRpdGxlLCBwcmljZSwgdGV4dCkge1xuICAgIC8vY3JlYXRlIHRoZSBkaXYgdG8gY29udGFpbiB0aGUgY29udGVudHNcbiAgICAvL3RoaXMgZGl2IGlzIGEgbWVudS1jYXJkXG4gICAgY29uc3QgbWVudUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIG1lbnVDYXJkLmNsYXNzTGlzdC5hZGQoJ21lbnUtY2FyZCcpXG5cbiAgICAvL2NyZWF0ZSB0aGUgaGVhZGVyIGZvciBlYWNoIG1lbnUgY2FyZFxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0aXRsZVxuXG4gICAgLy9jcmVhdGUgdGhlIGRlc2NyaXB0aW9uIG9mIGVhY2ggbWVudSBpdGVtXG4gICAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGluZm8udGV4dENvbnRlbnQgPSB0ZXh0XG5cbiAgICAvL2FkZCB0aGUgcHJpY2UgZm9yIGVhY2ggbWVudSBjYXJkXG4gICAgY29uc3QgY29zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGNvc3QuaWQgPSBcInByaWNlXCJcbiAgICBjb3N0LnRleHRDb250ZW50ID0gcHJpY2VcbiAgICBcbiAgICAvL2FwcGVuZCBhbGwgdGhlIHRleHQgY29udGVudCB0byB0aGUgbWVudSBjYXJkXG4gICAgbWVudUNhcmQuYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgIG1lbnVDYXJkLmFwcGVuZENoaWxkKGluZm8pXG4gICAgbWVudUNhcmQuYXBwZW5kQ2hpbGQoY29zdClcblxuICAgIHJldHVybiBtZW51Q2FyZFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGhvbWVwYWdlIGZyb20gXCIuL3BhZ2VzL2hvbWVwYWdlXCI7XG5pbXBvcnQgYWJvdXRQYWdlIGZyb20gXCIuL3BhZ2VzL2Fib3V0XCI7XG5pbXBvcnQgbWVudVBhZ2UgZnJvbSBcIi4vcGFnZXMvbWVudVwiO1xuXG4vL2F1dG8gbG9hZCBob21lcGFnZVxuaG9tZXBhZ2UoKVxuXG5jb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJylcblxuLy9hZGQgZXZlbnRMaXN0ZW5lciB0byBhbGwgYnV0dG9uc1xuYnRucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50ID4gZGl2JylcbiAgICAgICAgLy9jaGVjayB3aGF0IGNvbnRlbnQgaXMgYWxyZWFkeSBsb2FkZWQgYnkgY29tcGFyaW5nIGJ0biBpZCB3aXRoIFxuICAgICAgICAvL2NvbnRlbnQgY2xhc3MuIElmIHRoZXkgYXJlIGRpZmZlcmVudCB0aGVuIGxvYWQgdGhlIG5ldyBjb250ZW50XG4gICAgICAgIGlmIChldmVudC50YXJnZXQuaWQgIT0gY3VycmVudENvbnRlbnQuY2xhc3NMaXN0LnZhbHVlKSB7XG4gICAgICAgICAgICAvL3JlbW92ZSBjdXJyZW50IGNvbnRlbnRcbiAgICAgICAgICAgIGN1cnJlbnRDb250ZW50LnJlbW92ZSgpXG4gICAgICAgIH1cbiAgICB9KVxufSlcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9