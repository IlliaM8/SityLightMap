import Marker from "./Marker.js";
import MarkerService from "./MarkerService.js";

class MarkerController {
  async getMarkers(req, res) {
    try {
      const marks = await MarkerService.getMarkers();
      res.json(marks);
    } catch (e) {
      console.log(e.message);
    }
  }
  async createMarker(req, res) {
    try {
      const marker = await MarkerService.createMarker(req.body);
      res.json(marker);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async deleteMarker(req, res) {
    try {
      const mark = await MarkerService.deleteMarker(req.params.id);
      return res.json("delleted");
    } catch (e) {
      res.status(300).json(e.message);
    }
  }
}
export default new MarkerController();
