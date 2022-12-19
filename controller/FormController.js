import FormService from "../service/FormService.js";

class FormController {
  async getForm(req, res) {
    try {
      await FormService.getForm(req.body);
      res.json(req.body);
    } catch (e) {
      e.res.status(300).json(e.message);
    }
  }
}
export default new FormController();
