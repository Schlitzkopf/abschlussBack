import "dotenv/config.js";
import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import bodyParser from "body-parser";
import morgan from "morgan";
import "./db/client.js";
import animal from "./routes/animals.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(express.json());
app.use("/animal", animal);

app.get("/", (req, res) => res.send("<h1>API mit MongoDB</h1>"));

app.listen(port, () => console.log(`Server listening on port ${port}`));
