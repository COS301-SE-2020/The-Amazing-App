const nodemailer = require('nodemailer');

const SendEmail = async options => {
  const transporter = nodemailer.createTransport({
    host: process.env.SmtpHost,
    port: process.env.SmtpPort,
    auth: {
      user: process.env.SmtpEmail,
      pass: process.env.SmtpPassword
    }
  });

  const message = {
    from: `${process.env.FromName} <${process.env.FromMail }>`,
    to: options.email,
    subject: options.subject,
    text: options.message
  };

  const info = await transporter.sendMail(message);

  console.log('Message sent: %s', info.messageId);
};

module.exports = SendEmail;
