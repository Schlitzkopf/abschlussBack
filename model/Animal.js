import mongoose from "mongoose";
const { Schema, model } = mongoose;

const animalSchema = new Schema({
    name: {type: String, required:true},
    rasse: {type: String, required:true},
    geschlecht:{type: String, required:true},
    kastriert: {type: String, required:true},
    verhalten: {type: String},
    vertraeglickeit: {type: String},
    birth: {type: Number, required:true},
    gechipt: {type: String, required:true},
    geimpft: {type: String, required:true},
    kinderfreundlich: {type: String},
    ort: {type: String, required:true},
    bildUrl: {type: String},
    videoUrl: {type: String},
    tier: {type: String, required:true},
    beschreibung: {type: String}
});

export default model("Animal", animalSchema);