import React, { useEffect, useCallback } from "react";

import s from "./Autocomplete.module.css";

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import { useInput } from "../../hooks/useInput";

import useOnclickOutside from "react-cool-onclickoutside";

import sityState from "../../store/sityState";

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
    debounce: 500,
  });
  const hours = useInput("", { isEmpty: true, isHour: true });
  const minutes = useInput("", { isEmpty: true, isMinutes: true });

  const ref = useOnclickOutside(() => {
    clearSuggestions();
  });

  const handleInput = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  const setSity = useCallback(() => {
    setValue(`${sityState.sity},`);
  }, [setValue]);

  const handleSelect = useCallback(
    ({ description }) =>
      () => {
        // When user selects a place, we can replace the keyword without request data from API
        // by setting the second parameter to "false"
        setValue(description, false);
        clearSuggestions();
        // Get latitude and longitude via utility functions
      },
    [clearSuggestions, setValue]
  );

  const handleInformation = useCallback(
    (description) => {
      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        postMarker(
          { lat: lat, lng: lng },
          description,
          `${hours.value}:${minutes.value}`
        );
        setValue("");
        getAllMarkers();
      });
    },
    [hours.value, minutes.value, setValue]
  );

  const renderSuggestions = useCallback(
    () =>
      data.map((suggestion) => {
        const {
          place_id,
          structured_formatting: { main_text },
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
      }),
    [data, handleSelect]
  );
  useEffect(() => {
    if (isLoaded) {
      init();
    }
  }, [init, isLoaded]);

  useEffect(() => {
    if (!value.includes(sityState.sity)) {
      setSity(sityState.sity);
    }
  }, [value, setSity]);

  return (
    <div className={s.root} ref={ref}>
      <GeoForm
        handleInformation={handleInformation}
        handleInput={handleInput}
        value={value}
        ready={ready}
        status={status}
        renderSuggestions={renderSuggestions}
        hour={hours}
        minutes={minutes}
      />
    </div>
  );
});

export default Autocomlete;
