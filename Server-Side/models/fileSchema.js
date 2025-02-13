import mongoose from "mongoose";
const Schema = mongoose.Schema;
const fileShema = new Schema({
  file: String,
  title: String,
});
const File = mongoose.model("file", fileShema);
export default File;
