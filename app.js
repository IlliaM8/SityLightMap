import express from "express";
import mongoose from "mongoose";
import config from "config";
import cors from "cors";

import path from "path";
import router from "./router/MarkerRouter.js";
import formRouter from "./router/FormRouter.js";

const app = express();
const __dirname = path.resolve();

const PORT = config.get("port") || 5000;

mongoose.set("strictQuery", true);

app.use(express.json());
app.use(cors());

app.use("/api", router);
app.use("/api", formRouter);

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "Front", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "Front", "build", "index.html"));
  });
}

async function start() {
  try {
    app.listen(PORT, () => console.log("server started" + PORT));
    await mongoose.connect(config.get("mongoURL"));
  } catch (e) {
    console.log(e.message);
  }
}
start();
