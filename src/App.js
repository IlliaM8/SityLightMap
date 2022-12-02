import "./App.css";
import Loader from "./component/Loader/Loader";
import { useJsApiLoader } from "@react-google-maps/api";
import Map from "./component/Map/Map";
import Autocomlete from "./component/Autocomlete/Autocomplete";
import { useState } from "react";
import Modal from "./component/Modal/Modal";
const API_KEY = process.env.REACT_APP_API_KEY;
const libraries = ["places"];

function App() {
  const [visible, setVisible] = useState(false);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries,
  });
  return (
    <div className="App">
      <div className="addressSearchContainer">
        <Autocomlete isLoaded={isLoaded} />
        <button className="button" onClick={() => setVisible(true)}>
          Додати мітку
        </button>
      </div>
      <Modal visible={visible} setVisible={setVisible} />
      {isLoaded ? <Map /> : <Loader></Loader>}
    </div>
  );
}

export default App;
