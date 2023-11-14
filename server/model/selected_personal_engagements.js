const mongoose = require("mongoose");

const selectedPESchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  pe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "personal_engagements",
  },
  yes: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const SelectedPE = mongoose.model(
  "selected_personal_engagements",
  selectedPESchema
);

module.exports = SelectedPE;
