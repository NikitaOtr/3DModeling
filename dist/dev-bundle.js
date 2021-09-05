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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopup */ \"./src/modules/togglePopup.js\");\n/* harmony import */ var _modules_smoothScrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/smoothScrolling */ \"./src/modules/smoothScrolling.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_team__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/team */ \"./src/modules/team.js\");\n/* harmony import */ var _modules_banPrint__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/banPrint */ \"./src/modules/banPrint.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/calculator */ \"./src/modules/calculator.js\");\n/* harmony import */ var _modules_sendFrom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/sendFrom */ \"./src/modules/sendFrom.js\");\n\n\n\n\n\n\n\n\n\n\n\n // Таймер\n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('30 sept 2021'); // Меню ToDo document\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // Всплывающее окно ToDo forEach buttonsGetPopup\n\n(0,_modules_togglePopup__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); //Плавная прокрутка для всех якорных ссылок\n\n(0,_modules_smoothScrolling__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(); // Табы ToDo\n\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(); // Слайдер\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(); // Блок с командой\n\n(0,_modules_team__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(); // Валидация форм ToDo blur\n\n(0,_modules_banPrint__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(); // Калькулятор\n\n(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(); //Send ajax forms\n\n(0,_modules_sendFrom__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n\n//# sourceURL=webpack://3dmodel/./src/index.js?");

/***/ }),

/***/ "./src/modules/banPrint.js":
/*!*********************************!*\
  !*** ./src/modules/banPrint.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar banPrint = function banPrint() {\n  var calculatorForms = document.querySelector('.calc-block');\n  calculatorForms.addEventListener('input', function (event) {\n    var target = event.target;\n    target.value = target.value.replace(/\\D/, '');\n  });\n\n  var validationForm = function validationForm(form) {\n    form.addEventListener('input', function (event) {\n      var target = event.target;\n\n      if (target.name === 'user_name') {\n        target.value = target.value.replace(/[^а-яА-ЯёЁ\\s]/, '');\n      } else if (target.name === 'user_email') {\n        target.value = target.value.replace(/[^-\\w!_.~*@]/, '');\n      } else if (target.name === 'user_phone') {\n        target.value = target.value.replace(/[^\\d+]/, '');\n      } else if (target.name === 'user_message') {\n        target.value = target.value.replace(/[^а-яА-ЯёЁ\\s.!-?1-9]/, '');\n      }\n    });\n  };\n\n  var form1 = document.getElementById('form1');\n  var form2 = document.getElementById('form2');\n  var form3 = document.getElementById('form3');\n  validationForm(form1);\n  validationForm(form2);\n  validationForm(form3);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (banPrint);\n\n//# sourceURL=webpack://3dmodel/./src/modules/banPrint.js?");

/***/ }),

