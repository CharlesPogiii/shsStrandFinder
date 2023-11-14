const mongoose = require("mongoose");

const strandSubjectSchema = new mongoose.Schema({
  strand: { type: mongoose.Schema.Types.ObjectId, ref: "strands" },
  subject: { type: mongoose.Schema.Types.ObjectId, ref: "subjects" },
});

const StrandSubject = mongoose.model("strand_subjects", strandSubjectSchema);

module.exports = StrandSubject;
