"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Button_module_scss_1 = require("./Button.module.scss");
var Button = function (_a) {
    var onClick = _a.onClick, _b = _a.btnStyle, btnStyle = _b === void 0 ? 'primary' : _b, _c = _a.type, type = _c === void 0 ? 'button' : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, children = _a.children;
    var btnType = btnStyle === 'secondary' ? Button_module_scss_1["default"].borderBtn : Button_module_scss_1["default"].normalBtn;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("button", { type: type, className: btnType, disabled: disabled, onClick: onClick }, children)));
};
exports["default"] = Button;
