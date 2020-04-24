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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/controller/Controller.js":
/*!**************************************!*\
  !*** ./src/controller/Controller.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modeController_MenuModeController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modeController/MenuModeController */ "./src/controller/modeController/MenuModeController.js");
/* harmony import */ var _modeController_TrainModeController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modeController/TrainModeController */ "./src/controller/modeController/TrainModeController.js");
/* harmony import */ var _modeController_PlayModeController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modeController/PlayModeController */ "./src/controller/modeController/PlayModeController.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Controller = /*#__PURE__*/function () {
  function Controller(view, model) {
    var _this = this;

    _classCallCheck(this, Controller);

    this.view = view;
    this.model = model;
    this.view.drowMenu(this.model.menu);
    this.setModeController(true);
    this.view.on('toggle_switched', this.toggleHandler.bind(this));
    this.view.on('main_page_requested', function () {
      return _this.setModeController(true);
    });
    this.view.on('statistic_requested', this.getStatistic.bind(this));
    this.view.on('category_requested', this.model.setCategory.bind(this.model));
    this.model.on('mode_changed', this.modeHandler.bind(this));
    this.model.on('category_changed', this.setModeController.bind(this));
    this.view.on('reset_stat_clicked', function () {
      _this.model.statistic.reset();

      _this.getStatistic();
    });
  }

  _createClass(Controller, [{
    key: "setModeController",
    value: function setModeController() {
      var _this2 = this;

      var isMenu = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.view.hideStatistic();

      if (this.modeController) {
        this.view.off('card_clicked', this.modeController.cardHandler.bind(this.modeController));
        this.modeController.destruct();
        this.view.cleanScoreContainer();
      }

      if (isMenu) {
        this.model.isMenuMode = true;
        this.modeController = new _modeController_MenuModeController__WEBPACK_IMPORTED_MODULE_0__["default"](this.view, this.model);
        this.modeController.on('category_requested', this.model.setCategory.bind(this.model));
      } else {
        if (this.model.mode === 'train') {
          this.modeController = new _modeController_TrainModeController__WEBPACK_IMPORTED_MODULE_1__["default"](this.view, this.model);
        }

        if (this.model.mode === 'play') {
          this.modeController = new _modeController_PlayModeController__WEBPACK_IMPORTED_MODULE_2__["default"](this.view, this.model);
          this.modeController.on('main_page_requested', function () {
            return _this2.setModeController(true);
          });
        }
      }

      this.view.on('card_clicked', this.modeController.cardHandler.bind(this.modeController));
    }
  }, {
    key: "getStatistic",
    value: function getStatistic() {
      this.view.drawStatistic(this.model.statistic.getWords());
      this.view.cleanPage();
      this.view.showStatistic();
    }
  }, {
    key: "toggleHandler",
    value: function toggleHandler() {
      this.model.changeMode();
    }
  }, {
    key: "modeHandler",
    value: function modeHandler(mode) {
      if (!this.model.isMenuMode) {
        this.setModeController();
      }

      this.view.changeBackgroundColor(mode);
    }
  }]);

  return Controller;
}();

/* harmony default export */ __webpack_exports__["default"] = (Controller);

/***/ }),

/***/ "./src/controller/modeController/MenuModeController.js":
/*!*************************************************************!*\
  !*** ./src/controller/modeController/MenuModeController.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModeController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModeController */ "./src/controller/modeController/ModeController.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var MenuModeController = /*#__PURE__*/function (_ModeController) {
  _inherits(MenuModeController, _ModeController);

  var _super = _createSuper(MenuModeController);

  function MenuModeController(view, model) {
    var _this;

    _classCallCheck(this, MenuModeController);

    _this = _super.call(this, view, model);

    _this.createCards();

    return _this;
  }

  _createClass(MenuModeController, [{
    key: "createCards",
    value: function createCards() {
      this.view.cleanPage();
      this.view.drawCards(this.model.menu.items);
    }
  }, {
    key: "cardHandler",
    value: function cardHandler(id) {
      this.emit('category_requested', id);
      this.view.activeLinkView(id);
    }
  }]);

  return MenuModeController;
}(_ModeController__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (MenuModeController);

/***/ }),

/***/ "./src/controller/modeController/ModeController.js":
/*!*********************************************************!*\
  !*** ./src/controller/modeController/ModeController.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_eventMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/eventMixin */ "./src/mixins/eventMixin.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable class-methods-use-this */


var ModeController = /*#__PURE__*/function () {
  function ModeController(view, model) {
    _classCallCheck(this, ModeController);

    this.view = view;
    this.model = model;
  }

  _createClass(ModeController, [{
    key: "createCards",
    value: function createCards() {
      this.view.cleanPage();
      this.view.drawCards(this.model.category.cards);
    }
  }, {
    key: "playWord",
    value: function playWord(src) {
      var audio = new Audio();
      audio.preload = 'auto';
      audio.src = src;
      audio.play();
    }
  }, {
    key: "destruct",
    value: function destruct() {
      return true;
    }
  }]);

  return ModeController;
}();

Object.assign(ModeController.prototype, _mixins_eventMixin__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (ModeController);

/***/ }),

