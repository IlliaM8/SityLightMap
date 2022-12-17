import { makeAutoObservable } from "mobx";
class ModalState {
  state = false;
  subState = false;
  constructor() {
    makeAutoObservable(this);
  }
  openModal() {
    this.state = true;
    this.subState = false;
  }
  openSub() {
    this.sub = true;
  }
  closeModal() {
    this.state = false;
    this.sub = false;
  }
  toggleModal() {
    this.state = !this.state;
  }
}
export default new ModalState();
