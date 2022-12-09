import { makeAutoObservable } from "mobx";
class MarkerState {
  marker = [];
  copy = false;
  constructor() {
    makeAutoObservable(this);
  }
  setMarkers(value) {
    this.marker = [...value];
  }
  addMarker(value) {
    let check = this.marker.find(
      (mark) => JSON.stringify(mark.coords) === JSON.stringify(value.coords)
    );
    if (!check) {
      this.copy = false;
      this.marker.push(value);
    } else {
      this.copy = true;
    }
  }
  deleteMarker(id) {
    this.marker = this.marker.filter((mark) => mark.id !== id);
  }
  incrId() {
    this.id++;
  }
}
export default new MarkerState();
