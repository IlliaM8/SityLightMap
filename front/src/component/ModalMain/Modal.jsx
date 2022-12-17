import React from "react";
import { observer } from "mobx-react-lite";
import s from "./Modal.module.css";
import modalState from "../../store/modalState";
const Modal = observer(({ isLoaded, children }) => {
  const rootClasses = [s.modal__conatainer];
  if (modalState.state) {
    rootClasses.push(s.active);
  }
  if (isLoaded) {
    rootClasses.push(s.loaded);
  }
  function handleModal(e) {
    e.stopPropagation();
    modalState.closeModal();
  }
  return (
    <div onClick={(e) => handleModal(e)} className={rootClasses.join(" ")}>
      {children}
    </div>
  );
});

export default Modal;
