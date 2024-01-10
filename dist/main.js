/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHome: () => (/* binding */ createHome)\n/* harmony export */ });\n\n\nfunction createHome() {\n  const home = document.createElement(\"div\");\n  home.classList.add(\"hero-container\");\n\n  const paragraph = document.createElement(\"h3\");\n  paragraph.textContent = \"Sarap ng tahanan, sa bawat pinggan\";\n\n  const heroBtn = document.createElement(\"button\");\n  heroBtn.classList.add(\"btn\");\n\n  const heroLink = document.createElement(\"a\");\n  heroLink.textContent = \"order now\";\n  heroLink.classList.add(\"heroBtn\");\n\n  home.appendChild(paragraph);\n  home.appendChild(heroBtn);\n  heroBtn.appendChild(heroLink);\n\n  return home;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-load */ \"./src/page-load.js\");\n\n\n\n\n(0,_page_load__WEBPACK_IMPORTED_MODULE_0__.getParentElement)();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenu: () => (/* binding */ createMenu)\n/* harmony export */ });\n\n\nfunction createMenu() {\n  // Create the main menu container\n  const menu = document.createElement(\"div\");\n  menu.classList.add(\"menu\");\n\n  // Add the heading\n  const heading = document.createElement(\"h3\");\n  heading.textContent = \"Fresh, plant-forward, earth friendly food.\";\n  menu.appendChild(heading);\n\n  // Create the menu-container\n  const menuContainer = document.createElement(\"div\");\n  menuContainer.classList.add(\"menu-container\");\n\n  // Create the food-container\n  const foodContainer = document.createElement(\"div\");\n  foodContainer.classList.add(\"food-container\");\n\n  // Create the meal-day-container\n  const mealDayContainer = document.createElement(\"div\");\n  mealDayContainer.classList.add(\"meal-day-container\");\n\n  // Add the meal-day heading\n  const mealDayHeading = document.createElement(\"h2\");\n  mealDayHeading.textContent = \"Breakfast\";\n  mealDayHeading.classList.add(\"meal-day\");\n  mealDayContainer.appendChild(mealDayHeading);\n\n  // Create the meal-container\n  const mealContainer = document.createElement(\"div\");\n  mealContainer.classList.add(\"meal-container\");\n\n  // Create three meal items\n  const mealItems = [\n    {\n      name: \"tosilog\",\n      description:\n        \"friedrice with tocino and sunny sideup egg (Tosino, Sinangag, Itlog)\",\n      image: \"img/img-1.jpg\",\n    },\n    {\n      name: \"friedrice\",\n      description: \"friedrice with with tomato and cucumber (sinangag)\",\n      image: \"img/img-2.jpeg\",\n    },\n    {\n      name: \"porridge\",\n      description: \"porridge with egg (lugaw, itlog)\",\n      image: \"img/img-3.jpeg\",\n    },\n  ];\n\n  mealItems.forEach((item) => {\n    const meal = document.createElement(\"div\");\n    meal.classList.add(\"meal\");\n\n    // Create the image container\n    const imgContainer = document.createElement(\"div\");\n    imgContainer.classList.add(\"img-container\");\n\n    const imgPath = `${item.image}`;\n    const img = document.createElement(\"img\");\n\n    img.src = imgPath;\n    img.alt = \"food images\";\n    imgContainer.appendChild(img);\n\n    meal.appendChild(imgContainer);\n\n    // Add food name and description\n    const foodName = document.createElement(\"p\");\n    foodName.classList.add(\"food-name\");\n    foodName.textContent = item.name;\n    meal.appendChild(foodName);\n\n    const foodDescription = document.createElement(\"p\");\n    foodDescription.classList.add(\"food-description\");\n    foodDescription.textContent = item.description;\n    foodDescription.style.flexWrap = \"wrap\";\n    meal.appendChild(foodDescription);\n\n    mealContainer.appendChild(meal);\n  });\n\n  // Assemble the structure\n  foodContainer.appendChild(mealDayContainer);\n  foodContainer.appendChild(mealContainer);\n  menuContainer.appendChild(foodContainer);\n  menu.appendChild(menuContainer);\n\n  menu.appendChild(menuContainer);\n\n  return menu;\n}\n\n// const paragraph = document.createElement(\"h3\");\n// paragraph.textContent = \"Fresh, plant-forward, earth friendly food.\";\n\n// const menuContainer = document.createElement(\"div\");\n// menuContainer.classList.add(\"menu-container\");\n\n// const foodContainer = document.createElement(\"div\");\n// foodContainer.classList.add(\"food-container\");\n\n// const mealDayContainer = document.createElement(\"div\");\n// mealDayContainer.classList.add(\"meal-day-container\");\n\n// const mealDay = document.createElement(\"h2\");\n// mealDay.classList.add(\"meal-day\");\n// mealDay.textContent = \"breakfast\";\n\n// const mealContainer = document.createElement(\"div\");\n// mealContainer.classList.add(\"meal-container\");\n\n// const meal = document.createElement(\"div\");\n// meal.classList.add(\"meal\");\n\n// const imgContainer = document.createElement(\"div\");\n// imgContainer.classList.add(\"img-container\");\n\n// const img = document.createElement(\"img\");\n// img.src = \"/dist/img/hero.jpeg\";\n\n// const foodName = document.createElement(\"p\");\n// foodName.classList.add(\"food-name\");\n// foodName.textContent = \"adobo\";\n\n// const foodDescription = document.createElement(\"p\");\n// foodDescription.classList.add(\"food-description\");\n// foodDescription.textContent = \"\";\n\n// menu.appendChild(paragraph);\n// menu.appendChild(menuContainer);\n// menuContainer.appendChild(foodContainer);\n// foodContainer.appendChild(mealDayContainer);\n// mealDayContainer.appendChild(mealDay);\n\n// foodContainer.appendChild(mealContainer);\n// mealContainer.appendChild(meal);\n// meal.appendChild(imgContainer);\n// imgContainer.appendChild(img);\n\n// meal.appendChild(foodName);\n// meal.appendChild(foodDescription);\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/page-load.js":
/*!**************************!*\
  !*** ./src/page-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getParentElement: () => (/* binding */ getParentElement)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\n\nfunction createNav() {\n  const nav = document.createElement(\"nav\");\n  nav.classList.add(\"nav\");\n\n  const tabContainer = document.createElement(\"div\");\n  tabContainer.classList.add(\"tabContainer\");\n\n  const tab = document.createElement(\"ul\");\n  tab.classList.add(\"tab\");\n\n  const tabList1 = document.createElement(\"li\");\n  tabList1.classList.add(\"tabList\");\n\n  const tabList2 = document.createElement(\"li\");\n  tabList2.classList.add(\"tabList\");\n\n  const tabList3 = document.createElement(\"li\");\n  tabList3.classList.add(\"tabList\");\n\n  const tabLink1 = document.createElement(\"a\");\n  tabLink1.classList.add(\"tabLink\");\n  tabLink1.href = \"#\";\n  tabLink1.textContent = \"Home\";\n\n  const tabLink2 = document.createElement(\"a\");\n  tabLink2.classList.add(\"tabLink\");\n  tabLink2.href = \"#\";\n  tabLink2.textContent = \"Menu\";\n\n  const tabLink3 = document.createElement(\"a\");\n  tabLink3.classList.add(\"tabLink\");\n  tabLink3.href = \"#\";\n  tabLink3.textContent = \"Contact\";\n\n  const logoContainer = document.createElement(\"div\");\n  logoContainer.classList.add(\"logoContainer\");\n\n  const logo = document.createElement(\"h1\");\n  logo.textContent = \"Lutong Bahay\";\n\n  const button = document.createElement(\"button\");\n  button.classList = \"btn\";\n\n  const navBtn = document.createElement(\"a\");\n  navBtn.classList = \"navBtn\";\n  navBtn.href = \"#\";\n  navBtn.textContent = \"Sign up\";\n\n  nav.appendChild(tabContainer);\n  tabContainer.appendChild(tab);\n\n  tab.appendChild(tabList1);\n  tab.appendChild(tabList2);\n  tab.appendChild(tabList3);\n\n  tabList1.appendChild(tabLink1);\n  tabList2.appendChild(tabLink2);\n  tabList3.appendChild(tabLink3);\n\n  nav.appendChild(logoContainer);\n  logoContainer.appendChild(logo);\n\n  nav.appendChild(button);\n  button.appendChild(navBtn);\n\n  return nav;\n}\n\nfunction getParentElement() {\n  const contentDiv = document.getElementById(\"content\");\n\n  contentDiv.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createHome)());\n  contentDiv.appendChild(createNav());\n  contentDiv.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__.createMenu)());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getParentElement);\n\n\n//# sourceURL=webpack://restaurant-page/./src/page-load.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;