/***/ "./src/modules/calculator.js":
/*!***********************************!*\
  !*** ./src/modules/calculator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calc = function calc() {\n  var prise = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcBlock = document.querySelector('.calc-block');\n  var calcType = document.querySelector('.calc-type');\n  var calcSquare = document.querySelector('.calc-square');\n  var calcCountRooms = document.querySelector('.calc-count');\n  var calcDays = document.querySelector('.calc-day');\n  var totalValue = document.getElementById('total');\n\n  var animationTotal = function animationTotal(newTotal) {\n    var countStep = 31;\n    var nowTotal = +totalValue.textContent;\n    var way = newTotal - nowTotal;\n    var step = way > 0 ? Math.floor(way / countStep) : Math.ceil(way / countStep);\n    var nowPosition = nowTotal + way % countStep;\n\n    var animation = function animation() {\n      nowPosition += step;\n      totalValue.textContent = nowPosition;\n\n      if (nowPosition !== newTotal) {\n        requestAnimationFrame(animation);\n      }\n    };\n\n    return animation();\n  };\n\n  var countTotal = function countTotal() {\n    var typeValue = +calcType.value / 10;\n    var squareValue = +calcSquare.value;\n    var countRoomsValue = 1;\n    var daysValue = 1;\n\n    if (+calcCountRooms.value > 1) {\n      countRoomsValue += (+calcCountRooms.value - 1) / 10;\n    }\n\n    if (calcDays.value) {\n      if (+calcDays.value < 5) {\n        daysValue = 2;\n      } else if (+calcDays.value < 10) {\n        daysValue = 1.5;\n      }\n    }\n\n    var total = prise * typeValue * squareValue * countRoomsValue * daysValue;\n    animationTotal(Math.round(total));\n  };\n\n  calcBlock.addEventListener('input', function (event) {\n    var target = event.target;\n\n    if (target.matches('select') && !target.value) {\n      calcSquare.value = '';\n      calcCountRooms.value = '';\n      calcDays.value = '';\n    }\n\n    if (target.matches('select') || target.matches('input')) {\n      countTotal();\n    }\n  });\n  countTotal();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://3dmodel/./src/modules/calculator.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar countTimer = function countTimer(deadLine) {\n  var timerSeconds = document.querySelector('#timer-seconds');\n  var timerMinutes = document.querySelector('#timer-minutes');\n  var timerHours = document.querySelector('#timer-hours');\n  var timerDays = document.querySelector('#timer-days');\n\n  var getTimeRemaining = function getTimeRemaining() {\n    var dateStop = new Date(deadLine).getTime();\n    var dateNow = new Date().getTime();\n    var timeRemaining = (dateStop - dateNow) / 1000;\n    var seconds = Math.floor(timeRemaining % 60);\n    var minutes = Math.floor(timeRemaining / 60 % 60);\n    var hours = Math.floor(timeRemaining / 3600 % 24);\n    var days = Math.floor(timeRemaining / 3600 / 24);\n    return {\n      days: days,\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds\n    };\n  };\n\n  var getCorrectTime = function getCorrectTime(num) {\n    if (num < 0) {\n      return '00';\n    }\n\n    if (num < 10) {\n      return '0' + num;\n    }\n\n    return num;\n  };\n\n  var appDateClock = function appDateClock() {\n    var timer = getTimeRemaining();\n    timerDays.textContent = getCorrectTime(timer.days);\n    timerHours.textContent = getCorrectTime(timer.hours);\n    timerMinutes.textContent = getCorrectTime(timer.minutes);\n    timerSeconds.textContent = getCorrectTime(timer.seconds);\n  };\n\n  appDateClock();\n  setInterval(appDateClock, 1000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://3dmodel/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/sendFrom.js":
/*!*********************************!*\
  !*** ./src/modules/sendFrom.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validationForms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validationForms */ \"./src/modules/validationForms.js\");\n\nvar popup = document.querySelector('.popup');\n\nvar sendForm = function sendForm() {\n  var errorMessage = 'Что-то пошло не так.';\n  var warningMessage = 'Введите корректные данные';\n  var loadMessage = '<div class=\"sk-rotating-plane\"></div>';\n  var successMessage = 'Спасибо! Мы скоро вам перезвоним.';\n\n  var postData = function postData(data) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(data)\n    });\n  };\n\n  var submitForm = function submitForm(form) {\n    var statusMessage = document.createElement('div');\n    statusMessage.style.cssText = 'font-size: 2rem; color: white;';\n    form.append(statusMessage);\n    var inputs = form.querySelectorAll('input');\n\n    var reset = function reset() {\n      form.reset();\n      inputs.forEach(function (item) {\n        return item.classList.remove('success-input');\n      });\n      setTimeout(function () {\n        statusMessage.innerHTML = '';\n        popup.style.display = 'none';\n      }, 5000);\n    };\n\n    form.addEventListener('submit', function (event) {\n      event.preventDefault();\n\n      if (!(0,_validationForms__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(inputs)) {\n        statusMessage.textContent = warningMessage;\n        return;\n      }\n\n      statusMessage.innerHTML = loadMessage;\n      var formData = new FormData(form);\n      var data = {};\n      formData.forEach(function (value, key) {\n        return data[key] = value;\n      });\n      postData(data).then(function (response) {\n        if (response.status !== 200) {\n          throw new Error(response.statusText);\n        }\n\n        reset();\n        statusMessage.textContent = successMessage;\n      })[\"catch\"](function (error) {\n        statusMessage.textContent = errorMessage;\n        console.error(error);\n      });\n    });\n  };\n\n  var form1 = document.getElementById('form1');\n  var form2 = document.getElementById('form2');\n  var form3 = document.getElementById('form3');\n  submitForm(form1);\n  submitForm(form2);\n  submitForm(form3);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3dmodel/./src/modules/sendFrom.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  var slider = document.querySelector('.portfolio-content');\n  var slides = slider.querySelectorAll('.portfolio-item');\n  var dots = [];\n  var portfolioDots = slider.querySelector('.portfolio-dots');\n  slides.forEach(function () {\n    var dot = document.createElement('li');\n    dot.classList.add('dot');\n    dots.push(dot);\n    portfolioDots.append(dot);\n  });\n  dots[0].classList.add('dot-active');\n\n  var removePrevSlide = function removePrevSlide(index) {\n    slides[index].classList.remove('portfolio-item-active');\n    dots[index].classList.remove('dot-active');\n  };\n\n  var setNextSlide = function setNextSlide(index) {\n    slides[index].classList.add('portfolio-item-active');\n    dots[index].classList.add('dot-active');\n  };\n\n  var currentSlide = 0;\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (target.matches('.dot')) {\n      removePrevSlide(currentSlide);\n      dots.forEach(function (item, index) {\n        return target === item ? currentSlide = index : false;\n      });\n      setNextSlide(currentSlide);\n    } else if (target.matches('#arrow-right')) {\n      removePrevSlide(currentSlide);\n      currentSlide = (currentSlide + 1) % slides.length;\n      setNextSlide(currentSlide);\n    } else if (target.matches('#arrow-left')) {\n      removePrevSlide(currentSlide);\n      currentSlide = (currentSlide + (slides.length - 1)) % slides.length;\n      setNextSlide(currentSlide);\n    }\n  });\n\n  var autoPlaySlide = function autoPlaySlide() {\n    removePrevSlide(currentSlide);\n    currentSlide = (currentSlide + 1) % slides.length;\n    setNextSlide(currentSlide);\n  };\n\n  var interval;\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  startSlide();\n  slider.addEventListener('mouseover', function (event) {\n    var target = event.target;\n\n    if (target.matches('.portfolio-btn') || target.matches('.dot')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    var target = event.target;\n\n    if (target.matches('.portfolio-btn') || target.matches('.dot')) {\n      startSlide();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://3dmodel/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/smoothScrolling.js":