/***/ "./src/controller/modeController/PlayModeController.js":
/*!*************************************************************!*\
  !*** ./src/controller/modeController/PlayModeController.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModeController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModeController */ "./src/controller/modeController/ModeController.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable class-methods-use-this */


var PlayModeController = /*#__PURE__*/function (_ModeController) {
  _inherits(PlayModeController, _ModeController);

  var _super = _createSuper(PlayModeController);

  function PlayModeController(view, model) {
    var _this;

    _classCallCheck(this, PlayModeController);

    _this = _super.call(this, view, model);
    _this.isStart = false;
    _this.points = [];

    _this.createCards();

    _this.init();

    _this.view.on('play_button_pushed', _this.roundStart.bind(_assertThisInitialized(_this)));

    return _this;
  }

  _createClass(PlayModeController, [{
    key: "init",
    value: function init() {
      this.view.playModeView();
      this.view.drawButton();
      this.round = 1;
      this.roundList = this.model.getAllCards();
      this.shuffle(this.roundList);
    }
  }, {
    key: "destruct",
    value: function destruct() {
      this.view.off('play_button_pushed');
    }
  }, {
    key: "roundStart",
    value: function roundStart() {
      this.isStart = true;

      if (this.round > this.roundList.length) {
        this.gameOver();
      } else {
        this.playWord(this.roundList[this.round - 1].audioSrc);
      }
    }
  }, {
    key: "cardHandler",
    value: function cardHandler(id) {
      if (!this.isStart) return;

      if (this.checkCorrectAnswer(id)) {
        this.setPoint(true);
        this.model.statistic.setStatistic(id, 'correctAnswer');
        this.view.clickedCard(id);
        this.playWord('/assets/audio/correct.mp3');
        this.round += 1;
        this.roundStart();
      } else {
        this.setPoint(false);
        this.model.statistic.setStatistic(id, 'errorAnswer');
        this.playWord('/assets/audio/error.mp3');
      }
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      var _this2 = this;

      var score = this.points.reduce(function (acc, point) {
        return point ? acc * 1 : acc * 0;
      }, 1);
      var errors = this.points.reduce(function (acc, point) {
        return !point ? acc + 1 : acc;
      }, 0);
      this.view.off('play_button_pushed');

      if (score > 0) {
        this.view.showWinResult();
        this.playWord('/assets/audio/success.mp3');
      } else {
        this.view.showFailResult(errors);
        this.playWord('/assets/audio/failure.mp3');
      }

      this.view.cleanScoreContainer();
      setTimeout(function () {
        _this2.view.hideResult();

        _this2.emit('main_page_requested');
      }, 2000);
    }
  }, {
    key: "checkCorrectAnswer",
    value: function checkCorrectAnswer(id) {
      return Number(id) === this.roundList[this.round - 1].id;
    }
  }, {
    key: "setPoint",
    value: function setPoint(point) {
      this.points.push(point);
      this.view.drawScore(this.points);
    }
  }, {
    key: "shuffle",
    value: function shuffle(activeCards) {
      activeCards.sort(function () {
        return 0.5 - Math.random();
      });
    }
  }]);

  return PlayModeController;
}(_ModeController__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (PlayModeController);

/***/ }),

