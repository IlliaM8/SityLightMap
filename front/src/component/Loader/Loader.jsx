import React from "react";
import c from "./Loader.module.css";
function Loader({ children }) {
  return (
    <div className={c.container}>
      <div className={c.loader}></div>
      <span className={c.text}>{children}</span>
    </div>
  );
}

export default Loader;
