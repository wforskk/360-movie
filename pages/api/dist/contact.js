"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var nodemailer = require('nodemailer');
var google = require("googleapis").google;
var OAuth2 = google.auth.OAuth2;
require('dotenv').config();
function contact(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var createTransporter, sendEmail, text;
        var _this = this;
        return __generator(this, function (_a) {
            createTransporter = function () { return __awaiter(_this, void 0, void 0, function () {
                var oauth2Client, accessToken, transporter;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            oauth2Client = new OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, "https://developers.google.com/oauthplayground");
                            oauth2Client.setCredentials({
                                refresh_token: process.env.REFRESH_TOKEN
                            });
                            return [4 /*yield*/, new Promise(function (resolve, reject) {
                                    oauth2Client.getAccessToken(function (err, token) {
                                        if (err) {
                                            reject("Failed to create access token :(");
                                            console.log(err);
                                        }
                                        resolve(token);
                                    });
                                })];
                        case 1:
                            accessToken = _a.sent();
                            transporter = nodemailer.createTransport({
                                service: "gmail",
                                auth: {
                                    type: "OAuth2",
                                    user: process.env.EMAIL,
                                    accessToken: accessToken,
                                    clientId: process.env.CLIENT_ID,
                                    clientSecret: process.env.CLIENT_SECRET,
                                    refreshToken: process.env.REFRESH_TOKEN
                                }
                            });
                            return [2 /*return*/, transporter];
                    }
                });
            }); };
            sendEmail = function (emailOptions) { return __awaiter(_this, void 0, void 0, function () {
                var emailTransporter;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, createTransporter()];
                        case 1:
                            emailTransporter = _a.sent();
                            return [4 /*yield*/, emailTransporter.sendMail(emailOptions)];
                        case 2:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); };
            text = '会社名：　' + req.body.companyName
                + '\n名前：　' + req.body.name
                + '\n電話番号：　' + req.body.phoneNumber
                + '\nメールアドレス：　' + req.body.mailAddress
                + '\nパターン選択：　' + req.body.currency
                + '\n動画URL：　' + req.body.url
                + '\nお問い合わせ：'
                + '\n' + req.body.remarks;
            sendEmail({
                subject: '【360°動画_フォーム回答】',
                text: text,
                to: process.env.EMAIL,
                from: process.env.EMAIL
            });
            // nodemailer用の記述
            // const email = '360app.rep.info@gmail.com'
            // let transporter = nodemailer.createTransport({
            //     service: 'gmail',
            //     host: 'smtp.gmail.com',
            //     port: 456,
            //     secure: true, // true for 465, false for other ports
            //     auth: {
            //         user: email, // generated ethereal user
            //         pass: process.env.password, // generated ethereal password
            //     },
            // })
            // const mailData = {
            //     from: email,
            //     to: email,
            //     subject: '【360°動画_フォーム回答】',
            //     html:
            //         `会社名：　${req.body.companyName}<br />
            //         名前：　${req.body.name}<br />
            //         電話番号：　${req.body.phoneNumber}<br />
            //         メールアドレス：　${req.body.mailAddress}<br />
            //         パターン選択：　${req.body.currency}<br />
            //         動画URL：　${req.body.url}<br />
            //         お問い合わせ：　${req.body.remarks}<br />`
            // }
            // transporter.sendMail(mailData, function (err: any, info: any) {
            //     if (err) {
            //         console.log(err)
            //     }
            //     else {
            //         console.log(info)
            //     }
            // })
            res.status(200).json({ message: 'ok' });
            return [2 /*return*/];
        });
    });
}
exports["default"] = contact;
