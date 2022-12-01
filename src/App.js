import "./App.css";
import Loader from "./component/Loader/Loader";
import { useJsApiLoader } from "@react-google-maps/api";
import Map from "./component/Map/Map";
import Autocomlete from "./component/Autocomlete/Autocomplete";
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
        <Autocomlete isLoaded={isLoaded} />
      </div>
      {isLoaded ? <Map /> : <Loader>Загрузка</Loader>}
    </div>
  );
}

export default App;
