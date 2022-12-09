import "./App.css";
import Loader from "./component/Loader/Loader";
import { useJsApiLoader } from "@react-google-maps/api";
import Map from "./component/Map/Map";
import { useEffect, useState } from "react";
import SitiesSelect from "./component/SitiesSelect/SitiesSelect";
import Modal from "./component/Modal/Modal";
import modalState from "./store/modalState";
import Autocomlete from "./component/Autocomlete/Autocomplete";

import axios from "./axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const libraries = ["places"];

function App() {
  useEffect(() => {
    async function getAllMarkers() {
      const response = await axios.get("/api/markers");
      console.log(response.data);
    }
    getAllMarkers();
  }, []);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries,
  });

  return (
    <div className="App">
      <div className="addressSearchContainer">
        <div className="addressSearchContainer__panel">
          <SitiesSelect />
          <button className="button" onClick={() => modalState.openModal()}>
            Натисніть щоб додати мітку
          </button>
        </div>
        <Modal>
          <Autocomlete isLoaded={isLoaded} />
        </Modal>
      </div>
      <div onClick={() => modalState.closeModal()}>
        {isLoaded ? <Map /> : <Loader></Loader>}
      </div>
    </div>
  );
}

export default App;
