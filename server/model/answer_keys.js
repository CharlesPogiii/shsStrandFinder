const mongoose = require("mongoose");

const answeyKeySchema = new mongoose.Schema({
  question: { type: mongoose.Schema.Types.ObjectId, ref: "questions" },
  value: { type: String, required: true },
  imagePath: { type: String },
  correct: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const AnswerKey = mongoose.model("answer_keys", answeyKeySchema);

module.exports = AnswerKey;
