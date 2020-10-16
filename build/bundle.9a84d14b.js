/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/a.js":
/*!******************!*\
  !*** ./src/a.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/mac/work/webpack-/src/a.js: Unexpected token, expected \\\"{\\\" (2:7)\\n\\n\\u001b[0m \\u001b[90m 1 | \\u001b[39mmodule\\u001b[33m.\\u001b[39mexports \\u001b[33m=\\u001b[39m \\u001b[32m\\\"Alan\\\"\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 2 | \\u001b[39m\\u001b[36mclass\\u001b[39m \\u001b[33mB\\u001b[39m() {\\u001b[0m\\n\\u001b[0m \\u001b[90m   | \\u001b[39m       \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 3 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 4 | \\u001b[39m}\\u001b[0m\\n\\u001b[0m \\u001b[90m 5 | \\u001b[39m\\u001b[36mfunction\\u001b[39m \\u001b[33m*\\u001b[39m gen() {\\u001b[0m\\n    at Parser._raise (/Users/mac/work/webpack-/node_modules/@babel/parser/lib/index.js:799:17)\\n    at Parser.raiseWithData (/Users/mac/work/webpack-/node_modules/@babel/parser/lib/index.js:792:17)\\n    at Parser.raise (/Users/mac/work/webpack-/node_modules/@babel/parser/lib/index.js:786:17)\\n    at Parser.unexpected (/Users/mac/work/webpack-/node_modules/@babel/parser/lib/index.js:9085:16)\\n    at Parser.expect (/Users/mac/work/webpack-/node_modules/@babel/parser/lib/index.js:9071:28)\\n    at Parser.parseClassBody (/Users/mac/work/webpack-/node_modules/@babel/parser/lib/index.js:12361:10)\\n    at Parser.parseClass (/Users/mac/work/webpack-/node_modules/@babel/parser/lib/index.js:12335:22)\\n    at Parser.parseStatementContent (/Users/mac/work/webpack-/node_modules/@babel/parser/lib/index.js:11615:21)\\n    at Parser.parseStatement (/Users/mac/work/webpack-/node_modules/@babel/parser/lib/index.js:11573:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/mac/work/webpack-/node_modules/@babel/parser/lib/index.js:12155:25)\\n    at Parser.parseBlockBody (/Users/mac/work/webpack-/node_modules/@babel/parser/lib/index.js:12141:10)\\n    at Parser.parseTopLevel (/Users/mac/work/webpack-/node_modules/@babel/parser/lib/index.js:11504:10)\\n    at Parser.parse (/Users/mac/work/webpack-/node_modules/@babel/parser/lib/index.js:13324:10)\\n    at parse (/Users/mac/work/webpack-/node_modules/@babel/parser/lib/index.js:13377:38)\\n    at parser (/Users/mac/work/webpack-/node_modules/@babel/core/lib/parser/index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/Users/mac/work/webpack-/node_modules/@babel/core/lib/transformation/normalize-file.js:99:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (/Users/mac/work/webpack-/node_modules/@babel/core/lib/transformation/index.js:31:50)\\n    at run.next (<anonymous>)\\n    at Function.transform (/Users/mac/work/webpack-/node_modules/@babel/core/lib/transform.js:27:41)\\n    at transform.next (<anonymous>)\\n    at step (/Users/mac/work/webpack-/node_modules/gensync/index.js:254:32)\\n    at gen.next (/Users/mac/work/webpack-/node_modules/gensync/index.js:266:13)\\n    at async.call.value (/Users/mac/work/webpack-/node_modules/gensync/index.js:216:11)\");\n\n//# sourceURL=webpack:///./src/a.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _class, _temp;\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar str = __webpack_require__(/*! ./a.js */ \"./src/a.js\");\n\nconsole.log(str);\n\n__webpack_require__(/*! ./index.css */ \"./src/index.css\"); // require('./index.less')\n\n\nvar fn = function fn() {\n  console.log('箭头函数');\n};\n\nfn();\n\nvar A = log(_class = (_temp = function A() {\n  _classCallCheck(this, A);\n\n  this.a = 1;\n}, _temp)) || _class;\n\nvar a = new A();\nconsole.log(a);\n\nfunction log(target) {\n  console.log(target, '23');\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });