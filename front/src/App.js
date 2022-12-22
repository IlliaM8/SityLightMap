import "./App.css";

import Loader from "./component/Loader/Loader";

import { useJsApiLoader } from "@react-google-maps/api";
import Map from "./component/Map/Map";

import SitiesSelect from "./component/SitiesSelect/SitiesSelect";
import modalState from "./store/modalState";

import Autocomlete from "./component/Autocomlete/Autocomplete";
import Infromation from "./component/Information/Information";
import Button from "./component/UI/Button/Button";
import { observer } from "mobx-react-lite";
import FeedBackForm from "./component/FeedBackForm/FeedBackForm";

import infoImg from "./assets/info.png";
import mailImg from "./assets/email.png";
import { useMatchMedia } from "./hooks/useMatchMedia";
import Modal from "./component/UI/Modal/Modal";
import SideMenu from "./component/UI/SideMenu/SideMenu";

const API_KEY = process.env.REACT_APP_API_KEY;

const libraries = ["places"];

const App = observer(() => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries,
  });
  const { isMobile } = useMatchMedia();
  return (
    <div className="App">
      <div className="addressSearchContainer">
        <div className="addressSearchContainer__panel">
          <SitiesSelect isLoaded={isLoaded} />
          <button
            disabled={isLoaded ? true : false}
            className="button"
            onClick={() => modalState.toggleModal()}
          >
            Натисніть щоб додати мітку
          </button>
        </div>
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
        {isMobile ? (
          <SideMenu state={modalState.state}>
            <Autocomlete />
          </SideMenu>
        ) : (
          <Modal state={modalState.state}>
            <Autocomlete />
          </Modal>
        )}

        <Modal state={modalState.infModal}>
          <Infromation />
        </Modal>
        <Modal state={modalState.formModal}>
          <FeedBackForm />
        </Modal>
      </div>
    </div>
  );
});

export default App;
