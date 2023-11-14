const mongoose = require("mongoose");

const selectedStrandSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  strand: { type: mongoose.Schema.Types.ObjectId, ref: "strands" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const SelectedStrand = mongoose.model("selected_strands", selectedStrandSchema);

module.exports = SelectedStrand;
