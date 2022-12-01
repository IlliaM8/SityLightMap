import "./App.css";
import Loader from "./component/Loader/Loader";
import { useJsApiLoader } from "@react-google-maps/api";
import Map from "./component/Map/Map";
const API_KEY = process.env.REACT_APP_API_KEY;
function App() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });
  return (
    <div className="App">{isLoaded ? <Map /> : <Loader>Загрузка</Loader>}</div>
  );
}

export default App;
