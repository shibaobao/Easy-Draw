webpackHotUpdateFreeDraw(0,[,function(t,e,i){"use strict";i.r(e);var n={lineWidth:2,fillStyle:"#FFFFFF",strokeStyle:"#0E71EB",width:8},s={lineWidth:2,fillStyle:"#FFFFFF",strokeStyle:"#0E71EB",radius:4},r={lineWidth:2,fillStyle:"rgba(14, 113, 235, 0.25)",strokeStyle:"#0E71EB"},o={lineWidth:2,fillStyle:"rgba(14, 113, 235, 0.8)",strokeStyle:"rgba(14, 113, 235, 0.8)"},a={lineWidth:1,strokeStyle:"#0E71EB"};function h(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.id=e.id,this.type=e.type,this.edit=e.edit||!0,this.points=e.points||[],this.temporaryPoints=[],this.temporaryPointsWithoutZoomAndOffset=[],this.path=e.path||"",this.SVGPath="",this.handlePoints=[],this.clickedHandlePointIndex=null,this.clickedShape=!1,this.clickedShapePoint=[],this.clickedHandlePoint=!1,this.freeDraw=e.freeDraw,this.handlePointStyle=e.handlePointStyle,this.shapeStyle=e.shapeStyle,this.shape=null,this.clickTime=null}var e,i,s;return e=t,(i=[{key:"_initShape",value:function(){this.handlePointStyle||(this.handlePointStyle=n),this.shapeStyle||(this.shapeStyle=r)}},{key:"_trigger",value:function(t){switch(t.type){case"mousedown":this._handleMouseDown&&"function"==typeof this._handleMouseDown&&this._handleMouseDown(t);break;case"mousemove":this._handleMouseMove&&"function"==typeof this._handleMouseMove&&this._handleMouseMove(t);break;case"mouseup":this._handleMouseUp&&"function"==typeof this._handleMouseUp&&this._handleMouseUp(t);break;case"keydown":this._handleKeydown&&"function"==typeof this._handleKeydown&&this._handleKeydown(t)}}},{key:"_drawRectPoint",value:function(t,e,i,n){var s=new Path2D;return s.rect(t-i/2,e-i/2,i,i),this.freeDraw._updateCtxStyle(n),this.freeDraw.ctx.fill(s),this.freeDraw.ctx.stroke(s),s}},{key:"_drawLine",value:function(t,e,i){var n="M".concat(t[0],",").concat(t[1],"L").concat(e[0],",").concat(e[1]),s=new Path2D(n);return this.freeDraw._updateCtxStyle(i),this.freeDraw.ctx.fill(s),this.freeDraw.ctx.stroke(s),s}},{key:"_drawCirclePoint",value:function(t,e,i,n){var s=new Path2D;return s.arc(t,e,i,0,2*Math.PI,!1),this.freeDraw._updateCtxStyle(n),this.freeDraw.ctx.fill(s),this.freeDraw.ctx.stroke(s),s}},{key:"_includes",value:function(t,e){return this._pointInHandlePoints(t,e)||this._pointInShape(t,e)}},{key:"_handleMouseDown",value:function(t){var e=t.offsetX,i=t.offsetY;this._pointInHandlePoints(e,i)?(this.clickedHandlePoint=!0,this.clickedShapePoint=[],this.clickedShape=!1,"polygon"===this.type&&this._polygonMouseDown(t)):this._pointInShape(e,i)?(this.clickedHandlePoint=!1,this.clickedShapePoint=[e,i],this.clickedShape=!0):"polygon"===this.type&&this._polygonMouseDown(t)}},{key:"_handleMouseUp",value:function(){this.clickedShape=!1,this.clickedHandlePoint=!1,this.clickedShapePoint=[]}},{key:"_pointInShape",value:function(t,e){if(!this.shape)return!1;var i=!0,n=!1,s=void 0;try{for(var r,o=this.temporaryPointsWithoutZoomAndOffset[Symbol.iterator]();!(i=(r=o.next()).done);i=!0){var a=r.value;if(t===a[0]&&e===a[1])return!1}}catch(t){n=!0,s=t}finally{try{i||null==o.return||o.return()}finally{if(n)throw s}}return this.freeDraw.ctx.isPointInPath(this.shape,t,e)}},{key:"_pointInHandlePoints",value:function(t,e){var i=!1;if(this.edit){for(var n=null,s=0;s<this.handlePoints.length;s++)if(this.freeDraw.ctx.isPointInPath(this.handlePoints[s].obj,t,e)){i=!0,n=s;break}this.clickedHandlePointIndex=n}return i}},{key:"editShape",value:function(){return this.shapeStyle=r,this.edit=!0,this.freeDraw._updateModel("edit",this.id),this.freeDraw._refreshShapesInCanvas(),this._backupData(),this}},{key:"finish",value:function(){return this.edit=!1,this.isCreate=!1,this.freeDraw._updateModel("view"),this.shapeStyle=o,this._toSVGPath&&"function"==typeof this._toSVGPath&&this._toSVGPath(),this._toJSONString&&"function"==typeof this._toJSONString&&this._toJSONString(),this.freeDraw._refreshShapesInCanvas(),this}},{key:"cancelEdit",value:function(){return this.shapeStyle=o,this.edit=!1,this.freeDraw._updateModel("view"),this._rollbackData(),this.freeDraw._refreshShapesInCanvas(),this}}])&&h(e.prototype,i),s&&h(e,s),t}();function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function d(t,e){return!e||"object"!==f(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var v=function(t){function e(t){var i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(i=d(this,c(e).call(this,t))).startPoint=[Number(t.startPoint[0].toFixed(i.freeDraw.fix)),Number(t.startPoint[1].toFixed(i.freeDraw.fix))],i.width=Number(t.width.toFixed(i.freeDraw.fix)),i.height=Number(t.height.toFixed(i.freeDraw.fix)),i.startPointBackup=[],i.widthBackup=null,i.heightBackup=null,i.pointsBackup=[],i._initRect(),i}var i,n,s;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(e,l),i=e,(n=[{key:"_initRect",value:function(){this._initShape(),this.startPoint.length>0&&this.width&&this.height&&(this._draw(),this._backupData())}},{key:"_draw",value:function(){this._generateHandlePointsByPoints(),this.shape=this._drawRect(),this.edit&&this._drawRectHandlePoints()}},{key:"_generateHandlePointsByPoints",value:function(){var t=this.getZoomAndMove(),e=t.startPoint,i=t.width,n=t.height;this.handlePoints[0]={obj:null,point:e},this.handlePoints[1]={obj:null,point:[e[0]+i,e[1]]},this.handlePoints[2]={obj:null,point:[e[0]+i,e[1]+n]},this.handlePoints[3]={obj:null,point:[e[0],e[1]+n]}}},{key:"_drawRectHandlePoints",value:function(){for(var t=0;t<this.handlePoints.length;t++)this.handlePoints[t].obj=this._drawRectPoint(this.handlePoints[t].point[0],this.handlePoints[t].point[1],this.handlePointStyle.width,{lineWidth:this.handlePointStyle.lineWidth,fillStyle:this.handlePointStyle.fillStyle,strokeStyle:this.handlePointStyle.strokeStyle})}},{key:"_drawRect",value:function(){var t=this.getZoomAndMove(),e=t.startPoint,i=t.width,n=t.height,s=new Path2D;return s.rect(e[0],e[1],i,n),this.freeDraw._updateCtxStyle(this.shapeStyle),this.freeDraw.ctx.fill(s),this.freeDraw.ctx.stroke(s),s}},{key:"_handleMouseMove",value:function(t){var e=t.offsetX,i=t.offsetY;if(this.clickedHandlePoint){var n=this.handlePoints[this.clickedHandlePointIndex].point;0===this.clickedHandlePointIndex?(this.width=Number((this.width+(n[0]-e)/this.freeDraw.zoomLevel).toFixed(this.freeDraw.fix)),this.height=Number((this.height+(n[1]-i)/this.freeDraw.zoomLevel).toFixed(this.freeDraw.fix)),this.startPoint=[Number((this.startPoint[0]+(e-n[0])/this.freeDraw.zoomLevel).toFixed(this.freeDraw.fix)),Number((this.startPoint[1]+(i-n[1])/this.freeDraw.zoomLevel).toFixed(this.freeDraw.fix))]):1===this.clickedHandlePointIndex?(this.width=Number((this.width+(e-n[0])/this.freeDraw.zoomLevel).toFixed(this.freeDraw.fix)),this.height=Number((this.height+(n[1]-i)/this.freeDraw.zoomLevel).toFixed(this.freeDraw.fix)),this.startPoint[1]=Number((this.startPoint[1]+(i-n[1])/this.freeDraw.zoomLevel).toFixed(this.freeDraw.fix))):2===this.clickedHandlePointIndex?(this.width=Number((this.width+(e-n[0])/this.freeDraw.zoomLevel).toFixed(this.freeDraw.fix)),this.height=Number((this.height+(i-n[1])/this.freeDraw.zoomLevel).toFixed(this.freeDraw.fix))):3===this.clickedHandlePointIndex&&(this.width=Number((this.width+(n[0]-e)/this.freeDraw.zoomLevel).toFixed(this.freeDraw.fix)),this.height=Number((this.height+(i-n[1])/this.freeDraw.zoomLevel).toFixed(this.freeDraw.fix)),this.startPoint[0]=Number((this.startPoint[0]+(e-n[0])/this.freeDraw.zoomLevel).toFixed(this.freeDraw.fix))),this.freeDraw.eventsReceive.includes("transform")&&this.freeDraw.eventsCallBack(t,this.id,"transform"),this.freeDraw._refreshShapesInCanvas()}else this.clickedShape&&(this.startPoint=[Number((this.startPoint[0]+(e-this.clickedShapePoint[0])/this.freeDraw.zoomLevel).toFixed(this.freeDraw.fix)),Number((this.startPoint[1]+(i-this.clickedShapePoint[1])/this.freeDraw.zoomLevel).toFixed(this.freeDraw.fix))],this.clickedShapePoint=[e,i],this.freeDraw.eventsReceive.includes("drag")&&this.freeDraw.eventsCallBack(t,this.id,"drag"),this.freeDraw._refreshShapesInCanvas())}},{key:"getZoomAndMove",value:function(){var t=this.width,e=this.height;t=this.width*this.freeDraw.zoomLevel,e=this.height*this.freeDraw.zoomLevel;var i=Number(((this.startPoint[0]-this.freeDraw.transformCenter[0])*this.freeDraw.zoomLevel+this.freeDraw.transformCenter[0]).toFixed(this.freeDraw.fix)),n=Number(((this.startPoint[1]-this.freeDraw.transformCenter[1])*this.freeDraw.zoomLevel+this.freeDraw.transformCenter[1]).toFixed(this.freeDraw.fix));return 0!==this.freeDraw.offsetLeft&&(i=Number((i+this.freeDraw.offsetLeft).toFixed(this.freeDraw.fix))),0!==this.freeDraw.offsetTop&&(n=Number((n+this.freeDraw.offsetTop).toFixed(this.freeDraw.fix))),{width:t,height:e,startPoint:[i,n]}}},{key:"_toSVGPath",value:function(){var t=this.freeDraw.fix;this.points[0]=[Number(this.startPoint[0].toFixed(t)),Number(this.startPoint[1].toFixed(t))],this.points[1]=[Number((this.startPoint[0]+this.width).toFixed(t)),Number(this.startPoint[1].toFixed(t))],this.points[2]=[Number((this.startPoint[0]+this.width).toFixed(t)),Number((this.startPoint[1]+this.height).toFixed(t))],this.points[3]=[Number(this.startPoint[0].toFixed(t)),Number((this.startPoint[1]+this.height).toFixed(t))],this.path="M".concat(this.points[0].join(","),"L").concat(this.points[1].join(","),"L").concat(this.points[2].join(","),"L").concat(this.points[3].join(","),"Z"),this.SVGPath='<path d="'.concat(this.path,'" />')}},{key:"_backupData",value:function(){this.startPointBackup=JSON.parse(JSON.stringify(this.startPoint)),this.widthBackup=this.width,this.heightBackup=this.height,this.pointsBackup=JSON.parse(JSON.stringify(this.points))}},{key:"_rollbackData",value:function(){this.startPoint=JSON.parse(JSON.stringify(this.startPointBackup)),this.width=this.widthBackup,this.height=this.heightBackup,this.points=JSON.parse(JSON.stringify(this.pointsBackup))}},{key:"getHandlePointCoordinate",value:function(t){return this.handlePoints[t]?this.handlePoints[t].point:null}}])&&u(i.prototype,n),s&&u(i,s),e}();function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function w(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function m(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function P(t){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function k(t,e){return(k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var D=function(t){function e(t){var i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(i=m(this,P(e).call(this,t))).x=Number(t.x.toFixed(i.freeDraw.fix)),i.y=Number(t.y.toFixed(i.freeDraw.fix)),i.radiusX=Number(t.radiusX.toFixed(i.freeDraw.fix)),i.radiusY=Number(t.radiusY.toFixed(i.freeDraw.fix)),i.rotation=t.rotation||0,i.startAngle=t.startAngle||0,i.endAngle=t.endAngle||2*Math.PI,i.anticlockwise=t.anticlockwise||!1,i.xBackup=null,i.yBackup=null,i.radiusXBackup=null,i.radiusYBackup=null,i.rotateAngleBackup=null,i.startAngleBackup=null,i.endAngleBackup=null,i.anticlockwiseBackup=null,i.handleLines=[],i.rotationHandleLine=null,i._initEllipse(),i}var i,n,s;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}(e,l),i=e,(n=[{key:"_initEllipse",value:function(){this._initShape(),this.x&&this.y&&this.radiusX&&this.radiusY&&(this._draw(),this._backupData())}},{key:"_generateHandlePointsByPoints",value:function(){var t=this.getZoomAndMove(),e=t.x,i=t.y,n=t.radiusX,s=t.radiusY;this.handlePoints[0]={obj:null,point:[e-n,i-s]},this.handlePoints[1]={obj:null,point:[e+n,i-s]},this.handlePoints[2]={obj:null,point:[e+n,i+s]},this.handlePoints[3]={obj:null,point:[e-n,i+s]}}},{key:"_generateHandleLinesByPoints",value:function(){var t=this.getZoomAndMove(),e=t.x,i=t.y,n=t.radiusX,s=t.radiusY;this.handleLines[0]={obj:null,startPoint:[e-n,i-s],endPoint:[e+n,i-s]},this.handleLines[1]={obj:null,startPoint:[e+n,i-s],endPoint:[e+n,i+s]},this.handleLines[2]={obj:null,startPoint:[e+n,i+s],endPoint:[e-n,i+s]},this.handleLines[3]={obj:null,startPoint:[e-n,i+s],endPoint:[e-n,i-s]}}},{key:"_generateRotationHandlePointsAndLine",value:function(){var t=[(this.handlePoints[0].point[0]+this.handlePoints[2].point[0])/2,(this.handlePoints[0].point[1]+this.handlePoints[2].point[1])/2],e=this._distance(this.handlePoints[0].point[0],this.handlePoints[0].point[1],this.handlePoints[3].point[0],this.handlePoints[3].point[1]);this.rotationHandlePoint={obj:null,point:[t[0]-(e/2+20)*Math.cos(this._toArc(this.rotateAngle)),t[1]-(e/2+20)*Math.sin(this._toArc(this.rotateAngle))]},this.rotationHandleLine={obj:null,startPoint:t,endPoint:[t[0]-(e/2+20)*Math.cos(this._toArc(this.rotateAngle)),t[1]-(e/2+20)*Math.sin(this._toArc(this.rotateAngle))]}}},{key:"_draw",value:function(){this.shape=this._drawEllipse(),this._generateHandleLinesByPoints(),this._generateHandlePointsByPoints(),this._generateRotationHandlePointsAndLine(),this.edit&&(this._drawEllipseHandleLines(),this._drawEllipseHandlePoints(),this._drawEllipseRotationHandleLine(),this._drawEllipseRotationHandlePoint())}},{key:"_drawEllipse",value:function(){var t=this.getZoomAndMove(),e=t.x,i=t.y,n=t.radiusX,s=t.radiusY,r=t.startAngle,o=t.endAngle,a=t.anticlockwise,h=new Path2D;return h.ellipse(e,i,n,s,r,o,a),this.freeDraw._updateCtxStyle(this.shapeStyle),this.freeDraw.ctx.fill(h),this.freeDraw.ctx.stroke(h),h}},{key:"_handleMouseMove",value:function(t){var e=t.offsetX,i=t.offsetY;if(this.clickedHandlePoint){var n,s,r,o,a=this.radiusY/this.radiusX,h=this.handlePoints[this.clickedHandlePointIndex].point;if([0,1,2,3].includes(this.clickedHandlePointIndex))0===this.clickedHandlePointIndex&&(s=a*(n=h[0]-e),n=this.radiusX+parseInt(n/this.freeDraw.zoomLevel),s=this.radiusY+parseInt(s/this.freeDraw.zoomLevel),r=this.x-(n-this.radiusX),o=this.y-(s-this.radiusY)),1===this.clickedHandlePointIndex&&(s=a*(n=e-h[0]),n=this.radiusX+parseInt(n/this.freeDraw.zoomLevel),s=this.radiusY+parseInt(s/this.freeDraw.zoomLevel),r=this.x+(n-this.radiusX),o=this.y-(s-this.radiusY)),2===this.clickedHandlePointIndex&&(s=a*(n=e-h[0]),n=this.radiusX+parseInt(n/this.freeDraw.zoomLevel),s=this.radiusY+parseInt(s/this.freeDraw.zoomLevel),r=this.x+(n-this.radiusX),o=this.y+(s-this.radiusY)),3===this.clickedHandlePointIndex&&(s=a*(n=h[0]-e),n=this.radiusX+parseInt(n/this.freeDraw.zoomLevel),s=this.radiusY+parseInt(s/this.freeDraw.zoomLevel),r=this.x-(n-this.radiusX),o=this.y+(s-this.radiusY)),n>0&&s>0&&(this.radiusX=Number(n.toFixed(this.freeDraw.fix)),this.radiusY=Number(s.toFixed(this.freeDraw.fix)),this.x=r,this.y=o);this.freeDraw.eventsReceive.includes("transform")&&this.freeDraw.eventsCallBack(t,this.id,"transform")}else this.clickedShape&&(this.x=Number((this.x+(e-this.clickedShapePoint[0])/this.freeDraw.zoomLevel).toFixed(this.freeDraw.fix)),this.y=Number((this.y+(i-this.clickedShapePoint[1])/this.freeDraw.zoomLevel).toFixed(this.freeDraw.fix)),this.clickedShapePoint=[Number(e.toFixed(this.freeDraw.fix)),Number(i.toFixed(this.freeDraw.fix))],this.freeDraw.eventsReceive.includes("drag")&&this.freeDraw.eventsCallBack(t,this.id,"drag"));this.freeDraw._refreshShapesInCanvas()}},{key:"_drawEllipseHandlePoints",value:function(){for(var t=0;t<this.handlePoints.length;t++)this.handlePoints[t].obj=this._drawRectPoint(this.handlePoints[t].point[0],this.handlePoints[t].point[1],this.handlePointStyle.width,{lineWidth:this.handlePointStyle.lineWidth,fillStyle:this.handlePointStyle.fillStyle,strokeStyle:this.handlePointStyle.strokeStyle})}},{key:"_drawEllipseRotationHandlePoint",value:function(){this.rotationHandlePoint.obj=this._drawCirclePoint(this.rotationHandlePoint.point[0],this.rotationHandlePoint.point[1],this.rotationHandlePointStyle.radius,{fillStyle:this.rotationHandlePointStyle.fillStyle})}},{key:"_drawEllipseHandleLines",value:function(){for(var t=0;t<this.handleLines.length;t++)this.handleLines[t].obj=this._drawLine(this.handleLines[t].startPoint,this.handleLines[t].endPoint,a)}},{key:"getZoomAndMove",value:function(){var t=Number((this.radiusX*this.freeDraw.zoomLevel).toFixed(this.freeDraw.fix)),e=Number((this.radiusY*this.freeDraw.zoomLevel).toFixed(this.freeDraw.fix)),i=(this.x-this.freeDraw.transformCenter[0])*this.freeDraw.zoomLevel+this.freeDraw.transformCenter[0],n=(this.y-this.freeDraw.transformCenter[1])*this.freeDraw.zoomLevel+this.freeDraw.transformCenter[1];return 0!==this.freeDraw.offsetLeft&&(i+=this.freeDraw.offsetLeft),0!==this.freeDraw.offsetTop&&(n+=this.freeDraw.offsetTop),{x:Number(i.toFixed(this.freeDraw.fix)),y:Number(n.toFixed(this.freeDraw.fix)),radiusX:t,radiusY:e,rotation:this.rotation,startAngle:this.startAngle,endAngle:this.endAngle,anticlockwise:this.anticlockwise}}},{key:"_backupData",value:function(){this.xBackup=this.x,this.yBackup=this.y,this.radiusXBackup=this.radiusX,this.radiusYBackup=this.radiusY,this.rotationBackup=this.rotation,this.startAngleBackup=this.startAngle,this.endAngleBackup=this.endAngle,this.anticlockwiseBackup=this.anticlockwise}},{key:"_rollbackData",value:function(){this.x=this.xBackup,this.y=this.yBackup,this.radiusX=this.radiusXBackup,this.radiusY=this.radiusYBackup,this.rotation=this.rotationBackup,this.startAngle=this.startAngleBackup,this.endAngle=this.endAngleBackup,this.anticlockwise=this.anticlockwiseBackup}},{key:"_toSVGPath",value:function(){var t=Number(this.x.toFixed(this.freeDraw.fix)),e=Number(this.y.toFixed(this.freeDraw.fix)),i=Number(this.radiusX.toFixed(this.freeDraw.fix)),n=Number(this.radiusY.toFixed(this.freeDraw.fix));this.SVGPath='<ellipse cx="'.concat(t,'" cy="').concat(e,'" rx="').concat(i,'" ry="').concat(n,'" />')}},{key:"_toJSONString",value:function(){this.JSONString=JSON.stringify({x:Number(this.x.toFixed(this.freeDraw.fix)),y:Number(this.y.toFixed(this.freeDraw.fix)),radiusX:Number(this.radiusX.toFixed(this.freeDraw.fix)),radiusY:Number(this.radiusY.toFixed(this.freeDraw.fix))})}},{key:"getHandlePointCoordinate",value:function(t){return this.handlePoints[t]?this.handlePoints[t].point:null}}])&&w(i.prototype,n),s&&w(i,s),e}();function b(t){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function x(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=[],n=!0,s=!1,r=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done)&&(i.push(o.value),!e||i.length!==e);n=!0);}catch(t){s=!0,r=t}finally{try{n||null==a.return||a.return()}finally{if(s)throw r}}return i}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function S(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _(t,e){return!e||"object"!==b(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function g(t){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function C(t,e){return(C=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var L=function(t){function e(t){var i;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(i=_(this,g(e).call(this,t))).temporaryPointsFollow=!0,i.isCreate=!0,i.pointsBackup=[],i.borderPoints=[],i.maxPointCount=t.maxPointCount||50,i.mouseInHandlePoint=!1,i._initPolygon(),i}var i,n,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&C(t,e)}(e,l),i=e,(n=[{key:"_initPolygon",value:function(){this.handlePointStyle=s,this._initShape(),this.points.length>0&&(this.isCreate=!1,this.temporaryPointsFollow=!1,this._draw(),this._backupData())}},{key:"_draw",value:function(){this.shape=this._drawPolygon(),this._generateHandlePointsByPoints(),this._generateBorderPoints(),this.edit&&this._drawPolygonHandlePoints()}},{key:"_generateHandlePointsByPoints",value:function(){var t=this.getZoomAndMove();this.handlePoints=[];for(var e=0;e<t.length;e++)this.handlePoints[e]={obj:null,point:t[e]}}},{key:"_generateBorderPoints",value:function(){for(var t,e,i,n,s=this.getZoomAndMove(),r=0;r<s.length;r++)t?s[r][0]<t&&(t=s[r][0]):t=s[r][0],e?s[r][0]>e&&(e=s[r][0]):e=s[r][0],i?s[r][1]<i&&(i=s[r][1]):i=s[r][1],n?s[r][1]>n&&(n=s[r][1]):n=s[r][1];this.borderPoints=[[t,i],[e,i],[e,n],[t,n]]}},{key:"_drawPolygon",value:function(){var t=this.getPath(),e=new Path2D(t);return this.freeDraw._updateCtxStyle(this.shapeStyle),console.log(this.temporaryPointsFollow),this.temporaryPointsFollow||this.freeDraw.ctx.fill(e),this.freeDraw.ctx.stroke(e),e}},{key:"_drawPolygonHandlePoints",value:function(){var t=!0,e=!1,i=void 0;try{for(var n,s=this.handlePoints[Symbol.iterator]();!(t=(n=s.next()).done);t=!0){var r=n.value;r.obj=this._drawCirclePoint(r.point[0],r.point[1],this.handlePointStyle.radius,{lineWidth:this.handlePointStyle.lineWidth,fillStyle:this.handlePointStyle.fillStyle,strokeStyle:this.handlePointStyle.strokeStyle})}}catch(t){e=!0,i=t}finally{try{t||null==s.return||s.return()}finally{if(e)throw i}}}},{key:"_handleKeydown",value:function(t){this.points.length>0&&8===t.keyCode&&(this.points.pop(),this.freeDraw._refreshShapesInCanvas())}},{key:"_polygonMouseDown",value:function(t){var e=t.offsetX,i=t.offsetY;this.clickedHandlePoint?(this.temporaryPointsFollow=!1,this.temporaryPoints=[],this.temporaryPointsWithoutZoomAndOffset=[]):this.isCreate&&this.points.length<this.maxPointCount&&(this.points.push(this.removePointZoomAndMove([e,i])),this.freeDraw.eventsCallBack(t,this.id,"mouseEnterHandlePoint"),this.points.length<this.maxPointCount?this.temporaryPointsFollow=!0:this.temporaryPointsFollow=!1),this.freeDraw._refreshShapesInCanvas()}},{key:"_handleMouseMove",value:function(t){var e=t.offsetX,i=t.offsetY;if(this.clickedHandlePoint)this.points[this.clickedHandlePointIndex]=this.removePointZoomAndMove([e,i]);else if(this.clickedShape){var n=[],s=!0,r=!1,o=void 0;try{for(var a,h=this.points[Symbol.iterator]();!(s=(a=h.next()).done);s=!0){var l=a.value;n.push([Number((l[0]+(e-this.clickedShapePoint[0])/this.freeDraw.zoomLevel).toFixed(this.freeDraw.fix)),Number((l[1]+(i-this.clickedShapePoint[1])/this.freeDraw.zoomLevel).toFixed(this.freeDraw.fix))])}}catch(t){r=!0,o=t}finally{try{s||null==h.return||h.return()}finally{if(r)throw o}}this.clickedShapePoint=[e,i],this.points=n,this.freeDraw.eventsReceive.includes("drag")&&this.freeDraw.eventsCallBack(t,this.id,"drag")}else this.temporaryPointsFollow&&(this.temporaryPoints=[this.removePointZoomAndMove([e,i])],this.temporaryPointsWithoutZoomAndOffset=[[e,i]]);this.freeDraw._refreshShapesInCanvas(),this._pointInHandlePoints(e,i)?this.mouseInHandlePoint||(this.freeDraw.eventsCallBack(t,this.id,"mouseEnterHandlePoint"),this.mouseInHandlePoint=!0):(this.mouseInHandlePoint&&this.freeDraw.eventsCallBack(t,this.id,"mouseLeaveHandlePoint"),this.mouseInHandlePoint=!1)}},{key:"getZoomAndMove",value:function(t){var e=[],i=this.points;t&&(i=i.concat(this.temporaryPoints));for(var n=0;n<i.length;n++){var s=Number(((i[n][0]-this.freeDraw.transformCenter[0])*this.freeDraw.zoomLevel+this.freeDraw.transformCenter[0]).toFixed(this.freeDraw.fix)),r=Number(((i[n][1]-this.freeDraw.transformCenter[1])*this.freeDraw.zoomLevel+this.freeDraw.transformCenter[1]).toFixed(this.freeDraw.fix));0!==this.freeDraw.offsetLeft&&(s=Number((s+this.freeDraw.offsetLeft).toFixed(this.freeDraw.fix))),0!==this.freeDraw.offsetTop&&(r=Number((r+this.freeDraw.offsetTop).toFixed(this.freeDraw.fix))),e.push([s,r])}return e}},{key:"removePointZoomAndMove",value:function(t){var e=x(t,2),i=e[0],n=e[1];return[Number(((i-this.freeDraw.transformCenter[0]-this.freeDraw.offsetLeft)/this.freeDraw.zoomLevel+this.freeDraw.transformCenter[0]).toFixed(this.freeDraw.fix)),Number(((n-this.freeDraw.transformCenter[1]-this.freeDraw.offsetTop)/this.freeDraw.zoomLevel+this.freeDraw.transformCenter[1]).toFixed(this.freeDraw.fix))]}},{key:"_backupData",value:function(){this.pointsBackup=JSON.parse(JSON.stringify(this.points))}},{key:"_rollbackData",value:function(){this.points=JSON.parse(JSON.stringify(this.pointsBackup))}},{key:"getPath",value:function(){var t="M"+this.getZoomAndMove(!0===this.edit).map(function(t){return t.join(",")}).join("L");return this.temporaryPointsFollow||(t+="Z"),t}},{key:"_toSVGPath",value:function(){var t=this;this.path="M"+this.points.map(function(e){return Number(e[0].toFixed(t.freeDraw.fix))+","+Number(e[1].toFixed(t.freeDraw.fix))}).join("L")+"Z",this.SVGPath='<path d="'.concat(this.path,'" />')}},{key:"getBorderPoint",value:function(t){return this.borderPoints[t]}}])&&S(i.prototype,n),r&&S(i,r),e}();function F(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var I=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=null,this.canvasDOM=e.canvas,this.eventsCallBack=e.eventsCallBack,this.eventsReceive=e.eventsReceive||["mouseenter","mouseleave"],this.model="view",this.editingId=null,this.isClickedShape=!1,this.clickedShapeId=null,this.shapeInCanvas={},this.zoomLevel=1,this.offsetTop=0,this.offsetLeft=0,this.transformCenter=[0,0],this.eventsKeysMap={},this.fix=2,this._initFreeDraw()}var e,i,n;return e=t,(i=[{key:"_initFreeDraw",value:function(){this.ctx=this.canvasDOM.getContext("2d"),this.canvasDOM.addEventListener("mousedown",this._distributeEvents.bind(this)),this.canvasDOM.addEventListener("mousemove",this._distributeEvents.bind(this)),this.canvasDOM.addEventListener("mouseup",this._distributeEvents.bind(this)),window.document.addEventListener("keydown",this._distributeEvents.bind(this))}},{key:"_distributeEvents",value:function(t){var e=t.type,i=t.offsetX,n=t.offsetY;if("view"===this.model){if("keydown"===e)return;if("mousedown"===e)for(var s in this.shapeInCanvas){var r=this.shapeInCanvas[s];if(r._includes(i,n))if(this.clickedShapeId=s,this.isClickedShape=!0,null===r.clickTimer)r.clickTime=(new Date).getTime();else{(new Date).getTime()-r.clickTime<=500?this.eventsReceive.includes("doubleclick")&&this.eventsCallBack(t,r.id,"doubleclick"):r.clickTime=(new Date).getTime()}}else"mouseup"===e&&(this.clickedShapeId=null,this.isClickedShape=!1);if(this.eventsCallBack&&"function"==typeof this.eventsCallBack)for(var o in this.shapeInCanvas){this.shapeInCanvas[o]._includes(i,n)?this.eventsKeysMap[o]?this.eventsReceive.includes("mousemove")&&this.eventsCallBack(t,o,"mousemove"):(this.eventsKeysMap[o]="mouse-enter",this.eventsReceive.includes("mouseenter")&&this.eventsCallBack(t,o,"mouseenter")):this.eventsKeysMap[o]&&(this.eventsKeysMap[o]=void 0,this.eventsReceive.includes("mouseleave")&&this.eventsCallBack(t,o,"mouseleave"))}}else if("edit"===this.model){var a=this.shapeInCanvas[this.editingId];a&&(a._trigger(t),"mousedown"===e?a._includes(i,n)&&(this.isClickedShape=!0,this.clickedShapeId=a.id):"mouseup"===e&&(this.isClickedShape=!1,this.clickedShapeId=null))}}},{key:"_updateCtxStyle",value:function(t){t.lineWidth&&(this.ctx.lineWidth=t.lineWidth),t.fillStyle&&(this.ctx.fillStyle=t.fillStyle),t.strokeStyle&&(this.ctx.strokeStyle=t.strokeStyle)}},{key:"removeShape",value:function(t){return this.shapeInCanvas[t]&&delete this.shapeInCanvas[t],"edit"===this.model&&this.editingId===t&&(this.model="view",this.editingId=null),this._refreshShapesInCanvas(),this}},{key:"removeAllShape",value:function(){return this.shapeInCanvas={},this._refreshShapesInCanvas(),this}},{key:"_updateModel",value:function(t,e){this.model=t||"view",this.editingId=e||null}},{key:"_clearCanvas",value:function(){return this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height),this}},{key:"_refreshShapesInCanvas",value:function(){for(var t in this._clearCanvas(),this.shapeInCanvas)this.shapeInCanvas[t]._draw()}},{key:"zoomAndOffset",value:function(t,e,i,n){t&&(this.zoomLevel=t),void 0!==n&&(this.offsetTop=n),void 0!==i&&(this.offsetLeft=i),e&&(this.transformCenter=e),this._refreshShapesInCanvas()}},{key:"addShape",value:function(t){if("edit"===this.model)throw new Error("Can not add another shape in edit model");var e=t.type,i=t.id;if(!i)throw new Error("Shape id can not be empty");if(this.shapeInCanvas[i])throw new Error("Shape id must be unique, shape id '".concat(i,"' has already exist"));return this._updateModel("edit",i),"rect"===e?(this.shapeInCanvas[i]=this._addRect(t),this.shapeInCanvas[i]):"ellipse"===e?(this.shapeInCanvas[i]=this._addEllipse(t),this.shapeInCanvas[i]):"polygon"===e?(this.shapeInCanvas[i]=new L(Object.assign({},{freeDraw:this},t)),this.shapeInCanvas[i]):void 0}},{key:"_addRect",value:function(t){var e=t.id,i=t.type,n=t.shapeStyle,s=t.handlePointStyle,r=t.startPoint,o=t.width,a=t.height;if(t.transform){var h=this.removeZoomAndMoveRect(o,a,r);o=h.width,a=h.height,r=h.startPoint}return new v({id:e,type:i,width:o,height:a,startPoint:r,shapeStyle:n,handlePointStyle:s,freeDraw:this})}},{key:"_addEllipse",value:function(t){var e=t.id,i=t.type,n=t.shapeStyle,s=t.handlePointStyle,r=t.x,o=t.y,a=t.radiusX,h=t.radiusY;if(t.transform){var l=this.removeZoomAndMoveEllipse(r,o,a,h);r=l.x,o=l.y,a=l.radiusX,h=l.radiusY}return new D({id:e,type:i,x:r,y:o,radiusX:a,radiusY:h,shapeStyle:n,handlePointStyle:s,freeDraw:this})}},{key:"removeZoomAndMoveRect",value:function(t,e,i){t/=this.zoomLevel,e/=this.zoomLevel;var n=i[0],s=i[1];return 0!==this.offsetLeft&&(n-=this.offsetLeft),0!==this.offsetTop&&(s-=this.offsetTop),{width:t,height:e,startPoint:[n=(n-this.transformCenter[0])/this.zoomLevel+this.transformCenter[0],s=(s-this.transformCenter[1])/this.zoomLevel+this.transformCenter[1]]}}},{key:"removeZoomAndMoveEllipse",value:function(t,e,i,n){return i/=this.zoomLevel,n/=this.zoomLevel,0!==this.offsetLeft&&(t-=this.offsetLeft),0!==this.offsetTop&&(e-=this.offsetTop),{x:t=(t-this.transformCenter[0])/this.zoomLevel+this.transformCenter[0],y:e=(e-this.transformCenter[1])/this.zoomLevel+this.transformCenter[1],radiusX:i,radiusY:n}}}])&&F(e.prototype,i),n&&F(e,n),t}();e.default=I}]);