import Marker from "./Marker.js";

class MarkerService {
  async getMarkers() {
    const markers = await Marker.find();
    return markers;
  }
  async createMarker(marker) {
    const { description } = marker;
    const checkedMarker = await Marker.findOne({ description });
    if (checkedMarker) {
      throw new Error("По данному адрессу маркер уже существует");
    }
    const createdMarker = await Marker.create(marker);
    return createdMarker;
  }

  async deleteMarker(id) {
    if (!id) {
      throw new Error("id not defined");
    }
    const marker = await Marker.findByIdAndDelete(id);
    return marker;
  }
}
export default new MarkerService();
