"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Layout_module_scss_1 = require("./Layout.module.scss");
var AppBar_1 = require("../AppBar/AppBar");
var Layout = function (props) { return (react_1["default"].createElement("div", { className: Layout_module_scss_1["default"].appWrapper },
    react_1["default"].createElement(AppBar_1["default"], null),
    react_1["default"].createElement("div", { className: Layout_module_scss_1["default"].main, id: 'main' }, props.children))); };
exports["default"] = Layout;
