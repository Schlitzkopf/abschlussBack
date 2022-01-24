import express from "express";
import {
    createAnimal,
    deleteAnimal,
    getAllAnimal,
    getSingleAnimal,
    updateAnimal,
} from "../controllers/animals.js";
const animal = express.Router();

animal.route("/").get(getAllAnimal).post(createAnimal);
animal
    .route("/:id")
    .get(getSingleAnimal)
    .delete(deleteAnimal)
    .put(updateAnimal);

export default animal;