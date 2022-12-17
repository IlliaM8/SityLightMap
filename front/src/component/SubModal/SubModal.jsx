import { observer } from "mobx-react-lite";
import React from "react";
import modalState from "../../store/modalState";
import subModalState from "../../store/subModalState";
import s from "./SubModal.module.css";
const SubModal = observer(({ children }) => {
  const rootClasses = [s.subModal__container];

  if (subModalState.state) {
    rootClasses.push(s.active);
  }

  return (
    <div
      className={rootClasses.join(" ")}
      onClick={() => subModalState.closeModal()}
    >
      <div className={s.subModal__content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
});

export default SubModal;
