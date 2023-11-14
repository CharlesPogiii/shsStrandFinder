const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  subject: { type: mongoose.Schema.Types.ObjectId, ref: "subjects" },
  question: { type: String, required: true },
  questionImagePath: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Question = mongoose.model("questions", questionSchema);

module.exports = Question;
