import Router from "express";

import FormController from "../controller/FormController.js";

const formRouter = new Router();

formRouter.post("/form", FormController.getForm);
export default formRouter;
