import React, { useEffect } from "react";
import sityState from "../../store/sityState";
import { sities } from "./index";
import s from "./SitiesSelect.module.css";
function SitiesSelect() {
  const sity = (e) => {
    e.preventDefault();
    sityState.setSity(e.target.value);
  };
  return (
    <select onChange={sity} className={s.select} name="" id="sitiesSelect">
      {sities.map((sitie) => (
        <option key={sitie.name} value={sitie.name}>
          {sitie.name}
        </option>
      ))}
    </select>
  );
}

export default SitiesSelect;
