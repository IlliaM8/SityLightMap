import "./App.css";

import Loader from "./component/Loader/Loader";

import { useJsApiLoader } from "@react-google-maps/api";
import Map from "./component/Map/Map";

import SitiesSelect from "./component/SitiesSelect/SitiesSelect";
import Modal from "./component/ModalMain/Modal";
import modalState from "./store/modalState";

import Autocomlete from "./component/Autocomlete/Autocomplete";
import Infromation from "./component/Information/Information";
import Button from "./component/UI/Button/Button";
import { observer } from "mobx-react-lite";
import FeedBackForm from "./component/FeedBackForm/FeedBackForm";

import infoImg from "./assets/info.png";
import mailImg from "./assets/email.png";
import { useMatchMedia } from "./hooks/useMatchMedia";
import SubModal from "./component/UI/SubModal/SubModal";

const API_KEY = process.env.REACT_APP_API_KEY;

const libraries = ["places"];

const App = observer(() => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries,
  });
  useMatchMedia();
  return (
    <div className="App">
      <div className="addressSearchContainer">
        <div className="addressSearchContainer__panel">
          <SitiesSelect isLoaded={isLoaded} />
          <button
            // disabled={isLoaded ? false : true}
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
          <img
            className="button__icon"
            onClick={() => modalState.toggleInfoModal()}
            src={infoImg}
            alt="Інформація"
          />
        </Button>
        <Button top={50} right={20}>
          <img
            className="button__icon"
            onClick={() => modalState.toggleFormModal()}
            src={mailImg}
            alt="Зв'язок"
          />
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
