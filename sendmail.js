const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();
    let transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: "donato.bins54@ethereal.email",
            pass: "Xa2XpAqjJb3Z2rWU5w",
        },
    });
    let info = await transporter.sendMail({
        from: '"Pratham Tewari "<prathamtewar3744@gmail.com>',
        to: "prathamtewari875@gmail.com",
        subject: 'Nodemailer is unicode friendly ✔',
        text: 'Hello to myself!',
        html: '<p><b>Hello</b> to myself!</p>'
    });
    console.log("Message sent: %s", info.messageId);
    res.json(info);
};

module.exports = sendMail;