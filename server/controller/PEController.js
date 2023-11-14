const PE = require("../model/personal_engagements");
const Strand = require("../model/strands");
const SelectedPE = require("../model/selected_personal_engagements");

class PEController {
  /* CRUD ----------------------------------------------------------- */
  // CREATE
  async create(req, res) {
    const { strandID, question } = req.body;

    // Check if 'question' is missing
    if (!question) {
      throw new Error("Question field should be fill up!");
    }

    // Check if 'strand' is missing
    if (!strandID) {
      throw new Error("Select a strand first!");
    }

    // INIT
    const newPE = new PE({ strand: strandID, question });

    // SAVE
    newPE.save();

    // RESPONSE
    res.json({ strand: strandID, question });
  }

  // AUTH
  async auth(req, res) {
    const strands = await Strand.find({}).exec();

    res.json({
      user: req.user,
      strands,
      selectedStrand: req.selectedStrand,
      preferredStrand: req.preferredStrand,
      personalEngagements: req.pes,
      subjects: req.subjects,
      pendingSubjects: req.pendingSubjects,
    });
  }

  // READ ALL
  async findAll(req, res) {
    // FIND ALL
    const pes = await PE.find({}).exec();

    // RESPONSE
    res.json(pes);
  }

  // READ BY ID
  async findById(req, res) {
    const { peID } = req.params;

    // FIND SINGLE DATA
    const pe = await PE.findById(peID).exec();

    // RESPONSE
    res.json(pe);
  }

  // READ BY ID w/ PREV & NEXT
  async findByIdNav(req, res) {
    const user = req.user;
    let pes = await PE.find().sort({ _id: 1 }).exec();
    const selectedPEs = await SelectedPE.find({
      user: user.id.toString(),
    }).exec();

    // VALIDATION IF USER ALREADY ANSWERED
    const answeredSize = selectedPEs.length;
    const questionSize = pes.length;

    if (answeredSize >= questionSize) {
      return res.json({
        user: req.user,
        error: "Already answered!",
        selectedStrand: req.selectedStrand,
        preferredStrand: req.preferredStrand,
        personalEngagements: req.pes,
        subjects: req.subjects,
        pendingSubjects: req.pendingSubjects,
      });
    }

    pes = pes.map((mp, index) => ({
      ...mp.toObject(),
      index: index + 1,
    }));
    const uniquePEs = selectedPEs.map((sp) => sp.pe.toString());
    const filteredPes = pes.filter(
      (pe) => !uniquePEs.includes(pe._id.toString())
    );

    const result = {
      user: req.user,
      filteredPes,
      selectedStrand: req.selectedStrand,
      preferredStrand: req.preferredStrand,
      personalEngagements: req.pes,
      subjects: req.subjects,
      pendingSubjects: req.pendingSubjects,
    };

    // RESPONSE
    res.json(result);
  }

  // UPDATE
  async put(req, res) {
    const { peID } = req.params;
    const { strand, question } = req.body;

    // FIND SINGLE DATA
    const pe = await PE.findById(peID).exec();

    // UPDATE
    pe.strand = strand || pe.strand;
    pe.question = question || pe.question;

    // SAVE
    await pe.save();

    // RESPONSE
    res.json(pe);
  }

  // DELETE
  async delete(req, res) {
    const { peID } = req.params;

    // DELETE SINGLE DATA
    const pe = await PE.deleteOne({ _id: peID });
    const dataToDelete = await SelectedPE.find({ pe: peID });
    let deleteResult = null;

    // Delete the found data
    if (dataToDelete.length !== 0) {
      deleteResult = await SelectedPE.deleteMany({ pe: peID });
    }

    // RESPONSE
    res.json({ pe, deleteResult });
  }

  // DELETE ALL
  async deleteAll(req, res) {
    // DELETE ALL DATA
    const deletedPE = await PE.deleteMany({});

    // RESPONSE
    res.json(deletedPE);
  }
}

module.exports = PEController;
