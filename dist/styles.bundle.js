webpackJsonp([2],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../nouislider/distribute/nouislider.min.css"), "");

// module
exports.push([module.i, ".cc{\n    display: none;\n}\n\n\n.sizeleft{\n    width: 10px;\n    height: 10px;\n    background-color: white;\n    position: absolute;\n    top: 50%;\n    left: 0px;\n    z-index: 10;\n    border: 1px solid black;\n}\n.sizeright{\n    width: 10px;\n    height: 10px;\n    background-color: white;\n    position: absolute;\n    top: 50%;\n   right: 0px;\n    z-index: 10;\n    border: 1px solid black;\n}\n.sizetop{\n    width: 10px;\n    height: 10px;\n    background-color: white;\n    position: absolute;\n    top: 0px;\n    left: 50%;\n    z-index: 10;\n    border: 1px solid black;\n}\n.sizebottom{\n    width: 10px;\n    height: 10px;\n    background-color: white;\n    position: absolute;\n    left: 50%;\n    bottom: 0px;\n    z-index: 10;\n    border: 1px solid black;\n}\n.sizeleftcorner{\n    width: 10px;\n    height: 10px;\n    background-color: white;\n    position: absolute;\n    top: 0px;\n    left: 0px;\n    z-index: 10;\n    border: 1px solid black;\n}\n.sizetopcorner{\n    width: 10px;\n    height: 10px;\n    background-color: white;\n    position: absolute;\n    top: 0px;\n    right: 0px;\n    z-index: 10;\n    border: 1px solid black;\n}\n.sizerightcorner{\n    width: 10px;\n    height: 10px;\n    background-color: white;\n    position: absolute;\n    bottom: 0px;\n    right:0px;\n    z-index: 10;\n    border: 1px solid black;\n}\n.sizebottomcorner{\n    width: 10px;\n    height: 10px;\n    background-color: white;\n    position: absolute;\n    left: 0px;\n    bottom: 0px;\n    z-index: 10;\n    border: 1px solid black;\n}\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../ion-rangeslider/css/ion.rangeSlider.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Ion.RangeSlider\n// css version 2.0.3\n// © 2013-2014 Denis Ineshin | IonDen.com\n// ===================================================================================================================*/\n\n/* =====================================================================================================================\n// RangeSlider */\n\n.irs {\n    position: relative; display: block;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n    .irs-line {\n        position: relative; display: block;\n        overflow: hidden;\n        outline: none !important;\n    }\n        .irs-line-left, .irs-line-mid, .irs-line-right {\n            position: absolute; display: block;\n            top: 0;\n        }\n        .irs-line-left {\n            left: 0; width: 11%;\n        }\n        .irs-line-mid {\n            left: 9%; width: 82%;\n        }\n        .irs-line-right {\n            right: 0; width: 11%;\n        }\n\n    .irs-bar {\n        position: absolute; display: block;\n        left: 0; width: 0;\n    }\n        .irs-bar-edge {\n            position: absolute; display: block;\n            top: 0; left: 0;\n        }\n\n    .irs-shadow {\n        position: absolute; display: none;\n        left: 0; width: 0;\n    }\n\n    .irs-slider {\n        position: absolute; display: block;\n        cursor: default;\n        z-index: 1;\n    }\n        .irs-slider.single {\n\n        }\n        .irs-slider.from {\n\n        }\n        .irs-slider.to {\n\n        }\n        .irs-slider.type_last {\n            z-index: 2;\n        }\n\n    .irs-min {\n        position: absolute; display: block;\n        left: 0;\n        cursor: default;\n    }\n    .irs-max {\n        position: absolute; display: block;\n        right: 0;\n        cursor: default;\n    }\n\n    .irs-from, .irs-to, .irs-single {\n        position: absolute; display: block;\n        top: 0; left: 0;\n        cursor: default;\n        white-space: nowrap;\n    }\n\n.irs-grid {\n    position: absolute; display: none;\n    bottom: 0; left: 0;\n    width: 100%; height: 20px;\n}\n.irs-with-grid .irs-grid {\n    display: block;\n}\n    .irs-grid-pol {\n        position: absolute;\n        top: 0; left: 0;\n        width: 1px; height: 8px;\n        background: #000;\n    }\n    .irs-grid-pol.small {\n        height: 4px;\n    }\n    .irs-grid-text {\n        position: absolute;\n        bottom: 0; left: 0;\n        white-space: nowrap;\n        text-align: center;\n        font-size: 9px; line-height: 9px;\n        padding: 0 3px;\n        color: #000;\n    }\n\n.irs-disable-mask {\n    position: absolute; display: block;\n    top: 0; left: -1%;\n    width: 102%; height: 100%;\n    cursor: default;\n    background: rgba(0,0,0,0.0);\n    z-index: 2;\n}\n.lt-ie9 .irs-disable-mask {\n    background: #000;\n    filter: alpha(opacity=0);\n    cursor: not-allowed;\n}\n\n.irs-disabled {\n    opacity: 0.4;\n}\n\n\n.irs-hidden-input {\n    position: absolute !important;\n    display: block !important;\n    top: 0 !important;\n    left: 0 !important;\n    width: 0 !important;\n    height: 0 !important;\n    font-size: 0 !important;\n    line-height: 0 !important;\n    padding: 0 !important;\n    margin: 0 !important;\n    overflow: hidden;\n    outline: none !important;\n    z-index: -9999 !important;\n    background: none !important;\n    border-style: solid !important;\n    border-color: transparent !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../ion-rangeslider/css/ion.rangeSlider.skinFlat.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Ion.RangeSlider, Flat UI Skin\n// css version 2.0.3\n// © Denis Ineshin, 2014    https://github.com/IonDen\n// ===================================================================================================================*/\n\n/* =====================================================================================================================\n// Skin details */\n\n.irs-line-mid,\n.irs-line-left,\n.irs-line-right,\n.irs-bar,\n.irs-bar-edge,\n.irs-slider {\n    background: url(" + __webpack_require__("../../../../ion-rangeslider/img/sprite-skin-flat.png") + ") repeat-x;\n}\n\n.irs {\n    height: 40px;\n}\n.irs-with-grid {\n    height: 60px;\n}\n.irs-line {\n    height: 12px; top: 25px;\n}\n    .irs-line-left {\n        height: 12px;\n        background-position: 0 -30px;\n    }\n    .irs-line-mid {\n        height: 12px;\n        background-position: 0 0;\n    }\n    .irs-line-right {\n        height: 12px;\n        background-position: 100% -30px;\n    }\n\n.irs-bar {\n    height: 12px; top: 25px;\n    background-position: 0 -60px;\n}\n    .irs-bar-edge {\n        top: 25px;\n        height: 12px; width: 9px;\n        background-position: 0 -90px;\n    }\n\n.irs-shadow {\n    height: 3px; top: 34px;\n    background: #000;\n    opacity: 0.25;\n}\n.lt-ie9 .irs-shadow {\n    filter: alpha(opacity=25);\n}\n\n.irs-slider {\n    width: 16px; height: 18px;\n    top: 22px;\n    background-position: 0 -120px;\n}\n.irs-slider.state_hover, .irs-slider:hover {\n    background-position: 0 -150px;\n}\n\n.irs-min, .irs-max {\n    color: #999;\n    font-size: 10px; line-height: 1.333;\n    text-shadow: none;\n    top: 0; padding: 1px 3px;\n    background: #e1e4e9;\n    border-radius: 4px;\n}\n\n.irs-from, .irs-to, .irs-single {\n    color: #fff;\n    font-size: 10px; line-height: 1.333;\n    text-shadow: none;\n    padding: 1px 5px;\n    background: #ed5565;\n    border-radius: 4px;\n}\n.irs-from:after, .irs-to:after, .irs-single:after {\n    position: absolute; display: block; content: \"\";\n    bottom: -6px; left: 50%;\n    width: 0; height: 0;\n    margin-left: -3px;\n    overflow: hidden;\n    border: 3px solid transparent;\n    border-top-color: #ed5565;\n}\n\n\n.irs-grid-pol {\n    background: #e1e4e9;\n}\n.irs-grid-text {\n    color: #999;\n}\n\n.irs-disabled {\n}\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../nouislider/distribute/nouislider.min.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*! nouislider - 10.1.0 - 2017-07-28 13:09:54 */.noUi-target,.noUi-target *{-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;-webkit-user-select:none;-ms-touch-action:none;touch-action:none;-ms-user-select:none;-moz-user-select:none;user-select:none;box-sizing:border-box}.noUi-target{position:relative;direction:ltr}.noUi-base{width:100%;height:100%;position:relative;z-index:1}.noUi-connect{position:absolute;right:0;top:0;left:0;bottom:0}.noUi-origin{position:absolute;height:0;width:0}.noUi-handle{position:relative;z-index:1}.noUi-state-tap .noUi-connect,.noUi-state-tap .noUi-origin{transition:top .3s,right .3s,bottom .3s,left .3s}.noUi-state-drag *{cursor:inherit!important}.noUi-base,.noUi-handle{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.noUi-horizontal{height:18px}.noUi-horizontal .noUi-handle{width:34px;height:28px;left:-17px;top:-6px}.noUi-vertical{width:18px}.noUi-vertical .noUi-handle{width:28px;height:34px;left:-6px;top:-17px}.noUi-target{background:#FAFAFA;border-radius:4px;border:1px solid #D3D3D3;box-shadow:inset 0 1px 1px #F0F0F0,0 3px 6px -5px #BBB}.noUi-connect{background:#3FB8AF;border-radius:4px;box-shadow:inset 0 0 3px rgba(51,51,51,.45);transition:background 450ms}.noUi-draggable{cursor:ew-resize}.noUi-vertical .noUi-draggable{cursor:ns-resize}.noUi-handle{border:1px solid #D9D9D9;border-radius:3px;background:#FFF;cursor:default;box-shadow:inset 0 0 1px #FFF,inset 0 1px 7px #EBEBEB,0 3px 6px -3px #BBB}.noUi-active{box-shadow:inset 0 0 1px #FFF,inset 0 1px 7px #DDD,0 3px 6px -3px #BBB}.noUi-handle:after,.noUi-handle:before{content:\"\";display:block;position:absolute;height:14px;width:1px;background:#E8E7E6;left:14px;top:6px}.noUi-handle:after{left:17px}.noUi-vertical .noUi-handle:after,.noUi-vertical .noUi-handle:before{width:14px;height:1px;left:6px;top:14px}.noUi-vertical .noUi-handle:after{top:17px}[disabled] .noUi-connect{background:#B8B8B8}[disabled] .noUi-handle,[disabled].noUi-handle,[disabled].noUi-target{cursor:not-allowed}.noUi-pips,.noUi-pips *{box-sizing:border-box}.noUi-pips{position:absolute;color:#999}.noUi-value{position:absolute;white-space:nowrap;text-align:center}.noUi-value-sub{color:#ccc;font-size:10px}.noUi-marker{position:absolute;background:#CCC}.noUi-marker-large,.noUi-marker-sub{background:#AAA}.noUi-pips-horizontal{padding:10px 0;height:80px;top:100%;left:0;width:100%}.noUi-value-horizontal{-webkit-transform:translate3d(-50%,50%,0);transform:translate3d(-50%,50%,0)}.noUi-marker-horizontal.noUi-marker{margin-left:-1px;width:2px;height:5px}.noUi-marker-horizontal.noUi-marker-sub{height:10px}.noUi-marker-horizontal.noUi-marker-large{height:15px}.noUi-pips-vertical{padding:0 10px;height:100%;top:0;left:100%}.noUi-value-vertical{-webkit-transform:translate3d(0,50%,0);transform:translate3d(0,50%,0);padding-left:25px}.noUi-marker-vertical.noUi-marker{width:5px;height:2px;margin-top:-1px}.noUi-marker-vertical.noUi-marker-sub{width:10px}.noUi-marker-vertical.noUi-marker-large{width:15px}.noUi-tooltip{display:block;position:absolute;border:1px solid #D9D9D9;border-radius:3px;background:#fff;color:#000;padding:5px;text-align:center;white-space:nowrap}.noUi-horizontal .noUi-tooltip{-webkit-transform:translate(-50%,0);transform:translate(-50%,0);left:50%;bottom:120%}.noUi-vertical .noUi-tooltip{-webkit-transform:translate(0,-50%);transform:translate(0,-50%);top:50%;right:120%}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../ion-rangeslider/css/ion.rangeSlider.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../ion-rangeslider/css/ion.rangeSlider.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js??ref--9-1!../../postcss-loader/index.js??postcss!./ion.rangeSlider.css", function() {
			var newContent = require("!!../../css-loader/index.js??ref--9-1!../../postcss-loader/index.js??postcss!./ion.rangeSlider.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../ion-rangeslider/css/ion.rangeSlider.skinFlat.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../ion-rangeslider/css/ion.rangeSlider.skinFlat.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../css-loader/index.js??ref--9-1!../../postcss-loader/index.js??postcss!./ion.rangeSlider.skinFlat.css", function() {
			var newContent = require("!!../../css-loader/index.js??ref--9-1!../../postcss-loader/index.js??postcss!./ion.rangeSlider.skinFlat.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../ion-rangeslider/img/sprite-skin-flat.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAC0BAMAAACAm0/4AAAAG1BMVEUAAADh5Onlt8Dh5OntVWXh5OntVWWkNUDaRFOm5Bg2AAAABXRSTlMA8SatrXO/UNAAAAC/SURBVHja7dYhDgIxEIbRZgWgIXgweARXWE9IPQrNETg6GQ9JV81k894JPtFO/tbTSZAgQYKEqgkAAIyYrj3V4dTOPdm+3XqyRzv2ZPcKI76nkxAqPMcCn7LAaSpwoAEAGPFKJ0GCBAkSqiYAADBimtNX1CV/yM35CQXmrAQJhRIKfMoCp6nAgQYAYNDm2bLtPm0hCUFCkBAkBAlBQpAQ1phQYLIAwD/bd1tIQpAQJAQJQUKQECQECWGNCQDwyxeVdc3fxNBs+QAAAABJRU5ErkJggg=="

/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../../../../src/styles.css");
__webpack_require__("../../../../ion-rangeslider/css/ion.rangeSlider.css");
module.exports = __webpack_require__("../../../../ion-rangeslider/css/ion.rangeSlider.skinFlat.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map