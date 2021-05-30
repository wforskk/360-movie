"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Layout_1 = require("../src/component/Layout/Layout");
var Contact_1 = require("../src/component/Contact/Contact");
var ContactPage = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Layout_1["default"], { dispBtn: false },
            react_1["default"].createElement(Contact_1["default"], null))));
};
exports["default"] = ContactPage;
