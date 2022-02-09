import mongoose from "mongoose";
const { Schema, model } = mongoose;

const animalSchema = new Schema({
  inputName: { type: String, required: true },
  inputRasse: { type: String, required: true },
  inputGewicht: {type: String, required: true },
  inputGeschlecht: { type: String, required: true },
  inputGechipt: { type: String, required: true },
  inputGeimpft: { type: String, required: true },
  inputKastriert: { type: String, required: true },
  inputKinderfreundlich: { type: String, required: true  },
  inputVertraeglickeit: { type: String },
  inputGeburtstag: { type: Number, required: true },
  inputOrt: { type: String, required: true },
  inputBildUrl: { type: String },
  inputTier: { type: String, required: true },
  inputBeschreibung: { type: String, required: true},
  inputVideoUrl: { type: String },
  inputVerhalten: { type: String }
});

export default model("Animal", animalSchema);
