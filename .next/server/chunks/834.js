exports.id = 834;
exports.ids = [834];
exports.modules = {

/***/ 3834:
/***/ ((module) => {

// Exports
module.exports = {
	"badgeBlockContainer": "badges_badgeBlockContainer__kevdK",
	"list": "badges_list__7K6_N",
	"item": "badges_item__4z4QX",
	"colored": "badges_colored__v7OXl",
	"title": "badges_title__2xfcM",
	"methods": "badges_methods__tBEpE",
	"invertedColor": "badges_invertedColor__VgL9E",
	"fullContainer": "badges_fullContainer__IxLYL"
};


/***/ }),

/***/ 2584:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "section_title_title__vFiXQ"
};


/***/ }),

/***/ 7425:
/***/ ((module) => {

// Exports
module.exports = {
	"hasBg": "featured_hasBg__MnnLx",
	"project": "featured_project__alfJt",
	"viewProject": "featured_viewProject__LRCDl",
	"projectHeader": "featured_projectHeader__DHjCt",
	"header": "featured_header__NiZK4",
	"privateOr": "featured_privateOr__xOazf",
	"details": "featured_details__Vb5IC",
	"imageContainer": "featured_imageContainer__T6aeo",
	"imageAnimationContainer": "featured_imageAnimationContainer__bfdEh",
	"bgContainer": "featured_bgContainer__8IxY8",
	"afterGlowBg": "featured_afterGlowBg__hXlZJ",
	"orbitalBg": "featured_orbitalBg__3gyim",
	"rotationFore": "featured_rotationFore__NXBAx",
	"bgSection": "featured_bgSection__PzIR2",
	"bgInner": "featured_bgInner__2Y3Ln",
	"heroOrbital": "featured_heroOrbital__XSsO8",
	"heroLeft": "featured_heroLeft__uecXJ",
	"heroCenter": "featured_heroCenter__ygpHP",
	"heroRight": "featured_heroRight__CzHQf",
	"stackContainer": "featured_stackContainer__x1ueX"
};


/***/ }),

/***/ 155:
/***/ ((module) => {

// Exports
module.exports = {
	"colors": "page_colors_colors__VUWMb"
};


/***/ }),

