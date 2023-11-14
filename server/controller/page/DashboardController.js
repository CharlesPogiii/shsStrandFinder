// MODEL
const StrandType = require("../../model/strand_types");
const Strand = require("../../model/strands");

// LODASH
const _ = require("lodash");

class DashboardController {
  // GET ALL STRAND TYPES
  async readAll(req, res) {
    // Find all StrandType documents
    const strandTypes = await StrandType.find({}).exec();
    const strands = await Strand.find({}).exec();

    const mappedStrands = strands.map((strand) => {
      return {
        ...strand.toObject(),
        strandType: strand.strandType.toString(),
      };
    });

    // Populate the 'strands' field for each StrandType
    const resultStrandTypes = strandTypes.map((strandType) => {
      return {
        id: strandType._id.toString(),
        name: strandType.name,
        strands: _.filter(
          mappedStrands,
          (mappedStrand) =>
            mappedStrand.strandType === strandType._id.toString()
        ),
      };
    });

    res.json({
      user: req.user,
      strandTypes: resultStrandTypes,
      selectedStrand: req.selectedStrand,
      preferredStrand: req.preferredStrand,
      personalEngagements: req.pes,
      subjects: req.subjects,
      pendingSubjects: req.pendingSubjects,
    });
  }
}

module.exports = DashboardController;
