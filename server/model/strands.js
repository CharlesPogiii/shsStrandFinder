const mongoose = require("mongoose");

const strandSchema = new mongoose.Schema({
  strandType: { type: mongoose.Schema.Types.ObjectId, ref: "strand_types" },
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  imagePath: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Strand = mongoose.model("strands", strandSchema);

module.exports = Strand;
