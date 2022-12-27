import React from "react";
import s from "./Loader.module.css";
function Loader() {
  return (
    <div className={s.container}>
      <div class={s.lds__roller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
