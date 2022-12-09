import mongoose from "mongoose";
const Coords = new mongoose.Schema({
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
});
const Marker = new mongoose.Schema({
  coords: Coords,
  description: { type: String, required: true },
  time: { type: String, require: true },
  id: { type: Number, required: true },
});

export default mongoose.model("Marker", Marker);