/***/ "./src/controller/modeController/TrainModeController.js":
/*!**************************************************************!*\
  !*** ./src/controller/modeController/TrainModeController.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModeController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModeController */ "./src/controller/modeController/ModeController.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var TrainModeController = /*#__PURE__*/function (_ModeController) {
  _inherits(TrainModeController, _ModeController);

  var _super = _createSuper(TrainModeController);

  function TrainModeController(view, model) {
    var _this;

    _classCallCheck(this, TrainModeController);

    _this = _super.call(this, view, model);

    _this.createCards();

    return _this;
  }

  _createClass(TrainModeController, [{
    key: "createCards",
    value: function createCards() {
      this.view.cleanPage();
      this.view.drawCards(this.model.category.cards, true);
    }
  }, {
    key: "cardHandler",
    value: function cardHandler(id) {
      this.view.flipCard(id);
      this.playWord(this.model.getCard(id).audioSrc);
      this.model.statistic.setStatistic(id, 'trainClicks');
    }
  }]);

  return TrainModeController;
}(_ModeController__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (TrainModeController);

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  title: 'Action (set A)',
  img: '/assets/img/dance.jpg',
  id: 1,
  words: [{
    word: 'cry',
    translation: 'плакать',
    img: '/assets/img/cry.jpg',
    audioSrc: '/assets/audio/cry.mp3',
    id: 1
  }, {
    word: 'dance',
    translation: 'танцевать',
    img: '/assets/img/dance.jpg',
    audioSrc: '/assets/audio/dance.mp3',
    id: 2
  }, {
    word: 'dive',
    translation: 'нырять',
    img: '/assets/img/dive.jpg',
    audioSrc: '/assets/audio/dive.mp3',
    id: 3
  }, {
    word: 'draw',
    translation: 'рисовать',
    img: '/assets/img/draw.jpg',
    audioSrc: '/assets/audio/draw.mp3',
    id: 4
  }, {
    word: 'fish',
    translation: 'ловить рыбу',
    img: '/assets/img/fish.jpg',
    audioSrc: '/assets/audio/fish.mp3',
    id: 5
  }, {
    word: 'fly',
    translation: 'летать',
    img: '/assets/img/fly.jpg',
    audioSrc: '/assets/audio/fly.mp3',
    id: 6
  }, {
    word: 'hug',
    translation: 'обнимать',
    img: '/assets/img/hug.jpg',
    audioSrc: '/assets/audio/hug.mp3',
    id: 7
  }, {
    word: 'jump',
    translation: 'прыгать',
    img: '/assets/img/jump.jpg',
    audioSrc: '/assets/audio/jump.mp3',
    id: 8
  }]
}, {
  title: 'Action (set B)',
  img: '/assets/img/swim.jpg',
  id: 2,
  words: [{
    word: 'open',
    translation: 'открывать',
    img: '/assets/img/open.jpg',
    audioSrc: '/assets/audio/open.mp3',
    id: 9
  }, {
    word: 'play',
    translation: 'играть',
    img: '/assets/img/play.jpg',
    audioSrc: '/assets/audio/play.mp3',
    id: 10
  }, {
    word: 'point',
    translation: 'указывать',
    img: '/assets/img/point.jpg',
    audioSrc: '/assets/audio/point.mp3',
    id: 11
  }, {
    word: 'ride',
    translation: 'ездить',
    img: '/assets/img/ride.jpg',
    audioSrc: '/assets/audio/ride.mp3',
    id: 12
  }, {
    word: 'run',
    translation: 'бегать',
    img: '/assets/img/run.jpg',
    audioSrc: '/assets/audio/run.mp3',
    id: 13
  }, {
    word: 'sing',
    translation: 'петь',
    img: '/assets/img/sing.jpg',
    audioSrc: '/assets/audio/sing.mp3',
    id: 14
  }, {
    word: 'skip',
    translation: 'пропускать, прыгать',
    img: '/assets/img/skip.jpg',
    audioSrc: '/assets/audio/skip.mp3',
    id: 15
  }, {
    word: 'swim',
    translation: 'плавать',
    img: '/assets/img/swim.jpg',
    audioSrc: '/assets/audio/swim.mp3',
    id: 16
  }]
}, {
  title: 'Action (set C)',
  img: '/assets/img/read.jpg',
  id: 3,
  words: [{
    word: 'read',
    translation: 'читать',
    img: '/assets/img/read.jpg',
    audioSrc: '/assets/audio/read.mp3',
    id: 17
  }, {
    word: 'sleep',
    translation: 'спать',
    img: '/assets/img/sleep.jpg',
    audioSrc: '/assets/audio/sleep.mp3',
    id: 18
  }, {
    word: 'study',
    translation: 'учиться',
    img: '/assets/img/study.jpg',
    audioSrc: '/assets/audio/study.mp3',
    id: 19
  }, {
    word: 'help',
    translation: 'помогать',
    img: '/assets/img/help.jpg',
    audioSrc: '/assets/audio/help.mp3',
    id: 20
  }, {
    word: 'cook',
    translation: 'готовить',
    img: '/assets/img/cook.jpg',
    audioSrc: '/assets/audio/cook.mp3',
    id: 22
  }, {
    word: 'drink',
    translation: 'пить',
    img: '/assets/img/drink.jpg',
    audioSrc: '/assets/audio/drink.mp3',
    id: 23
  }, {
    word: 'listen',
    translation: 'слушать',
    img: '/assets/img/listen.jpg',
    audioSrc: '/assets/audio/listen.mp3',
    id: 24
  }, {
    word: 'eat',
    translation: 'кушать',
    img: '/assets/img/eat.jpg',
    audioSrc: '/assets/audio/eat.mp3',
    id: 25
  }]
}, {
  title: 'Abjective',
  img: '/assets/img/funny.jpg',
  id: 4,
  words: [{
    word: 'beautiful',
    translation: 'красивый',
    img: '/assets/img/beautiful.jpg',
    audioSrc: '/assets/audio/beautiful.mp3',
    id: 26
  }, {
    word: 'big',
    translation: 'большой',
    img: '/assets/img/big.jpg',
    audioSrc: '/assets/audio/big.mp3',
    id: 27
  }, {
    word: 'tasty',
    translation: 'вкусный',
    img: '/assets/img/tasty.jpg',
    audioSrc: '/assets/audio/tasty.mp3',
    id: 28
  }, {
    word: 'old',
    translation: 'старый',
    img: '/assets/img/old.jpg',
    audioSrc: '/assets/audio/old.mp3',
    id: 29
  }, {
    word: 'friendly',
    translation: 'дружелюбный',
    img: '/assets/img/friendly.jpg',
    audioSrc: '/assets/audio/friendly.mp3',
    id: 30
  }, {
    word: 'funny',
    translation: 'смешной',
    img: '/assets/img/funny.jpg',
    audioSrc: '/assets/audio/funny.mp3',
    id: 31
  }, {
    word: 'colorful',
    translation: 'разноцветный',
    img: '/assets/img/colorful.jpg',
    audioSrc: '/assets/audio/colorful.mp3',
    id: 32
  }, {
    word: 'small',
    translation: 'маленький',
    img: '/assets/img/small.jpg',
    audioSrc: '/assets/audio/small.mp3',
    id: 33
  }]
}, {
  title: 'Animal (set A)',
  img: '/assets/img/rabbit.jpg',
  id: 5,
  words: [{
    word: 'cat',
    translation: 'кот',
    img: '/assets/img/cat.jpg',
    audioSrc: '/assets/audio/cat.mp3',
    id: 34
  }, {
    word: 'chick',
    translation: 'цыплёнок',
    img: '/assets/img/chick.jpg',
    audioSrc: '/assets/audio/chick.mp3',
    id: 35
  }, {
    word: 'chicken',
    translation: 'курица',
    img: '/assets/img/chicken.jpg',
    audioSrc: '/assets/audio/chicken.mp3',
    id: 36
  }, {
    word: 'dog',
    translation: 'собака',
    img: '/assets/img/dog.jpg',
    audioSrc: '/assets/audio/dog.mp3',
    id: 37
  }, {
    word: 'horse',
    translation: 'лошадь',
    img: '/assets/img/horse.jpg',
    audioSrc: '/assets/audio/horse.mp3',
    id: 38
  }, {
    word: 'pig',
    translation: 'свинья',
    img: '/assets/img/pig.jpg',
    audioSrc: '/assets/audio/pig.mp3',
    id: 39
  }, {
    word: 'rabbit',
    translation: 'кролик',
    img: '/assets/img/rabbit.jpg',
    audioSrc: '/assets/audio/rabbit.mp3',
    id: 40
  }, {
    word: 'sheep',
    translation: 'овца',
    img: '/assets/img/sheep.jpg',
    audioSrc: '/assets/audio/sheep.mp3',
    id: 41
  }]
}, {
  title: 'Animal (set B)',
  img: '/assets/img/lion.jpg',
  id: 6,
  words: [{
    word: 'bird',
    translation: 'птица',
    img: '/assets/img/bird.jpg',
    audioSrc: '/assets/audio/bird.mp3',
    id: 42
  }, {
    word: 'fish',
    translation: 'рыба',
    img: '/assets/img/fish1.jpg',
    audioSrc: '/assets/audio/fish.mp3',
    id: 43
  }, {
    word: 'frog',
    translation: 'жаба',
    img: '/assets/img/frog.jpg',
    audioSrc: '/assets/audio/frog.mp3',
    id: 44
  }, {
    word: 'giraffe',
    translation: 'жирафа',
    img: '/assets/img/giraffe.jpg',
    audioSrc: '/assets/audio/giraffe.mp3',
    id: 45
  }, {
    word: 'lion',
    translation: 'лев',
    img: '/assets/img/lion.jpg',
    audioSrc: '/assets/audio/lion.mp3',
    id: 46
  }, {
    word: 'mouse',
    translation: 'мышь',
    img: '/assets/img/mouse.jpg',
    audioSrc: '/assets/audio/mouse.mp3',
    id: 47
  }, {
    word: 'turtle',
    translation: 'черепаха',
    img: '/assets/img/turtle.jpg',
    audioSrc: '/assets/audio/turtle.mp3',
    id: 48
  }, {
    word: 'dolphin',
    translation: 'дельфин',
    img: '/assets/img/dolphin.jpg',
    audioSrc: '/assets/audio/dolphin.mp3',
    id: 49
  }]
}, {
  title: 'Clothes',
  img: '/assets/img/dress.jpg',
  id: 7,
  words: [{
    word: 'skirt',
    translation: 'юбка',
    img: '/assets/img/skirt.jpg',
    audioSrc: '/assets/audio/skirt.mp3',
    id: 50
  }, {
    word: 'pants',
    translation: 'брюки',
    img: '/assets/img/pants.jpg',
    audioSrc: '/assets/audio/pants.mp3',
    id: 51
  }, {
    word: 'blouse',
    translation: 'блузка',
    img: '/assets/img/blouse.jpg',
    audioSrc: '/assets/audio/blouse.mp3',
    id: 52
  }, {
    word: 'dress',
    translation: 'платье',
    img: '/assets/img/dress.jpg',
    audioSrc: '/assets/audio/dress.mp3',
    id: 53
  }, {
    word: 'boot',
    translation: 'ботинок',
    img: '/assets/img/boot.jpg',
    audioSrc: '/assets/audio/boot.mp3',
    id: 54
  }, {
    word: 'shirt',
    translation: 'рубашка',
    img: '/assets/img/shirt.jpg',
    audioSrc: '/assets/audio/shirt.mp3',
    id: 55
  }, {
    word: 'coat',
    translation: 'пальто',
    img: '/assets/img/coat.jpg',
    audioSrc: '/assets/audio/coat.mp3',
    id: 56
  }, {
    word: 'shoe',
    translation: 'туфли',
    img: '/assets/img/shoe.jpg',
    audioSrc: '/assets/audio/shoe.mp3',
    id: 57
  }]
}, {
  title: 'Emotions',
  img: '/assets/img/smile.jpg',
  id: 8,
  words: [{
    word: 'sad',
    translation: 'грустный',
    img: '/assets/img/sad.jpg',
    audioSrc: '/assets/audio/sad.mp3',
    id: 58
  }, {
    word: 'angry',
    translation: 'сердитый',
    img: '/assets/img/angry.jpg',
    audioSrc: '/assets/audio/angry.mp3',
    id: 59
  }, {
    word: 'happy',
    translation: 'счастливый',
    img: '/assets/img/happy.jpg',
    audioSrc: '/assets/audio/happy.mp3',
    id: 60
  }, {
    word: 'tired',
    translation: 'уставший',
    img: '/assets/img/tired.jpg',
    audioSrc: '/assets/audio/tired.mp3',
    id: 61
  }, {
    word: 'surprised',
    translation: 'удивлённый',
    img: '/assets/img/surprised.jpg',
    audioSrc: '/assets/audio/surprised.mp3',
    id: 62
  }, {
    word: 'scared',
    translation: 'испуганный',
    img: '/assets/img/scared.jpg',
    audioSrc: '/assets/audio/scared.mp3',
    id: 63
  }, {
    word: 'smile',
    translation: 'улыбка',
    img: '/assets/img/smile.jpg',
    audioSrc: '/assets/audio/smile.mp3',
    id: 64
  }, {
    word: 'laugh',
    translation: 'смех',
    img: '/assets/img/laugh.jpg',
    audioSrc: '/assets/audio/laugh.mp3',
    id: 65
  }]
}]);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller_Controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller/Controller */ "./src/controller/Controller.js");
/* harmony import */ var _view_View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/View */ "./src/view/View.js");
/* harmony import */ var _model_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/Model */ "./src/model/Model.js");



