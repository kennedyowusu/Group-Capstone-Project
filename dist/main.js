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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato&family=Poppins:wght@400;500;600;700;800&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --primary-color: #21637b;\\r\\n  --secondary-color: rgb(0, 0, -19);\\r\\n  --white-color: #fff;\\r\\n  --tertiary-color: wheat;\\r\\n}\\r\\n\\r\\n* {\\r\\n  outline: none;\\r\\n  border: none;\\r\\n  list-style-type: none;\\r\\n  text-decoration: none;\\r\\n  transition: 0.3s linear;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: rgb(0, 0, -19);\\r\\n  color: #fff;\\r\\n  font-weight: bolder;\\r\\n}\\r\\n\\r\\n.flex {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  gap: 60px;\\r\\n}\\r\\n\\r\\n/* header section */\\r\\nheader {\\r\\n  height: 85px;\\r\\n}\\r\\n\\r\\n.header-container {\\r\\n  background-color: var(--primary-color);\\r\\n  height: 80px;\\r\\n  position: fixed;\\r\\n  width: 100%;\\r\\n  z-index: 10;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  width: 90%;\\r\\n  height: 100%;\\r\\n  margin: auto;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  font-size: 22px;\\r\\n}\\r\\n\\r\\nh1 a {\\r\\n  color: red;\\r\\n  width: fit-content;\\r\\n  background-color: var(--secondary-color);\\r\\n  padding: 8px 25px;\\r\\n  border-radius: 10px;\\r\\n  border: 2px solid var(--white-color);\\r\\n}\\r\\n\\r\\nh1 span:nth-child(1) {\\r\\n  color: var(--tertiary-color);\\r\\n}\\r\\n\\r\\n.nav-links .nav-link a.active {\\r\\n  border-bottom: 2px solid var(--white-color);\\r\\n}\\r\\n\\r\\n.nav-link a {\\r\\n  font-weight: bold;\\r\\n  color: var(--white-color);\\r\\n  font-size: 15px;\\r\\n  letter-spacing: 2px;\\r\\n}\\r\\n\\r\\n.nav-link:hover {\\r\\n  padding: 8px 16px;\\r\\n  border: 1px solid var(--white-color);\\r\\n  border-radius: 10px;\\r\\n  cursor: pointer;\\r\\n  color: var(--tertiary-color);\\r\\n}\\r\\n\\r\\n/* show container section */\\r\\n.show-container {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\\r\\n  place-items: center;\\r\\n  margin: 30px 0;\\r\\n}\\r\\n\\r\\n.show-container .cards {\\r\\n  margin: 10px 0;\\r\\n  width: 250px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.card-image {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.card-image img {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n/* modal image */\\r\\n.modal-image img {\\r\\n  width: 600px;\\r\\n  height: 500px;\\r\\n}\\r\\n\\r\\n.card-image img:hover {\\r\\n  animation: shadow 0.8s linear backwards;\\r\\n}\\r\\n\\r\\n@keyframes shadow {\\r\\n  50% {\\r\\n    transform: scale(1.1);\\r\\n  }\\r\\n}\\r\\n\\r\\n.card-body {\\r\\n  display: flex;\\r\\n  width: 100%;\\r\\n  justify-content: space-between;\\r\\n  margin: 10px 0 15px;\\r\\n  font-size: 20px;\\r\\n  font-weight: normal;\\r\\n}\\r\\n\\r\\n.likes-container {\\r\\n  display: flex;\\r\\n  width: 80%;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.likes-container p:nth-child(1) {\\r\\n  width: 90%;\\r\\n  line-height: 25px;\\r\\n  font-size: 18px;\\r\\n}\\r\\n\\r\\n.like-btn i {\\r\\n  cursor: pointer;\\r\\n  color: red;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.btn-comment button {\\r\\n  background-color: var(--primary-color);\\r\\n  color: var(--white-color);\\r\\n  font-weight: bold;\\r\\n  padding: 6px 12px;\\r\\n  font-size: 15px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n/* footer section */\\r\\nfooter {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\nfooter .header-container {\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\nfooter .container {\\r\\n  justify-content: space-around;\\r\\n}\\r\\n\\r\\n.authors,\\r\\n.authors a {\\r\\n  font-size: 20px;\\r\\n  color: var(--white-color);\\r\\n}\\r\\n\\r\\n.authors a {\\r\\n  color: var(--tertiary-color);\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n/* modal section */\\r\\n#modal.hidden {\\r\\n  opacity: 0;\\r\\n  animation: slideOUT 0.6s linear both;\\r\\n}\\r\\n\\r\\n/* #modal.slide-out */\\r\\n\\r\\n#modal {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  z-index: 15;\\r\\n  padding: 3rem  7rem;\\r\\n  overflow-y: auto;\\r\\n  color: #fff;\\r\\n  opacity: 1;\\r\\n  background-color: rgba(0, 0, 0, 0.93);\\r\\n  animation: slideIN 0.6s linear both;\\r\\n}\\r\\n\\r\\n@keyframes slideIN {\\r\\n  from {\\r\\n    transform: scale(0);\\r\\n  }\\r\\n\\r\\n  to {\\r\\n    transform: scale(1);\\r\\n  }\\r\\n}\\r\\n\\r\\n@keyframes slideOUT {\\r\\n  from {\\r\\n    transform: scale(1);\\r\\n  }\\r\\n\\r\\n  to {\\r\\n    transform: scale(0);\\r\\n  }\\r\\n}\\r\\n\\r\\n.overflow {\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.btn-submit button {\\r\\n  margin-top: 30px;\\r\\n  box-shadow: -2px -2px 1px var(--white-color);\\r\\n}\\r\\n\\r\\n.close-modal-btn {\\r\\n  text-align: right;\\r\\n}\\r\\n\\r\\n.close-modal-btn button {\\r\\n  font-size: 20px;\\r\\n  background-color: red;\\r\\n  padding: 10px;\\r\\n  font-weight: bolder;\\r\\n  border-radius: 5px;\\r\\n  color: var(--white-color);\\r\\n  border: 2px solid var(--tertiary-color);\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.close-modal-btn button:hover {\\r\\n  animation: shadow 0.8s linear infinite;\\r\\n}\\r\\n\\r\\n.modal-image {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.modal-image img:hover {\\r\\n  animation: shadow 0.8s linear forwards;\\r\\n}\\r\\n\\r\\n.modal-title {\\r\\n  text-align: center;\\r\\n  margin: 15px;\\r\\n  color: var(--tertiary-color);\\r\\n}\\r\\n\\r\\n.modal-body {\\r\\n  font-weight: 100;\\r\\n  text-align: justify;\\r\\n  color: var(--tertiary-color);\\r\\n}\\r\\n\\r\\n#comment-section {\\r\\n  text-align: center;\\r\\n  margin-top: 5rem;\\r\\n  font-weight: normal;\\r\\n  letter-spacing: 1px;\\r\\n}\\r\\n\\r\\n.comment-container {\\r\\n  margin: 20px auto 50px;\\r\\n  width: 400px;\\r\\n  text-align: justify;\\r\\n}\\r\\n\\r\\n.comment-list {\\r\\n  font-weight: normal;\\r\\n}\\r\\n\\r\\nform {\\r\\n  width: 250px;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\nform h4 {\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\ninput,\\r\\ntextarea {\\r\\n  width: 100%;\\r\\n  color: #000;\\r\\n  padding: 8px;\\r\\n  font-size: 15px;\\r\\n  margin-bottom: 20px;\\r\\n  background-color: var(--tertiary-color);\\r\\n  font-weight: bold;\\r\\n  border-radius: 5px;\\r\\n  box-shadow: 4px  5px 1px var(--primary-color);\\r\\n}\\r\\n\\r\\ninput {\\r\\n  height: 40px;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  height: 90px;\\r\\n}\\r\\n\\r\\n.btn-submit button:hover {\\r\\n  box-shadow: 2px 2px 1px var(--white-color);\\r\\n  transform: translateY(-3px);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://group-capstone-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://group-capstone-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://group-capstone-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://group-capstone-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://group-capstone-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://group-capstone-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://group-capstone-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://group-capstone-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://group-capstone-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://group-capstone-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/homepage.js */ \"./src/modules/homepage.js\");\n\n\n\n\n(0,_modules_homepage_js__WEBPACK_IMPORTED_MODULE_1__.DISPLAY)();\n\n//# sourceURL=webpack://group-capstone-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/apiUrl.js":
/*!*******************************!*\
  !*** ./src/modules/apiUrl.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst CARD_API = 'https://api.tvmaze.com/shows';\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CARD_API);\n\n\n//# sourceURL=webpack://group-capstone-project/./src/modules/apiUrl.js?");

/***/ }),

