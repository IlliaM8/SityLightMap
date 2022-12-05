import "./App.css";
import Loader from "./component/Loader/Loader";
import { useJsApiLoader } from "@react-google-maps/api";
import Map from "./component/Map/Map";
import { useState } from "react";
import SitiesSelect from "./component/SitiesSelect/SitiesSelect";
import Form from "./component/Form/Form";
import Modal from "./component/Modal/Modal";
import modalState from "./store/modalState";
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
        <SitiesSelect />
        <button className="button" onClick={() => modalState.openModal(true)}>
          Натисніть щоб додати мітку
        </button>
        <Modal>
          <Form isLoaded={isLoaded} />
        </Modal>
      </div>
      {isLoaded ? <Map /> : <Loader></Loader>}
    </div>
  );
}

export default App;
