import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import cors from "cors";
import File from "./models/fileSchema.js";
const app = express();
const port = 3000;
mongoose
  .connect(
    "mongodb+srv://ayoub:fY855MlvD9ytbymx@cluster0.vo86h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(() => {
    console.log("Error connecting to MongoDB");
  });
app.use(cors());
app.use(express.json());
// ⁡⁣⁣⁢the next peace of code that contains to part⁡
// ⁡⁣⁣⁢the first path the  destination of the file ⁡
// ⁡⁣⁣⁢the next part the file name of the file ⁡
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });
app.post("/file", upload.single("file"), async (req, res) => {
  const title = req.body.title;
  const file = req.file ? req.file.filename : undefined;
  console.log(title, file);
  try {
    if (!title || !file) {
      return res.status(400).json({
        message: "Please provide a title and a file",
      });
    }
    const newFile = await File.create({
      file,
      title,
    });
    return res.status(200).json({
      message: "File uploaded successfully",
      file,
      title,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error uploading file",
    });
  }
  // console.log(req.file);
  // res.json({ message: "File uploaded successfully" });
});
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
