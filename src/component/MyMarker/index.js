export default class MyMarker {
  constructor(coord, description, time) {
    this.coord = coord;
    this.description = description;
    this.time = time;
    this.id = 0;
  }
  increaseId() {
    this.id++;
  }
}
