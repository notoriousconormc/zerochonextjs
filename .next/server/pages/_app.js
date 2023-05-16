module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/configureStore */ \"./store/configureStore.js\");\nvar _jsxFileName = \"/Users/anex/Desktop/4.29\\u110E\\u116C\\u1100\\u1173\\u11AB\\u1100\\u1169\\u11BC\\u1107\\u116E/next11111/pages/_app.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n// import 'antd/dist/antd.css';\n\n\nconst NodeBird = ({\n  Component\n}) => {\n  return (\n    // 원래 리덕스쓰려면 provider로 감싸줘야하는데 넥스트랑같이사용하면 감쌀필요없음 \n    __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }\n    }, __jsx(\"meta\", {\n      charSet: \"utf-8\",\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 13\n      }\n    }), __jsx(\"title\", {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 13\n      }\n    }, \"NodeBird\")), __jsx(Component, {\n      __self: undefined,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }\n    }))\n  );\n};\nNodeBird.propTypes = {\n  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_3__[\"default\"].withRedux(NodeBird));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTm9kZUJpcmQiLCJDb21wb25lbnQiLCJfX2pzeCIsIlJlYWN0IiwiRnJhZ21lbnQiLCJIZWFkIiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJjaGFyU2V0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwid3JhcHBlciIsIndpdGhSZWR1eCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQjtBQUNTO0FBQ25DO0FBQzZCO0FBQ2lCO0FBRzlDLE1BQU1BLFFBQVEsR0FBR0EsQ0FBQztFQUFDQztBQUFTLENBQUMsS0FBSztFQUM5QjtJQUNJO0lBQ0FDLEtBQUEsQ0FBQUMsNENBQUEsQ0FBQUMsUUFBQSxRQUNBRixLQUFBLENBQUNHLGdEQUFJO01BQUFDLE1BQUE7TUFBQUMsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSxHQUNEVCxLQUFBO01BQU1VLE9BQU8sRUFBQyxPQUFPO01BQUFOLE1BQUE7TUFBQUMsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSxFQUFFLEVBQ3ZCVCxLQUFBO01BQUFJLE1BQUE7TUFBQUMsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSxjQUF1QixDQUNwQixFQUNQVCxLQUFBLENBQUNELFNBQVM7TUFBQUssTUFBQTtNQUFBQyxRQUFBO1FBQUFDLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQTtJQUFBLEVBQUU7RUFDVDtBQUVYLENBQUM7QUFDRFgsUUFBUSxDQUFDYSxTQUFTLEdBQUc7RUFDakJaLFNBQVMsRUFBQ2EsaURBQVMsQ0FBQ0MsV0FBVyxDQUFDQztBQUNwQyxDQUFDO0FBRWNDLDRIQUFPLENBQUNDLFNBQVMsQ0FBQ2xCLFFBQVEsQ0FBQyIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbi8vIGltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XG5cblxuY29uc3QgTm9kZUJpcmQgPSAoe0NvbXBvbmVudH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICAvLyDsm5Drnpgg66as642V7Iqk7JOw66Ck66m0IHByb3ZpZGVy66GcIOqwkOyLuOykmOyVvO2VmOuKlOuNsCDrhKXsiqTtirjrnpHqsJnsnbTsgqzsmqntlZjrqbQg6rCQ7IyA7ZWE7JqU7JeG7J2MIFxuICAgICAgICA8PiAgIFxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiLz5cbiAgICAgICAgICAgIDx0aXRsZT5Ob2RlQmlyZDwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPENvbXBvbmVudC8+XG4gICAgICAgIDwvPlxuICAgIClcbn07XG5Ob2RlQmlyZC5wcm9wVHlwZXMgPSB7XG4gICAgQ29tcG9uZW50OlByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxufVxuXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChOb2RlQmlyZCk7ICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ \"./reducers/user.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ \"./reducers/post.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n\n\nconst changeNickname2 = data => {\n  //  action 데이터를 바꾸고 싶을때 \n  return {\n    type: 'CHANGE_NICKNAME',\n    data\n  };\n};\n\n//  action 데이터를 바꾸고 싶을때 \n// const changeNickname = {    \n//     type : 'CHANGE_NICKNAME',\n//     data : 'boogicho',\n// }\n\n//( 이전상태   , 액션)   => 다음상태\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_3__[\"combineReducers\"])({\n  index: (state = {}, action) => {\n    // 서버사이드렌더링을 위해서 이부분추가해줌 \n    switch (action.type) {\n      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"HYDRATE\"]:\n        return _objectSpread(_objectSpread({}, state), action.payload);\n      default:\n        return state;\n    }\n  },\n  user: _user__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  post: _post__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcz9jZThlIl0sIm5hbWVzIjpbImNoYW5nZU5pY2tuYW1lMiIsImRhdGEiLCJ0eXBlIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJpbmRleCIsInN0YXRlIiwiYWN0aW9uIiwiSFlEUkFURSIsIl9vYmplY3RTcHJlYWQiLCJwYXlsb2FkIiwidXNlciIsInBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE2QztBQUVuQjtBQUNBO0FBQ2M7QUFNeEMsTUFBTUEsZUFBZSxHQUFHQyxJQUFJLElBQUs7RUFBSztFQUNsQyxPQUFPO0lBQ0hDLElBQUksRUFBRyxpQkFBaUI7SUFDeEJEO0VBQ0osQ0FBQztBQUNMLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNEI7QUFDNUIsTUFBTUUsV0FBVyxHQUFHQyw2REFBZSxDQUFDO0VBRXBDQyxLQUFLLEVBQUVBLENBQUNDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBR0MsTUFBTSxLQUFJO0lBQUs7SUFDeEIsUUFBU0EsTUFBTSxDQUFDTCxJQUFJO01BQ2hCLEtBQUtNLDBEQUFPO1FBQ2hCLE9BQUFDLGFBQUEsQ0FBQUEsYUFBQSxLQUFXSCxLQUFLLEdBQUtDLE1BQU0sQ0FBQ0csT0FBTztNQUNuQztRQUNFLE9BQU9KLEtBQUs7SUFBQztFQUdaLENBQUM7RUFDaEJLLG1EQUFJO0VBQ0pDLG1EQUFJQTtBQUNKLENBQUMsQ0FBQztBQUVhVCwwRUFBVyIsImZpbGUiOiIuL3JlZHVjZXJzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcblxuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJztcbmltcG9ydCBwb3N0IGZyb20gJy4vcG9zdCc7XG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcblxuXG5cblxuXG5jb25zdCBjaGFuZ2VOaWNrbmFtZTIgPShkYXRhKSA9PiB7ICAgIC8vICBhY3Rpb24g642w7J207YSw66W8IOuwlOq+uOqzoCDsi7bsnYTrlYwgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZSA6ICdDSEFOR0VfTklDS05BTUUnLFxuICAgICAgICBkYXRhLFxuICAgIH1cbn07XG5cbi8vICBhY3Rpb24g642w7J207YSw66W8IOuwlOq+uOqzoCDsi7bsnYTrlYwgXG4vLyBjb25zdCBjaGFuZ2VOaWNrbmFtZSA9IHsgICAgXG4vLyAgICAgdHlwZSA6ICdDSEFOR0VfTklDS05BTUUnLFxuLy8gICAgIGRhdGEgOiAnYm9vZ2ljaG8nLFxuLy8gfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8oIOydtOyghOyDge2DnCAgICwg7JWh7IWYKSAgID0+IOuLpOydjOyDge2DnFxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuXG5pbmRleDogKHN0YXRlID0ge30gLCBhY3Rpb24gKT0+eyAgICAvLyDshJzrsoTsgqzsnbTrk5zroIzrjZTrp4HsnYQg7JyE7ZW07IScIOydtOu2gOu2hOy2lOqwgO2VtOykjCBcbiAgICAgICAgICAgIHN3aXRjaCAoIGFjdGlvbi50eXBlKXtcbiAgICAgICAgICAgICAgICBjYXNlIEhZRFJBVEU6XG4gICAgICAgICAgICByZXR1cm57IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB9LFxudXNlcixcbnBvc3QsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nconst initialState = {\n  //원본 초기값\n\n  mainPosts: [{\n    id: 1,\n    User: {\n      id: 1,\n      nickname: 'kim'\n    },\n    content: 'first',\n    Images: [{\n      src: 'http://gimg.gilbut.co.kr/BK001958/rn_view_BN001958.jpg'\n    }, {\n      src: 'http://gimg.gilbut.co.kr/BK001958/rn_view_BN001958.jpg'\n    }],\n    Comments: [{}]\n  }],\n  imagePaths: [],\n  postAdded: false\n};\nconst ADD_POST = 'ADD_POST';\nconst addPost = {\n  type: ADD_POST\n};\nconst dummyPost = {\n  id: 2,\n  content: 'dummy',\n  User: {\n    id: 1,\n    nickname: 'zero'\n  },\n  Images: [],\n  Comments: []\n};\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case ADD_POST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mainPosts: [dummyPost, ...state.mainPosts],\n        //dummyPost 제일 앞에 추가해야함(순서중요) 게시글쓰자마자 제일 위에   \n        postAdded: true\n      });\n    default:\n      return state;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzP2E3ZTMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJpbWFnZVBhdGhzIiwicG9zdEFkZGVkIiwiQUREX1BPU1QiLCJhZGRQb3N0IiwidHlwZSIsImR1bW15UG9zdCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsIl9vYmplY3RTcHJlYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRU8sTUFBTUEsWUFBWSxHQUFHO0VBQUc7O0VBRTNCQyxTQUFTLEVBQUUsQ0FDUDtJQUNJQyxFQUFFLEVBQUUsQ0FBQztJQUNMQyxJQUFJLEVBQUU7TUFDRkQsRUFBRSxFQUFFLENBQUM7TUFDTEUsUUFBUSxFQUFFO0lBQ2QsQ0FBQztJQUNEQyxPQUFPLEVBQUUsT0FBTztJQUNoQkMsTUFBTSxFQUFFLENBQUM7TUFDTEMsR0FBRyxFQUFFO0lBQ1QsQ0FBQyxFQUFFO01BQ0NBLEdBQUcsRUFBRTtJQUNULENBQUMsQ0FBQztJQUNGQyxRQUFRLEVBQUUsQ0FBQyxDQUVYLENBQUM7RUFDTCxDQUFDLENBQ0o7RUFDREMsVUFBVSxFQUFFLEVBRVg7RUFDREMsU0FBUyxFQUFDO0FBRWQsQ0FBQztBQUVELE1BQU1DLFFBQVEsR0FBRyxVQUFVO0FBQ3BCLE1BQU1DLE9BQU8sR0FBRztFQUNuQkMsSUFBSSxFQUFHRjtBQUNYLENBQUM7QUFFRCxNQUFNRyxTQUFTLEdBQUc7RUFDZFosRUFBRSxFQUFHLENBQUM7RUFDTkcsT0FBTyxFQUFHLE9BQU87RUFDakJGLElBQUksRUFBQztJQUNERCxFQUFFLEVBQUcsQ0FBQztJQUNORSxRQUFRLEVBQUc7RUFDZixDQUFDO0VBQ0RFLE1BQU0sRUFBQyxFQUFFO0VBQ1RFLFFBQVEsRUFBQztBQUViLENBQUM7QUFFRCxNQUFNTyxPQUFPLEdBQUdBLENBQUNDLEtBQUssR0FBR2hCLFlBQVksRUFBRWlCLE1BQU0sS0FBSztFQUM5QyxRQUFRQSxNQUFNLENBQUNKLElBQUk7SUFDZixLQUFLRixRQUFRO01BQ1QsT0FBQU8sYUFBQSxDQUFBQSxhQUFBLEtBQ09GLEtBQUs7UUFDUmYsU0FBUyxFQUFDLENBQUNhLFNBQVMsRUFBRSxHQUFHRSxLQUFLLENBQUNmLFNBQVMsQ0FBQztRQUFLO1FBQzlDUyxTQUFTLEVBQUU7TUFBSTtJQUV2QjtNQUNJLE9BQU9NLEtBQUs7RUFBQztBQUV6QixDQUFDO0FBRWNELHNFQUFPIiwiZmlsZSI6Ii4vcmVkdWNlcnMvcG9zdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0geyAgLy/sm5Drs7gg7LSI6riw6rCSXG5cbiAgICBtYWluUG9zdHM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBVc2VyOiB7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgbmlja25hbWU6ICdraW0nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdmaXJzdCcsXG4gICAgICAgICAgICBJbWFnZXM6IFt7XG4gICAgICAgICAgICAgICAgc3JjOiAnaHR0cDovL2dpbWcuZ2lsYnV0LmNvLmtyL0JLMDAxOTU4L3JuX3ZpZXdfQk4wMDE5NTguanBnJyxcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBzcmM6ICdodHRwOi8vZ2ltZy5naWxidXQuY28ua3IvQkswMDE5NTgvcm5fdmlld19CTjAwMTk1OC5qcGcnLFxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBDb21tZW50czogW3tcblxuICAgICAgICAgICAgfV1cbiAgICAgICAgfVxuICAgIF0sXG4gICAgaW1hZ2VQYXRoczogW1xuXG4gICAgXSxcbiAgICBwb3N0QWRkZWQ6ZmFsc2UsXG5cbn07XG5cbmNvbnN0IEFERF9QT1NUID0gJ0FERF9QT1NUJztcbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0ge1xuICAgIHR5cGUgOiBBRERfUE9TVCxcbn1cblxuY29uc3QgZHVtbXlQb3N0ID0ge1xuICAgIGlkIDogMixcbiAgICBjb250ZW50IDogJ2R1bW15JyxcbiAgICBVc2VyOntcbiAgICAgICAgaWQgOiAxLFxuICAgICAgICBuaWNrbmFtZSA6ICd6ZXJvJyxcbiAgICB9LFxuICAgIEltYWdlczpbXSxcbiAgICBDb21tZW50czpbXSxcblxufVxuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgQUREX1BPU1Q6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIG1haW5Qb3N0czpbZHVtbXlQb3N0LCAuLi5zdGF0ZS5tYWluUG9zdHNdLCAgICAvL2R1bW15UG9zdCDsoJzsnbwg7JWe7JeQIOy2lOqwgO2VtOyVvO2VqCjsiJzshJzspJHsmpQpIOqyjOyLnOq4gOyTsOyekOuniOyekCDsoJzsnbwg7JyE7JeQICAgXG4gICAgICAgICAgICAgICAgcG9zdEFkZGVkOiB0cnVlLFxuICAgICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginAction\", function() { return loginAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutAction\", function() { return logoutAction; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nconst initialState = {\n  //원본 초기값\n  user: {\n    isLoggedIN: false,\n    user: null,\n    signUpData: {},\n    loginData: {}\n  }\n};\nconst loginAction = data => {\n  //  action 데이터를 바꾸고 싶을때 값을 따로만들어둔다\n  return {\n    type: 'LOG_IN',\n    data\n  };\n};\nconst logoutAction = data => {\n  return {\n    type: 'LOG_IN'\n  };\n};\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case 'LOG_IN':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggedIn: true,\n        user: action.data\n      });\n    case 'LOG_OUT':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggedIn: false,\n        user: null\n      });\n    default:\n      return state;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyLmpzPzJjMDUiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwidXNlciIsImlzTG9nZ2VkSU4iLCJzaWduVXBEYXRhIiwibG9naW5EYXRhIiwibG9naW5BY3Rpb24iLCJkYXRhIiwidHlwZSIsImxvZ291dEFjdGlvbiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsIl9vYmplY3RTcHJlYWQiLCJpc0xvZ2dlZEluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFTyxNQUFNQSxZQUFZLEdBQUc7RUFBRztFQUMzQkMsSUFBSSxFQUFHO0lBQ05DLFVBQVUsRUFBRyxLQUFLO0lBQ2xCRCxJQUFJLEVBQUUsSUFBSTtJQUNWRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ2RDLFNBQVMsRUFBRyxDQUFDO0VBQ2Q7QUFFSCxDQUFDO0FBRU0sTUFBTUMsV0FBVyxHQUFJQyxJQUFJLElBQUc7RUFBWTtFQUM1QyxPQUFPO0lBQ0hDLElBQUksRUFBRSxRQUFRO0lBQ2REO0VBQ0osQ0FBQztBQUNMLENBQUM7QUFFTSxNQUFNRSxZQUFZLEdBQUlGLElBQUksSUFBRztFQUNoQyxPQUFPO0lBQ0hDLElBQUksRUFBRTtFQUNWLENBQUM7QUFDTCxDQUFDO0FBSUEsTUFBTUUsT0FBTyxHQUFHQSxDQUFFQyxLQUFLLEdBQUdWLFlBQVksRUFBQ1csTUFBTSxLQUFJO0VBQzlDLFFBQVFBLE1BQU0sQ0FBQ0osSUFBSTtJQUNmLEtBQUssUUFBUTtNQUNYLE9BQUFLLGFBQUEsQ0FBQUEsYUFBQSxLQUNTRixLQUFLO1FBQ1JHLFVBQVUsRUFBRSxJQUFJO1FBQ2ZaLElBQUksRUFBQ1UsTUFBTSxDQUFDTDtNQUFJO0lBR3ZCLEtBQUssU0FBUztNQUNaLE9BQUFNLGFBQUEsQ0FBQUEsYUFBQSxLQUNTRixLQUFLO1FBQ1JHLFVBQVUsRUFBRSxLQUFLO1FBQ2pCWixJQUFJLEVBQUM7TUFBSTtJQUVuQjtNQUNBLE9BQU9TLEtBQUs7RUFBQztBQUVwQixDQUFDO0FBRWNELHNFQUFPIiwiZmlsZSI6Ii4vcmVkdWNlcnMvdXNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0geyAgLy/sm5Drs7gg7LSI6riw6rCSXG4gICAgdXNlciA6IHtcbiAgICAgaXNMb2dnZWRJTiA6IGZhbHNlLFxuICAgICB1c2VyOiBudWxsLFxuICAgICBzaWduVXBEYXRhOiB7fSxcbiAgICAgbG9naW5EYXRhIDoge30sXG4gICAgfSxcbiAgICBcbiB9O1xuXG4gZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpPT57ICAgICAgICAgICAvLyAgYWN0aW9uIOuNsOydtO2EsOulvCDrsJTqvrjqs6Ag7Iu27J2E65WMIOqwkuydhCDrlLDroZzrp4zrk6TslrTrkZTri6RcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlIDonTE9HX0lOJyxcbiAgICAgICAgZGF0YSxcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2dvdXRBY3Rpb24gPSAoZGF0YSk9PnsgICAgICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZSA6J0xPR19JTicsXG4gICAgfVxufVxuIFxuXG5cbiBjb25zdCByZWR1Y2VyID0gKCBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxhY3Rpb24pID0+e1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpe1xuICAgICAgICBjYXNlICdMT0dfSU4nOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNMb2dnZWRJbiA6dHJ1ZSxcbiAgICAgICAgICAgICAgICAgdXNlcjphY3Rpb24uZGF0YSxcbiAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgJ0xPR19PVVQnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgICAgaXNMb2dnZWRJbiA6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICB1c2VyOm51bGwsXG4gICAgICAgICAgICB9ICAgIFxuICAgICAgICBkZWZhdWx0OiBcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbiB9XG5cbiBleHBvcnQgZGVmYXVsdCByZWR1Y2VyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\n//redux 설치 npm i next-redux-wrapper    next랑함께사용하게끔 설치해서 기존리덕스랑 쫌 다름 \n\n\n\n\n\nconst configureStore = () => {\n  const middlewares = [];\n  const enhancer = false // 히스토리가 쌓이는 이유 불변성을 지켜줬기때문이다 \n  ? undefined //배포용 , 히스토리가 쌓이면 데이터도 많이잡아먹고 중앙데이터들이 어떻게 변하는지 다 보이기때문에 보안에 취약함(devtool)연결안함 \n  : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(...middlewares)); //개발용 웹이랑 연동시켜서 작업반응 DveTool이랑 연동시켜놓음       \n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], enhancer);\n  return store;\n};\nconst wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"createWrapper\"])(configureStore, {\n  debug: true //기본셋팅  debug를 true로 설정해두면 좋다고함 뭔말인지 모르겟는데 \n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (wrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcz8wMTA5Il0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRWlEO0FBQ2E7QUFDQztBQUM5QjtBQUlqQyxNQUFNQSxjQUFjLEdBQUdBLENBQUEsS0FBTTtFQUN6QixNQUFNQyxXQUFXLEdBQUcsRUFBRTtFQUN0QixNQUFNQyxRQUFRLEdBQUcsTUFBMkU7RUFBQSxFQUMxRkMsU0FBd0MsQ0FBb0I7RUFBQSxFQUM1REMsb0ZBQW1CLENBQUNDLDZEQUFlLENBQUMsR0FBR0osV0FBVyxDQUFDLENBQUMsRUFBSTtFQUMxRCxNQUFNSyxLQUFLLEdBQUdDLHlEQUFXLENBQUNDLGlEQUFPLEVBQUVOLFFBQVEsQ0FBQztFQUM1QyxPQUFPSSxLQUFLO0FBQ2hCLENBQUM7QUFDRCxNQUFNRyxPQUFPLEdBQUdDLHdFQUFhLENBQUNWLGNBQWMsRUFBQztFQUN6Q1csS0FBSyxNQUF1QyxDQUFJO0FBQ3BELENBQUMsQ0FBQzs7QUFFYUYsc0VBQU8iLCJmaWxlIjoiLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vcmVkdXgg7ISk7LmYIG5wbSBpIG5leHQtcmVkdXgtd3JhcHBlciAgICBuZXh0656R7ZWo6ruY7IKs7Jqp7ZWY6rKM64GUIOyEpOy5mO2VtOyEnCDquLDsobTrpqzrjZXsiqTrnpEg7KuMIOuLpOumhCBcblxuaW1wb3J0IHtjcmVhdGVXcmFwcGVyfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnXG5cblxuXG5jb25zdCBjb25maWd1cmVTdG9yZSA9ICgpID0+IHtcbiAgICBjb25zdCBtaWRkbGV3YXJlcyA9IFtdO1xuICAgIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g7Z6I7Iqk7Yag66as6rCAIOyMk+ydtOuKlCDsnbTsnKAg67aI67OA7ISx7J2EIOyngOy8nOykrOq4sOuVjOusuOydtOuLpCBcbiAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSkgICAgICAgICAgICAgICAgICAgIC8v67Cw7Y+s7JqpICwg7Z6I7Iqk7Yag66as6rCAIOyMk+ydtOuptCDrjbDsnbTthLDrj4Qg66eO7J207J6h7JWE66i56rOgIOykkeyVmeuNsOydtO2EsOuTpOydtCDslrTrlrvqsowg67OA7ZWY64qU7KeAIOuLpCDrs7TsnbTquLDrlYzrrLjsl5Ag67O07JWI7JeQIOy3qOyVve2VqChkZXZ0b29sKeyXsOqysOyViO2VqCBcbiAgICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSkgICAgLy/qsJzrsJzsmqkg7Ju57J20656RIOyXsOuPmeyLnOy8nOyEnCDsnpHsl4XrsJjsnZEgRHZlVG9vbOydtOuekSDsl7Drj5nsi5zsvJzrhpPsnYwgICAgICAgXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XG4gICAgcmV0dXJuIHN0b3JlO1xufTtcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLHtcbiAgICBkZWJ1Zzpwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JywgICAvL+q4sOuzuOyFi+2MhSAgZGVidWfrpbwgdHJ1ZeuhnCDshKTsoJXtlbTrkZDrqbQg7KKL64uk6rOg7ZWoIOutlOunkOyduOyngCDrqqjrpbTqsp/ripTrjbAgXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/configureStore.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ })

/******/ });