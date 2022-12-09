import Router from "express";
import MarkerController from "./MarkerController.js";
const router = new Router();

router.get("/", MarkerController.getMarkers);
router.post("/", MarkerController.createMarker);
router.delete("/:id", MarkerController.deleteMarker);

export default router;
