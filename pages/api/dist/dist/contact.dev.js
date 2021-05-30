"use strict";

exports.__esModule = true;

var nodemailer = require('nodemailer');

require('dotenv').config();

function contact(req, res) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 456,
    secure: true,
    auth: {
      user: 'sales.nokid@gmail.com',
      pass: process.env.password
    }
  });
  var mailData = {
    // from: req.body.mailAddress,
    from: 'sales.nokid@gmail.com',
    to: 'sales.nokid@gmail.com',
    subject: '【360°動画_フォーム回答】',
    html: "\u4F1A\u793E\u540D\uFF1A\u3000" + req.body.companyName + "<br />\n            \u540D\u524D\uFF1A\u3000" + req.body.name + "<br />\n            \u96FB\u8A71\u756A\u53F7\uFF1A\u3000" + req.body.phoneNumber + "<br />\n            \u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\uFF1A\u3000" + req.body.mailAddress + "<br />\n            \u30D1\u30BF\u30FC\u30F3\u9078\u629E\uFF1A\u3000" + req.body.currency + "<br />\n            \u52D5\u753BURL\uFF1A\u3000" + req.body.url + "<br />\n            \u304A\u554F\u3044\u5408\u308F\u305B\uFF1A\u3000" + req.body.remarks + "<br />"
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
  res.status(200).json({
    message: 'ok'
  });
}

exports["default"] = contact;