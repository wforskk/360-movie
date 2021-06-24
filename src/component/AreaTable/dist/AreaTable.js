"use strict";
exports.__esModule = true;
var react_1 = require("react");
var AreaTable_module_scss_1 = require("./AreaTable.module.scss");
var SubjectTitle_1 = require("../Util/SubjectTitle/SubjectTitle");
var link_1 = require("next/link");
var AreaTable = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement("div", { className: AreaTable_module_scss_1["default"].itemWrapper },
        react_1["default"].createElement(SubjectTitle_1["default"], { text: '360\u00B0\u7A7A\u9593' }),
        react_1["default"].createElement("div", { className: AreaTable_module_scss_1["default"].link },
            react_1["default"].createElement(link_1["default"], { href: 'https://www.youtube.com/channel/UCKcmiuA3Qp0I5wqRd4pONnQ' }, "\u7A7A\u9593\u306E\u30B5\u30F3\u30D7\u30EB\u52D5\u753B\u4E00\u89A7\uFF08Youtube\u306B\u9077\u79FB\uFF09"))));
};
exports["default"] = AreaTable;
