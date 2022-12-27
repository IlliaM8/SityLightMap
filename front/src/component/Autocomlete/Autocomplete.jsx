import React, { useEffect, useState } from "react";

import s from "./Autocomplete.module.css";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import useOnclickOutside from "react-cool-onclickoutside";

import sityState from "../../store/sityState";
import modalState from "../../store/modalState";

import { observer } from "mobx-react-lite";

import { getAllMarkers, postMarker } from "../../service";
import GeoForm from "../GeoForm/GeoForm";

const Autocomlete = observer(({ isLoaded }) => {
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

  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [description, setDescr] = useState("");
  const [validForm, setValidForm] = useState(false);

  const time = `${hours}:${minutes}`;

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
    getGeocode({ address: description }).then((results) => {
      const { lat, lng } = getLatLng(results[0]);
      postMarker({ lat: lat, lng: lng }, description, time);
      getAllMarkers();
    });
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

  const setTime = (e) => {
    e.name == "hour" ? setHours(e.value) : setMinutes(e.value);
  };

  useEffect(() => {
    checkHour();
    checkMinutes();
    if (hours.length > 0 || minutes.length > 0) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  }, [hours, minutes]);
  const checkHour = () => {
    if (hours.length > 2) {
      setHours("");
    }

    if (hours > 24) {
      setHours("");
    }
  };
  const checkMinutes = () => {
    if (minutes.length > 2) {
      setMinutes("");
    }
    if (minutes > 60) {
      setMinutes("");
    }
  };

  return (
    <div className={s.root} ref={ref}>
      <GeoForm
        getInformation={getInformation}
        handleInput={handleInput}
        value={value}
        ready={ready}
        status={status}
        renderSuggestions={renderSuggestions}
        hours={hours}
        setTime={setTime}
        minutes={minutes}
        validForm={validForm}
      />
    </div>
  );
});

export default Autocomlete;
