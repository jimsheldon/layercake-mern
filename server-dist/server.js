/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./server/api/index.ts":
/*!*****************************!*\
  !*** ./server/api/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);

const router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();
router.all("/", (req, _res, next) => {
    console.log(`${req.method} for ${req.url}`);
    next();
});
router.get("*", function (_req, res) {
    res.json({
        "Name": "Samuel"
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);


/***/ }),

/***/ "./server/logger/index.ts":
/*!********************************!*\
  !*** ./server/logger/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! winston */ "winston");
/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_0__);

const logger = winston__WEBPACK_IMPORTED_MODULE_0___default().createLogger({
    level: 'silly',
    format: winston__WEBPACK_IMPORTED_MODULE_0___default().format.json(),
    transports: [
        new (winston__WEBPACK_IMPORTED_MODULE_0___default().transports.Console)({
            format: winston__WEBPACK_IMPORTED_MODULE_0___default().format.combine(winston__WEBPACK_IMPORTED_MODULE_0___default().format.colorize({
                all: true
            }), winston__WEBPACK_IMPORTED_MODULE_0___default().format.simple())
        }),
    ]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logger);


/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "chalk":
/*!************************!*\
  !*** external "chalk" ***!
  \************************/
/***/ ((module) => {

module.exports = require("chalk");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("compression");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("express-session");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("winston");

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./server/index.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ "dotenv");
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! compression */ "compression");
/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! helmet */ "helmet");
/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! express-session */ "express-session");
/* harmony import */ var express_session__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(express_session__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! chalk */ "chalk");
/* harmony import */ var chalk__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(chalk__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./logger */ "./server/logger/index.ts");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./api */ "./server/api/index.ts");
/* eslint no-undefined: "off" */

dotenv__WEBPACK_IMPORTED_MODULE_0___default().config();








const app = express__WEBPACK_IMPORTED_MODULE_3___default()();
const PORT = process.env.PORT;
/****************** Sessions ******************/
const sessionInfo = express_session__WEBPACK_IMPORTED_MODULE_6___default()({
    secret: 'YOUR_SECRET_HERE',
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 600000 }
});
app.use(sessionInfo);
/****************** Server Options ******************/
const cacheTime = 172800000; // 2 Days in ms - Tells clients to cache static files
app.use(helmet__WEBPACK_IMPORTED_MODULE_5___default()()); // Sets some good default headers
app.use(compression__WEBPACK_IMPORTED_MODULE_4___default()()); // Enables gzip compression
app.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default().json()); // Lets express handle JSON encoded data sent on the body of requests
app.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default().urlencoded({ extended: true }));
/****************** Serve Static Files --> JS, CSS, IMAGES ETC ******************/
app.use(express__WEBPACK_IMPORTED_MODULE_3___default()["static"](path__WEBPACK_IMPORTED_MODULE_1___default().join(__dirname, '../public'), { maxAge: cacheTime }));
/****************** Log Requests ******************/
app.use('*', (req, _res, next) => {
    _logger__WEBPACK_IMPORTED_MODULE_8__["default"].log({
        level: 'info',
        message: chalk__WEBPACK_IMPORTED_MODULE_7___default().red(`\nREQUEST ${JSON.stringify(req.method)} ${req.path}\n`) + chalk__WEBPACK_IMPORTED_MODULE_7___default().yellow(`QUERY ${JSON.stringify(req.query)}\n`) + chalk__WEBPACK_IMPORTED_MODULE_7___default().cyan(`BODY: ${JSON.stringify(req.body)}`)
    });
    next();
});
/****************** Route Handling ******************/
// Use api.js for any and all requests made to /api

app.use('/api', _api__WEBPACK_IMPORTED_MODULE_9__["default"]);
app.use('/*', (_req, res) => {
    res.sendFile(path__WEBPACK_IMPORTED_MODULE_1___default().resolve("./public/index.html"));
});
// Return a 404 page for all other requests - This should be the last get/put/post/delete/all/use call for app
app.use("*", (_req, res) => {
    res.status(404).send(`<h1>404 Page Not Found</h1>`);
});
function startServer() {
    app.listen(PORT, () => {
        console.log(chalk__WEBPACK_IMPORTED_MODULE_7___default().blue(`App is live on ${process.env.DEV_BASE_URL}`));
    });
}
startServer();

})();

/******/ })()
;
//# sourceMappingURL=server.js.map