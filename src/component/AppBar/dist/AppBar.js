"use strict";
exports.__esModule = true;
var react_1 = require("react");
var AppBar_module_scss_1 = require("./AppBar.module.scss");
var Button_1 = require("../Util/Button/Button");
var router_1 = require("next/router");
var image_1 = require("next/image");
var Menu_1 = require("@material-ui/icons/Menu");
var AppBar = function (props) {
    // 画面遷移用宣言
    var router = router_1.useRouter();
    // 第一階層押下処理
    var onClick = function (event) {
        router.push('/');
    };
    var onAreaTableClick = function (event) {
        router.push('/areaTable');
    };
    var onServiceIntroClick = function (event) {
        router.push('/serviceIntro');
    };
    var onAchievementClick = function (event) {
        router.push('/achievement');
    };
    var onSelectAreaClick = function (event) {
        router.push('/selectArea');
    };
    return (react_1["default"].createElement("div", { className: AppBar_module_scss_1["default"].appBar },
        react_1["default"].createElement("div", { className: AppBar_module_scss_1["default"].btnWrapper },
            react_1["default"].createElement("div", { className: AppBar_module_scss_1["default"].logoBtn, onClick: onClick },
                react_1["default"].createElement(image_1["default"], { src: "/NOKID_logo.png", alt: "nokid logo button", width: 220, height: 50 })),
            react_1["default"].createElement("div", { className: AppBar_module_scss_1["default"].pcMode },
                react_1["default"].createElement(Button_1["default"], { onClick: onServiceIntroClick, btnStyle: 'secondary' }, "\u30B5\u30FC\u30D3\u30B9\u7D39\u4ECB"),
                react_1["default"].createElement(Button_1["default"], { onClick: onSelectAreaClick, btnStyle: 'secondary' }, "\u4F5C\u6210\u4F9D\u983C"),
                react_1["default"].createElement(Button_1["default"], { onClick: onAreaTableClick, btnStyle: 'secondary' }, "\u7A7A\u9593\u4E00\u89A7"),
                react_1["default"].createElement(Button_1["default"], { onClick: onAchievementClick, btnStyle: 'secondary' }, "\u5B9F\u7E3E/\u5B9F\u4F8B"))),
        react_1["default"].createElement(Button_1["default"], { btnStyle: 'secondary' },
            react_1["default"].createElement(Menu_1["default"], null))));
};
exports["default"] = AppBar;
