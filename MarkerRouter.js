import Router from "express";
import MarkerController from "./MarkerController.js";
const router = new Router();

router.get("/");
router.post("/", MarkerController.createMarker);
router.delete("/:id");

export default router;
