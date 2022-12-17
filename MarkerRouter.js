import Router from "express";
import MarkerController from "./MarkerController.js";
const router = new Router();

router.get("/markers", MarkerController.getMarkers);
router.post("/markers", MarkerController.createMarker);
router.delete("/markers:id", MarkerController.deleteMarker);
export default router;
