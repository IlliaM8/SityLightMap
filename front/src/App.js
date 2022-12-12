import "./App.css";

import Loader from "./component/Loader/Loader";

import { useJsApiLoader } from "@react-google-maps/api";
import Map from "./component/Map/Map";

import SitiesSelect from "./component/SitiesSelect/SitiesSelect";
import Modal from "./component/Modal/Modal";

import modalState from "./store/modalState";

import Autocomlete from "./component/Autocomlete/Autocomplete";
import Greeting from "./component/Greeting/Greeting";
import { useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;
const libraries = ["places"];

function App() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries,
  });

  return (
    <div className="App">
      <div className="addressSearchContainer">
        <div className="addressSearchContainer__panel">
          <SitiesSelect isLoaded={isLoaded} />
          <button
            disabled={isLoaded ? false : true}
            className="button"
            onClick={() => modalState.openModal()}
          >
            Натисніть щоб додати мітку
          </button>
        </div>
        <Modal isLoaded={isLoaded}>
          <Autocomlete isLoaded={isLoaded} />
        </Modal>
      </div>
      <div onClick={() => modalState.closeModal()}>
        {isLoaded ? <Map /> : <Loader />}
        {isLoaded ? <Greeting /> : null}
      </div>
    </div>
  );
}

export default App;