/***/ 9068:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FeaturedProject)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4009);
/* harmony import */ var _utils_badge_list_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3341);
/* harmony import */ var _utils_icon_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(683);
/* harmony import */ var _styles_sections_projects_featured_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7425);
/* harmony import */ var _styles_sections_projects_featured_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_sections_projects_featured_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _content_projects_featured_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2259);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__, _utils_badge_list_util__WEBPACK_IMPORTED_MODULE_5__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_3__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__, _utils_badge_list_util__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function FeaturedProject({ content  }, index) {
    const { project , url , repo , github , descriptionTitle , description , stack , imageOptions , images  } = content;
    const controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation)();
    const { ref , inView  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView)({
        "threshold": 0.25,
        "triggerOnce": false
    });
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (inView) {
            controls.start("visible");
        }
        if (!inView) {
            controls.start("hidden");
        }
    }, [
        controls,
        inView
    ]);
    const { 0: windowWidth , 1: setWindowWidth  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        // Set the initial window width after the component mounts
        setWindowWidth(window.innerWidth);
        const handleResize = ()=>{
            setWindowWidth(window.innerWidth); // Update state on resize
        };
        window.addEventListener("resize", handleResize); // Add event listener
        return ()=>{
            window.removeEventListener("resize", handleResize); // Cleanup on unmount
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.m.section, {
        className: (_styles_sections_projects_featured_module_scss__WEBPACK_IMPORTED_MODULE_8___default().project),
        //framer-motion
        ref: ref,
        variants: container,
        initial: [
            "rest",
            "hidden"
        ],
        whileHover: "hover",
        animate: controls,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_sections_projects_featured_module_scss__WEBPACK_IMPORTED_MODULE_8___default().details),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_sections_projects_featured_module_scss__WEBPACK_IMPORTED_MODULE_8___default().projectHeader),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_sections_projects_featured_module_scss__WEBPACK_IMPORTED_MODULE_8___default().header),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "highlight",
                                    children: project
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: github,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: (_styles_sections_projects_featured_module_scss__WEBPACK_IMPORTED_MODULE_8___default().privateOr),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "devicon-github-plain"
                                            }),
                                            repo
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_sections_projects_featured_module_scss__WEBPACK_IMPORTED_MODULE_8___default().description),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                        children: descriptionTitle
                                    }),
                                    " ",
                                    description
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_sections_projects_featured_module_scss__WEBPACK_IMPORTED_MODULE_8___default().stackContainer),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_badge_list_util__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                list: stack,
                                block: "stack",
                                fullContainer: false,
                                color: false
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.m.div, {
                            variants: "",
                            className: (_styles_sections_projects_featured_module_scss__WEBPACK_IMPORTED_MODULE_8___default().viewProject),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_icon_util__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                    icon: [
                                        "fad",
                                        "arrow-right-to-bracket"
                                    ]
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_sections_projects_featured_module_scss__WEBPACK_IMPORTED_MODULE_8___default().imageContainer),
                style: {
                    overflow: "hidden",
                    maxHeight: "600px"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    children: windowWidth < 500 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.m.div, {
                        style: {
                            paddingTop: "30px"
                        },
                        variants: item,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.m.div, {
                            variants: hoverLeft,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: images[0].url,
                                alt: "x",
                                width: 600,
                                style: {
                                    maxHeight: "100%",
                                    objectFit: "contain"
                                }
                            })
                        })
                    }, `0-${images[0].key}`) : images.map(({ key , url , hover , h , w  }, index)=>{
                        hover = hover === "left" ? hoverLeft : hoverRight;
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.m.div, {
                            style: {
                                paddingTop: `${index === 0 ? "30px" : "0px"}`
                            },
                            variants: item,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.m.div, {
                                variants: hover,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: url,
                                    alt: "x",
                                    width: 600,
                                    style: {
                                        maxHeight: "100%",
                                        objectFit: "contain"
                                    }
                                })
                            })
                        }, `${index}-${key}`);
                    })
                })
            })
        ]
    }, index);
}
const container = {
    hidden: {
        transition: {
            delayChildren: 0.125,
            staggerChildren: 0.0625
        }
    },
    visible: {
        transition: {
            delayChildren: 0.125,
            staggerChildren: 0.25
        }
    },
    rest: {
        transition: {
            delayChildren: 0,
            staggerChildren: 0
        }
    },
    hover: {
        transition: {
            delayChildren: 0,
            staggerChildren: 0
        }
    }
};
const item = {
    hidden: {
        y: 75,
        opacity: 0,
        transition: {
            type: "tween",
            ease: "easeIn",
            duration: .35
        }
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "tween",
            ease: "easeOut",
            duration: .5
        }
    }
};
const hoverLeft = {
    rest: {
        x: 0
    },
    hover: {
        x: -20
    }
};
const hoverRight = {
    rest: {
        x: 0
    },
    hover: {
        x: 20
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SectionTitle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _structure_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7738);
/* harmony import */ var _styles_blocks_section_title_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2584);
/* harmony import */ var _styles_blocks_section_title_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_blocks_section_title_module_scss__WEBPACK_IMPORTED_MODULE_2__);


// Section scss

/**
 * Section header component
 * 
 * @param {string} * strings for header
 * @returns 
 */ function SectionTitle({ preTitle , title , subTitle  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `${(_styles_blocks_section_title_module_scss__WEBPACK_IMPORTED_MODULE_2___default().title)}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                    children: preTitle
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "subtitle",
                    children: subTitle
                })
            ]
        })
    });
}


/***/ }),

/***/ 5542:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FeaturedProjects)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_projects_featured__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9068);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _structure_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5322);
/* harmony import */ var _structure_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7738);
/* harmony import */ var _utils_badge_list_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3341);
/* harmony import */ var _utils_icon_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(683);
/* harmony import */ var _blocks_section_title_block__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1498);
/* harmony import */ var _styles_sections_projects_featured_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7425);
/* harmony import */ var _styles_sections_projects_featured_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_sections_projects_featured_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _content_projects_featured_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2259);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_blocks_projects_featured__WEBPACK_IMPORTED_MODULE_1__, _utils_badge_list_util__WEBPACK_IMPORTED_MODULE_5__]);
([_blocks_projects_featured__WEBPACK_IMPORTED_MODULE_1__, _utils_badge_list_util__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



// Section structure







function FeaturedProjects() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_structure_section__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        classProp: (_styles_sections_projects_featured_module_scss__WEBPACK_IMPORTED_MODULE_9___default().hasBg),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_structure_container__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                spacing: "verticalXXXXLrg",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blocks_section_title_block__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        title: "Featured Projects",
                        preTitle: "Full Stack and GenAI",
                        subTitle: "Engineering with a focus on impactful solutions."
                    }),
                    "     ",
                    _content_projects_featured_json__WEBPACK_IMPORTED_MODULE_8__.map((data, index)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_blocks_projects_featured__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                            content: data,
                            index: index
                        }, index);
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_sections_projects_featured_module_scss__WEBPACK_IMPORTED_MODULE_9___default().bgContainer),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: (_styles_sections_projects_featured_module_scss__WEBPACK_IMPORTED_MODULE_9___default().orbitalBg),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                class: `${(_styles_sections_projects_featured_module_scss__WEBPACK_IMPORTED_MODULE_9___default().bgSection)}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: `${(_styles_sections_projects_featured_module_scss__WEBPACK_IMPORTED_MODULE_9___default().bgInner)} ${(_styles_sections_projects_featured_module_scss__WEBPACK_IMPORTED_MODULE_9___default().heroLeft)} ${(_styles_sections_projects_featured_module_scss__WEBPACK_IMPORTED_MODULE_9___default().heroOrbital)}`
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                class: `${(_styles_sections_projects_featured_module_scss__WEBPACK_IMPORTED_MODULE_9___default().bgSection)}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: `${(_styles_sections_projects_featured_module_scss__WEBPACK_IMPORTED_MODULE_9___default().bgInner)} ${(_styles_sections_projects_featured_module_scss__WEBPACK_IMPORTED_MODULE_9___default().heroCenter)}`
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                class: `${(_styles_sections_projects_featured_module_scss__WEBPACK_IMPORTED_MODULE_9___default().bgSection)}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: `${(_styles_sections_projects_featured_module_scss__WEBPACK_IMPORTED_MODULE_9___default().bgInner)} ${(_styles_sections_projects_featured_module_scss__WEBPACK_IMPORTED_MODULE_9___default().heroRight)} ${(_styles_sections_projects_featured_module_scss__WEBPACK_IMPORTED_MODULE_9___default().heroOrbital)}`
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_styles_sections_projects_featured_module_scss__WEBPACK_IMPORTED_MODULE_9___default().afterGlowBg)
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3341:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Badges)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4009);
/* harmony import */ var _utils_icon_util_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(683);
/* harmony import */ var _styles_blocks_badges_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3834);
/* harmony import */ var _styles_blocks_badges_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_blocks_badges_module_scss__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// Utility components

