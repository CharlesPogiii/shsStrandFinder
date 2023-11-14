const mongoose = require("mongoose");

const subjectTypeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const SubjectType = mongoose.model("subject_types", subjectTypeSchema);

module.exports = SubjectType;
