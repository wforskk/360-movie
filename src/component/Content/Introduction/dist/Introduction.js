"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Introduction_module_scss_1 = require("./Introduction.module.scss");
var SubjectTitle_1 = require("../../Util/SubjectTitle/SubjectTitle");
var Youtube_1 = require("../../Util/YouTube/Youtube");
var Introduction = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement("div", { className: Introduction_module_scss_1["default"].itemWrapper },
        react_1["default"].createElement(SubjectTitle_1["default"], { text: 'VR\u306B\u7279\u5316\u3057\u305F\u4F1A\u793E\u3060\u304B\u3089\u3053\u305D\u306E\u4FE1\u983C\uFF01' }),
        react_1["default"].createElement(Youtube_1["default"], { embedId: 'DQcsiQ-MtkM' }, "Pizuya's Cell 360\u00B0MV\u300C\u9077\u79FB\u30B8\u30A7\u30C3\u30C8\u30B9\u30C8\u30EA\u30FC\u30E0\u300D"),
        react_1["default"].createElement(Youtube_1["default"], { embedId: 'Ff71Rc--QmY' }, "\u6771\u65B9Vocal\u3011\u532A\u77F3\u4E4B\u30A2\u30A4\u30C7\u30A2\u30EB - Pizuya's Cell\u3010360\u00B0MV\u3011"),
        react_1["default"].createElement(Youtube_1["default"], { embedId: 'znmFRFzRuFo' }, "PROJECT EMOTION - \u4E16\u754C\u6700\u5927\u306ENFT\u30A2\u30FC\u30C8\u5C55\u793A\u4F1A \u3010360\u00B0VR\u3011")));
};
exports["default"] = Introduction;
