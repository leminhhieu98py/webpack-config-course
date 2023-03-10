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

/***/ "./src/js/actions.js":
/*!***************************!*\
  !*** ./src/js/actions.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"newTodoEventHandler\": () => (/* binding */ newTodoEventHandler),\n/* harmony export */   \"onLoadEventHandler\": () => (/* binding */ onLoadEventHandler),\n/* harmony export */   \"removeTodoEventHandler\": () => (/* binding */ removeTodoEventHandler),\n/* harmony export */   \"toggleTodoEventListener\": () => (/* binding */ toggleTodoEventListener)\n/* harmony export */ });\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data.json */ \"./src/data.json\");\n\r\n\r\nlet data = _data_json__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\nfunction getAllTodos() {\r\n  return data;\r\n}\r\n\r\nfunction addTodo(todo) {\r\n  data.push(todo);\r\n}\r\n\r\nfunction removeTodo(id) {\r\n  data = data.filter(function (item) {\r\n    return item.id !== id;\r\n  });\r\n}\r\n\r\nfunction updateTodo(id, completed) {\r\n  const itemIndex = data.findIndex(function (value) {\r\n    return value.id === id;\r\n  });\r\n  data[itemIndex].completed = completed;\r\n}\r\n\r\nfunction renderTodos(todos) {\r\n  const renderedItemArray = todos.map(function (todo) {\r\n    const className = todo.completed ? 'completed' : '';\r\n    const completionClass = todo.completed ? 'checked' : '';\r\n    return `\r\n            <li data-id=\"${todo.id}\" class=\"${className}\">\r\n                <span class=\"custom-checkbox\">\r\n                    <img class=\"check\" src=\"./images/checkmark.svg\" width=\"22\" height=\"22\"></img>\r\n                    <input class=\"real-checkbox\" type=\"checkbox\" ${completionClass} />\r\n                </span>\r\n                <label>${todo.text}</label>\r\n                <span class=\"delete\"></span>\r\n            </li>\r\n        `;\r\n  });\r\n  document.querySelector('.todo-list').innerHTML = renderedItemArray.join('');\r\n}\r\n\r\nfunction clearNewTodoInput() {\r\n  document.querySelector('.new-todo').value = '';\r\n}\r\n\r\nfunction getTodoId(element) {\r\n  return parseInt(\r\n    element.dataset.id ||\r\n      element.parentNode.dataset.id ||\r\n      element.parentNode.parentNode.dataset.id,\r\n    10\r\n  );\r\n}\r\n\r\nfunction onLoadEventHandler() {\r\n  renderTodos(getAllTodos());\r\n}\r\n\r\nfunction newTodoEventHandler(event) {\r\n  let text = event.target.value;\r\n  addTodo({\r\n    id: Date.now(),\r\n    text: text,\r\n    completed: false\r\n  });\r\n  renderTodos(getAllTodos());\r\n  clearNewTodoInput();\r\n}\r\n\r\nfunction removeTodoEventHandler(event) {\r\n  const id = getTodoId(event.target);\r\n  removeTodo(id);\r\n  renderTodos(getAllTodos());\r\n}\r\n\r\nfunction toggleTodoEventListener(event) {\r\n  const id = getTodoId(event.target);\r\n  const isCompleted = event.target.checked;\r\n  updateTodo(id, isCompleted);\r\n  renderTodos(getAllTodos());\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack-project/./src/js/actions.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ \"./src/js/actions.js\");\n\n\nwindow.addEventListener('load', _actions__WEBPACK_IMPORTED_MODULE_0__.onLoadEventHandler);\n\ndocument.addEventListener('change', function (event) {\n  if (event.target.classList.contains('new-todo')) {\n    (0,_actions__WEBPACK_IMPORTED_MODULE_0__.newTodoEventHandler)(event);\n  }\n});\n\ndocument.addEventListener('click', function (event) {\n  if (event.target.classList.contains('delete')) {\n    (0,_actions__WEBPACK_IMPORTED_MODULE_0__.removeTodoEventHandler)(event);\n  }\n  if (event.target.classList.contains('real-checkbox')) {\n    (0,_actions__WEBPACK_IMPORTED_MODULE_0__.toggleTodoEventListener)(event);\n  }\n});\n\n\n//# sourceURL=webpack://webpack-project/./src/js/index.js?");

/***/ }),

/***/ "./src/data.json":
/*!***********************!*\
  !*** ./src/data.json ***!
  \***********************/
/***/ ((module) => {

eval("module.exports = JSON.parse('[{\"id\":1560865205317,\"text\":\"Buy Otis\\'s eggs please\",\"completed\":false},{\"id\":1560865205318,\"text\":\"Do 15 min exercise\",\"completed\":false}]');\n\n//# sourceURL=webpack://webpack-project/./src/data.json?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;