new _controller_Controller__WEBPACK_IMPORTED_MODULE_0__["default"](new _view_View__WEBPACK_IMPORTED_MODULE_1__["default"](), new _model_Model__WEBPACK_IMPORTED_MODULE_2__["default"]('train'));

/***/ }),

/***/ "./src/mixins/eventMixin.js":
/*!**********************************!*\
  !*** ./src/mixins/eventMixin.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// eslint-disable-file no-underscore-dangle
var eventMixin = {
  on: function on(eventName, handler) {
    // eslint-disable-file no-underscore-dangle
    if (!this._eventHandlers) this._eventHandlers = {};

    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = [];
    }

    this._eventHandlers[eventName].push(handler);
  },
  off: function off(eventName) {
    var handlers = this._eventHandlers && this._eventHandlers[eventName];
    if (!handlers) return;
    handlers.length = 0;
  },
  emit: function emit(eventName) {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (!this._eventHandlers || !this._eventHandlers[eventName]) {
      return;
    }

    this._eventHandlers[eventName].forEach(function (handler) {
      return handler.apply(_this, args);
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (eventMixin);

/***/ }),

/***/ "./src/model/Card.js":
/*!***************************!*\
  !*** ./src/model/Card.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Card = function Card(id, word, translation, img, audioSrc) {
  _classCallCheck(this, Card);

  this.id = id;
  this.word = word;
  this.translation = translation;
  this.img = img;
  this.audioSrc = audioSrc;
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./src/model/Category.js":
/*!*******************************!*\
  !*** ./src/model/Category.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ "./src/model/Card.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable class-methods-use-this */