/***/ "./src/modules/commentApi.js":
/*!***********************************!*\
  !*** ./src/modules/commentApi.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComment\": () => (/* binding */ getComment),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment)\n/* harmony export */ });\nconst POST_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/W3X13mPi4LXKYt13LQLN/comments';\n\nconst getComment = async (ID) => {\n  const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/W3X13mPi4LXKYt13LQLN/comments?item_id=${ID}`);\n  const result = await res.json();\n  return result;\n};\n\nconst postComment = async (userInput) => fetch(POST_URL, {\n  method: 'POST',\n  headers: {\n    'content-type': 'application/json',\n  },\n  body: JSON.stringify(userInput),\n})\n  .then((response) => response.json())\n  .then((data) => data.result);\n\n//# sourceURL=webpack://group-capstone-project/./src/modules/commentApi.js?");

/***/ }),

/***/ "./src/modules/homepage.js":
/*!*********************************!*\
  !*** ./src/modules/homepage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DISPLAY\": () => (/* binding */ DISPLAY),\n/* harmony export */   \"getApiData\": () => (/* binding */ getApiData)\n/* harmony export */ });\n/* harmony import */ var _apiUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiUrl.js */ \"./src/modules/apiUrl.js\");\n/* harmony import */ var _likeApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likeApi.js */ \"./src/modules/likeApi.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.js */ \"./src/modules/modal.js\");\n\n\n //eslint-disable-line \r\n\nconst getApiData = async (URL) => {\n  const res = await fetch(URL);\n  const result = await res.json();\n  return result;\n};\n\nconst showContainer = document.querySelector('.show-container');\nconst MovieCount = document.querySelector('.movie-counter');\n\nconst renderLikes = async () => {\n  const likesData = await (0,_likeApi_js__WEBPACK_IMPORTED_MODULE_1__.getLikesData)(_apiUrl_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  const cards = document.querySelectorAll('.cards');\n  cards.forEach((card) => {\n    const cardIDs = card.getAttribute('id');\n    likesData.forEach((data) => {\n      const likesDataID = data.item_id;\n      const { likes } = data;\n      if (cardIDs === likesDataID) {\n        const likeCount = card.childNodes[3].childNodes[3];\n        likeCount.innerHTML = likes;\n      }\n    });\n  });\n};\n\nconst renderCommentPopup = () => {\n  const commentButton = document.querySelectorAll('button.comment');\n\n  commentButton.forEach((button) => {\n    button.addEventListener('click', () => {\n      const buttonID = button.parentNode.parentNode.getAttribute('id');\n      (0,_modal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(parseInt(buttonID, 10));\n    });\n  });\n};\n\nconst DISPLAY = async () => {\n  const shows = await getApiData(_apiUrl_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  const showLength = 50;\n  for (let i = showLength; i > 0; i -= 1) {\n    const index = Math.floor(Math.random() * 50);\n    showContainer.innerHTML += ` \n    <li class=\"cards\" id=\"${shows[index].id}\">\n      <div class=\"card-image\">\n      <a href=\"${shows[index].url}\" target=\"blank\">\n        <img\n        src=\"${shows[index].image.medium}\"\n        alt=\"${shows[index].name} image\" />\n      </a>\n      </div>\n      <ul class=\"card-body\">\n        <li class=\"likes-container\">\n        <p>${shows[index].name}</p>\n        <p class=\"like-btn\"><i class=\"fa-regular fa-heart like-btn-icon\"></i></p>\n        </li>\n        <p class=\"likes\"></p> \n      </ul>\n      <div class=\"btn-comment\">\n        <button class=\"comment\" >Comments</button>\n      </div>\n    </li>\n    `;\n  }\n  MovieCount.innerHTML = showLength;\n  renderLikes();\n  renderCommentPopup();\n\n  const likeBtnIcon = document.querySelectorAll('i.like-btn-icon');\n  likeBtnIcon.forEach((button) => {\n    button.addEventListener('click', async () => {\n      const parentDiv = button.parentNode.parentNode.parentNode.parentNode;\n      const likeID = parentDiv.getAttribute('id');\n      const likeCount = parentDiv.childNodes[3].childNodes[3];\n      const likeCountValue = parseInt((likeCount.innerHTML), 10);\n      if (likeCount.innerHTML === '') {\n        likeCount.innerHTML = 1;\n      } else {\n        likeCount.innerHTML = likeCountValue + 1;\n      }\n      (0,_likeApi_js__WEBPACK_IMPORTED_MODULE_1__.postLike)({ item_id: likeID });\n    });\n  });\n};\n\n//# sourceURL=webpack://group-capstone-project/./src/modules/homepage.js?");

