(() => {
var exports = {};
exports.id = 327;
exports.ids = [327];
exports.modules = {

/***/ 9998:
/***/ ((module) => {

// Exports
module.exports = {
	"section": "recent_section__hdbjG",
	"container": "recent_container__elNTi",
	"profile": "recent_profile__XVH1u",
	"projects": "recent_projects__AT3N3",
	"project": "recent_project__CRDP7",
	"header": "recent_header__YDOPl",
	"homepage": "recent_homepage__UwcOB",
	"details": "recent_details__YZF0s",
	"pushedAt": "recent_pushedAt__bMMr4",
	"topicsContainer": "recent_topicsContainer__RN28e",
	"topics": "recent_topics__9aFxo",
	"descriptionContainer": "recent_descriptionContainer__rZ8cQ",
	"description": "recent_description__rqKTr"
};


/***/ }),

/***/ 1977:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GitProjects)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _structure_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5322);
/* harmony import */ var _structure_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7738);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_icon_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(683);
/* harmony import */ var _styles_sections_projects_recent_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9998);
/* harmony import */ var _styles_sections_projects_recent_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_sections_projects_recent_module_scss__WEBPACK_IMPORTED_MODULE_5__);
// Section structure






function GitProjects({ repos , user  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_structure_section__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        classProp: (_styles_sections_projects_recent_module_scss__WEBPACK_IMPORTED_MODULE_5___default().section),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_structure_container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            classProp: (_styles_sections_projects_recent_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),
            spacing: "verticalXXXLrg",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    children: "Recent Projects"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                    className: (_styles_sections_projects_recent_module_scss__WEBPACK_IMPORTED_MODULE_5___default().profile),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            className: (_styles_sections_projects_recent_module_scss__WEBPACK_IMPORTED_MODULE_5___default().profilePhoto),
                            src: `${user[0].avatar_url}`,
                            alt: "Github Profile Photo",
                            height: 60,
                            width: 60
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            class: (_styles_sections_projects_recent_module_scss__WEBPACK_IMPORTED_MODULE_5___default().details),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: user[0].name
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    href: user[0].html_url,
                                    rel: "noreferrer",
                                    target: "_blank",
                                    children: [
                                        user[0].html_url,
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_icon_util__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                            icon: [
                                                "far",
                                                "arrow-up-right-from-square"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_sections_projects_recent_module_scss__WEBPACK_IMPORTED_MODULE_5___default().projects),
                    children: repos.map(({ name , description , topics , forks_count , html_url , language , watchers , homepage , pushed_at  }, index)=>{
                        const date = new Date(pushed_at).toDateString();
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                                className: (_styles_sections_projects_recent_module_scss__WEBPACK_IMPORTED_MODULE_5___default().project),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        className: (_styles_sections_projects_recent_module_scss__WEBPACK_IMPORTED_MODULE_5___default().header),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                href: html_url,
                                                rel: "noreferrer",
                                                target: "_blank",
                                                children: [
                                                    name,
                                                    " ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_utils_icon_util__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                        icon: [
                                                            "fad",
                                                            "arrow-up-right-from-square"
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_styles_sections_projects_recent_module_scss__WEBPACK_IMPORTED_MODULE_5___default().homepage),
                                                children: homepage
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_styles_sections_projects_recent_module_scss__WEBPACK_IMPORTED_MODULE_5___default().descriptionContainer),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_styles_sections_projects_recent_module_scss__WEBPACK_IMPORTED_MODULE_5___default().description),
                                            children: description
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_styles_sections_projects_recent_module_scss__WEBPACK_IMPORTED_MODULE_5___default().details),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_styles_sections_projects_recent_module_scss__WEBPACK_IMPORTED_MODULE_5___default().pushedAt),
                                            children: date
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: (_styles_sections_projects_recent_module_scss__WEBPACK_IMPORTED_MODULE_5___default().topicsContainer),
                                        children: topics.map((e, index)=>{
                                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: (_styles_sections_projects_recent_module_scss__WEBPACK_IMPORTED_MODULE_5___default().topics),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        class: "devicon-github-plain"
                                                    }),
                                                    " ",
                                                    e
                                                ]
                                            }, index);
                                        })
                                    })
                                ]
                            }, index)
                        });
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 6863:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Projects),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_sections_projects_recent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1977);
/* harmony import */ var _components_sections_projects_featured__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5542);
/* harmony import */ var _components_utils_page_colors_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3653);
/* harmony import */ var _content_settings_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9993);
/* harmony import */ var _content_projects_colors_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9833);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_sections_projects_featured__WEBPACK_IMPORTED_MODULE_2__]);
_components_sections_projects_featured__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Sections






//
function Projects({ user , repos  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_utils_page_colors_util__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                colors: _content_projects_colors_json__WEBPACK_IMPORTED_MODULE_5__
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_projects_featured__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_sections_projects_recent__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                user: user,
                repos: repos
            })
        ]
    });
}
// This gets called on every request
async function getServerSideProps({ res  }) {
    res.setHeader("Cache-Control", "public, s-maxage=600, stale-while-revalidate=59");
    const [gitUserRes, gitReposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${_content_settings_json__WEBPACK_IMPORTED_MODULE_4__/* .username.github */ .b6.b}`),
        fetch(`https://api.github.com/users/${_content_settings_json__WEBPACK_IMPORTED_MODULE_4__/* .username.github */ .b6.b}/repos`), 
    ]);
    let [user, repos] = await Promise.all([
        gitUserRes.json(),
        gitReposRes.json(), 
    ]);
    if (user.login) {
        user = [
            user
        ].map(({ login , name , avatar_url , html_url  })=>({
                login,
                name,
                avatar_url,
                html_url
            }));
    }
    if (repos.length) {
        repos = repos.map(({ name , fork , description , forks_count , html_url , language , watchers , default_branch , homepage , pushed_at , topics  })=>{
            const timestamp = Math.floor(new Date(pushed_at) / 1000);
            return {
                name,
                fork,
                description,
                forks_count,
                html_url,
                language,
                watchers,
                default_branch,
                homepage,
                timestamp,
                topics,
                pushed_at
            };
        });
        repos.sort((a, b)=>b.timestamp - a.timestamp);
        repos = repos.filter((e, i)=>{
            if (i < 8 && !e.topics.includes("github-config")) return e;
            return false;
        });
    }
    if (!repos || !user) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            repos,
            user
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3195:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ 7197:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ 4009:
/***/ ((module) => {

"use strict";
module.exports = import("react-intersection-observer");;

/***/ }),

/***/ 9993:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"u2":"Shrey Kumar Tamrakar","b6":{"b":"Shreykumar1"}}');

/***/ }),

/***/ 9833:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"dark":{"mesh__secondaryDark":"#060708","mesh__secondaryLight":"#07120e","mesh__primaryDark":"#06050a","mesh__primaryLight":"#0c1019"},"light":{},"unicorn":{}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [598,675,141,834], () => (__webpack_exec__(6863)));
module.exports = __webpack_exports__;

})();