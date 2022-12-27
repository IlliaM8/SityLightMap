import React, { useState } from "react";
import sityState from "../../store/sityState";
import "./SitySelect.css";

import Select from "react-select";
import { observer } from "mobx-react-lite";

const SitiesSelect = observer(({ isLoaded }) => {
  const options = [
    {
      value: "Чорноморськ",
      label: "Чорноморськ",
    },
  ];
  const getSity = () => {
    return sityState.sity
      ? options.find((c) => c.value === sityState.sity)
      : "";
  };
  const setSity = (e) => {
    console.log(e);
    return sityState.setSity(e.value);
  };
  return (
    <Select
      className="select"
      classNamePrefix="sity-select"
      onChange={(e) => setSity(e)}
      options={options}
      value={getSity()}
      defaultValue={options[0]}
      isDisabled={isLoaded ? false : true}
      isLoading={false}
      isClearable={false}
      isRtl={false}
      isSearchable={false}
    />
  );
});

export default SitiesSelect;
