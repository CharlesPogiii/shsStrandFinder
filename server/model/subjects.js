const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
  subjectType: { type: mongoose.Schema.Types.ObjectId, ref: "subject_types" },
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  imagePath: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Subject = mongoose.model("subjects", subjectSchema);

module.exports = Subject;