/***/ }),

/***/ "./src/modules/likeApi.js":
/*!********************************!*\
  !*** ./src/modules/likeApi.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLikesData\": () => (/* binding */ getLikesData),\n/* harmony export */   \"postLike\": () => (/* binding */ postLike)\n/* harmony export */ });\nconst API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/W3X13mPi4LXKYt13LQLN/likes';\n\nconst getLikesData = async () => {\n  const res = await fetch(API_URL);\n  const result = await res.json();\n  return result;\n};\n\nconst postLike = async (userInput) => fetch(API_URL, {\n  method: 'POST',\n  headers: {\n    'content-type': 'application/json',\n  },\n  body: JSON.stringify(userInput),\n})\n  .then((response) => response.json())\n  .then((data) => data.result);\n\n//# sourceURL=webpack://group-capstone-project/./src/modules/likeApi.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apiUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiUrl.js */ \"./src/modules/apiUrl.js\");\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.js */ \"./src/modules/homepage.js\");\n/* harmony import */ var _commentApi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commentApi.js */ \"./src/modules/commentApi.js\");\n\n //eslint-disable-line \r\n\n\nconst modal = document.querySelector('#modal');\nconst body = document.querySelector('body');\n\nconst modalDisplay = (movie) => {\n  modal.innerHTML = '';\n  modal.innerHTML += `\n    <div class=\"close-modal-btn\">\n    <button class=\"close-modal\">X</button>\n  </div>\n  <div class=\"modal-image\">\n    <img src=\"${movie.image.medium}\" alt=\"${movie.name} image\">\n  </div>\n  <div class=\"modal-body\">\n    <h2 class=\"modal-title\">${movie.name}</h2>\n    <p class=\"modal-description\">${movie.summary}</p>\n  </div>\n  <div id=\"comment-section\">\n    <h4 class=\"comment-title\">Comments (<span class=\"comment-counter\">0</span>)</h4>\n    <ul class=\"comment-container\"></ul>\n    <form action=\"\">\n      <h4>Add a comment</h4>\n      <input type=\"text\" required placeholder=\"Your name\" id=\"name\" name=\"name\">\n      <textarea name=\"textarea\" id=\"textarea\"  required placeholder=\"Your insights\"></textarea>\n      <div class=\"btn-comment btn-submit\">\n        <button type=\"submit\" class=\"comment\" >Comment</button>\n      </div>\n    </form>\n  </div>\n  `;\n  modal.classList.remove('hidden');\n  body.classList.add('overflow');\n\n  const closeModalBtn = document.querySelector('.close-modal');\n  closeModalBtn.addEventListener('click', () => {\n    modal.classList.add('hidden');\n    body.classList.remove('overflow');\n  });\n\n  const form = document.querySelector('form');\n  const commentContainer = document.querySelector('.comment-container');\n  const commentCounter = document.querySelector('.comment-counter');\n  form.onsubmit = (e) => {\n    e.preventDefault();\n\n    const { name, textarea } = e.target;\n    const date = new Date();\n    const day = `0${date.getDate()}`.slice(-2);\n    const month = `0${date.getMonth() + 1}`.slice(-2);\n    const year = date.getFullYear();\n    const currentDate = `${year}-${month}-${day}`;\n    const username = `${currentDate} ${name.value}:`;\n\n    commentContainer.innerHTML += `\n     <li class=\"comment-list\">\n      ${username} ${textarea.value}\n     </li>`;\n    commentCounter.innerHTML = parseInt((commentCounter.innerHTML), 10) + 1;\n\n    (0,_commentApi_js__WEBPACK_IMPORTED_MODULE_2__.postComment)({\n      item_id: movie.id,\n      username: name.value,\n      comment: textarea.value,\n    });\n\n    form.reset();\n  };\n};\n\nconst selectedCardDetails = async (id) => {\n  const shows = await (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.getApiData)(_apiUrl_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  const comments = await (0,_commentApi_js__WEBPACK_IMPORTED_MODULE_2__.getComment)(id);\n  shows.forEach((show) => {\n    if (show.id === id) {\n      modalDisplay(show);\n      const commentContainer = document.querySelector('.comment-container');\n      const commentCounter = document.querySelector('.comment-counter');\n      comments.forEach((comment) => {\n        commentContainer.innerHTML += `\n         <li class=\"comment-list\">\n          ${comment.creation_date} ${comment.username} ${comment.comment}\n        </li>`;\n        commentCounter.innerHTML = parseInt((commentCounter.innerHTML), 10) + 1;\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectedCardDetails);\n\n//# sourceURL=webpack://group-capstone-project/./src/modules/modal.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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