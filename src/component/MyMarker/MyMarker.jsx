import { InfoWindowF, MarkerF } from "@react-google-maps/api";
import React from "react";
import img from "../../assets/pngegg.png";
import markerState from "../../store/markerState";
import { observer } from "mobx-react-lite";
import { useState } from "react";

const MyMarker = observer(() => {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };
  return markerState.marker.map((mark) => (
    <MarkerF
      key={mark.coords.lng}
      position={mark.coords}
      icon={{ url: img }}
      anchor={mark.coords}
      onClick={(e) => handleActiveMarker(mark.coords)}
    >
      {activeMarker === mark.coords ? (
        <InfoWindowF
          onCloseClick={() => setActiveMarker(null)}
          position={mark.coords}
        >
          <div>
            <div>Видалити</div>

            {mark.time}
          </div>
        </InfoWindowF>
      ) : null}
    </MarkerF>
  ));
});

export default MyMarker;
