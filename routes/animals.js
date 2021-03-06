import express from "express";
import {
  createAnimal,
  deleteAnimal,
  getAllAnimal,
  getSingleAnimal,
  updateAnimal,
  getAllDogs,
  getAllRodents,
  getAllEmergency,
  getAllLucky,
  getAllCats,
} from "../controllers/animals.js";
const animal = express.Router();

animal.route("/").get(getAllAnimal).post(createAnimal);
animal.route("/dogs").get(getAllDogs);
animal.route("/cats").get(getAllCats);
animal.route("/rodents").get(getAllRodents);
animal.route("/emergency").get(getAllEmergency);
animal.route("/lucky").get(getAllLucky);
animal
  .route("/:id")
  .get(getSingleAnimal)
  .delete(deleteAnimal)
  .put(updateAnimal);

animal.post("/upload-avatar", async (req, res) => {
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: "No file uploaded",
      });
    } else {
      //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
      let avatar = req.files.avatar;

      //Use the mv() method to place the file in upload directory (i.e. "uploads")
      avatar.mv("./uploads/" + avatar.name);

      //send response
      res.send({
        status: true,
        message: "File is uploaded",
        data: {
          name: avatar.name,
          mimetype: avatar.mimetype,
          size: avatar.size,
        },
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

animal.post("/upload-photos", async (req, res) => {
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: "No file uploaded",
      });
    } else {
      let data = [];

      //loop all files
      _.forEach(_.keysIn(req.files.photos), (key) => {
        let photo = req.files.photos[key];

        //move photo to uploads directory
        photo.mv("./uploads/" + photo.name);

        //push file details
        data.push({
          name: photo.name,
          mimetype: photo.mimetype,
          size: photo.size,
        });
      });

      //return response
      res.send({
        status: true,
        message: "Files are uploaded",
        data: data,
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

export default animal;
