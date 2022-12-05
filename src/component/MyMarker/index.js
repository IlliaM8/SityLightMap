export default class Marker {
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
