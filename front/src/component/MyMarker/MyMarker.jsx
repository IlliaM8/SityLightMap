import React, { useState } from "react";

import { InfoWindowF, MarkerF } from "@react-google-maps/api";

import { observer } from "mobx-react-lite";

import MarkerIcon from "../../assets/pngegg.png";
import DeleteIcon from "../../assets/delete.png";

import s from "./MyMarker.module.css";
import markerState from "../../store/markerState";
const MyMarker = observer(() => {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };
  const removeMarker = (e) => {
    e.preventDefault();
    markerState.deleteMarker(activeMarker);
  };

  return markerState.marker.map((mark) => (
    <MarkerF
      key={mark._id}
      position={mark.coords}
      icon={{ url: MarkerIcon }}
      anchor={mark.coords}
      onClick={() => handleActiveMarker(mark._id)}
    >
      {activeMarker === mark._id ? (
        <InfoWindowF
          onCloseClick={() => setActiveMarker(null)}
          position={mark.coords}
        >
          <div className={s.info}>
            Час відключення: {mark.time}
            <div className={s.delete}>
              Видалити{" "}
              <img
                className={s.trashCan}
                src={DeleteIcon}
                alt=""
                onClick={(e) => removeMarker(e)}
              />
            </div>
          </div>
        </InfoWindowF>
      ) : null}
    </MarkerF>
  ));
});

export default MyMarker;
