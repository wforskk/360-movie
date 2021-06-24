import { NextApiRequest, NextApiResponse } from 'next';
const nodemailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
require('dotenv').config()

export default async function contact(req: NextApiRequest, res: NextApiResponse) {
    const createTransporter = async () => {
        const oauth2Client = new OAuth2(
            process.env.CLIENT_ID,
            process.env.CLIENT_SECRET,
            "https://developers.google.com/oauthplayground"
        )

        oauth2Client.setCredentials({
            refresh_token: process.env.REFRESH_TOKEN
        })
        const accessToken = await new Promise((resolve, reject) => {
            oauth2Client.getAccessToken((err: any, token: any) => {
                if (err) {
                    reject("Failed to create access token :(");
                    console.log(err)
                }
                resolve(token);
            })
        })

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: process.env.EMAIL,
                accessToken,
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN
            }
        });

        return transporter;
    }

    const sendEmail = async (emailOptions: any) => {
        let emailTransporter = await createTransporter();
        await emailTransporter.sendMail(emailOptions);
    };

    let text = '会社名：　' + req.body.companyName
        + '\n名前：　' + req.body.name
        + '\n電話番号：　' + req.body.phoneNumber
        + '\nメールアドレス：　' + req.body.mailAddress
        + '\nお問い合わせ：'
        + '\n' + req.body.remarks

    sendEmail({
        subject: '【360°動画_お問い合わせ】',
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
    res.status(200).json({ message: 'ok' })
}
