"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Top_module_scss_1 = require("./Top.module.scss");
var Top = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement("div", { className: Top_module_scss_1["default"].itemWrapper },
        react_1["default"].createElement("div", { className: Top_module_scss_1["default"].txtWrapper },
            react_1["default"].createElement("div", { className: Top_module_scss_1["default"].serviceTxt },
                react_1["default"].createElement("span", { className: Top_module_scss_1["default"].serviceWord }, " 360\u00B0\u306E\u30A4\u30F3\u30D1\u30AF\u30C8\u3092\u52D5\u753B\u3078"),
                react_1["default"].createElement("br", null),
                react_1["default"].createElement("span", { className: Top_module_scss_1["default"].serviceName }, "360NOKID")))));
};
exports["default"] = Top;
