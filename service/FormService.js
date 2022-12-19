import NodeMailer from "nodemailer";
const transporter = NodeMailer.createTransport({
  service: "Outlook365", // no need to set host or port etc.
  auth: {
    user: "strelchuk.illia@outlook.com",
    pass: "Ilua1235x",
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
