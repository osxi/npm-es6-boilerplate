(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(exports,"__esModule",{value:!0});var _yourLibCode=require("./lib/your-lib-code"),_yourLibCode2=_interopRequireDefault(_yourLibCode);require("babel-register"),exports["default"]=_yourLibCode2["default"];
},{"./lib/your-lib-code":2,"babel-register":3}],2:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=function(){return"sweet"};
},{}],3:[function(require,module,exports){
"use strict";exports.__esModule=!0,exports["default"]=function(){},module.exports=exports["default"];
},{}]},{},[1]);
