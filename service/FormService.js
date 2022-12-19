import NodeMailer from "nodemailer";
const transporter = NodeMailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: testAccount.user, // generated ethereal user
    pass: testAccount.pass, // generated ethereal password
  },
});

class FormService {
  async getForm(inf) {
    const { name, email, text } = inf;
    console.log(name, email, text);
    let mailOption = {
      from: email, // sender address
      to: "strelchuk.illia@outlook.com", // list of receivers
      subject: name, // Subject line
      text: text, // plain text body
    };
    transporter.sendMail(mailOption);
  }
}
export default new FormService();
