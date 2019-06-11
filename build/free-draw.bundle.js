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

/***/ "./src/basic.js":
/*!**********************!*\
  !*** ./src/basic.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Tool = __webpack_require__(/*! ./tool */ \"./src/tool.js\");\n\nvar Basic =\n/*#__PURE__*/\nfunction () {\n  function Basic(options) {\n    _classCallCheck(this, Basic);\n\n    this.EasyDraw = options.EasyDraw;\n    this.id = options.id;\n    this.ctx = options.ctx; // If current polycon is active\n\n    this.active = true; // Shape style\n\n    this.style = options.style; // Shape Object\n\n    this.shapeObject = null; // Shape points \n\n    this.points = options.points || []; // Shape handle points\n\n    this.handlePoints = [];\n    this.handlePointIndex = null;\n    this.defaultStyle = {\n      lineWidth: 2,\n      fillStyle: 'rgba(255, 255, 255, 0.5)',\n      strokeStyle: '#409EFF'\n    };\n    this.handlePointStyle = options.handlePointStyle;\n    this.defaultHandlePointStyle = {\n      lineWidth: 2,\n      fillStyle: 'rgba(255, 255, 255, 0.5)',\n      strokeStyle: '#F56C6C',\n      radius: 8\n    };\n  }\n\n  _createClass(Basic, [{\n    key: \"update\",\n    value: function update(_ref) {\n      var style = _ref.style;\n\n      // Update shape style\n      if (style) {\n        this.style = style;\n      }\n\n      this.EasyDraw.refreshShapes();\n    }\n  }, {\n    key: \"_updateCtxStyle\",\n    value: function _updateCtxStyle() {\n      var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      this.ctx.lineWidth = style.lineWidth;\n      this.ctx.fillStyle = style.fillStyle;\n      this.ctx.strokeStyle = style.strokeStyle;\n    }\n  }, {\n    key: \"refresh\",\n    value: function refresh() {\n      this.refreshShape();\n      this.refreshHandlePoints();\n    }\n  }, {\n    key: \"drawPath\",\n    value: function drawPath(path) {\n      var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      var newPath = new Path2D(path);\n\n      this._updateCtxStyle(style);\n\n      this.ctx.fill(newPath);\n      this.ctx.stroke(newPath);\n      return newPath;\n    }\n    /**\n     * Draw Handle Point\n     * @param {Number} x \n     * @param {Number} y \n     * @param {Object} style \n     */\n\n  }, {\n    key: \"_drawHandlePoint\",\n    value: function _drawHandlePoint(x, y) {\n      var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.defaultHandlePointStyle;\n      var handlePoint = new Path2D();\n      handlePoint.arc(x, y, style.radius, 0, 2 * Math.PI);\n\n      this._updateCtxStyle(style);\n\n      this.ctx.fill(handlePoint);\n      this.ctx.stroke(handlePoint);\n      return handlePoint;\n    }\n  }, {\n    key: \"refreshHandlePoints\",\n    value: function refreshHandlePoints() {\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = this.handlePoints[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var handlePoint = _step.value;\n          handlePoint.obj = this._drawHandlePoint(handlePoint.point[0], handlePoint.point[1], handlePoint.style);\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n            _iterator[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n    }\n  }, {\n    key: \"trigger\",\n    value: function trigger(event) {\n      var type = event.type;\n\n      switch (type) {\n        case 'mousedown':\n          if (this.handleMouseDown && typeof this.handleMouseDown === 'function') {\n            this.handleMouseDown(event);\n          }\n\n          break;\n\n        case 'mousemove':\n          if (this.handleMouseMove && typeof this.handleMouseDown === 'function') {\n            this.handleMouseMove(event);\n          }\n\n          break;\n\n        case 'mouseup':\n          if (this.handleMouseUp && typeof this.handleMouseDown === 'function') {\n            this.handleMouseUp(event);\n          }\n\n          break;\n\n        case 'keydown':\n          console.log(event);\n\n          switch (event) {}\n\n          break;\n      }\n    }\n  }, {\n    key: \"finish\",\n    value: function finish() {\n      this.active = false;\n      this.handlePoints = [];\n      this.EasyDraw.refreshShapes();\n\n      this.EasyDraw._finishDrawing();\n\n      return {\n        id: this.id,\n        points: this.points,\n        path: Tool.pointsToSVGPath(this.points)\n      };\n    }\n  }, {\n    key: \"isPointInShape\",\n    value: function isPointInShape(point, shape) {\n      var x = point.x,\n          y = point.y;\n      return this.ctx.isPointInPath(shape, x, y);\n    }\n  }, {\n    key: \"_isClickHandlePoint\",\n    value: function _isClickHandlePoint(x, y) {\n      var handlePointIndex = null;\n\n      for (var i = 0; i < this.handlePoints.length; i++) {\n        if (this.isPointInShape({\n          x: x,\n          y: y\n        }, this.handlePoints[i].obj)) {\n          handlePointIndex = i;\n          break;\n        }\n      }\n\n      return handlePointIndex;\n    }\n  }]);\n\n  return Basic;\n}();\n\nmodule.exports = Basic;\n\n//# sourceURL=webpack:///./src/basic.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Polygon = __webpack_require__(/*! ./polygon */ \"./src/polygon.js\");\n\nvar Rect = __webpack_require__(/*! ./rect */ \"./src/rect.js\");\n\nvar FreeDraw =\n/*#__PURE__*/\nfunction () {\n  function FreeDraw(options) {\n    _classCallCheck(this, FreeDraw);\n\n    this.canvasDOM = options.canvas;\n    this.ctx = this.canvasDOM.getContext(\"2d\"); // Current model view/draw\n\n    this.model = 'view';\n    this.editingShapeId = null;\n    this.shapeInCanvas = {};\n    this.viewShapeInCanvas = {};\n\n    this._initCanvasEvent();\n  }\n\n  _createClass(FreeDraw, [{\n    key: \"_initCanvasEvent\",\n    value: function _initCanvasEvent() {\n      this.canvasDOM.addEventListener('mousedown', this._distributeCanvasEvent.bind(this));\n      this.canvasDOM.addEventListener('mousemove', this._distributeCanvasEvent.bind(this));\n      this.canvasDOM.addEventListener('mouseup', this._distributeCanvasEvent.bind(this));\n\n      if (document) {\n        document.addEventListener('keydown', this._distributeCanvasEvent.bind(this));\n      }\n    }\n  }, {\n    key: \"_distributeCanvasEvent\",\n    value: function _distributeCanvasEvent(event) {\n      var type = event.type; // trigger all events when in edit model\n\n      if (this.model === 'draw') {\n        for (var shape in this.shapeInCanvas) {\n          // should only one shape in active status\n          if (this.shapeInCanvas[shape].active) {\n            this.shapeInCanvas[shape].trigger(event);\n            break;\n          }\n        }\n      } else if (this.model === 'view' && type === 'mousedown') {\n        for (var _shape in this.shapeInCanvas) {\n          this.shapeInCanvas[_shape].trigger(event);\n        }\n      }\n    }\n  }, {\n    key: \"removeAll\",\n    value: function removeAll() {\n      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);\n      return this;\n    }\n    /**\n     * Finish current drawing\n     */\n\n  }, {\n    key: \"_finishDrawing\",\n    value: function _finishDrawing() {\n      this.model = 'view';\n      this.editingShapeId = null;\n    }\n    /**\n     * Remove shape by unique id\n     * @param {*} uniqueId\n     */\n\n  }, {\n    key: \"removeShape\",\n    value: function removeShape(id) {\n      if (this.shapeInCanvas[id]) {\n        delete this.shapeInCanvas[id];\n        this.refreshShapes();\n      } else {\n        console.warn('Shape not exist');\n      }\n    }\n  }, {\n    key: \"refreshShapes\",\n    value: function refreshShapes() {\n      this.removeAll();\n\n      for (var shape in this.shapeInCanvas) {\n        this.shapeInCanvas[shape].refresh();\n      }\n    }\n  }, {\n    key: \"drawShape\",\n    value: function drawShape(params) {\n      var id = params.id,\n          type = params.type;\n\n      if (!id) {\n        throw new Error(\"Shape id can not be empty\");\n      }\n\n      if (this.shapeInCanvas[id]) {\n        throw new Error(\"Shape id must be unique, shape id '\".concat(id, \"' has already exist\"));\n      }\n\n      this.model = 'draw';\n      this.editingShapeId = id;\n\n      if (type === 'path') {} else if (type === 'polygon') {\n        return this._drawPolygon(params);\n      } else if (type === 'rect') {\n        return this._drawRect(params);\n      }\n    }\n  }, {\n    key: \"_drawPolygon\",\n    value: function _drawPolygon(params) {\n      var id = params.id,\n          style = params.style;\n      this.shapeInCanvas[id] = new Polygon({\n        id: id,\n        ctx: this.ctx,\n        style: style,\n        EasyDraw: this\n      });\n      return this.shapeInCanvas[id];\n    }\n  }, {\n    key: \"_drawRect\",\n    value: function _drawRect(params) {\n      var id = params.id,\n          style = params.style;\n      this.shapeInCanvas[id] = new Rect({\n        id: id,\n        ctx: this.ctx,\n        style: style,\n        EasyDraw: this\n      });\n      return this.shapeInCanvas[id];\n    }\n  }]);\n\n  return FreeDraw;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FreeDraw);\nwindow.FreeDraw = FreeDraw;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/polygon.js":
