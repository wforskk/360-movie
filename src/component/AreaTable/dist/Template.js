"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Template_module_scss_1 = require("./Template.module.scss");
var SubjectTitle_1 = require("../../Util/SubjectTitle/SubjectTitle");
var TempItem_1 = require("./TempItem/TempItem");
var PickUpTxt_1 = require("../../Util/PickUpTxt/PickUpTxt");
var link_1 = require("next/link");
var Template = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement("div", { className: Template_module_scss_1["default"].itemWrapper },
        react_1["default"].createElement(SubjectTitle_1["default"], { text: '360\u00B0\u7A7A\u9593' }),
        react_1["default"].createElement("div", { className: Template_module_scss_1["default"].link },
            react_1["default"].createElement(link_1["default"], { href: 'https://www.youtube.com/channel/UCKcmiuA3Qp0I5wqRd4pONnQ' }, "\u7A7A\u9593\u306E\u30B5\u30F3\u30D7\u30EB\u52D5\u753B\u4E00\u89A7\uFF08Youtube\u306B\u9077\u79FB\uFF09")),
        react_1["default"].createElement(TempItem_1["default"], null, "1"),
        react_1["default"].createElement(PickUpTxt_1["default"], null, "\u203B\u9806\u6B21\u3054\u5229\u7528\u53EF\u80FD\u306A360\u00B0\u7A7A\u9593\u306F\u8FFD\u52A0\u3055\u308C\u307E\u3059\u3002\uFF08\u9031\u306B2~3\u500B\u8FFD\u52A0\u4E88\u5B9A\uFF09")));
};
exports["default"] = Template;
