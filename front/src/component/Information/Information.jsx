import React from "react";
import s from "./Information.module.css";
import logo from "../../assets/pngegg.png";
import modalState from "../../store/modalState";
function Infromation() {
  return (
    <div className={s.information__container}>
      <header className={s.information__header}>
        {/* <img className={s.header__logo} src={logo} alt="" /> */}

        <h1 className={s.header__title}>Lorem </h1>
      </header>
      <div className={s.header__text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab in cumque
        tempora quae deleniti architecto aspernatur consequuntur natus quasi,
        excepturi a dolore voluptatum consectetur facere vero fuga. Dignissimos,
        repellendus. Omnis!
      </div>
      <footer></footer>
    </div>
  );
}

export default Infromation;
