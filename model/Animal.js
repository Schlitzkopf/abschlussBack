import mongoose from "mongoose";
const { Schema, model } = mongoose;

const animalSchema = new Schema({
  name: { type: String, required: true },
  rasse: { type: String, required: true },
  gewicht: {type: String},
  geschlecht: { type: String, required: true },
  gechipt: { type: String, required: true },
  geimpft: { type: String, required: true },
  kastriert: { type: String, required: true },
  kinderfreundlich: { type: String },
  vertraeglickeit: { type: String },
  geburtstag: { type: Number, required: true },
  ort: { type: String, required: true },
  bildUrl: { type: String },
  tier: { type: String, required: true },
  beschreibung: { type: String },
  videoUrl: { type: String },
  verhalten: { type: String }
});

export default model("Animal", animalSchema);
