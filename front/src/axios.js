import axios from "axios";

const instansce = axios.create({
  baseURL: "http://localhost:4000",
});
export default instansce;
