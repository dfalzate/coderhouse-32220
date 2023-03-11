import dotenv from "dotenv";
import { createTransport } from "nodemailer";

dotenv.config();

const mailOptions = {
  from: process.env.USER_GMAIL,
  to: ["diegoff@gmail.com",process.env.USER_GMAIL],
  // text: "Hola desde el curso backend 32220",
  html:"<h1>Hola desde el Curso Backend 32220</h1><img src='cid:nodejs'/>",
  subject: "Enviando correos",
  attachments: [
    {
      path: "nodejs.png",
      filename: "Nodejs Logo",
      cid:"nodejs"
    },
  ]
};

const transportGmail = createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: process.env.USER_GMAIL,
    pass: process.env.PASS_GMAIL,
  },
});

async function sendEmail() {
  try {
    const response = await transportGmail.sendMail(mailOptions);
    console.log(response);
  } catch (error) {
    throw new Error(error.message);
  }
}

sendEmail();
