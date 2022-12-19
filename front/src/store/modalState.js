import { makeAutoObservable } from "mobx";
class ModalState {
  state = false;
  infModal = false;
  formModal = false;
  constructor() {
    makeAutoObservable(this);
  }

  toggleFormModal() {
    this.formModal = !this.formModal;
    this.state = false;
    this.infModal = false;
  }
  toggleInfoModal() {
    this.infModal = !this.infModal;
    this.state = false;
    this.formModal = false;
  }
  closeModal() {
    this.state = false;
    this.infModal = false;
    this.formModal = false;
  }
  toggleModal() {
    this.state = !this.state;
    this.formModal = false;
    this.infModal = false;
  }
}
export default new ModalState();