/**
* scss reference for utils should probably be pulled in from the first component under the section
*/ 
function Badges({ list , block , color , fullContainer  }) {
    const controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useAnimation)();
    const { ref , inView  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.useInView)({
        "threshold": 0.5,
        "triggerOnce": false
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (inView) {
            controls.start("visible");
        }
        if (!inView) {
            controls.start("hidden");
        }
    }, [
        controls,
        inView
    ]);
    const container = {
        hidden: {
            opacity: 1,
            transition: {
                delayChildren: 0.25,
                staggerChildren: 0.025
            }
        },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.025,
                staggerChildren: 0.1
            }
        }
    };
    const item = {
        hidden: {
            y: 20,
            opacity: -0.5
        },
        visible: {
            y: 0,
            opacity: 1
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.m.ul, {
        className: `${(_styles_blocks_badges_module_scss__WEBPACK_IMPORTED_MODULE_5___default().list)} ${(_styles_blocks_badges_module_scss__WEBPACK_IMPORTED_MODULE_5___default())[block]} ${(_styles_blocks_badges_module_scss__WEBPACK_IMPORTED_MODULE_5___default())[fullContainer]}`,
        //Animations
        ref: ref,
        variants: container,
        initial: "hidden",
        animate: controls,
        whileHover: "hover",
        children: list.map(({ key , name , type  })=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.m.li, {
                className: `${(_styles_blocks_badges_module_scss__WEBPACK_IMPORTED_MODULE_5___default().item)} ${key}`,
                //Animations
                variants: item,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconModule, {
                        iconKey: key,
                        iconType: type,
                        color: color
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: (_styles_blocks_badges_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                        children: name
                    })
                ]
            }, name);
        })
    });
}
function IconModule({ iconKey , iconType , color  }) {
    let colored = "colored";
    if (color === false) {
        colored = "";
    }
    switch(iconType){
        case "far":
        case "fad":
        case "fat":
        case "fas":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_icon_util_jsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                icon: [
                    iconType,
                    iconKey
                ]
            });
        case "devicon":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                className: `devicon-${iconKey}-plain ${colored}`
            });
        default:
            return "";
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ColorOverrides)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_utils_page_colors_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(155);
/* harmony import */ var _styles_utils_page_colors_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_page_colors_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function ColorOverrides({ colors  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("data", {
            id: "page-specific-colors",
            className: (_styles_utils_page_colors_module_scss__WEBPACK_IMPORTED_MODULE_1___default().colors),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Dark, {
                    colors: colors.dark
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Unicorn, {
                    colors: colors.unicorn
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Light, {
                    colors: colors.light
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    "aria-hidden": "true",
                    focusable: "false",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                        id: "fa-gradient",
                        x1: "0%",
                        y1: "0%",
                        x2: "175%",
                        y2: "175%",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "0%",
                                stopColor: "var(--neon-1-2)"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                offset: "100%",
                                stopColor: "var(--neon-1-1)"
                            })
                        ]
                    })
                })
            ]
        })
    });
}
function Dark({ colors  }) {
    const children = Object.keys(colors).length;
    if (children != 0) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
            children: `
				:root[data-theme=dark] {
					--mesh-color-1: ${colors.mesh__secondaryDark};
					--mesh-color-2: ${colors.mesh__secondaryLight};
					--mesh-color-3: ${colors.mesh__primaryDark};
					--mesh-color-4: ${colors.mesh__primaryLight};
				}
				`
        });
    }
}
function Unicorn({ colors  }) {
    const children = Object.keys(colors).length;
    if (children != 0) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
            children: `
				:root[data-theme=unicorn] {
					--mesh-color-1: ${colors.mesh__secondaryDark};
					--mesh-color-2: ${colors.mesh__secondaryLight};
					--mesh-color-3: ${colors.mesh__primaryDark};
					--mesh-color-4: ${colors.mesh__primaryLight};
				}
				`
        });
    }
}
function Light({ colors  }) {
    const children = Object.keys(colors).length;
    if (children != 0) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
            children: `
				:root[data-theme=light] {
					--mesh-color-1: ${colors.mesh__secondaryDark};
					--mesh-color-2: ${colors.mesh__secondaryLight};
					--mesh-color-3: ${colors.mesh__primaryDark};
					--mesh-color-4: ${colors.mesh__primaryLight};
				}
				`
        });
    }
}


