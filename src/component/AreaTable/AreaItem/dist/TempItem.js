"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TempItem_module_scss_1 = require("./TempItem.module.scss");
// メニューコンポーネント作成処理
function TempItem(props) {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: TempItem_module_scss_1["default"].tempItem }),
        react_1["default"].createElement("div", { className: TempItem_module_scss_1["default"].itemNumber }, props.children),
        react_1["default"].createElement("div", { className: TempItem_module_scss_1["default"].tempItem2 }),
        react_1["default"].createElement("div", { className: TempItem_module_scss_1["default"].itemNumber2 }, "2")));
}
exports["default"] = TempItem;
