"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ServiceRequest_module_scss_1 = require("./ServiceRequest.module.scss");
var TextField_1 = require("@material-ui/core/TextField");
var core_1 = require("@material-ui/core");
var HandsUpTxt_1 = require("../Util/HandsUpTxt/HandsUpTxt");
var router_1 = require("next/router");
var Description_1 = require("../Util/Description/Description");
var image_1 = require("next/image");
var selectAreaList_1 = require("../../static/selectAreaList");
var Button_1 = require("../Util/Button/Button");
var SubjectTitle_1 = require("../Util/SubjectTitle/SubjectTitle");
var isStringNull = function (val) {
    if (val == null || val == '') {
        return true;
    }
    return false;
};
// 選択したエリアの情報取得処理
var getSelectedAreaInfo = function (val) {
    var item = selectAreaList_1.selectAreaList.filter(function (list) { return list.id === val; });
    return item[0];
};
// 選択したエリアの画像要素取得処理ï
var getImageCompo = function (val) {
    var item = getSelectedAreaInfo(val);
    var el;
    if (item != null && item.id != '000') {
        el = react_1["default"].createElement("div", { className: ServiceRequest_module_scss_1["default"].image },
            react_1["default"].createElement(image_1["default"], { src: item.url, alt: item.alt, layout: "fill", objectFit: "cover" }));
    }
    else {
        el = react_1["default"].createElement("div", { className: ServiceRequest_module_scss_1["default"].image },
            react_1["default"].createElement("div", { className: ServiceRequest_module_scss_1["default"].blankContent },
                react_1["default"].createElement(HandsUpTxt_1["default"], null, "\u672A\u9078\u629E\u306E\u305F\u3081\u753B\u50CF\u8868\u793A\u306A\u3057")));
    }
    return el;
};
var ServiceRequest = function () {
    // 画面遷移用宣言
    var router = router_1.useRouter();
    var _a = react_1["default"].useState(''), companyName = _a[0], setCompanyName = _a[1];
    var _b = react_1["default"].useState(''), name = _b[0], setName = _b[1];
    var _c = react_1["default"].useState(''), phoneNumber = _c[0], setPhoneNumber = _c[1];
    var _d = react_1["default"].useState(''), mailAddress = _d[0], setMailAddress = _d[1];
    var _e = react_1["default"].useState(''), url = _e[0], setUrl = _e[1];
    var _f = react_1["default"].useState('000'), currency = _f[0], setCurrency = _f[1];
    var _g = react_1["default"].useState(''), remarks = _g[0], setRemarks = _g[1];
    var handleSetCompanyName = function (event) {
        setCompanyName(event.target.value);
    };
    var handleSetName = function (event) {
        setName(event.target.value);
    };
    var handleSetPhoneNumber = function (event) {
        setPhoneNumber(event.target.value);
    };
    var handleSetMailAddress = function (event) {
        setMailAddress(event.target.value);
    };
    var handleSetUrl = function (event) {
        setUrl(event.target.value);
    };
    var handleSetCurrency = function (event) {
        setCurrency(event.target.value);
    };
    var handleSetRemarks = function (event) {
        setRemarks(event.target.value);
    };
    var handleSubmit = function (event) {
        event.preventDefault();
        var data = {
            companyName: companyName,
            name: name,
            phoneNumber: phoneNumber,
            mailAddress: mailAddress,
            url: url,
            currency: currency,
            remarks: remarks
        };
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(function (res) {
            if (res.status === 200) {
                setCompanyName('');
                setName('');
                setPhoneNumber('');
                setMailAddress('');
                setUrl('');
                setCurrency('000');
                setRemarks('');
            }
        });
        setTimeout(function () {
            router.push('/contactDone');
        }, 0);
    };
    return (react_1["default"].createElement("form", { className: ServiceRequest_module_scss_1["default"].form, noValidate: true, autoComplete: "off", onSubmit: handleSubmit },
        react_1["default"].createElement(SubjectTitle_1["default"], { text: '\u4F9D\u983C' }),
        react_1["default"].createElement(Description_1["default"], { txt: '360NOKID\u3068\u306F\uFF1F' }),
        react_1["default"].createElement("div", { className: ServiceRequest_module_scss_1["default"].section },
            react_1["default"].createElement("div", { className: ServiceRequest_module_scss_1["default"].sectionTitle }, "\u30B5\u30FC\u30D3\u30B9\u5229\u7528\u60C5\u5831\u5165\u529B\u6B04"),
            react_1["default"].createElement(TextField_1["default"], { id: "pattern", select: true, label: "\u30D1\u30BF\u30FC\u30F3\u9078\u629E", value: currency, onChange: handleSetCurrency, className: ServiceRequest_module_scss_1["default"].textArea, helperText: "\u203B\u4F7F\u7528\u3059\u308B360\u00B0\u7A7A\u9593\u306E\u30D1\u30BF\u30FC\u30F3\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044" }, selectAreaList_1.selectAreaList.map(function (option) { return (react_1["default"].createElement(core_1.MenuItem, { key: option.id, value: option.id }, option.label)); })),
            getImageCompo(currency),
            react_1["default"].createElement(TextField_1["default"], { id: "URL", label: "\u52D5\u753BURL", className: ServiceRequest_module_scss_1["default"].textArea, fullWidth: true, value: url, onChange: handleSetUrl }),
            react_1["default"].createElement(HandsUpTxt_1["default"], null, "\u203B\u52D5\u753B\u30C7\u30FC\u30BF\u304CURL\u3067\u5171\u6709\u53EF\u80FD\u306A\u300C\u30AE\u30AC\u30D5\u30A1\u30A4\u30EB\u4FBF\u300D\u3001\u300CGoogle\u30C9\u30E9\u30A4\u30D6\u300D\u3092\u8A18\u8F09")),
        react_1["default"].createElement("div", { className: ServiceRequest_module_scss_1["default"].section },
            react_1["default"].createElement("div", { className: ServiceRequest_module_scss_1["default"].sectionTitle }, "\u304A\u5BA2\u69D8\u60C5\u5831\u5165\u529B\u6B04"),
            react_1["default"].createElement(TextField_1["default"], { id: "companyName", label: "\u4F1A\u793E\u540D", className: ServiceRequest_module_scss_1["default"].textArea, fullWidth: true, value: companyName, onChange: handleSetCompanyName }),
            react_1["default"].createElement(TextField_1["default"], { id: "name", label: "\u6C0F\u540D", className: ServiceRequest_module_scss_1["default"].textArea, fullWidth: true, value: name, onChange: handleSetName }),
            react_1["default"].createElement(TextField_1["default"], { id: "phoneNumber", label: "\u96FB\u8A71\u756A\u53F7", className: ServiceRequest_module_scss_1["default"].textArea, fullWidth: true, value: phoneNumber, onChange: handleSetPhoneNumber }),
            react_1["default"].createElement(TextField_1["default"], { id: "mailAddress", type: 'mail', label: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9", className: ServiceRequest_module_scss_1["default"].textArea, fullWidth: true, value: mailAddress, onChange: handleSetMailAddress })),
        !isStringNull(companyName) && !isStringNull(name) && !isStringNull(mailAddress) && phoneNumber != null ? (react_1["default"].createElement(Button_1["default"], { type: 'submit' }, "\u9001\u4FE1")) : (react_1["default"].createElement(Button_1["default"], { disabled: true }, "\u9001\u4FE1"))));
};
exports["default"] = ServiceRequest;
