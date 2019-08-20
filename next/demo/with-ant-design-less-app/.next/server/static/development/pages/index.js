module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/test.less":
/*!**************************!*\
  !*** ./assets/test.less ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/button/style/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/button/style/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/date-picker/style/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/lib/date-picker/style/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/form/style/index.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/form/style/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/input-number/style/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/input-number/style/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/select/style/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/select/style/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/slider/style/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/slider/style/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/switch/style/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/switch/style/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_date_picker_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/date-picker/style */ "./node_modules/antd/lib/date-picker/style/index.js");
/* harmony import */ var antd_lib_date_picker_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/date-picker */ "antd/lib/date-picker");
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_slider_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/slider/style */ "./node_modules/antd/lib/slider/style/index.js");
/* harmony import */ var antd_lib_slider_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_slider_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/slider */ "antd/lib/slider");
/* harmony import */ var antd_lib_slider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_slider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_switch_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/switch/style */ "./node_modules/antd/lib/switch/style/index.js");
/* harmony import */ var antd_lib_switch_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_switch_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/switch */ "antd/lib/switch");
/* harmony import */ var antd_lib_switch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_switch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_input_number_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/lib/input-number/style */ "./node_modules/antd/lib/input-number/style/index.js");
/* harmony import */ var antd_lib_input_number_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_number_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/lib/input-number */ "antd/lib/input-number");
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/select/style */ "./node_modules/antd/lib/select/style/index.js");
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/select */ "antd/lib/select");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/lib/form */ "antd/lib/form");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_test_less__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/test.less */ "./assets/test.less");
/* harmony import */ var _assets_test_less__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_test_less__WEBPACK_IMPORTED_MODULE_15__);














var _jsxFileName = "/Users/aaronguo/workflow/aaron/learn-react/next/demo/with-ant-design-less-app/pages/index.js";


const FormItem = antd_lib_form__WEBPACK_IMPORTED_MODULE_13___default.a.Item;
const Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_11___default.a.Option;
/* harmony default export */ __webpack_exports__["default"] = (() => react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("div", {
  className: "bg",
  style: {
    marginTop: 100
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_13___default.a, {
  layout: "horizontal",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(FormItem, {
  label: "Input Number",
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 8
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_9___default.a, {
  size: "large",
  min: 1,
  max: 10,
  style: {
    width: 100
  },
  defaultValue: 3,
  name: "inputNumber",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement("a", {
  href: "#",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, "Link")), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(FormItem, {
  label: "Switch",
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 8
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_switch__WEBPACK_IMPORTED_MODULE_7___default.a, {
  defaultChecked: true,
  name: "switch",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(FormItem, {
  label: "Slider",
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 8
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_slider__WEBPACK_IMPORTED_MODULE_5___default.a, {
  defaultValue: 70,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(FormItem, {
  label: "Select",
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 8
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_select__WEBPACK_IMPORTED_MODULE_11___default.a, {
  size: "large",
  defaultValue: "lucy",
  style: {
    width: 192
  },
  name: "select",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(Option, {
  value: "jack",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}, "jack"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(Option, {
  value: "lucy",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, "lucy"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(Option, {
  value: "disabled",
  disabled: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, "disabled"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(Option, {
  value: "yiminghe",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, "yiminghe"))), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(FormItem, {
  label: "DatePicker",
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 8
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_3___default.a, {
  name: "startDate",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(FormItem, {
  style: {
    marginTop: 48
  },
  wrapperCol: {
    span: 8,
    offset: 8
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
  size: "large",
  type: "primary",
  htmlType: "submit",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
}, "OK"), react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
  size: "large",
  style: {
    marginLeft: 8
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70
  },
  __self: undefined
}, "Cancel")))));

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aaronguo/workflow/aaron/learn-react/next/demo/with-ant-design-less-app/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/date-picker":
/*!***************************************!*\
  !*** external "antd/lib/date-picker" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/date-picker");

/***/ }),

/***/ "antd/lib/form":
/*!********************************!*\
  !*** external "antd/lib/form" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

/***/ }),

/***/ "antd/lib/input-number":
/*!****************************************!*\
  !*** external "antd/lib/input-number" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input-number");

/***/ }),

/***/ "antd/lib/select":
/*!**********************************!*\
  !*** external "antd/lib/select" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/select");

/***/ }),

/***/ "antd/lib/slider":
/*!**********************************!*\
  !*** external "antd/lib/slider" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/slider");

/***/ }),

/***/ "antd/lib/switch":
/*!**********************************!*\
  !*** external "antd/lib/switch" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/switch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map