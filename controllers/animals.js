import Animal from "../model/Animal.js";

export const getAllAnimal = async (req, res) => {
    try {
        const animal = await Animal.find();
        res.status(200).json({ animal: animal });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};
export const getSingleAnimal = async (req, res) => {
    try {
        const { id } = req.params;
        const animal = await Animal.findById(id);
        res.status(200).json(animal);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};
export const createAnimal = async (req, res) => {
    try {
        const { name, rasse, geschlecht, kastriert, verhalten, birth, gechipt, geimpft, kinderfreundlich, ort, bildUrl, videoUrl, vertraeglichkeit } = req.body;
        const newAnimal = await Animal.create({name, rasse, geschlecht, kastriert, verhalten, birth, gechipt, geimpft, kinderfreundlich, ort, bildUrl, videoUrl, vertraeglichkeit});
        res.status(201).json(newAnimal)
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};
export const deleteAnimal = async (req, res) => {
    try {
        const {id} = req.params;
        const deletAnimal = await Animal.findByIdAndDelete(id);
        res.status(200).json(deletAnimal);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};
export const updateAnimal = async (req, res) => {
    try {
        const {id} = req.params;
        const { name, rasse, geschlecht, kastriert, verhalten, birth, gechipt, geimpft, kinderfreundlich, ort, bildUrl, videoUrl, vertraeglichkeit } = req.body;
        const updatedAnimal = await Animal.findByIdAndUpdate(
            id, 
            {name, rasse, geschlecht, kastriert, verhalten, birth, gechipt, geimpft, kinderfreundlich, ort, bildUrl, videoUrl, vertraeglichkeit}, 
            {new: true}
            );
        res.status(200).json(updatedAnimal);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};
export const uploadPic = async (req, res) => {
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        }else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let avatar = req.files.avatar;
            
            //Use the mv() method to place the file in upload directory (i.e. "uploads")
            avatar.mv('./uploads/' + avatar.name);

            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: avatar.name,
                    mimetype: avatar.mimetype,
                    size: avatar.size
                }
            });
        }
    } catch (error) {
        res.status(500).send(err);
    }
}