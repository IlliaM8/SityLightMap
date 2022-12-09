import express from "express";
import mongoose from "mongoose";
import config from "config";
import cors from "cors";
import router from "./MarkerRouter.js";
const app = express();

const PORT = config.get("port") || 5000;

mongoose.set("strictQuery", true);

app.use(express.json());
app.use(cors());
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
