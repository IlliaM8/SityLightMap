import axios from "./axios";
import markerState from "./store/markerState";

export async function getAllMarkers() {
  const response = await axios.get("/api/markers");
  markerState.setMarkers(response.data);
}
export async function deleteMarker() {
  const response = await axios.delete("/api/markers");
  console.log(response.data);
}
export async function postMarker(coords, description, time) {
  await axios.post("./api/markers", {
    coords,
    description,
    time,
  });
}
