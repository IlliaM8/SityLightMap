import axios from "./axios";
import markerState from "./store/markerState";

export async function getAllMarkers() {
  try {
    const response = await axios.get("/api/markers");
    markerState.setMarkers(response.data);
  } catch (e) {
    console.log(e.message);
  }
}
export async function deleteMarker(id) {
  try {
    await axios.delete(`/api/markers:${id}`);
  } catch (e) {
    console.log(e.message);
  }
}
export async function postMarker(coords, description, time) {
  try {
    await axios.post("./api/markers", {
      coords,
      description,
      time,
    });
  } catch (e) {
    console.log(e.message);
  }
}
