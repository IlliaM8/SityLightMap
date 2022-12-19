import "./App.css";

import Loader from "./component/Loader/Loader";

import { useJsApiLoader } from "@react-google-maps/api";
import Map from "./component/Map/Map";

import SitiesSelect from "./component/SitiesSelect/SitiesSelect";
import Modal from "./component/ModalMain/Modal";
import modalState from "./store/modalState";

import Autocomlete from "./component/Autocomlete/Autocomplete";
import SubModal from "./component/SubModal/SubModal";
import Infromation from "./component/Information/Information";
import Button from "./component/Button/Button";
import { observer } from "mobx-react-lite";
import FeedBackForm from "./component/FeedBackForm/FeedBackForm";

const API_KEY = process.env.REACT_APP_API_KEY;
const libraries = ["places"];

const App = observer(() => {
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
            onClick={() => modalState.toggleModal()}
          >
            Натисніть щоб додати мітку
          </button>
        </div>
        <Modal isLoaded={isLoaded}>
          <Autocomlete isLoaded={isLoaded} />
        </Modal>
      </div>
      <div>
        {isLoaded ? <Map /> : <Loader />}
        <Button top={10} right={20}>
          <div
            onClick={() => modalState.toggleInfoModal()}
            className="info-button__icon"
          ></div>
        </Button>
        <Button top={50} right={20}>
          <div
            onClick={() => modalState.toggleFormModal()}
            className="mail-button__icon"
          ></div>
        </Button>
        <SubModal state={modalState.infModal}>
          <Infromation />
        </SubModal>
        <SubModal state={modalState.formModal}>
          <FeedBackForm />
        </SubModal>
      </div>
    </div>
  );
});

export default App;
