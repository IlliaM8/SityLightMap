import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

const Coords = new mongoose.Schema({
  lat: { type: Number, required: true },
  lng: { type: Number, required: true },
});
const Marker = new mongoose.Schema({
  coords: Coords,
  description: { type: String, required: true },
  time: { type: String, require: true },
});

export default mongoose.model("Marker", Marker);
