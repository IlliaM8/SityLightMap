import { makeAutoObservable } from "mobx";
class MarkerState {
  marker = [
    {
      coords: {
        lat: 46.2952,
        lng: 30.6481,
      },
      description: "улица",
      time: "5",
    },
  ];
  constructor() {
    makeAutoObservable(this);
  }
  addMarker(value) {
    this.marker.push(value);
  }
  removeMarker(value) {}
}
export default new MarkerState();
