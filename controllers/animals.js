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
    const dogs = await Animal.find({ inputTier: "hund" });
    res.status(200).json({ animal: dogs });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getAllCats = async (req, res) => {
  try {
    const cats = await Animal.find({ inputTier: "katze" });
    res.status(200).json({ animal: cats });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getAllRodents = async (req, res) => {
  try {
    const rodents = await Animal.find({ inputTier: "nagetier" });
    res.status(200).json({ animal: rodents });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getAllEmergency = async (req, res) => {
  try {
    const emergency = await Animal.find({ inputTier: "notfall" });
    res.status(200).json({ animal: emergency });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getAllLucky = async (req, res) => {
  try {
    const lucky = await Animal.find({ inputTier: "glücklich" });
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
      inputName,
      inputRasse,
      inputGewicht,
      inputGeschlecht,
      inputGechipt,
      inputGeimpft,
      inputKastriert,
      inputKinderfreundlich,
      inputVertraeglichkeit,
      inputGeburtstag,
      inputOrt,
      inputBildUrl,
      inputVideoUrl,
      inputTier,
      inputVerhalten,
    } = req.body;
    const newAnimal = await Animal.create({
      inputName,
      inputRasse,
      inputGewicht,
      inputGeschlecht,
      inputGechipt,
      inputGeimpft,
      inputKastriert,
      inputKinderfreundlich,
      inputVertraeglichkeit,
      inputGeburtstag,
      inputOrt,
      inputBildUrl,
      inputVideoUrl,
      inputTier,
      inputVerhalten,
    });
    res.status(201).json("Success");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const deleteAnimal = async (req, res) => {
  try {
    const { id } = req.params;
    const deletAnimal = await Animal.findByIdAndDelete(id);
    res.status(200).json("Success");
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const updateAnimal = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      inputName,
      inputRasse,
      inputGewicht,
      inputGeschlecht,
      inputGechipt,
      inputGeimpft,
      inputKastriert,
      inputKinderfreundlich,
      inputVertraeglichkeit,
      inputGeburtstag,
      inputOrt,
      inputBildUrl,
      inputVideoUrl,
      inputTier,
      inputVerhalten,
    } = req.body;
    const updatedAnimal = await Animal.findByIdAndUpdate(
      id,
      {
        inputName,
        inputRasse,
        inputGewicht,
        inputGeschlecht,
        inputGechipt,
        inputGeimpft,
        inputKastriert,
        inputKinderfreundlich,
        inputVertraeglichkeit,
        inputGeburtstag,
        inputOrt,
        inputBildUrl,
        inputVideoUrl,
        inputTier,
        inputVerhalten,
      },
      { new: true }
    );
    res.status(200).json("Success", updatedAnimal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// export const uploadPic = async (req, res) => {
//   try {
//     if (!req.files) {
//       res.send({
//         status: false,
//         message: "No file uploaded",
//       });
//     } else {
//       //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
//       let avatar = req.files.avatar;

//       //Use the mv() method to place the file in upload directory (i.e. "uploads")
//       avatar.mv("./uploads/" + avatar.name);

//       //send response
//       res.send({
//         status: true,
//         message: "File is uploaded",
//         data: {
//           name: avatar.name,
//           mimetype: avatar.mimetype,
//           size: avatar.size,
//         },
//       });
//     }
//   } catch (error) {
//     res.status(500).send(err);
//   }
// };
