import React, { useCallback, useEffect, useState } from "react";

import s from "./Autocomplete.module.css";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import useOnclickOutside from "react-cool-onclickoutside";

import sityState from "../../store/sityState";
import modalState from "../../store/modalState";
import markerState from "../../store/markerState";

import { observer } from "mobx-react-lite";

import { getAllMarkers, postMarker } from "../../service";

import Marker from "../MyMarker";

const Autocomlete = observer(({ isLoaded }) => {
  const [time, setTime] = useState("");
  const [description, setDescr] = useState("");

  const {
    ready,
    value,
    init,

    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      types: ["address"],
      componentRestrictions: {
        country: "ua",
      },
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
    setValue(`${sityState.sity},`);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();
      setDescr(description);
      // Get latitude and longitude via utility functions
    };

  const getInform = (description) => {
    getGeocode({ address: description })
      .then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        postMarker({ lat: lat, lng: lng }, description, time);
      })
      .catch();
  };
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
          <span className={s.main__text}>{main_text},</span>
          {/* <span className={s.secondary__text}>{secondary_text}</span> */}
        </li>
      );
    });
  useEffect(() => {
    if (isLoaded) {
      init();
      getAllMarkers();
    }
  }, [init, isLoaded]);

  useEffect(() => {
    if (!value.includes(sityState.sity)) {
      setSity(sityState.sity);
    }
  }, [value]);

  useEffect(() => {
    setSity(sityState.sity);
    setDescr("");
  }, [modalState.state]);

  const getInformation = (e) => {
    e.preventDefault();
    getInform(description);
  };
  const crossClass = [s.cross];
  if (modalState.state) {
    crossClass.push(s.active);
  }
  const toggleModal = () => {
    modalState.toggleModal();
  };

  return (
    <div className={s.root} ref={ref}>
      <div className={crossClass.join(" ")} onClick={toggleModal}>
        <span className={s.cross__bar}></span>
        <span className={s.cross__bar}></span>
      </div>

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
});

export default Autocomlete;
