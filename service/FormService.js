import NodeMailer from "nodemailer";
import config from "config";

const transporter = NodeMailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: config.get("login"), // generated ethereal user
    pass: config.get("mailPass"), // generated ethereal password
  },
});

class FormService {
  async getForm(inf) {
    const { name, email, text } = inf;
    console.log(name, email, text);
    let mailOption = {
      from: email, // sender address
      to: config.get("login"), // list of receivers
      subject: email, // Subject line
      text: `${name}: ${text}`, // plain text body
    };
    transporter.sendMail(mailOption);
  }
}
export default new FormService();