var Category = /*#__PURE__*/function () {
  function Category(id, title, img, words) {
    _classCallCheck(this, Category);

    this.id = id;
    this.title = title;
    this.img = img;
    this.cards = this.createCards(words);
  }

  _createClass(Category, [{
    key: "createCards",
    value: function createCards(array) {
      var cards = [];
      array.forEach(function (_ref) {
        var id = _ref.id,
            word = _ref.word,
            translation = _ref.translation,
            img = _ref.img,
            audioSrc = _ref.audioSrc;
        cards.push(new _Card__WEBPACK_IMPORTED_MODULE_0__["default"](id, word, translation, img, audioSrc));
      });
      return cards;
    }
  }]);

  return Category;
}();

/* harmony default export */ __webpack_exports__["default"] = (Category);

/***/ }),

/***/ "./src/model/Menu.js":
/*!***************************!*\
  !*** ./src/model/Menu.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ "./src/model/Card.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable class-methods-use-this */


var Menu = /*#__PURE__*/function () {
  function Menu(items) {
    _classCallCheck(this, Menu);

    this.items = this.createItems(items);
  }

  _createClass(Menu, [{
    key: "createItems",
    value: function createItems(array) {
      var items = [];
      array.forEach(function (_ref) {
        var id = _ref.id,
            title = _ref.title,
            img = _ref.img;
        items.push(new _Card__WEBPACK_IMPORTED_MODULE_0__["default"](id, title, null, img));
      });
      return items;
    }
  }]);

  return Menu;
}();

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./src/model/Model.js":
/*!****************************!*\
  !*** ./src/model/Model.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Category */ "./src/model/Category.js");
