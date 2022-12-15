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

  return (
    <div className={rootClasses.join(" ")}>
      <div className={s.modal__content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
});

export default Modal;
