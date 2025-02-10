exports.id = 141;
exports.ids = [141];
exports.modules = {

/***/ 4370:
/***/ ((module) => {

// Exports
module.exports = {
	"fullScreen": "container_fullScreen__2nMd6",
	"readingWidth": "container_readingWidth__VNGAE"
};


/***/ }),

/***/ 1704:
/***/ ((module) => {

// Exports
module.exports = {
	"default": "section_default__R2qvk"
};


/***/ }),

/***/ 2610:
/***/ ((module) => {

// Exports
module.exports = {
	"verticalStd": "spacing_verticalStd__h8CAP",
	"verticalMed": "spacing_verticalMed___uEVF",
	"verticalLrg": "spacing_verticalLrg__Iq0hN",
	"verticalXLrg": "spacing_verticalXLrg__suW_y",
	"verticalXXLrg": "spacing_verticalXXLrg____6aV",
	"verticalXXXLrg": "spacing_verticalXXXLrg__IWq75",
	"verticalXXXXLrg": "spacing_verticalXXXXLrg__c8tqd",
	"bottomMed": "spacing_bottomMed__qzjmz",
	"bottomLrg": "spacing_bottomLrg__Jp9uh",
	"bottomXLrg": "spacing_bottomXLrg__b9taF",
	"bottomXXLrg": "spacing_bottomXXLrg__Mr29L",
	"bottomXXXLrg": "spacing_bottomXXXLrg__n4Qf0"
};


/***/ }),

/***/ 7738:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_spacing_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5992);
/* harmony import */ var _styles_structure_container_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4370);
/* harmony import */ var _styles_structure_container_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_structure_container_module_scss__WEBPACK_IMPORTED_MODULE_1__);
// Utility packages


// Structure scss

/**
 * Structural Component
 * 
 * Section / Container / Componenents / Blocks / Utils
 *          ¯¯¯¯¯¯¯¯¯¯¯
 * @param {string}	classProp template literals of classes for container
 * @param {array} 	spacing array of strings for Spacing utility
 * @param {jsx} 	children children elements
 * @returns {jsx}	<Container />
 */ function Container({ classProp , spacing , children  }) {
    const _class = classProp ? classProp : "";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_styles_structure_container_module_scss__WEBPACK_IMPORTED_MODULE_1___default().readingWidth)} ${_class} ${(0,_utils_spacing_util__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(spacing)}`,
        children: children
    });
}


/***/ }),

/***/ 5322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Section)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_structure_section_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1704);
/* harmony import */ var _styles_structure_section_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_structure_section_module_scss__WEBPACK_IMPORTED_MODULE_1__);
// Section structure scss


/**
 * Structural Component
 * 
 * Section / Container / Componenents / Blocks / Utils
 * ¯¯¯¯¯¯¯¯         
 * @param {string}	classProp template literals of classes for contain
 * @param {jsx} 	children children elements
 * @returns {jsx}	<Section />
 */ function Section({ classProp , children  }) {
    const _class = classProp ? classProp : "";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_styles_structure_section_module_scss__WEBPACK_IMPORTED_MODULE_1___default()["default"])} ${_class}`,
        children: children
    });
}


/***/ }),

/***/ 683:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
// Core packages


// Font Awesome packages
const { library , config  } = __webpack_require__(3195);

// import { fas } from '@fortawesome/pro-solid-svg-icons'
// import { fat } from '@fortawesome/pro-thin-svg-icons'
// import { fal } from '@fortawesome/pro-light-svg-icons'
// import { fad } from '@fortawesome/pro-duotone-svg-icons'
// import { far } from '@fortawesome/pro-regular-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// Load icons into
// library.add(fat, fal, fas, fad, far, fab)
/**
 * Icon factory utility.
 * Generates icon JSX and returns it. Keeps all icon packages isolated in here
 * 
 * ! Can only distribute free icons
 * ? give users access to cheat sheet of free icons
 * ? pre-select those icons in a MD file
 * ? use MD file to only load those icons from the lib
 * 
 * ! requiring the library will likely create a SSR issue
 * ! According to maintainers of @fortawesome the best solution will be to import the icon directly 
 * ! and avoit the library module all together which is inline with MD loading plans
 * * https://github.com/FortAwesome/Font-Awesome/issues/19348
 *
 * @param 	{array} icon request props [ iconType, iconKey ]
 * @returns {jsx} 	<Icon />
 */ function Icon({ icon  }) {
    const [iconType, iconKey] = icon;
    const { 0: stateIconKey , 1: setIconKey  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("circle-notch");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>setIconKey(iconKey), [
        iconKey
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {
        icon: [
            iconType,
            stateIconKey
        ]
    });
}


/***/ }),

/***/ 5992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Spacing)
/* harmony export */ });
/* harmony import */ var _styles_utils_spacing_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2610);
/* harmony import */ var _styles_utils_spacing_module_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_spacing_module_scss__WEBPACK_IMPORTED_MODULE_0__);
// Utility scss

/**
 * Selector class factory for spacial geomtry utility component
 * 
 * @param 	{array} 	spacing array of strings to select spacing class
 * @returns {string} 	returns string of class references
 */ function Spacing(spacing) {
    let classes = [];
    if (Array.isArray(spacing)) {
        spacing.forEach((space)=>{
            classes.push((_styles_utils_spacing_module_scss__WEBPACK_IMPORTED_MODULE_0___default())[space]);
        });
    } else {
        classes.push((_styles_utils_spacing_module_scss__WEBPACK_IMPORTED_MODULE_0___default())[spacing]);
    }
    return classes.join(" ");
}


/***/ })

};
;