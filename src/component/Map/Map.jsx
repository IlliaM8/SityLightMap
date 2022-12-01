import { GoogleMap } from "@react-google-maps/api";
import React, { useRef } from "react";
import s from "./Map.module.css";
const containerStyle = {
  width: "100%",
  height: "100%",
};
const center = {
  lat: -3.745,
  lng: -38.523,
};
function Map() {
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
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      ></GoogleMap>
    </div>
  );
}

export default Map;