/* harmony import */ var _mixins_eventMixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/eventMixin */ "./src/mixins/eventMixin.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ "./src/model/Menu.js");
/* harmony import */ var _Statistic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Statistic */ "./src/model/Statistic.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data */ "./src/data.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Model = /*#__PURE__*/function () {
  function Model(mode) {
    _classCallCheck(this, Model);

    this.mode = mode;
    this.isMenuMode = true;
    this.data = _data__WEBPACK_IMPORTED_MODULE_4__["default"];
    this.statistic = new _Statistic__WEBPACK_IMPORTED_MODULE_3__["default"]();
    this.createMenu(this.data);
  }

  _createClass(Model, [{
    key: "changeMode",
    value: function changeMode() {
      this.mode = this.mode === 'train' ? 'play' : 'train';
      this.emit('mode_changed', this.mode);
    }
  }, {
    key: "setCategory",
    value: function setCategory(id) {
      this.createCategory(this.data.filter(function (category) {
        return category.id === Number(id);
      })[0]);
      this.isMenuMode = false;
      this.emit('category_changed');
    }
  }, {
    key: "getCard",
    value: function getCard(id) {
      return this.category.cards.filter(function (card) {
        return card.id === Number(id);
      })[0];
    }
  }, {
    key: "getAllCards",
    value: function getAllCards() {
      return this.category.cards;
    }
  }, {
    key: "createCategory",
    value: function createCategory(_ref) {
      var id = _ref.id,
          title = _ref.title,
          img = _ref.img,
          words = _ref.words;
      this.category = new _Category__WEBPACK_IMPORTED_MODULE_0__["default"](id, title, img, words);
    }
  }, {
    key: "createMenu",
    value: function createMenu(data) {
      this.menu = new _Menu__WEBPACK_IMPORTED_MODULE_2__["default"](data);
    }
  }]);

  return Model;
}();

Object.assign(Model.prototype, _mixins_eventMixin__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (Model);

/***/ }),

/***/ "./src/model/Statistic.js":
/*!********************************!*\
  !*** ./src/model/Statistic.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ "./src/data.js");
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable no-restricted-syntax */


var Statistic = /*#__PURE__*/function () {
  function Statistic() {
    _classCallCheck(this, Statistic);

    this.storage = window.localStorage;
    this.words = this.loadOrCreate();
  }

  _createClass(Statistic, [{
    key: "getWords",
    value: function getWords() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';

      if (id === 'all') {
        // eslint-disable-next-line max-len
        return this.words.reduce(function (acc, category) {
          return acc.concat(category.words).sort(function (a, b) {
            return a.word.charCodeAt(0) - b.word.charCodeAt(0);
          });
        }, []);
      }

      return this.words.filter(function (category) {
        return category.id === Number(id);
      })[0].words;
    }
  }, {
    key: "setStatistic",
    value: function setStatistic(id, parameter) {
      var _iterator = _createForOfIteratorHelper(this.words),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var category = _step.value;
          var flag = false;

          var _iterator2 = _createForOfIteratorHelper(category.words),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var word = _step2.value;

              if (word.id === Number(id)) {
                word[parameter] += 1;
                flag = true;
                break;
              }

              if (flag) break;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      this.storage.setItem('statistic', JSON.stringify(this.words));
    }
  }, {
    key: "loadOrCreate",
    value: function loadOrCreate() {
      var words = this.storage.getItem('statistic');

      if (!words) {
        words = this.createData();
        return words;
      }

      return JSON.parse(words);
    }
  }, {
    key: "createData",
    value: function createData() {
      var words = _data__WEBPACK_IMPORTED_MODULE_0__["default"].map(function (category) {
        return {
          id: category.id,
          title: category.title,
          words: category.words.map(function (word) {
            return {
              id: word.id,
              word: word.word,
              translation: word.translation,
              trainClicks: 0,
              correctAnswer: 0,
              errorAnswer: 0
            };
          })
        };
      });
      this.storage.setItem('statistic', JSON.stringify(words));
      return words;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.storage.removeItem('statistic');
      this.words = this.createData();
    }
  }]);

  return Statistic;
}();

/* harmony default export */ __webpack_exports__["default"] = (Statistic);

/***/ }),

/***/ "./src/view/View.js":
/*!**************************!*\
  !*** ./src/view/View.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_eventMixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixins/eventMixin */ "./src/mixins/eventMixin.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable no-return-assign */

/* eslint-disable no-param-reassign */

/* eslint-disable class-methods-use-this */

/* eslint-disable camelcase */


