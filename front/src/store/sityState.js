import { makeAutoObservable } from "mobx";
class SityState {
  sity = "Чорноморськ";
  constructor() {
    makeAutoObservable(this);
  }
  setSity(sity) {
    this.sity = sity;
  }
}
export default new SityState();