/*!****************************************!*\
  !*** ./src/modules/smoothScrolling.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar smoothScrolling = function smoothScrolling() {\n  var anchors = document.querySelectorAll('menu a');\n  anchors = Array.from(anchors);\n  anchors.push(document.querySelector('main>a'));\n\n  var _iterator = _createForOfIteratorHelper(anchors),\n      _step;\n\n  try {\n    var _loop = function _loop() {\n      var anchor = _step.value;\n      anchor.addEventListener(\"click\", function (event) {\n        event.preventDefault();\n\n        var _goto = anchor.getAttribute('href');\n\n        if (_goto === '#close') {\n          return;\n        }\n\n        document.querySelector(_goto).scrollIntoView({\n          behavior: \"smooth\",\n          block: \"start\"\n        });\n      });\n    };\n\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      _loop();\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScrolling);\n\n//# sourceURL=webpack://3dmodel/./src/modules/smoothScrolling.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Табы ToDo\nvar tabs = function tabs() {\n  var tabHeader = document.querySelector('.service-header');\n  var tabButtons = tabHeader.querySelectorAll('.service-header-tab');\n  var tabContend = document.querySelectorAll('.service-tab');\n\n  var toggleTabContent = function toggleTabContent(elem) {\n    for (var i = 0; i < tabButtons.length; i++) {\n      if (tabButtons[i] === elem) {\n        tabButtons[i].classList.add('active');\n        tabContend[i].classList.remove('d-none');\n      } else {\n        tabButtons[i].classList.remove('active');\n        tabContend[i].classList.add('d-none');\n      }\n    }\n  };\n\n  tabHeader.addEventListener('click', function (event) {\n    var target = event.target.closest('.service-header-tab');\n\n    if (target) {\n      toggleTabContent(target);\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://3dmodel/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/team.js":
/*!*****************************!*\
  !*** ./src/modules/team.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar team = function team() {\n  var command = document.getElementById('command');\n\n  var changeImgFromDataset = function changeImgFromDataset(elem) {\n    var _ref;\n\n    return _ref = [elem.dataset.img, elem.src], elem.src = _ref[0], elem.dataset.img = _ref[1], _ref;\n  };\n\n  command.addEventListener('mouseover', function (event) {\n    var target = event.target;\n\n    if (target.matches('.command__photo')) {\n      changeImgFromDataset(target);\n    }\n  });\n  command.addEventListener('mouseout', function (event) {\n    var target = event.target;\n\n    if (target.matches('.command__photo')) {\n      changeImgFromDataset(target);\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (team);\n\n//# sourceURL=webpack://3dmodel/./src/modules/team.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var menu = document.querySelector('menu');\n\n  var handlerMenu = function handlerMenu() {\n    menu.classList.toggle('active-menu');\n  };\n\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('a')) {\n      handlerMenu();\n    }\n\n    if (target.closest('menu') === menu) {\n      return;\n    }\n\n    var buttonGetMenu = target.closest('.menu');\n\n    if (buttonGetMenu || menu.matches('.active-menu')) {\n      handlerMenu();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://3dmodel/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/togglePopup.js":
/*!************************************!*\
  !*** ./src/modules/togglePopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopup = function togglePopup() {\n  var popup = document.querySelector('.popup');\n  var buttonsGetPopup = document.querySelectorAll('.popup-btn');\n  var popupContent = document.querySelector('.popup-content');\n\n  var animationPopup = function animationPopup() {\n    var left = 0;\n    popupContent.style.left = 0 + '%';\n\n    var animation = function animation() {\n      left += 2;\n      popupContent.style.left = left + '%';\n\n      if (left < 38) {\n        requestAnimationFrame(animation);\n      }\n    };\n\n    return animation();\n  };\n\n  buttonsGetPopup.forEach(function (item) {\n    item.addEventListener('click', function () {\n      popup.style.display = 'block';\n\n      if (window.screen.width > 768) {\n        animationPopup();\n      }\n    });\n  });\n  popup.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.matches('.popup-close')) {\n      return popup.style.display = 'none';\n    }\n\n    if (target.closest('.popup-content')) {\n      return;\n    }\n\n    popup.style.display = 'none';\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopup);\n\n//# sourceURL=webpack://3dmodel/./src/modules/togglePopup.js?");

/***/ }),

