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
});

export default Modal;
