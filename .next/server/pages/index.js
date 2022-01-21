"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,377];
exports.modules = {

/***/ 185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/Home.module.css
var Home_module = __webpack_require__(288);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: ./components/playerCard.tsx


// to-do : clean up typescript on ANY
const PlayerCard = (props)=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
        href: "https://nextjs.org/docs",
        className: (Home_module_default()).card,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                children: [
                    props.name,
                    " →"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: props.img
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "Points - ",
                    props.pts
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "Rebounds - ",
                    props.reb
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                children: [
                    "Assists - ",
                    props.ast
                ]
            })
        ]
    }));
};
/* harmony default export */ const playerCard = (PlayerCard);

// EXTERNAL MODULE: ./pages/header.tsx
var header = __webpack_require__(229);
// EXTERNAL MODULE: ./pages/footer.tsx
var footer = __webpack_require__(342);
;// CONCATENATED MODULE: ./components/api.js
async function fetchAPI(url) {
    const headers = {
        "Content-Type": "application/json"
    };
    const res = await fetch(url, {
        method: "GET",
        headers
    });
    const json = await res.json();
    if (json.errors) {
        console.error(json.errors);
        throw new Error("Failed to fetch API");
    }
    return json.data[0];
}
/* harmony default export */ const api = (fetchAPI);

;// CONCATENATED MODULE: ./pages/index.tsx






const Home = ({ steph , demar , ja  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Home_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header["default"], {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: (Home_module_default()).main,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Home_module_default()).grid,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(playerCard, {
                            pts: steph.pts,
                            ast: steph.ast,
                            reb: steph.reb,
                            img: "/steph.jpeg",
                            name: "Steph Curry"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(playerCard, {
                            pts: demar.pts,
                            ast: demar.ast,
                            reb: demar.reb,
                            img: "/demar.jpeg",
                            name: "Demar DeRozan"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(playerCard, {
                            pts: ja.pts,
                            ast: ja.ast,
                            reb: ja.reb,
                            img: "/ja.jpeg",
                            name: "Ja Morant"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(footer["default"], {})
        ]
    }));
};
async function getStaticProps() {
    const API_URL = (playerId)=>`https://www.balldontlie.io/api/v1/season_averages?season=2021&player_ids[]=${playerId}`
    ;
    const steph = await api(API_URL(115));
    const demar = await api(API_URL(125));
    const ja = await api(API_URL(666786));
    return {
        props: {
            steph,
            demar,
            ja
        }
    };
}
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 28:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 18:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,342,229], () => (__webpack_exec__(185)));
module.exports = __webpack_exports__;

})();