import modalState from "../../../store/modalState";
import s from "./SideMenu.module.css";
const SideMenu = ({ state, children }) => {
  const rootClasses = [s.sideMenu__container];
  const crossClass = [s.cross];

  if (state) {
    rootClasses.push(s.active);
    crossClass.push(s.active);
  }

  return (
    <div
      className={rootClasses.join(" ")}
      onClick={() => modalState.closeModal()}
    >
      <div className={s.sideMenu__content} onClick={(e) => e.stopPropagation()}>
        <div
          className={crossClass.join(" ")}
          onClick={() => modalState.toggleModal()}
        >
          <span className={s.cross__bar}></span>
          <span className={s.cross__bar}></span>
        </div>
        {children}
      </div>
    </div>
  );
};

export default SideMenu;
