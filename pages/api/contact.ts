import { NextApiRequest, NextApiResponse } from 'next';
var nodemailer = require('nodemailer');
require('dotenv').config()

export default function contact(req: NextApiRequest, res: NextApiResponse) {
    const password = process.env.password
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 456,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'sales.nokid@gmail.com', // generated ethereal user
            pass: password, // generated ethereal password
        },
    })

    const mailData = {
        // from: req.body.mailAddress,
        from: req.body.mailAddress,
        to: 'sales.nokid@gmail.com',
        subject: '【360°動画_フォーム回答】',
        html:
            `会社名：　${req.body.companyName}<br />
            名前${req.body.name}<br />
            電話番号：　${req.body.phoneNumber}<br />
            メールアドレス：　${req.body.mailAddress}<br />
            パターン選択：　${req.body.currency}<br />
            動画URL：　${req.body.url}<br />
            お問い合わせ：　${req.body.remarks}<br />`
    }
    transporter.sendMail(mailData, function (err: any, info: any) {
        if (err) {
            console.log(err)
        }
        else {
            console.log(info)
        }
    })
    res.status(200).json({ message: 'ok' })
}