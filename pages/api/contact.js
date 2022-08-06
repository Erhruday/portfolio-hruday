// // require('dotenv').config();

// import { EMAIL, PASSWORD } from '../../config/config';

// let nodemailer = require('nodemailer');
// export default function (req, res) {
//     // const { userName, userEmail, subject, message } = req.body;

//     // const transporter = nodemailer.createTransport({
//     //     service: 'gmail',
//     //     host: 'smtp.gmail.com',
//     //     port: 465,
//     //     secure: true,
//     //     auth: {
//     //         user: EMAIL,
//     //         pass: PASSWORD
//     //     }
//     // });
//     // const mailData = {
//     //     from: `${userEmail}`,
//     //     to: `${EMAIL}`,
//     //     subject: `Message From ${userName} and Email is : ${userEmail}`,
//     //     text: ` ${message} | Sent from: ${userEmail}`,
//     //     html: `<div>${message}</div><p>Sent from:
//     //   ${userEmail}</p> with subject : ${subject}`
//     // };
//     // transporter.sendMail(mailData, function (err, info) {
//     //     if (err) console.log(err);
//     //     else console(info, 'Mail Sent');
//     // });
//     // res.status(200);
//     res.send('Success');
// }

export default function handler(req, res) {
    res.status(200).json({ name: 'John Doe' });
}
