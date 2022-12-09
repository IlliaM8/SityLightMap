import Marker from "./Marker.js";

class MarkerController {
  async getMarkers(req, res) {
    try {
    } catch (e) {}
  }
  async createMarker(req, res) {
    try {
      const { coords, description, time, id } = req.body;
      const mark = await Marker.create({ coords, description, time, id });
      res.json(mark);
    } catch (e) {
      console.log(e.message);
    }
  }
}
export default new MarkerController();
