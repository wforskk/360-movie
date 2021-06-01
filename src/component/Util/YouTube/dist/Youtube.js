"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Youtube_module_scss_1 = require("./Youtube.module.scss");
// メニューコンポーネント作成処理
function Youtube(props) {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: Youtube_module_scss_1["default"].youtubeWrapper },
            react_1["default"].createElement("iframe", { width: "853", height: "480", src: "https://www.youtube.com/embed/" + props.embedId, frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true, title: "Embedded youtube" })),
        react_1["default"].createElement("div", { className: Youtube_module_scss_1["default"].youtubeTxt }, props.children)));
}
exports["default"] = Youtube;
