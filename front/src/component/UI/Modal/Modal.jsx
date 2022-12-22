import { observer } from "mobx-react-lite";
import React from "react";
import modalState from "../../../store/modalState";
import s from "./Modal.module.css";
const Modal = observer(({ children, state }) => {
  const rootClasses = [s.subModal__container];

  if (state) {
    rootClasses.push(s.active);
  }

  return (
    <div
      className={rootClasses.join(" ")}
      onClick={() => modalState.closeModal()}
    >
      <div className={s.subModal__content} onClick={(e) => e.stopPropagation()}>
        <div className={s.cross} onClick={() => modalState.closeModal()}>
          <span className={s.cross__bar}></span>
          <span className={s.cross__bar}></span>
        </div>
        {children}
      </div>
    </div>
  );
});

export default Modal;
