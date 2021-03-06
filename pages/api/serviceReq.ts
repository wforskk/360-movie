import { NextApiRequest, NextApiResponse } from 'next';
const nodemailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
require('dotenv').config()

export default async function serviceReq(req: NextApiRequest, res: NextApiResponse) {
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
        + '\nパターン選択：　' + req.body.currency
        + '\n動画URL：　' + req.body.url

    sendEmail({
        subject: '【360°動画_サービス依頼】',
        text: text,
        to: process.env.EMAIL,
        from: process.env.EMAIL
    });
    res.status(200).json({ message: 'ok' })
}
