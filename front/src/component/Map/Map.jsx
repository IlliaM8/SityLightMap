import { GoogleMap, Marker } from "@react-google-maps/api";
import React, { useRef } from "react";
import MyMarker from "../MyMarker/MyMarker";
import s from "./Map.module.css";
import { defaultTheme } from "./Theme";

const containerStyle = {
  width: "100%",
  height: "100%",
};
const center = {
  lat: 46.2952,
  lng: 30.6481,
};

const defaultOptions = {
  panControl: false,
  zoomControl: false,
  mapTypeControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  scrolWheel: false,
  disableDoubleClickZoom: false,
  fullscreenControl: false,
  styles: defaultTheme,
};
function Map({ coords }) {
  const mapRef = useRef(undefined);

  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);
  return (
    <div className={s.container}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
        language="uk"
        maxZoom={14}
        minZoom={14}
      >
        <MyMarker coords={coords} />
      </GoogleMap>
    </div>
  );
}

export default Map;