/*!************************!*\
  !*** ./src/polygon.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar Tool = __webpack_require__(/*! ./tool */ \"./src/tool.js\");\n\nvar Basic = __webpack_require__(/*! ./basic */ \"./src/basic.js\");\n\nvar Polygon =\n/*#__PURE__*/\nfunction (_Basic) {\n  _inherits(Polygon, _Basic);\n\n  function Polygon(options) {\n    var _this;\n\n    _classCallCheck(this, Polygon);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Polygon).call(this, options));\n\n    _this.initPolygon();\n\n    return _this;\n  }\n\n  _createClass(Polygon, [{\n    key: \"initPolygon\",\n    value: function initPolygon() {\n      if (this.points.length > 0) {// TODO generate handle points with points\n      }\n    }\n  }, {\n    key: \"refreshShape\",\n    value: function refreshShape() {\n      var path = Tool.pointsToSVGPath(this.points);\n      this.shapeObject = this.drawPath(path, Object.assign({}, this.defaultStyle, this.style));\n    }\n  }, {\n    key: \"handleMouseDown\",\n    value: function handleMouseDown(event) {\n      if (!this.active) {} else {\n        var x = event.offsetX,\n            y = event.offsetY;\n\n        var handlePointIndex = this._isClickHandlePoint(x, y);\n\n        if (handlePointIndex === null) {\n          this.handlePointIndex = null;\n          this.points.push([x, y]);\n          this.handlePoints.push({\n            obj: null,\n            point: [x, y]\n          });\n          this.EasyDraw.refreshShapes();\n        } else {\n          this.handlePointIndex = handlePointIndex;\n        }\n      }\n    }\n  }, {\n    key: \"handleMouseMove\",\n    value: function handleMouseMove(event) {\n      if (!this.active) {} else {\n        if (this.handlePointIndex !== null) {\n          var x = event.offsetX,\n              y = event.offsetY;\n          this.points[this.handlePointIndex] = [x, y];\n          this.handlePoints[this.handlePointIndex].point = [x, y];\n          this.EasyDraw.refreshShapes();\n        }\n      }\n    }\n  }, {\n    key: \"handleMouseUp\",\n    value: function handleMouseUp() {\n      if (this.handlePointIndex !== null) {\n        this.handlePointIndex = null;\n      }\n    }\n  }, {\n    key: \"_getHandlePointStyle\",\n    value: function _getHandlePointStyle() {\n      return Object.assign({}, this.handlePointStyle, this.defaultHandlePointStyle);\n    }\n  }]);\n\n  return Polygon;\n}(Basic);\n\nmodule.exports = Polygon;\n\n//# sourceURL=webpack:///./src/polygon.js?");

