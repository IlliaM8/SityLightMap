import React from "react";
import s from "./Modal.module.css";
function Modal({ visible, setVisible }) {
  const rootClasses = [s.modal__conatainer];
  if (visible) {
    rootClasses.push(s.active);
  }
  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div
        className={s.modal__content}
        onClick={(e) => e.stopPropagation()}
      ></div>
    </div>
  );
}

export default Modal;
