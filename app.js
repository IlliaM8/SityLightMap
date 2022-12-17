import express from "express";
import mongoose from "mongoose";
import config from "config";
import cors from "cors";
import router from "./MarkerRouter.js";
import path from "path";
import formRouter from "./FormRouter.js";

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
    await mongoose.connect(config.get("mongoURL"));
    app.listen(PORT, () => console.log("server started" + PORT));
  } catch (e) {
    console.log(e.message);
  }
}
start();
