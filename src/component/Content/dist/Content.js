"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Content_module_scss_1 = require("./Content.module.scss");
var Top_1 = require("./Top/Top");
var Concept_1 = require("./Concept/Concept");
var Price_1 = require("./Price/Price");
var Introduction_1 = require("./Introduction/Introduction");
var Point_1 = require("./Point/Point");
var Template_1 = require("./Template/Template");
var Content = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement("div", { className: Content_module_scss_1["default"].contentWrapper },
        react_1["default"].createElement("div", { className: Content_module_scss_1["default"].content },
            react_1["default"].createElement(Top_1["default"], null)),
        react_1["default"].createElement("div", { className: Content_module_scss_1["default"].content },
            react_1["default"].createElement(Concept_1["default"], null)),
        react_1["default"].createElement("div", { className: Content_module_scss_1["default"].content },
            react_1["default"].createElement(Point_1["default"], null)),
        react_1["default"].createElement("div", { className: Content_module_scss_1["default"].content },
            react_1["default"].createElement(Introduction_1["default"], null)),
        react_1["default"].createElement("div", { className: Content_module_scss_1["default"].content },
            react_1["default"].createElement(Template_1["default"], null)),
        react_1["default"].createElement("div", { className: Content_module_scss_1["default"].content },
            react_1["default"].createElement(Price_1["default"], null))));
};
exports["default"] = Content;