/***/ }),

/***/ 2259:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"project":"ChatApp","url":"https://shreychat.netlify.app/","repo":"Public","github":"https://github.com/Shreykumar1/ChatApp","descriptionTitle":"Real-time Chat Application","description":"Implemented features like send, edit, delete, share, and reply to messages with file sharing.","images":[{"key":"chatapp","hover":"left","h":"797","w":"556","url":"/img/project/6.png"},{"key":"chatapp","hover":"right","h":"797","w":"556","url":"/img/project/5.png"}],"stack":[{"key":"mongodb","name":"MongoDB","type":"devicon"},{"key":"server","name":"Express","type":"fas"},{"key":"react","name":"React","type":"devicon"},{"key":"nodejs","name":"Node.js","type":"devicon"},{"key":"socketio","name":"Socket.IO","type":"devicon"},{"key":"materialui","name":"Material UI","type":"devicon"},{"key":"fa-lock","name":"Google OAuth","type":"fas"}]},{"project":"GPT Genius","url":"https://shreygptgenius.vercel.app/","repo":"Public","github":"https://github.com/Shreykumar1/gptgenius","descriptionTitle":"AI-powered Chatbot","description":"Contextual interactions, tour generation, and landmark identification using AI.","images":[{"key":"gptgen","hover":"right","h":"797","w":"556","url":"/img/project/4.png"},{"key":"gptgen","hover":"left","h":"797","w":"556","url":"/img/project/3.png"}],"stack":[{"key":"nextjs","name":"Next.js","type":"devicon"},{"key":"react","name":"React","type":"devicon"},{"key":"google","name":"Gemini GenAI","type":"devicon"},{"key":"fa-cubes","name":"Prisma","type":"fas"},{"key":"postgresql","name":"PostgreSQL","type":"devicon"},{"key":"server","name":"Pinecone","type":"fas"},{"key":"fa-vector-square","name":"Vector Database (Pinecone)","type":"fas"},{"key":"fa-database","name":"React Query","type":"fas"}]},{"project":"Footcap","url":"https://footcapshop.netlify.app/","repo":"Public","github":"https://github.com/Shreykumar1/ecommerce","descriptionTitle":"Shoe E-commerce DBMS","description":"Responsive frontend, secure authentication, shopping cart, product listing, and admin panel.","images":[{"key":"footcap","hover":"left","h":"797","w":"556","url":"/img/project/1.png"},{"key":"footcap","hover":"right","h":"797","w":"556","url":"/img/project/2.png"}],"stack":[{"key":"react","name":"React","type":"devicon"},{"key":"nodejs","name":"Node.js","type":"devicon"},{"key":"mysql","name":"MySQL","type":"devicon"},{"key":"server","name":"Express","type":"fas"},{"key":"javascript","name":"JavaScript","type":"devicon"},{"key":"tailwindcss","name":"Tailwind CSS","type":"devicon"},{"key":"fa-brush","name":"DaisyUI","type":"fas"},{"key":"fa-lock","name":"Authentication","type":"fas"}]}]');

/***/ })

};
;