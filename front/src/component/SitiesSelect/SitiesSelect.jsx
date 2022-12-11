import React, { useState } from "react";
import sityState from "../../store/sityState";
import { sities } from "./index";
import s from "./SitiesSelect.module.css";

import Select from "react-select";

function SitiesSelect() {
  const [isClearable, setIsClearable] = useState(false);
  const [isSearchable, setIsSearchable] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  const options = [
    {
      value: "Чорноморськ",
      label: "Чорноморськ",
    },
    {
      value: "Одеса",
      label: "Одеса",
    },
  ];
  const [sity, setSit] = useState("Чорноморськ");
  const getSity = () => {
    return sity ? options.find((c) => c.value === sity) : "";
  };
  const setSity = (newValue) => {
    return setSit(newValue.value);
  };
  return (
    <div className={s.select}>
      <Select
        onChange={(newValue) => setSity(newValue)}
        options={options}
        value={getSity()}
        defaultValue={options[0]}
        isDisabled={isDisabled}
        isLoading={isLoading}
        isClearable={isClearable}
        isRtl={isRtl}
        isSearchable={isSearchable}
      />
    </div>
  );
}

export default SitiesSelect;
