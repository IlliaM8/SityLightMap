import express from "express";
import mongoose from "mongoose";
import config from "config";
import Marker from "./Marker.js";
import router from "./MarkerRouter.js";
const app = express();

const PORT = config.get("port") || 5000;

mongoose.set("strictQuery", true);

app.use(express.json());

app.use("/api", router);

async function start() {
  try {
    await mongoose.connect(config.get("mongoURL"));
    app.listen(PORT, () => console.log("server started" + PORT));
  } catch (e) {
    console.log(e.message);
  }
}
start();