/***/ }),

/***/ "./src/rect.js":
/*!*********************!*\
  !*** ./src/rect.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar Basic = __webpack_require__(/*! ./basic */ \"./src/basic.js\");\n\nvar Rect =\n/*#__PURE__*/\nfunction (_Basic) {\n  _inherits(Rect, _Basic);\n\n  function Rect(options) {\n    var _this;\n\n    _classCallCheck(this, Rect);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Rect).call(this, options));\n    _this.startPoint = options.startPoint || [0, 0];\n    _this.width = options.width || 100;\n    _this.height = options.height || 100;\n    _this.draging = false;\n\n    _this.initRect();\n\n    return _this;\n  }\n\n  _createClass(Rect, [{\n    key: \"initRect\",\n    value: function initRect() {}\n  }, {\n    key: \"handleMouseDown\",\n    value: function handleMouseDown(event) {\n      if (!this.active) {} else {\n        var x = event.offsetX,\n            y = event.offsetY;\n        this.draging = true;\n\n        var handlePointIndex = this._isClickHandlePoint(x, y);\n\n        if (handlePointIndex === null) {\n          this.startPoint = [x, y];\n        } else {\n          this.handlePointIndex = handlePointIndex;\n        }\n      }\n    }\n  }, {\n    key: \"handleMouseMove\",\n    value: function handleMouseMove(event) {\n      if (!this.active) {} else {\n        if (this.draging) {\n          var x = event.offsetX,\n              y = event.offsetY;\n\n          if (this.handlePointIndex === null || this.handlePointIndex === 0) {\n            // Change shape width and height\n            this.width = x - this.startPoint[0];\n            this.height = y - this.startPoint[1];\n            this.handlePoints[0] = {\n              obj: null,\n              point: [x, y]\n            };\n            this.handlePoints[1] = {\n              obj: null,\n              point: [x - this.width / 2, y - this.height / 2]\n            };\n          } else if (this.handlePointIndex === 1) {\n            // Update handlepoints and start point\n            this.startPoint = [x - this.width / 2, y - this.height / 2];\n            this.handlePoints[0] = {\n              obj: null,\n              point: [x + this.width / 2, y + this.height / 2]\n            };\n            this.handlePoints[1] = {\n              obj: null,\n              point: [x, y]\n            };\n          } // Update rect to points\n\n\n          this.rectToPoints();\n          this.EasyDraw.refreshShapes();\n        }\n      }\n    }\n  }, {\n    key: \"handleMouseUp\",\n    value: function handleMouseUp(event) {\n      if (this.draging) {\n        this.draging = false;\n\n        if (this.handlePoints[1] === undefined) {\n          var x = event.offsetX,\n              y = event.offsetY;\n          this.handlePoints[1] = {\n            obj: null,\n            point: [x - this.width / 2, y - this.height / 2]\n          };\n        }\n      }\n    }\n  }, {\n    key: \"refreshShape\",\n    value: function refreshShape() {\n      this.shapeObject = this.drawRect(this.startPoint, this.width, this.height, Object.assign({}, this.defaultStyle, this.style));\n    }\n  }, {\n    key: \"drawRect\",\n    value: function drawRect(startPoint, width, height, style) {\n      var newRect = new Path2D();\n      newRect.rect(startPoint[0], startPoint[1], width, height);\n\n      this._updateCtxStyle(style);\n\n      this.ctx.fill(newRect);\n      this.ctx.stroke(newRect);\n      return newRect;\n    }\n  }, {\n    key: \"rectToPoints\",\n    value: function rectToPoints() {\n      this.points[0] = this.startPoint;\n      this.points[1] = [this.startPoint[0] + this.width, this.startPoint[1]];\n      this.points[2] = [this.startPoint[0] + this.width, this.startPoint[1] + this.height];\n      this.points[3] = [this.startPoint[0], this.startPoint[1] + this.height];\n    }\n  }]);\n\n  return Rect;\n}(Basic);\n\nmodule.exports = Rect;\n\n//# sourceURL=webpack:///./src/rect.js?");

/***/ }),

/***/ "./src/tool.js":
/*!*********************!*\
  !*** ./src/tool.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Tool =\n/*#__PURE__*/\nfunction () {\n  function Tool() {\n    _classCallCheck(this, Tool);\n  }\n\n  _createClass(Tool, null, [{\n    key: \"pointsToSVGPath\",\n\n    /**\n     * Covert points[x, y] to svg path\n     * @param {Array[number, number]} points \n     */\n    value: function pointsToSVGPath(points) {\n      return 'M' + points.join('L') + 'Z';\n    }\n    /**\n     * Get distance between two points\n     * @param {Array[x, y]} pointA \n     * @param {Array[x, y]} pointB \n     */\n\n  }, {\n    key: \"getDistanceBetweenTwoPoints\",\n    value: function getDistanceBetweenTwoPoints(pointA, pointB) {\n      var xDistance = pointA[0] - pointB[0];\n      var yDistance = pointA[1] - pointB[1];\n      return Math.sqrt(xDistance * xDistance + yDistance * yDistance).toFixed(2);\n    }\n  }]);\n\n  return Tool;\n}();\n\nmodule.exports = Tool;\n\n//# sourceURL=webpack:///./src/tool.js?");

/***/ })

/******/ });