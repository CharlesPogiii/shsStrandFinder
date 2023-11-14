const mongoose = require("mongoose");

const personalEngagementSchema = new mongoose.Schema({
  strand: { type: mongoose.Schema.Types.ObjectId, ref: "strands" },
  question: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const PE = mongoose.model("personal_engagements", personalEngagementSchema);

module.exports = PE;
