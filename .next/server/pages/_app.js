(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8032:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "footer_container__gKU6e",
	"sections": "footer_sections__HeYR_",
	"socialList": "footer_socialList___tAE6",
	"svg-inline--fa": "footer_svg-inline--fa__seQ20",
	"fa-code-branch": "footer_fa-code-branch__HK8AP",
	"fa-secondary": "footer_fa-secondary__ymNoN",
	"github": "footer_github__8hSXF",
	"leetcode": "footer_leetcode__rlux1"
};


/***/ }),

/***/ 6506:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "navbar_container__4E72y",
	"hidden": "navbar_hidden__4RKEB",
	"menuHeader": "navbar_menuHeader__HgNsA",
	"mobileButton": "navbar_mobileButton__Tbabp",
	"menu": "navbar_menu__oVe4R",
	"menuContent": "navbar_menuContent__xDWqN",
	"menuBlackout": "navbar_menuBlackout__ZkntL",
	"mobileToggle": "navbar_mobileToggle__BSRyY",
	"menuContainer": "navbar_menuContainer__J9KW_"
};


/***/ }),

/***/ 6394:
/***/ ((module) => {

// Exports
module.exports = {
	"toggle": "theme_toggle___Ll5L"
};


/***/ }),

/***/ 3361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
// EXTERNAL MODULE: ./styles/utils/theme.module.scss
var theme_module = __webpack_require__(6394);
var theme_module_default = /*#__PURE__*/__webpack_require__.n(theme_module);
;// CONCATENATED MODULE: ./components/utils/theme.util.jsx





