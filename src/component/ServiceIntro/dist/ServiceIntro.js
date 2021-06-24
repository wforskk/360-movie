"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ServiceIntro_module_scss_1 = require("./ServiceIntro.module.scss");
var Concept_1 = require("./Concept/Concept");
var Price_1 = require("./Price/Price");
var Point_1 = require("./Point/Point");
var ServiceIntro = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement("div", { className: ServiceIntro_module_scss_1["default"].contentWrapper },
        react_1["default"].createElement("div", { className: ServiceIntro_module_scss_1["default"].content },
            react_1["default"].createElement(Concept_1["default"], null)),
        react_1["default"].createElement("div", { className: ServiceIntro_module_scss_1["default"].content },
            react_1["default"].createElement(Point_1["default"], null)),
        react_1["default"].createElement("div", { className: ServiceIntro_module_scss_1["default"].content },
            react_1["default"].createElement(Price_1["default"], null))));
};
exports["default"] = ServiceIntro;
