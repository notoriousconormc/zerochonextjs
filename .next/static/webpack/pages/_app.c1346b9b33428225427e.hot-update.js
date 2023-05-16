webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nvar initialState = {\n  //원본 초기값\n\n  mainPosts: [{\n    id: 1,\n    User: {\n      id: 1,\n      nickname: 'kim'\n    },\n    content: 'first',\n    Images: [{\n      src: 'http://gimg.gilbut.co.kr/BK001958/rn_view_BN001958.jpg'\n    }, {\n      src: 'http://gimg.gilbut.co.kr/BK001958/rn_view_BN001958.jpg'\n    }],\n    Comments: [{}]\n  }],\n  imagePaths: [],\n  postAdded: false\n};\nvar ADD_POST = 'ADD_POST';\nvar addPost = {\n  type: ADD_POST\n};\nvar dummyPost = {\n  id: 2,\n  content: 'dummy',\n  User: {\n    id: 1,\n    nickname: 'zero'\n  },\n  Images: [],\n  Comments: []\n};\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  switch (action.type) {\n    case ADD_POST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mainPosts: [dummyPost].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(state.mainPosts)),\n        //dummyPost 제일 앞에 추가해야함(순서중요) 게시글쓰자마자 제일 위에   \n        postAdded: true\n      });\n    default:\n      return state;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvcG9zdC5qcz9hN2UzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImlkIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsIkltYWdlcyIsInNyYyIsIkNvbW1lbnRzIiwiaW1hZ2VQYXRocyIsInBvc3RBZGRlZCIsIkFERF9QT1NUIiwiYWRkUG9zdCIsInR5cGUiLCJkdW1teVBvc3QiLCJyZWR1Y2VyIiwic3RhdGUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJhY3Rpb24iLCJfb2JqZWN0U3ByZWFkIiwiY29uY2F0IiwiX3RvQ29uc3VtYWJsZUFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFTyxJQUFNQSxZQUFZLEdBQUc7RUFBRzs7RUFFM0JDLFNBQVMsRUFBRSxDQUNQO0lBQ0lDLEVBQUUsRUFBRSxDQUFDO0lBQ0xDLElBQUksRUFBRTtNQUNGRCxFQUFFLEVBQUUsQ0FBQztNQUNMRSxRQUFRLEVBQUU7SUFDZCxDQUFDO0lBQ0RDLE9BQU8sRUFBRSxPQUFPO0lBQ2hCQyxNQUFNLEVBQUUsQ0FBQztNQUNMQyxHQUFHLEVBQUU7SUFDVCxDQUFDLEVBQUU7TUFDQ0EsR0FBRyxFQUFFO0lBQ1QsQ0FBQyxDQUFDO0lBQ0ZDLFFBQVEsRUFBRSxDQUFDLENBRVgsQ0FBQztFQUNMLENBQUMsQ0FDSjtFQUNEQyxVQUFVLEVBQUUsRUFFWDtFQUNEQyxTQUFTLEVBQUM7QUFFZCxDQUFDO0FBRUQsSUFBTUMsUUFBUSxHQUFHLFVBQVU7QUFDcEIsSUFBTUMsT0FBTyxHQUFHO0VBQ25CQyxJQUFJLEVBQUdGO0FBQ1gsQ0FBQztBQUVELElBQU1HLFNBQVMsR0FBRztFQUNkWixFQUFFLEVBQUcsQ0FBQztFQUNORyxPQUFPLEVBQUcsT0FBTztFQUNqQkYsSUFBSSxFQUFDO0lBQ0RELEVBQUUsRUFBRyxDQUFDO0lBQ05FLFFBQVEsRUFBRztFQUNmLENBQUM7RUFDREUsTUFBTSxFQUFDLEVBQUU7RUFDVEUsUUFBUSxFQUFDO0FBRWIsQ0FBQztBQUVELElBQU1PLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFBLEVBQXFDO0VBQUEsSUFBakNDLEtBQUssR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUdqQixZQUFZO0VBQUEsSUFBRW9CLE1BQU0sR0FBQUgsU0FBQSxDQUFBQyxNQUFBLE9BQUFELFNBQUEsTUFBQUUsU0FBQTtFQUN6QyxRQUFRQyxNQUFNLENBQUNQLElBQUk7SUFDZixLQUFLRixRQUFRO01BQ1QsT0FBQVUsYUFBQSxDQUFBQSxhQUFBLEtBQ09MLEtBQUs7UUFDUmYsU0FBUyxHQUFFYSxTQUFTLEVBQUFRLE1BQUEsQ0FBQUMsNEZBQUEsQ0FBS1AsS0FBSyxDQUFDZixTQUFTLEVBQUM7UUFBSztRQUM5Q1MsU0FBUyxFQUFFO01BQUk7SUFFdkI7TUFDSSxPQUFPTSxLQUFLO0VBQUM7QUFFekIsQ0FBQztBQUVjRCxzRUFBTyIsImZpbGUiOiIuL3JlZHVjZXJzL3Bvc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgIC8v7JuQ67O4IOy0iOq4sOqwklxuXG4gICAgbWFpblBvc3RzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgVXNlcjoge1xuICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAna2ltJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250ZW50OiAnZmlyc3QnLFxuICAgICAgICAgICAgSW1hZ2VzOiBbe1xuICAgICAgICAgICAgICAgIHNyYzogJ2h0dHA6Ly9naW1nLmdpbGJ1dC5jby5rci9CSzAwMTk1OC9ybl92aWV3X0JOMDAxOTU4LmpwZycsXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgc3JjOiAnaHR0cDovL2dpbWcuZ2lsYnV0LmNvLmtyL0JLMDAxOTU4L3JuX3ZpZXdfQk4wMDE5NTguanBnJyxcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgQ29tbWVudHM6IFt7XG5cbiAgICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICBdLFxuICAgIGltYWdlUGF0aHM6IFtcblxuICAgIF0sXG4gICAgcG9zdEFkZGVkOmZhbHNlLFxuXG59O1xuXG5jb25zdCBBRERfUE9TVCA9ICdBRERfUE9TVCc7XG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IHtcbiAgICB0eXBlIDogQUREX1BPU1QsXG59XG5cbmNvbnN0IGR1bW15UG9zdCA9IHtcbiAgICBpZCA6IDIsXG4gICAgY29udGVudCA6ICdkdW1teScsXG4gICAgVXNlcjp7XG4gICAgICAgIGlkIDogMSxcbiAgICAgICAgbmlja25hbWUgOiAnemVybycsXG4gICAgfSxcbiAgICBJbWFnZXM6W10sXG4gICAgQ29tbWVudHM6W10sXG5cbn1cblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIEFERF9QT1NUOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBtYWluUG9zdHM6W2R1bW15UG9zdCwgLi4uc3RhdGUubWFpblBvc3RzXSwgICAgLy9kdW1teVBvc3Qg7KCc7J28IOyVnuyXkCDstpTqsIDtlbTslbztlago7Iic7ISc7KSR7JqUKSDqsozsi5zquIDsk7DsnpDrp4jsnpAg7KCc7J28IOychOyXkCAgIFxuICAgICAgICAgICAgICAgIHBvc3RBZGRlZDogdHJ1ZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ })

})