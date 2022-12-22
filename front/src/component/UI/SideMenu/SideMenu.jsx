import modalState from "../../../store/modalState";
import s from "./SideMenu.module.css";
function SideMenu({ state, children }) {
  const rootClasses = [s.sideMenu__container];

  if (state) {
    rootClasses.push(s.active);
  }

  return (
    <div
      className={rootClasses.join(" ")}
      onClick={() => modalState.closeModal()}
    >
      <div className={s.sideMenu__content} onClick={(e) => e.stopPropagation()}>
        <div className={s.cross} onClick={() => modalState.closeModal()}>
          <span className={s.cross__bar}></span>
          <span className={s.cross__bar}></span>
        </div>
        {children}
      </div>
    </div>
  );
}

export default SideMenu;
