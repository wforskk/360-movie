"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Button_module_scss_1 = require("./Button.module.scss");
var router_1 = require("next/router");
var Button = function (_a) {
    var children = _a.children;
    // 画面遷移用宣言
    var router = router_1.useRouter();
    // 第一階層押下処理
    var onClick = function (event) {
        router.push('/contact');
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("button", { className: Button_module_scss_1["default"].button, onClick: onClick }, children)));
};
exports["default"] = Button;