function SetTheme() {
    const router = (0,router_namespaceObject.useRouter)();
    const { 0: route , 1: wasRoute  } = (0,external_react_.useState)();
    const { 0: theme , 1: setTheme  } = (0,external_react_.useState)();
    const toggleTheme = ()=>{
        if (theme == "light") {
            setTheme("dark");
        } else if (theme == "dark") {
            setTheme("light");
        }
    };
    const buttonIcon = (theme)=>{
        if (theme == "light") {
            return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.95 5.636l1.414 1.414-2.195 2.195c-.372-.562-.853-1.042-1.414-1.414l2.195-2.195zm-5.95-1.636h2v3.101c-.323-.066-.657-.101-1-.101s-.677.035-1 .101v-3.101zm-3.95 1.636l2.195 2.195c-.561.372-1.042.853-1.414 1.415l-2.195-2.196 1.414-1.414zm-3.05 5.364h3.101c-.066.323-.101.657-.101 1s.035.677.101 1h-3.101v-2zm3.05 7.364l-1.414-1.414 2.195-2.195c.372.562.853 1.042 1.414 1.414l-2.195 2.195zm5.95 1.636h-2v-3.101c.323.066.657.101 1 .101s.677-.035 1-.101v3.101zm-1-5c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm4.95 3.364l-2.195-2.195c.562-.372 1.042-.853 1.414-1.414l2.195 2.195-1.414 1.414zm3.05-5.364h-3.101c.066-.323.101-.657.101-1s-.035-.677-.101-1h3.101v2z"
                })
            });
        } else if (theme == "dark") {
            return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z"
                })
            });
        }
    };
    const defaultTheme = ()=>{
        const themeLocalStorage = localStorage.getItem("theme");
        const themeSystem = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        return themeLocalStorage ?? themeSystem;
    };
    (0,external_react_.useEffect)(()=>{
        if (!theme) return setTheme(defaultTheme());
        document.querySelector(":root").dataset.theme = theme;
        localStorage.setItem("theme", theme);
        const useSetTheme = (e)=>{
            setTheme(e.matches ? "dark" : "light");
        };
        const watchSysTheme = window.matchMedia("(prefers-color-scheme: dark)");
        watchSysTheme.addEventListener("change", useSetTheme);
        return ()=>{
            watchSysTheme.removeEventListener("change", useSetTheme);
        };
    }, [
        theme
    ]);
    (0,external_react_.useEffect)(()=>{
        class RouteEvents {
            constructor(){
                this.addEventListeners();
            }
            updateRoute(e) {
                wasRoute(e);
            }
            addEventListeners() {
                router.events.on("routeChangeComplete", this.updateRoute);
            }
            removeEventListeners() {
                router.events.off("routeChangeComplete", this.updateRoute);
            }
        }
        const routeEvents = new RouteEvents;
        return ()=>{
            routeEvents.removeEventListeners();
        };
    }, [
        router.events
    ]);
    /**
	 * On theme change, or route change re-initialize mesh gradient canvas
	 */ (0,external_react_.useEffect)(()=>{
        let canvasEle = document.querySelector("#gradient-canvas");
        if (canvasEle) {
            function normalizeColor(e) {
                return [
                    (e >> 16 & 255) / 255,
                    (e >> 8 & 255) / 255,
                    (255 & e) / 255
                ];
            }
            function e(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e;
            }
            [
                "SCREEN",
                "LINEAR_LIGHT"
            ].reduce((e, n, t)=>Object.assign(e, {
                    [n]: t
                }), {});
            class MiniGl {
                constructor(e, n, t, i = !1){
                    const s = this, o = -1 !== document.location.search.toLowerCase().indexOf("debug=webgl");
                    s.canvas = e, s.gl = s.canvas.getContext("webgl", {
                        antialias: !0
                    }), s.meshes = [];
                    const r = s.gl;
                    n && t && this.setSize(n, t), s.lastDebugMsg, s.debug = i && o ? function(e) {
                        const n = new Date;
                        n - s.lastDebugMsg > 1e3 && console.log("---"), console.log(n.toLocaleTimeString() + Array(Math.max(0, 32 - e.length)).join(" ") + e + ": ", ...Array.from(arguments).slice(1)), s.lastDebugMsg = n;
                    } : ()=>{}, Object.defineProperties(s, {
                        Material: {
                            enumerable: !1,
                            value: class {
                                constructor(e, n, t = {}){
                                    function i(e, n) {
                                        const t = r.createShader(e);
                                        return r.shaderSource(t, n), r.compileShader(t), r.getShaderParameter(t, r.COMPILE_STATUS) || console.error(r.getShaderInfoLog(t)), s.debug("Material.compileShaderSource", {
                                            source: n
                                        }), t;
                                    }
                                    function o(e, n) {
                                        return Object.entries(e).map(([e, t])=>t.getDeclaration(e, n)).join("\n");
                                    }
                                    const a = this;
                                    a.uniforms = t, a.uniformInstances = [];
                                    const l = "\n              precision highp float;\n            ";
                                    a.vertexSource = `\n              ${l}\n              attribute vec4 position;\n              attribute vec2 uv;\n              attribute vec2 uvNorm;\n              ${o(s.commonUniforms, "vertex")}\n              ${o(t, "vertex")}\n              ${e}\n            `, a.Source = `\n              ${l}\n              ${o(s.commonUniforms, "fragment")}\n              ${o(t, "fragment")}\n              ${n}\n            `, a.vertexShader = i(r.VERTEX_SHADER, a.vertexSource), a.fragmentShader = i(r.FRAGMENT_SHADER, a.Source), a.program = r.createProgram(), r.attachShader(a.program, a.vertexShader), r.attachShader(a.program, a.fragmentShader), r.linkProgram(a.program), r.getProgramParameter(a.program, r.LINK_STATUS) || console.error(r.getProgramInfoLog(a.program)), r.useProgram(a.program), a.attachUniforms(void 0, s.commonUniforms), a.attachUniforms(void 0, a.uniforms);
                                }
                                attachUniforms(e, n) {
                                    const t = this;
                                    void 0 === e ? Object.entries(n).forEach(([e, n])=>{
                                        t.attachUniforms(e, n);
                                    }) : "array" == n.type ? n.value.forEach((n, i)=>t.attachUniforms(`${e}[${i}]`, n)) : "struct" == n.type ? Object.entries(n.value).forEach(([n, i])=>t.attachUniforms(`${e}.${n}`, i)) : (s.debug("Material.attachUniforms", {
                                        name: e,
                                        uniform: n
                                    }), t.uniformInstances.push({
                                        uniform: n,
                                        location: r.getUniformLocation(t.program, e)
                                    }));
                                }
                            }
                        },
                        Uniform: {
                            enumerable: !1,
                            value: class {
                                constructor(e){
                                    this.type = "float", Object.assign(this, e), this.typeFn = ({
                                        float: "1f",
                                        int: "1i",
                                        vec2: "2fv",
                                        vec3: "3fv",
                                        vec4: "4fv",
                                        mat4: "Matrix4fv"
                                    })[this.type] || "1f", this.update();
                                }
                                update(e) {
                                    void 0 !== this.value && r[`uniform${this.typeFn}`](e, 0 === this.typeFn.indexOf("Matrix") ? this.transpose : this.value, 0 === this.typeFn.indexOf("Matrix") ? this.value : null);
                                }
                                getDeclaration(e, n, t) {
                                    const i = this;
                                    if (i.excludeFrom !== n) {
                                        if ("array" === i.type) return i.value[0].getDeclaration(e, n, i.value.length) + `\nconst int ${e}_length = ${i.value.length};`;
                                        if ("struct" === i.type) {
                                            let s = e.replace("u_", "");
                                            return s = s.charAt(0).toUpperCase() + s.slice(1), `uniform struct ${s} \n\t\t\t\t\t\t\t\t{\n` + Object.entries(i.value).map(([e, t])=>t.getDeclaration(e, n).replace(/^uniform/, "")).join("") + `\n} ${e}${t > 0 ? `[${t}]` : ""};`;
                                        }
                                        return `uniform ${i.type} ${e}${t > 0 ? `[${t}]` : ""};`;
                                    }
                                }
                            }
                        },
                        PlaneGeometry: {
                            enumerable: !1,
                            value: class {
                                constructor(e, n, t, i, o){
                                    r.createBuffer(), this.attributes = {
                                        position: new s.Attribute({
                                            target: r.ARRAY_BUFFER,
                                            size: 3
                                        }),
                                        uv: new s.Attribute({
                                            target: r.ARRAY_BUFFER,
                                            size: 2
                                        }),
                                        uvNorm: new s.Attribute({
                                            target: r.ARRAY_BUFFER,
                                            size: 2
                                        }),
                                        index: new s.Attribute({
                                            target: r.ELEMENT_ARRAY_BUFFER,
                                            size: 3,
                                            type: r.UNSIGNED_SHORT
                                        })
                                    }, this.setTopology(t, i), this.setSize(e, n, o);
                                }
                                setTopology(e = 1, n = 1) {
                                    const t = this;
                                    t.xSegCount = e, t.ySegCount = n, t.vertexCount = (t.xSegCount + 1) * (t.ySegCount + 1), t.quadCount = t.xSegCount * t.ySegCount * 2, t.attributes.uv.values = new Float32Array(2 * t.vertexCount), t.attributes.uvNorm.values = new Float32Array(2 * t.vertexCount), t.attributes.index.values = new Uint16Array(3 * t.quadCount);
                                    for(let e1 = 0; e1 <= t.ySegCount; e1++)for(let n1 = 0; n1 <= t.xSegCount; n1++){
                                        const i = e1 * (t.xSegCount + 1) + n1;
                                        if (t.attributes.uv.values[2 * i] = n1 / t.xSegCount, t.attributes.uv.values[2 * i + 1] = 1 - e1 / t.ySegCount, t.attributes.uvNorm.values[2 * i] = n1 / t.xSegCount * 2 - 1, t.attributes.uvNorm.values[2 * i + 1] = 1 - e1 / t.ySegCount * 2, n1 < t.xSegCount && e1 < t.ySegCount) {
                                            const s1 = e1 * t.xSegCount + n1;
                                            t.attributes.index.values[6 * s1] = i, t.attributes.index.values[6 * s1 + 1] = i + 1 + t.xSegCount, t.attributes.index.values[6 * s1 + 2] = i + 1, t.attributes.index.values[6 * s1 + 3] = i + 1, t.attributes.index.values[6 * s1 + 4] = i + 1 + t.xSegCount, t.attributes.index.values[6 * s1 + 5] = i + 2 + t.xSegCount;
                                        }
                                    }
                                    t.attributes.uv.update(), t.attributes.uvNorm.update(), t.attributes.index.update(), s.debug("Geometry.setTopology", {
                                        uv: t.attributes.uv,
                                        uvNorm: t.attributes.uvNorm,
                                        index: t.attributes.index
                                    });
                                }
                                setSize(e = 1, n = 1, t = "xz") {
                                    const i = this;
                                    i.width = e, i.height = n, i.orientation = t, i.attributes.position.values && i.attributes.position.values.length === 3 * i.vertexCount || (i.attributes.position.values = new Float32Array(3 * i.vertexCount));
                                    const o = e / -2, r = n / -2, a = e / i.xSegCount, l = n / i.ySegCount;
                                    for(let e1 = 0; e1 <= i.ySegCount; e1++){
                                        const n1 = r + e1 * l;
                                        for(let s1 = 0; s1 <= i.xSegCount; s1++){
                                            const r1 = o + s1 * a, l1 = e1 * (i.xSegCount + 1) + s1;
                                            i.attributes.position.values[3 * l1 + "xyz".indexOf(t[0])] = r1, i.attributes.position.values[3 * l1 + "xyz".indexOf(t[1])] = -n1;
                                        }
                                    }
                                    i.attributes.position.update(), s.debug("Geometry.setSize", {
                                        position: i.attributes.position
                                    });
                                }
                            }
                        },
                        Mesh: {
                            enumerable: !1,
                            value: class {
                                constructor(e, n){
                                    const t = this;
                                    t.geometry = e, t.material = n, t.wireframe = !1, t.attributeInstances = [], Object.entries(t.geometry.attributes).forEach(([e, n])=>{
                                        t.attributeInstances.push({
                                            attribute: n,
                                            location: n.attach(e, t.material.program)
                                        });
                                    }), s.meshes.push(t), s.debug("Mesh.constructor", {
                                        mesh: t
                                    });
                                }
                                draw() {
                                    r.useProgram(this.material.program), this.material.uniformInstances.forEach(({ uniform: e , location: n  })=>e.update(n)), this.attributeInstances.forEach(({ attribute: e , location: n  })=>e.use(n)), r.drawElements(this.wireframe ? r.LINES : r.TRIANGLES, this.geometry.attributes.index.values.length, r.UNSIGNED_SHORT, 0);
                                }
                                remove() {
                                    s.meshes = s.meshes.filter((e)=>e != this);
                                }
                            }
                        },
                        Attribute: {
                            enumerable: !1,
                            value: class {
                                constructor(e){
                                    this.type = r.FLOAT, this.normalized = !1, this.buffer = r.createBuffer(), Object.assign(this, e), this.update();
                                }
                                update() {
                                    void 0 !== this.values && (r.bindBuffer(this.target, this.buffer), r.bufferData(this.target, this.values, r.STATIC_DRAW));
                                }
                                attach(e, n) {
                                    const t = r.getAttribLocation(n, e);
                                    return this.target === r.ARRAY_BUFFER && (r.enableVertexAttribArray(t), r.vertexAttribPointer(t, this.size, this.type, this.normalized, 0, 0)), t;
                                }
                                use(e) {
                                    r.bindBuffer(this.target, this.buffer), this.target === r.ARRAY_BUFFER && (r.enableVertexAttribArray(e), r.vertexAttribPointer(e, this.size, this.type, this.normalized, 0, 0));
                                }
                            }
                        }
                    });
                    const a = [
                        1,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        1,
                        0,
                        0,
                        0,
                        0,
                        1
                    ];
                    s.commonUniforms = {
                        projectionMatrix: new s.Uniform({
                            type: "mat4",
                            value: a
                        }),
                        modelViewMatrix: new s.Uniform({
                            type: "mat4",
                            value: a
                        }),
                        resolution: new s.Uniform({
                            type: "vec2",
                            value: [
                                1,
                                1
                            ]
                        }),
                        aspectRatio: new s.Uniform({
                            type: "float",
                            value: 1
                        })
                    };
                }
                setSize(e = 640, n = 480) {
                    this.width = e, this.height = n, this.canvas.width = e, this.canvas.height = n, this.gl.viewport(0, 0, e, n), this.commonUniforms.resolution.value = [
                        e,
                        n
                    ], this.commonUniforms.aspectRatio.value = e / n, this.debug("MiniGL.setSize", {
                        width: e,
                        height: n
                    });
                }
                setOrthographicCamera(e = 0, n = 0, t = 0, i = -2e3, s = 2e3) {
                    this.commonUniforms.projectionMatrix.value = [
                        2 / this.width,
                        0,
                        0,
                        0,
                        0,
                        2 / this.height,
                        0,
                        0,
                        0,
                        0,
                        2 / (i - s),
                        0,
                        e,
                        n,
                        t,
                        1
                    ], this.debug("setOrthographicCamera", this.commonUniforms.projectionMatrix.value);
                }
                render() {
                    this.gl.clearColor(0, 0, 0, 0), this.gl.clearDepth(1), this.meshes.forEach((e)=>e.draw());
                }
            }
            class Gradient {
                constructor(...n){
                    e(this, "el", void 0), e(this, "cssVarRetries", 0), e(this, "maxCssVarRetries", 200), e(this, "angle", 0), e(this, "isLoadedClass", !1), e(this, "isScrolling", !1), e(this, "scrollingTimeout", void 0), e(this, "scrollingRefreshDelay", 200), e(this, "isIntersecting", !1), e(this, "shaderFiles", void 0), e(this, "vertexShader", void 0), e(this, "sectionColors", void 0), e(this, "computedCanvasStyle", void 0), e(this, "conf", void 0), e(this, "uniforms", void 0), e(this, "t", 1253106), e(this, "last", 0), e(this, "width", void 0), e(this, "minWidth", 1111), e(this, "height", 600), e(this, "xSegCount", void 0), e(this, "ySegCount", void 0), e(this, "mesh", void 0), e(this, "material", void 0), e(this, "geometry", void 0), e(this, "minigl", void 0), e(this, "scrollObserver", void 0), e(this, "amp", 320), e(this, "seed", 5), e(this, "freqX", 14e-5), e(this, "freqY", 29e-5), e(this, "freqDelta", 1e-5), e(this, "activeColors", [
                        1,
                        1,
                        1,
                        1
                    ]), e(this, "isMetaKey", !1), e(this, "isGradientLegendVisible", !1), e(this, "isMouseDown", !1), e(this, "handleScroll", ()=>{
                        clearTimeout(this.scrollingTimeout), this.scrollingTimeout = setTimeout(this.handleScrollEnd, this.scrollingRefreshDelay), this.isGradientLegendVisible && this.hideGradientLegend(), this.conf.playing && (this.isScrolling = !0, this.pause());
                    }), e(this, "handleScrollEnd", ()=>{
                        this.isScrolling = !1, this.isIntersecting && this.play();
                    }), e(this, "resize", ()=>{
                        this.width = window.innerWidth, this.minigl.setSize(this.width, this.height), this.minigl.setOrthographicCamera(), this.xSegCount = Math.ceil(this.width * this.conf.density[0]), this.ySegCount = Math.ceil(this.height * this.conf.density[1]), this.mesh.geometry.setTopology(this.xSegCount, this.ySegCount), this.mesh.geometry.setSize(this.width, this.height), this.mesh.material.uniforms.u_shadow_power.value = this.width < 600 ? 5 : 6;
                    }), e(this, "handleMouseDown", (e)=>{
                        this.isGradientLegendVisible && (this.isMetaKey = e.metaKey, this.isMouseDown = !0, !1 === this.conf.playing && requestAnimationFrame(this.animate));
                    }), e(this, "handleMouseUp", ()=>{
                        this.isMouseDown = !1;
                    }), e(this, "animate", (e)=>{
                        if (!this.shouldSkipFrame(e) || this.isMouseDown) {
                            if (this.t += Math.min(e - this.last, 1e3 / 15), this.last = e, this.isMouseDown) {
                                let e1 = 160;
                                this.isMetaKey && (e1 = -160), this.t += e1;
                            }
                            this.mesh.material.uniforms.u_time.value = this.t, this.minigl.render();
                        }
                        if (0 !== this.last && this.isStatic) return this.minigl.render(), void this.disconnect();
                        (this.conf.playing || this.isMouseDown) && requestAnimationFrame(this.animate);
                    }), e(this, "addIsLoadedClass", ()=>{
                        !this.isLoadedClass && (this.isLoadedClass = !0, this.el.classList.add("isLoaded"), setTimeout(()=>{
                            this.el.parentElement.classList.add("isLoaded");
                        }, 3e3));
                    }), e(this, "pause", ()=>{
                        this.conf.playing = !1;
                    }), e(this, "play", ()=>{
                        requestAnimationFrame(this.animate), this.conf.playing = !0;
                    }), e(this, "initGradient", (e)=>(this.el = document.querySelector(e), this.connect(), this));
                }
                async connect() {
                    this.shaderFiles = {
                        vertex: "varying vec3 v_color;\n\nvoid main() {\n  float time = u_time * u_global.noiseSpeed;\n\n  vec2 noiseCoord = resolution * uvNorm * u_global.noiseFreq;\n\n  vec2 st = 1. - uvNorm.xy;\n\n  //\n  // Tilting the plane\n  //\n\n  // Front-to-back tilt\n  float tilt = resolution.y / 2.0 * uvNorm.y;\n\n  // Left-to-right angle\n  float incline = resolution.x * uvNorm.x / 2.0 * u_vertDeform.incline;\n\n  // Up-down shift to offset incline\n  float offset = resolution.x / 2.0 * u_vertDeform.incline * mix(u_vertDeform.offsetBottom, u_vertDeform.offsetTop, uv.y);\n\n  //\n  // Vertex noise\n  //\n\n  float noise = snoise(vec3(\n    noiseCoord.x * u_vertDeform.noiseFreq.x + time * u_vertDeform.noiseFlow,\n    noiseCoord.y * u_vertDeform.noiseFreq.y,\n    time * u_vertDeform.noiseSpeed + u_vertDeform.noiseSeed\n  )) * u_vertDeform.noiseAmp;\n\n  // Fade noise to zero at edges\n  noise *= 1.0 - pow(abs(uvNorm.y), 2.0);\n\n  // Clamp to 0\n  noise = max(0.0, noise);\n\n  vec3 pos = vec3(\n    position.x,\n    position.y + tilt + incline + noise - offset,\n    position.z\n  );\n\n  //\n  // Vertex color, to be passed to fragment shader\n  //\n\n  if (u_active_colors[0] == 1.) {\n    v_color = u_baseColor;\n  }\n\n  for (int i = 0; i < u_waveLayers_length; i++) {\n    if (u_active_colors[i + 1] == 1.) {\n      WaveLayers layer = u_waveLayers[i];\n\n      float noise = smoothstep(\n        layer.noiseFloor,\n        layer.noiseCeil,\n        snoise(vec3(\n          noiseCoord.x * layer.noiseFreq.x + time * layer.noiseFlow,\n          noiseCoord.y * layer.noiseFreq.y,\n          time * layer.noiseSpeed + layer.noiseSeed\n        )) / 2.0 + 0.5\n      );\n\n      v_color = blendNormal(v_color, layer.color, pow(noise, 4.));\n    }\n  }\n\n  //\n  // Finish\n  //\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n}",
                        noise: "//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : stegu\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//               https://github.com/stegu/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n    return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n{\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n          + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n          + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n}",
                        blend: "//\n// https://github.com/jamieowen/glsl-blend\n//\n\n// Normal\n\nvec3 blendNormal(vec3 base, vec3 blend) {\n	return blend;\n}\n\nvec3 blendNormal(vec3 base, vec3 blend, float opacity) {\n	return (blendNormal(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Screen\n\nfloat blendScreen(float base, float blend) {\n	return 1.0-((1.0-base)*(1.0-blend));\n}\n\nvec3 blendScreen(vec3 base, vec3 blend) {\n	return vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));\n}\n\nvec3 blendScreen(vec3 base, vec3 blend, float opacity) {\n	return (blendScreen(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Multiply\n\nvec3 blendMultiply(vec3 base, vec3 blend) {\n	return base*blend;\n}\n\nvec3 blendMultiply(vec3 base, vec3 blend, float opacity) {\n	return (blendMultiply(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Overlay\n\nfloat blendOverlay(float base, float blend) {\n	return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));\n}\n\nvec3 blendOverlay(vec3 base, vec3 blend) {\n	return vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));\n}\n\nvec3 blendOverlay(vec3 base, vec3 blend, float opacity) {\n	return (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Hard light\n\nvec3 blendHardLight(vec3 base, vec3 blend) {\n	return blendOverlay(blend,base);\n}\n\nvec3 blendHardLight(vec3 base, vec3 blend, float opacity) {\n	return (blendHardLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Soft light\n\nfloat blendSoftLight(float base, float blend) {\n	return (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));\n}\n\nvec3 blendSoftLight(vec3 base, vec3 blend) {\n	return vec3(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b));\n}\n\nvec3 blendSoftLight(vec3 base, vec3 blend, float opacity) {\n	return (blendSoftLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Color dodge\n\nfloat blendColorDodge(float base, float blend) {\n	return (blend==1.0)?blend:min(base/(1.0-blend),1.0);\n}\n\nvec3 blendColorDodge(vec3 base, vec3 blend) {\n	return vec3(blendColorDodge(base.r,blend.r),blendColorDodge(base.g,blend.g),blendColorDodge(base.b,blend.b));\n}\n\nvec3 blendColorDodge(vec3 base, vec3 blend, float opacity) {\n	return (blendColorDodge(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Color burn\n\nfloat blendColorBurn(float base, float blend) {\n	return (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);\n}\n\nvec3 blendColorBurn(vec3 base, vec3 blend) {\n	return vec3(blendColorBurn(base.r,blend.r),blendColorBurn(base.g,blend.g),blendColorBurn(base.b,blend.b));\n}\n\nvec3 blendColorBurn(vec3 base, vec3 blend, float opacity) {\n	return (blendColorBurn(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Vivid Light\n\nfloat blendVividLight(float base, float blend) {\n	return (blend<0.5)?blendColorBurn(base,(2.0*blend)):blendColorDodge(base,(2.0*(blend-0.5)));\n}\n\nvec3 blendVividLight(vec3 base, vec3 blend) {\n	return vec3(blendVividLight(base.r,blend.r),blendVividLight(base.g,blend.g),blendVividLight(base.b,blend.b));\n}\n\nvec3 blendVividLight(vec3 base, vec3 blend, float opacity) {\n	return (blendVividLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Lighten\n\nfloat blendLighten(float base, float blend) {\n	return max(blend,base);\n}\n\nvec3 blendLighten(vec3 base, vec3 blend) {\n	return vec3(blendLighten(base.r,blend.r),blendLighten(base.g,blend.g),blendLighten(base.b,blend.b));\n}\n\nvec3 blendLighten(vec3 base, vec3 blend, float opacity) {\n	return (blendLighten(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Linear burn\n\nfloat blendLinearBurn(float base, float blend) {\n	// Note : Same implementation as BlendSubtractf\n	return max(base+blend-1.0,0.0);\n}\n\nvec3 blendLinearBurn(vec3 base, vec3 blend) {\n	// Note : Same implementation as BlendSubtract\n	return max(base+blend-vec3(1.0),vec3(0.0));\n}\n\nvec3 blendLinearBurn(vec3 base, vec3 blend, float opacity) {\n	return (blendLinearBurn(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Linear dodge\n\nfloat blendLinearDodge(float base, float blend) {\n	// Note : Same implementation as BlendAddf\n	return min(base+blend,1.0);\n}\n\nvec3 blendLinearDodge(vec3 base, vec3 blend) {\n	// Note : Same implementation as BlendAdd\n	return min(base+blend,vec3(1.0));\n}\n\nvec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {\n	return (blendLinearDodge(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Linear light\n\nfloat blendLinearLight(float base, float blend) {\n	return blend<0.5?blendLinearBurn(base,(2.0*blend)):blendLinearDodge(base,(2.0*(blend-0.5)));\n}\n\nvec3 blendLinearLight(vec3 base, vec3 blend) {\n	return vec3(blendLinearLight(base.r,blend.r),blendLinearLight(base.g,blend.g),blendLinearLight(base.b,blend.b));\n}\n\nvec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {\n	return (blendLinearLight(base, blend) * opacity + base * (1.0 - opacity));\n}",
                        fragment: "varying vec3 v_color;\n\nvoid main() {\n  vec3 color = v_color;\n  if (u_darken_top == 1.0) {\n    vec2 st = gl_FragCoord.xy/resolution.xy;\n    color.g -= pow(st.y + sin(-12.0) * st.x, u_shadow_power) * 0.4;\n  }\n  gl_FragColor = vec4(color, 1.0);\n}"
                    }, this.conf = {
                        presetName: "",
                        wireframe: !1,
                        density: [
                            .06,
                            .16
                        ],
                        zoom: 1,
                        rotation: 0,
                        playing: !0
                    }, document.querySelector("#gradient-canvas").length < 1 ? console.log("Did not load canvas") : (this.minigl = new MiniGl(this.el, null, null, !0), requestAnimationFrame(()=>{
                        this.el && (this.computedCanvasStyle = getComputedStyle(this.el), this.waitForCssVars());
                    }));
                }
                disconnect() {
                    this.scrollObserver && (window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("mousedown", this.handleMouseDown), window.removeEventListener("mouseup", this.handleMouseUp), window.removeEventListener("keydown", this.handleKeyDown), this.scrollObserver.disconnect()), window.removeEventListener("resize", this.resize);
                }
                initMaterial() {
                    this.uniforms = {
                        u_time: new this.minigl.Uniform({
                            value: 0
                        }),
                        u_shadow_power: new this.minigl.Uniform({
                            value: 5
                        }),
                        u_darken_top: new this.minigl.Uniform({
                            value: "" === this.el.dataset.jsDarkenTop ? 1 : 0
                        }),
                        u_active_colors: new this.minigl.Uniform({
                            value: this.activeColors,
                            type: "vec4"
                        }),
                        u_global: new this.minigl.Uniform({
                            value: {
                                noiseFreq: new this.minigl.Uniform({
                                    value: [
                                        this.freqX,
                                        this.freqY
                                    ],
                                    type: "vec2"
                                }),
                                noiseSpeed: new this.minigl.Uniform({
                                    value: 5e-6
                                })
                            },
                            type: "struct"
                        }),
                        u_vertDeform: new this.minigl.Uniform({
                            value: {
                                incline: new this.minigl.Uniform({
                                    value: Math.sin(this.angle) / Math.cos(this.angle)
                                }),
                                offsetTop: new this.minigl.Uniform({
                                    value: -.5
                                }),
                                offsetBottom: new this.minigl.Uniform({
                                    value: -.5
                                }),
                                noiseFreq: new this.minigl.Uniform({
                                    value: [
                                        3,
                                        4
                                    ],
                                    type: "vec2"
                                }),
                                noiseAmp: new this.minigl.Uniform({
                                    value: this.amp
                                }),
                                noiseSpeed: new this.minigl.Uniform({
                                    value: 10
                                }),
                                noiseFlow: new this.minigl.Uniform({
                                    value: 3
                                }),
                                noiseSeed: new this.minigl.Uniform({
                                    value: this.seed
                                })
                            },
                            type: "struct",
                            excludeFrom: "fragment"
                        }),
                        u_baseColor: new this.minigl.Uniform({
                            value: this.sectionColors[0],
                            type: "vec3",
                            excludeFrom: "fragment"
                        }),
                        u_waveLayers: new this.minigl.Uniform({
                            value: [],
                            excludeFrom: "fragment",
                            type: "array"
                        })
                    };
                    for(let e = 1; e < this.sectionColors.length; e += 1)this.uniforms.u_waveLayers.value.push(new this.minigl.Uniform({
                        value: {
                            color: new this.minigl.Uniform({
                                value: this.sectionColors[e],
                                type: "vec3"
                            }),
                            noiseFreq: new this.minigl.Uniform({
                                value: [
                                    2 + e / this.sectionColors.length,
                                    3 + e / this.sectionColors.length
                                ],
                                type: "vec2"
                            }),
                            noiseSpeed: new this.minigl.Uniform({
                                value: 11 + .3 * e
                            }),
                            noiseFlow: new this.minigl.Uniform({
                                value: 6.5 + .3 * e
                            }),
                            noiseSeed: new this.minigl.Uniform({
                                value: this.seed + 10 * e
                            }),
                            noiseFloor: new this.minigl.Uniform({
                                value: .1
                            }),
                            noiseCeil: new this.minigl.Uniform({
                                value: .63 + .07 * e
                            })
                        },
                        type: "struct"
                    }));
                    return this.vertexShader = [
                        this.shaderFiles.noise,
                        this.shaderFiles.blend,
                        this.shaderFiles.vertex
                    ].join("\n\n"), new this.minigl.Material(this.vertexShader, this.shaderFiles.fragment, this.uniforms);
                }
                initMesh() {
                    this.material = this.initMaterial(), this.geometry = new this.minigl.PlaneGeometry, this.mesh = new this.minigl.Mesh(this.geometry, this.material);
                }
                shouldSkipFrame(e) {
                    return !!window.document.hidden || !this.conf.playing || parseInt(e, 10) % 2 == 0 || void 0;
                }
                updateFrequency(e) {
                    this.freqX += e, this.freqY += e;
                }
                toggleColor(e) {
                    this.activeColors[e] = 0 === this.activeColors[e] ? 1 : 0;
                }
                showGradientLegend() {
                    this.width > this.minWidth && (this.isGradientLegendVisible = !0, document.body.classList.add("isGradientLegendVisible"));
                }
                hideGradientLegend() {
                    this.isGradientLegendVisible = !1, document.body.classList.remove("isGradientLegendVisible");
                }
                init() {
                    this.initGradientColors(), this.initMesh(), this.resize(), requestAnimationFrame(this.animate), window.addEventListener("resize", this.resize);
                }
                waitForCssVars() {
                    if (this.computedCanvasStyle && -1 !== this.computedCanvasStyle.getPropertyValue("--gradient-color-1").indexOf("#")) this.init(), this.addIsLoadedClass();
                    else {
                        if (this.cssVarRetries += 1, this.cssVarRetries > this.maxCssVarRetries) return this.sectionColors = [
                            16711680,
                            16711680,
                            16711935,
                            65280,
                            255
                        ], void this.init();
                        requestAnimationFrame(()=>this.waitForCssVars());
                    }
                }
                initGradientColors() {
                    this.sectionColors = [
                        "--gradient-color-1",
                        "--gradient-color-2",
                        "--gradient-color-3",
                        "--gradient-color-4"
                    ].map((e)=>{
                        let n = this.computedCanvasStyle.getPropertyValue(e).trim();
                        if (4 === n.length) {
                            const e1 = n.substr(1).split("").map((e)=>e + e).join("");
                            n = `#${e1}`;
                        }
                        return n && `0x${n.substr(1)}`;
                    }).filter(Boolean).map(normalizeColor);
                }
            }
            let gradient = new Gradient();
            gradient.initGradient("#gradient-canvas");
        }
        return ()=>{};
    }, [
        theme,
        route
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                id: "theme.util.jsx",
                strategy: "beforeInteractive",
                children: `
				let themeLocalStorage = localStorage.getItem('theme')
				let themeSystem       = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
				document.querySelector(':root').dataset.theme = themeLocalStorage ?? themeSystem
				`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: toggleTheme,
                "data-theme": theme,
                className: (theme_module_default()).toggle,
                children: buttonIcon(theme)
            }, "themeToggle")
        ]
    });
}

