import React, { useEffect, useState } from "react";
import s from "./Autocomplete.module.css";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import markerState from "../../store/markerState";
import sityState from "../../store/sityState";
import modalState from "../../store/modalState";
function Autocomlete({ isLoaded }) {
  const {
    ready,
    value,
    init,

    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };
  const setSity = () => {
    setValue(`${sityState.sity},вулиця `);
  };
  useEffect(() => setSity(), []);
  const [description, setDescr] = useState("awd");
  const handleSelect =
    ({ description }) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();
      console.log(description);
      setDescr(description);
      // Get latitude and longitude via utility functions
    };
  const [time, setTime] = useState("");

  function getInform(description) {
    getGeocode({ address: description }).then((results) => {
      const { lat, lng } = getLatLng(results[0]);
      console.log("📍 Coordinates: ", { lat, lng });
      markerState.addMarker({
        coords: {
          lat: lat,
          lng: lng,
        },
        description: description,
        time: time,
      });
    });
  }
  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li
          className={s.listItem}
          key={place_id}
          onClick={handleSelect(suggestion)}
        >
          <span className={s.main__text}>{main_text}</span>
          {/* <span className={s.main__text}>{secondary_text}</span> */}
        </li>
      );
    });
  useEffect(() => {
    if (isLoaded) {
      init();
    }
  }, [init, isLoaded]);

  const getInformation = (e) => {
    e.preventDefault();
    getInform(description);
  };
  return (
    <div className={s.root} ref={ref}>
      <span onClick={() => modalState.closeModal()} className={s.cross}></span>
      <form className={s.form} onSubmit={(e) => getInformation(e)} action="#">
        <label>Адресса</label>
        <input
          type="text"
          className={s.input}
          value={value}
          onChange={(e) => handleInput(e)}
          disabled={!ready}
          placeholder="Введіть адресу"
        />

        {status === "OK" && (
          <ul className={s.suggestion}>{renderSuggestions()}</ul>
        )}
        <label htmlFor="timeInput">Час</label>
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className={s.timeInput}
          id="timeInput"
          placeholder="Час відключення"
        />
        <input
          className={s.submitButton}
          onClick={() => modalState.closeModal()}
          type="submit"
        />
      </form>
    </div>
  );
}

export default Autocomlete;
