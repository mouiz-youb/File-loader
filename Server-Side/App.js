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
// Serve files from the 'uploads' directory
app.use("/files", express.static("files"));
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
app.get("/get", async (req, res) => {
  const AllFiles = await File.find({}).sort({ createAt: -1 });
  try {
    if (!AllFiles) {
      return res.status(400).json({
        message: "No files found",
      });
    }
    if (AllFiles.length > 0) {
      return res.status(200).json({
        message: "Files listing is Successufuly",
        AllFiles,
      });
    }
  } catch (error) {
    console.log(`Error Fetshing Files ${error.message}`);
    res.status(500).json({
      message: "Error Fetshing Files",
    });
  }
});
app.put("/updatefile/:id", async (req, res) => {
  const { id } = req.params;
  const updatefile = req.body;
  try {
    const file = await File.findByIdAndUpdate(id, updatefile, {
      new: true,
    });
  } catch (error) {}
});
// app.get("/get", async (req, res) => {
//   try {
//     const allFiles = await File.find({}).sort({ createdAt: -1 });

//     if (allFiles.length === 0) {
//       return res.status(200).json({
//         message: "No files found",
//         allFiles: [],
//       });
//     }

//     return res.status(200).json({
//       message: "Files listing is successful",
//       allFiles,
//     });
//   } catch (error) {
//     console.error(`Error fetching files: ${error.message}`);
//     return res.status(500).json({
//       message: "Error fetching files",
//     });
//   }
// });

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
