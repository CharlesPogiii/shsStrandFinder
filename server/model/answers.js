const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  answerKey: { type: mongoose.Schema.Types.ObjectId, ref: "answer_keys" },
  correct: { type: Boolean, required: true },
  noOfUnVisit: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Answer = mongoose.model("answers", answerSchema);

module.exports = Answer;
