import React from "react";
import Autocomlete from "../Autocomlete/Autocomplete";
import s from "./Form.module.css";
function Form({ isLoaded }) {
  return (
    <div>
      <Autocomlete isLoaded={isLoaded} />
    </div>
  );
}

export default Form;
