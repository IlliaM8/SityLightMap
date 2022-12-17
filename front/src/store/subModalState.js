import { makeAutoObservable } from "mobx";
class SubModalState {
  state = false;
  constructor() {
    makeAutoObservable(this);
  }
  openModal() {
    this.state = !this.state;
  }

  closeModal() {
    this.state = false;
  }
  toggleModal() {
    this.state = !this.state;
  }
}
export default new SubModalState();
