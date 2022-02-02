import Animal from "../model/Animal.js";
import animal from "../routes/animals.js";

export const getAllAnimal = async (req, res) => {
  try {
    const animal = await Animal.find();
    res.status(200).json({ animal: animal });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getAllDogs = async (req, res) => {
  try {
    const dogs = await Animal.find({ tier: "hund" });
    res.status(200).json({ animal: dogs });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getAllCats = async (req, res) => {
  try {
    const cats = await Animal.find({ tier: "katze" });
    res.status(200).json({ animal: cats });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getAllRodents = async (req, res) => {
  try {
    const rodents = await Animal.find({ tier: "nagetier" });
    res.status(200).json({ animal: rodents });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getAllEmergency = async (req, res) => {
  try {
    const emergency = await Animal.find({ tier: "notfall" });
    res.status(200).json({ animal: emergency });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getAllLucky = async (req, res) => {
  try {
    const lucky = await Animal.find({ tier: "glücklich" });
    res.status(200).json({ animal: lucky });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getSingleAnimal = async (req, res) => {
  try {
    const { id } = req.params;
    const animal = await Animal.findById(id);
    res.status(200).json(animal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const createAnimal = async (req, res) => {
  try {
    const {
      name,
      rasse,
      geschlecht,
      kastriert,
      verhalten,
      birth,
      gechipt,
      geimpft,
      kinderfreundlich,
      ort,
      bildUrl,
      videoUrl,
      vertraeglichkeit,
    } = req.body;
    const newAnimal = await Animal.create({
      name,
      rasse,
      geschlecht,
      kastriert,
      verhalten,
      birth,
      gechipt,
      geimpft,
      kinderfreundlich,
      ort,
      bildUrl,
      videoUrl,
      vertraeglichkeit,
    });
    res.status(201).json(newAnimal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const deleteAnimal = async (req, res) => {
  try {
    const { id } = req.params;
    const deletAnimal = await Animal.findByIdAndDelete(id);
    res.status(200).json(deletAnimal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const updateAnimal = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      rasse,
      geschlecht,
      kastriert,
      verhalten,
      birth,
      gechipt,
      geimpft,
      kinderfreundlich,
      ort,
      bildUrl,
      videoUrl,
      vertraeglichkeit,
    } = req.body;
    const updatedAnimal = await Animal.findByIdAndUpdate(
      id,
      {
        name,
        rasse,
        geschlecht,
        kastriert,
        verhalten,
        birth,
        gechipt,
        geimpft,
        kinderfreundlich,
        ort,
        bildUrl,
        videoUrl,
        vertraeglichkeit,
      },
      { new: true }
    );
    res.status(200).json(updatedAnimal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const uploadPic = async (req, res) => {
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
  } catch (error) {
    res.status(500).send(err);
  }
};
