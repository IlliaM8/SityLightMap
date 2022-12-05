import { makeAutoObservable } from "mobx";
class ModalState {
  state = false;
  constructor() {
    makeAutoObservable(this);
  }
  openModal() {
    this.state = true;
  }
  closeModal() {
    this.state = false;
  }
}
export default new ModalState();