var View = /*#__PURE__*/function () {
  function View() {
    var _this = this;

    _classCallCheck(this, View);

    this.body = document.querySelector('body');
    this.logo = document.querySelector('.logo');
    this.menu = document.querySelector('#menu');
    this.navigation = document.querySelector('.header__navigation');
    this.hamburger = document.querySelector('.hamburger');
    this.cardsContainer = document.querySelector('.main-cards-images');
    this.scoreContainer = document.querySelector('.score');
    this.card = document.querySelector('.image-link');
    this.resetStat = document.querySelector('.reset-button');
    this.statContainer = document.querySelector('.statist');
    this.link = document.querySelector('li');
    this.statTable = document.querySelector('#tbody');
    this.switcher = document.querySelector('input');
    this.overlay = document.querySelector('.overlay');
    this.hamburger.addEventListener('click', this.clickHamburgerHandler.bind(this));
    this.navigation.addEventListener('click', this.clickLinksHandler.bind(this));
    this.switcher.addEventListener('click', this.clickSwitcherHandler.bind(this));
    this.cardsContainer.addEventListener('click', this.clickCardsHandler.bind(this));
    this.resetStat.addEventListener('click', this.clickResetHandler.bind(this));

    this.cardsContainer.onclick = function (e) {
      _this.closeMobileMenu(e);
    };

    this.logo.onclick = function (e) {
      _this.closeMobileMenu(e);
    };

    this.scoreContainer.onclick = function (e) {
      _this.closeMobileMenu(e);
    };

    this.statContainer.onclick = function (e) {
      _this.closeMobileMenu(e);
    };
  }

  _createClass(View, [{
    key: "clickResetHandler",
    value: function clickResetHandler() {
      this.emit('reset_stat_clicked');
    }
  }, {
    key: "clickCardsHandler",
    value: function clickCardsHandler(e) {
      var card = e.target.closest('.card');
      var card_id = card.getAttribute('data-id');
      this.emit('card_clicked', card_id);
      this.closeMobileMenu();
    }
  }, {
    key: "clickHamburgerHandler",
    value: function clickHamburgerHandler() {
      if (this.navigation.style.left === '-108%' || this.navigation.style.left === '') {
        this.openMobileMenu();
      } else {
        this.closeMobileMenu();
      }
    }
  }, {
    key: "clickLinksHandler",
    value: function clickLinksHandler(e) {
      this.cleanScoreContainer();

      if (e.target.tagName === 'LI') {
        this.closeMobileMenu();

        if (e.target.id === 'maine-page__link') {
          this.emit('main_page_requested');
          this.activeLinkMainStatisticView('#maine-page__link');
        } else if (e.target.id === 'statistic__link') {
          this.emit('statistic_requested');
          this.activeLinkMainStatisticView('#statistic__link');
        } else {
          this.emit('category_requested', e.target.getAttribute('data-id'));
          this.activeLinkView(e.target.getAttribute('data-id'));
        }
      }
    }
  }, {
    key: "activeLinkMainStatisticView",
    value: function activeLinkMainStatisticView(id) {
      var mainLinks = document.querySelector(id);
      var links = this.menu.querySelectorAll('li');
      links.forEach(function (e) {
        e.classList.remove('active-link');
      });
      mainLinks.classList.add('active-link');
    }
  }, {
    key: "activeLinkView",
    value: function activeLinkView(id) {
      var links = this.menu.querySelectorAll('li');
      links.forEach(function (e) {
        e.classList.remove('active-link');
      });
      var el = this.menu.querySelector("li[data-id=\"".concat(id, "\"]"));
      el.classList.add('active-link');
    }
  }, {
    key: "leaveCardHandler",
    value: function leaveCardHandler(e) {
      e.target.classList.remove('is-flipped');
    }
  }, {
    key: "clickSwitcherHandler",
    value: function clickSwitcherHandler() {
      this.emit('toggle_switched');
    }
  }, {
    key: "clickPlayButtonHandler",
    value: function clickPlayButtonHandler() {
      this.emit('play_button_pushed');
      this.repeatViewButton();
    }
  }, {
    key: "repeatViewButton",
    value: function repeatViewButton() {
      var button = document.querySelector('.button-start');
      button.classList.add('repeat');
    }
  }, {
    key: "openMobileMenu",
    value: function openMobileMenu() {
      this.overlay.classList.add('hidden-overlay');
      this.hamburger.classList.add('clicked__hamburger');
      this.navigation.style.left = '0%';
    }
  }, {
    key: "closeMobileMenu",
    value: function closeMobileMenu() {
      this.hamburger.classList.remove('clicked__hamburger');
      this.navigation.style.left = '-108%';
    }
  }, {
    key: "flipCard",
    value: function flipCard(id) {
      var _this2 = this;

      var card = this.cardsContainer.querySelector("[data-id=\"".concat(id, "\"]"));
      card.classList.toggle('is-flipped');
      setTimeout(function () {
        card.addEventListener('mouseleave', _this2.leaveCardHandler.bind(_this2));
      }, 800);
    }
  }, {
    key: "playModeView",
    value: function playModeView() {
      var card = document.querySelectorAll('.image-link');
      card.forEach(function (el) {
        el.classList.add('play');
      });
    }
  }, {
    key: "showStatistic",
    value: function showStatistic() {
      this.statContainer.style.display = 'flex';
    }
  }, {
    key: "hideStatistic",
    value: function hideStatistic() {
      this.statContainer.style.display = 'none';
    }
  }, {
    key: "clickedCard",
    value: function clickedCard(id) {
      var card = this.cardsContainer.querySelector("[data-id=\"".concat(id, "\"]"));
      card.classList.add('clicked-card');
    }
  }, {
    key: "cleanPage",
    value: function cleanPage() {
      this.cardsContainer.innerHTML = '';
    }
  }, {
    key: "cleanScoreContainer",
    value: function cleanScoreContainer() {
      this.scoreContainer.innerHTML = '';
    }
  }, {
    key: "drawScore",
    value: function drawScore(roundArray) {
      var _this3 = this;

      this.scoreContainer.innerHTML = '';
      roundArray.forEach(function (round) {
        var star = document.createElement('img');

        if (round) {
          star.setAttribute('src', '/assets/img/star-win.svg');
        } else {
          star.setAttribute('src', '/assets/img/star.svg');
        }

        _this3.scoreContainer.appendChild(star);
      });
    }
  }, {
    key: "drawCard",
    value: function drawCard(id, word, img, translation, isArrow) {
      var container = document.createElement('div');
      container.classList.add('scene');
      var innerContainer = document.createElement('div');
      innerContainer.classList.add('card');
      innerContainer.setAttribute('data-id', id);
      container.appendChild(innerContainer);
      var card = document.createElement('div');
      card.classList.add('card__face', 'card__face--front', 'image-link');
      var cardFacaBack = document.createElement('div');
      cardFacaBack.classList.add('card__face', 'card__face--back', 'image-link');
      var image = document.createElement('img');
      image.setAttribute('src', img);
      image.setAttribute('alt', word);
      var imageBack = document.createElement('img');
      imageBack.setAttribute('src', img);
      imageBack.setAttribute('alt', word);
      var title = document.createElement('span');
      title.textContent = word;
      var arr = document.createElement('img');
      arr.classList.add('arrow');
      arr.setAttribute('src', '../assets/img/rotate.svg');
      var titleBack = document.createElement('span');
      titleBack.textContent = translation;
      card.appendChild(image);
      card.appendChild(title);

      if (isArrow) {
        card.appendChild(arr);
      }

      cardFacaBack.appendChild(imageBack);
      cardFacaBack.appendChild(titleBack);
      innerContainer.appendChild(card);
      innerContainer.appendChild(cardFacaBack);
      this.cardsContainer.appendChild(container);
    }
  }, {
    key: "drawCards",
    value: function drawCards(arrayCards) {
      var _this4 = this;

      var isArrow = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      arrayCards.forEach(function (_ref) {
        var id = _ref.id,
            word = _ref.word,
            translation = _ref.translation,
            img = _ref.img;

        _this4.drawCard(id, word, img, translation, isArrow);
      });
    }
  }, {
    key: "drowMenuItem",
    value: function drowMenuItem(text, id) {
      var listLink = document.createElement('li');
      listLink.setAttribute('data-id', id);
      listLink.textContent = text;
      this.menu.appendChild(listLink);
    }
  }, {
    key: "drawStatistic",
    value: function drawStatistic(arr) {
      var _this5 = this;

      this.statTable.innerHTML = '';
      arr.forEach(function (word) {
        var tr = document.createElement('tr');
        var text = document.createElement('td');
        var translate = document.createElement('td');
        var trainClicks = document.createElement('td');
        var correct = document.createElement('td');
        var error = document.createElement('td');
        var percent = document.createElement('td');
        text.innerText = word.word;
        translate.innerText = word.translation;
        trainClicks.innerText = word.trainClicks;
        correct.innerText = word.correctAnswer;
        error.innerText = word.errorAnswer;
        percent.innerText = word.errorAnswer / (word.correctAnswer + word.errorAnswer) * 100 || 0;
        tr.appendChild(text);
        tr.appendChild(translate);
        tr.appendChild(trainClicks);
        tr.appendChild(correct);
        tr.appendChild(error);
        tr.appendChild(percent);

        _this5.statTable.appendChild(tr);
      });
    }
  }, {
    key: "drowMenu",
    value: function drowMenu(arrayMenu) {
      var _this6 = this;

      arrayMenu.items.forEach(function (link) {
        _this6.drowMenuItem(link.word, link.id);
      });
    }
  }, {
    key: "drawButton",
    value: function drawButton() {
      var buttonContainer = document.createElement('div');
      buttonContainer.classList.add('button-box');
      var button = document.createElement('button');
      button.classList.add('button-start');
      button.innerText = 'Start Game';
      buttonContainer.appendChild(button);
      this.cardsContainer.appendChild(buttonContainer);
      button.addEventListener('click', this.clickPlayButtonHandler.bind(this));
    }
  }, {
    key: "changeBackgroundColor",
    value: function changeBackgroundColor(mode) {
      var imageColor = document.querySelectorAll('.image-link');

      if (mode === 'play') {
        this.navigation.style.background = 'linear-gradient(to bottom left, #00cc00 0%, #ffcc00 100%)';
        imageColor.forEach(function (b) {
          return b.style.background = 'linear-gradient(to bottom left, #00cc00 0%, #ffcc00 100%)';
        });
      } else if (mode === 'train') {
        this.navigation.style.background = 'linear-gradient(to top right, #ffcc00 0%, #ff00ff 100%)';
        imageColor.forEach(function (b) {
          return b.style.background = 'linear-gradient(to top right, #ffcc00 0%, #ff00ff 100%)';
        });
      }
    }
  }, {
    key: "showWinResult",
    value: function showWinResult() {
      var image = document.querySelector('.finish-round-succes');
      image.style.visibility = 'unset';
    }
  }, {
    key: "showFailResult",
    value: function showFailResult(error) {
      var errorText = document.querySelector('.error');
      errorText.innerText = error;
      var image = document.querySelector('.finish-round-failure');
      image.style.visibility = 'unset';
    }
  }, {
    key: "hideResult",
    value: function hideResult() {
      var image = document.querySelectorAll('.image');
      image.forEach(function (img) {
        return img.style.visibility = 'hidden';
      });
    }
  }]);

  return View;
}();

Object.assign(View.prototype, _mixins_eventMixin__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (View);

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=script.js.map