// EXTERNAL MODULE: ./content/_settings.json
var _settings = __webpack_require__(9993);
;// CONCATENATED MODULE: ./content/navbar.json
const navbar_namespaceObject = JSON.parse('[{"url":"#about","title":"About Me"},{"url":"https://drive.google.com/file/d/1wwxISC9i-vDXsogJm6xoPFwDzTmKSEvr/view?usp=sharing","title":"Resume"},{"url":"/projects","title":"Projects"},{"url":"#socials","title":"Socials"}]');
// EXTERNAL MODULE: ./styles/structure/navbar.module.scss
var navbar_module = __webpack_require__(6506);
var navbar_module_default = /*#__PURE__*/__webpack_require__.n(navbar_module);
;// CONCATENATED MODULE: ./components/layout/navbar.jsx









function Navbar() {
    const router = (0,router_namespaceObject.useRouter)();
    const { 0: menuState , 1: menuToggle  } = (0,external_react_.useState)();
    (0,external_react_.useEffect)(()=>{
        menuToggle(false);
    }, []);
    (0,external_react_.useEffect)(()=>{
        class RouteEvents {
            constructor(){
                console.log("%c☰  Navigation Router Events Loaded", "background: #060708; color: #fff; padding: .125rem .75rem; border-radius: 5px; font-weight: 900; ");
                this.addEventListeners();
            }
            closeMenu() {
                menuToggle(false);
            }
            addEventListeners() {
                router.events.on("routeChangeComplete", this.closeMenu);
            }
            removeEventListeners() {
                router.events.off("routeChangeComplete", this.closeMenu);
            }
        }
        const routeEvents = new RouteEvents;
        return ()=>{
            routeEvents.removeEventListeners();
        };
    }, [
        router.events
    ]);
    (0,external_react_.useEffect)(()=>{
        class ScrollEvents {
            constructor(){
                console.log("%c▼  Navigation Scroll Events Loaded", "background: #060708; color: #fff; padding: .125rem .75rem; border-radius: 5px; font-weight: 900; ");
                window.sticky = {};
                window.sticky.nav = document.querySelector(`nav`);
                this.addEventListeners();
            }
            addEventListeners() {
                if (window.sticky.nav) {
                    window.addEventListener("DOMContentLoaded", this.maybeHideNav, false);
                    document.addEventListener("scroll", this.maybeHideNav, false);
                }
            }
            removeEventListeners() {
                if (window.sticky.nav) {
                    window.removeEventListener("DOMContentLoaded", this.maybeHideNav, false);
                    document.removeEventListener("scroll", this.maybeHideNav, false);
                }
            }
            getPosition(e = null, top = true) {
                let offset;
                if (!e) return;
                if (top) {
                    offset = e.getBoundingClientRect().top + document.documentElement.scrollTop - window.sticky.nav.at;
                    return offset;
                } else {
                    offset = e.getBoundingClientRect().bottom + document.documentElement.scrollTop - window.sticky.nav.at;
                    return offset;
                }
            }
            maybeHideNav() {
                /**
				 * If scrolling down, else if scrolling up
				 * 
				 * Add or remove hidden class from filter menu
				 */ const nC = window.sticky.nav.classList;
                // const hero 		= document.querySelector('main > div:first-of-type')
                // const hiddenAt 	= ( hero ) ? hero.getBoundingClientRect().bottom + window.scrollY : ( window.innerHeight / 2 )
                const hiddenAt = window.innerHeight / 2;
                if (window.scrollY > this.lastY && window.scrollY > hiddenAt && !nC.contains((navbar_module_default()).hidden)) {
                    nC.add((navbar_module_default()).hidden);
                } else if (window.scrollY < this.lastY && nC.contains((navbar_module_default()).hidden)) {
                    nC.remove((navbar_module_default()).hidden);
                }
                /**
				 * At end of every scroll event update the previous position
				 */ this.lastY = window.scrollY;
            }
        }
        const scrollEvents = new ScrollEvents;
        return ()=>{
            scrollEvents.removeEventListeners();
        };
    }, []);
    const toggleMenu = ()=>{
        let bool = !menuState;
        menuToggle(bool);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        id: "Navbar",
        className: (navbar_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: (navbar_module_default()).menu,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        className: (navbar_module_default()).menuHeader,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                className: (navbar_module_default()).logo,
                                href: "/",
                                children: _settings/* name */.u2
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: toggleMenu,
                                className: (navbar_module_default()).mobileToggle,
                                "data-open": menuState,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        "data-open": menuState,
                        className: (navbar_module_default()).menuContent,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            children: [
                                navbar_namespaceObject.map(({ url , title  }, index)=>{
                                    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            target: title === "Resume" ? "_blank" : "_self",
                                            href: url,
                                            children: title
                                        })
                                    }, index);
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(SetTheme, {})
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                onClick: toggleMenu,
                className: (navbar_module_default()).menuBlackout,
                "data-open": menuState
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/structure/container.jsx
var container = __webpack_require__(7738);
// EXTERNAL MODULE: ./components/utils/icon.util.jsx
var icon_util = __webpack_require__(683);
// EXTERNAL MODULE: ./styles/structure/footer.module.scss
var footer_module = __webpack_require__(8032);
var footer_module_default = /*#__PURE__*/__webpack_require__.n(footer_module);
;// CONCATENATED MODULE: ./content/footer.json
const footer_namespaceObject = JSON.parse('{"x":[{"url":"https://www.linkedin.com/in/shreykumar15/","icon":"linkedin"},{"url":"https://github.com/Shreykumar1","icon":"github"}]}');
;// CONCATENATED MODULE: ./components/layout/footer.jsx





function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: (footer_module_default()).container,
        id: "socials",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(container/* default */.Z, {
                spacing: [
                    "verticalXXLrg",
                    "bottomLrg"
                ],
                children: /*#__PURE__*/ jsx_runtime_.jsx("section", {
                    style: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "3rem 0"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: (footer_module_default()).social,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "Social"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: (footer_module_default()).socialList,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://leetcode.com/u/Shrey191/",
                                        rel: "noreferrer",
                                        target: "_blank",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                            className: (footer_module_default()).leetcode,
                                            xmlns: "http://www.w3.org/2000/svg",
                                            "enable-background": "new 0 0 24 24",
                                            viewBox: "0 0 24 24",
                                            id: "leetcode",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z"
                                                })
                                            ]
                                        })
                                    }),
                                    footer_namespaceObject.x.map(({ url , icon  }, index)=>{
                                        return /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: url,
                                            rel: "noreferrer",
                                            target: "_blank",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(icon_util/* default */.Z, {
                                                icon: [
                                                    "fab",
                                                    icon
                                                ]
                                            })
                                        }, index);
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("canvas", {
                id: "gradient-canvas",
                className: "",
                "data-transition-in": true
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/layout/layout.jsx



function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
}


/***/ }),

