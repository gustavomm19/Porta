const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');

const transporter = nodemailer.createTransport({
    // host: 'smtp.ethereal.email',
    service: "gmail",
    // port: 587,
    // secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_CONTACT, // generated ethereal user
        pass: process.env.PASS_CONTACT // generated ethereal password
    }
});

module.exports = {
    contactanos: async (_,message) => {
        // send mail with defined transport object
        const messageOption = {
            from: `${message.from}`, // sender address
            to: `${process.env.EMAIL_CONTACT}`, // list of receivers
            subject: `${message.subject}`, // Subject line
            html: `<p> De: ${message.name} </p> 
                  <h3> ${message.subject} </h3>
                  <p> ${message.text} </p>` // html body
        };

        const { messageId } = await transporter.sendMail(messageOption);
        if (messageId) return true;
        return false;

        //  console.log('Message sent: %s', info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    },
    contactanosGlobal: async (_, { message }) => {
        // send mail with defined transport object
        const messageOption = {
            from: `${message.nombre}`, // sender address
            to: `${process.env.EMAIL_CONTACT_TO2}`, // list of receivers
            subject: `${message.subject}`, // Subject line
            html: `<p> De: ${message.from} </p> 
                  <h3> ${message.subject} </h3>
                  <p> ${message.text} </p>` // html body
        };

        const { messageId } = await transporter.sendMail(messageOption);
        if (messageId) return true;
        return false;

        //  console.log('Message sent: %s', info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
};