/***/ "./src/modules/validationForms.js":
/*!****************************************!*\
  !*** ./src/modules/validationForms.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar validationForms = function validationForms(inputs) {\n  var setSuccessInput = function setSuccessInput(input) {\n    input.classList.remove('error-input');\n    input.classList.add('success-input');\n  };\n\n  var setErrorInput = function setErrorInput(input) {\n    input.classList.remove('success-input');\n    input.classList.add('error-input');\n  };\n\n  var Arrayinputs = Array.from(inputs);\n  var userName = Arrayinputs.find(function (item) {\n    return item.matches('.form-name');\n  });\n  var userEmail = Arrayinputs.find(function (item) {\n    return item.matches('.form-email');\n  });\n  var userPhone = Arrayinputs.find(function (item) {\n    return item.matches('.form-phone');\n  });\n  inputs.forEach(function (item) {\n    return setSuccessInput(item);\n  });\n  var rez = true;\n\n  if (!(userName.value.length >= 2)) {\n    setErrorInput(userName);\n    rez = false;\n  }\n\n  if (!userEmail.value.match(/[-\\d\\w\\W]+@[\\w\\d]+\\.\\w{2,4}/)) {\n    setErrorInput(userEmail);\n    rez = false;\n  }\n\n  if (!(userPhone.value.match(/[\\d]{11}/) && userPhone.value.length <= 12)) {\n    setErrorInput(userPhone);\n    rez = false;\n  }\n\n  return rez;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validationForms);\n\n//# sourceURL=webpack://3dmodel/./src/modules/validationForms.js?");

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