/***/ 8660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SetGridGap)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _structure_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5322);
/* harmony import */ var _structure_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7738);




function SetGridGap() {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const setGapSize = ()=>{
            const root = document.querySelector(":root");
            const container = document.querySelector(".getGapSize__grid_32");
            if (container) {
                const readingWidth = container.clientWidth;
                const grid32 = readingWidth / 32;
                root.style.setProperty("--grid-32", `${grid32}px`);
            }
        };
        setGapSize();
        window.addEventListener("resize", setGapSize);
        return ()=>{
            window.removeEventListener("resize", setGapSize);
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_structure_section__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        classProp: "getGapSize__container",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_structure_container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            classProp: "getGapSize__grid_32"
        })
    });
}


/***/ }),

/***/ 2581:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9752);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _components_utils_set_grid_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8660);
/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3361);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_1__, framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
([_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_1__, framer_motion__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Core packages



// Utils

// Structure

// CSS reset (https://github.com/elad2412/the-new-css-reset.git)

// Fontsource local font import (https://github.com/fontsource/fontsource)





// Devicon import (https://github.com/devicons/devicon)

// Global css


/**
 * _app.jsx
 *
 * @param {?} Component
 * @param {?} pageProps
 * @returns
 */ function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.LazyMotion, {
            features: framer_motion__WEBPACK_IMPORTED_MODULE_2__.domAnimation,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_layout_layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_utils_set_grid_util__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_1__.Analytics, {})
                ]
            })
        })
    });
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

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

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

/***/ 9752:
/***/ ((module) => {

"use strict";
module.exports = import("@vercel/analytics/react");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ 9993:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"u2":"Shrey Kumar Tamrakar","b6":{"b":"Shreykumar1"}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [598,676,835,141], () => (__webpack_exec__(2581)));
module.exports = __webpack_exports__;

})();