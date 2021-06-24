"use strict";
exports.__esModule = true;
var react_1 = require("react");
var AppOpening_module_scss_1 = require("./AppOpening.module.scss");
var router_1 = require("next/router");
var image_1 = require("next/image");
var AppOpening = function (props) {
    // 画面遷移用宣言
    var router = router_1.useRouter();
    // 第一階層押下処理
    var onClick = function (event) {
        router.push('/');
    };
    return (react_1["default"].createElement("div", { className: AppOpening_module_scss_1["default"].opening },
        react_1["default"].createElement("div", { className: AppOpening_module_scss_1["default"].imageWrapper },
            react_1["default"].createElement("div", { className: AppOpening_module_scss_1["default"].image },
                react_1["default"].createElement(image_1["default"], { src: "/NOKID_logo_large.png", alt: "opening nokid logo", layout: "fill", objectFit: "cover" })))));
};
exports["default"] = AppOpening;
