const StrandSubject = require("../model/strand_subjects");

class StrandSubjectController {
  /* CRUD ----------------------------------------------------------- */
  // CREATE
  async create(req, res) {
    const { strandID, subjectID } = req.body;

    // Check if 'strand & subject' is missing
    if (!strandID && !subjectID) {
      throw new Error("Strand or Subject does not exist!");
    }

    // INIT
    const newStrandSubject = new StrandSubject({
      strand: strandID,
      subject: subjectID,
    });

    // SAVE
    newStrandSubject.save();

    // RESPONSE
    res.json({
      strand: strandID,
      subject: subjectID,
    });
  }

  // READ ALL
  async findAll(req, res) {
    // FIND ALL
    const strandSubjects = await StrandSubject.find({}).exec();

    // RESPONSE
    res.json(strandSubjects);
  }

  // READ BY ID
  async findById(req, res) {
    const { strandSubjectID } = req.params;

    // FIND SINGLE DATA
    const strandSubject = await StrandSubject.findById(strandSubjectID).exec();

    // RESPONSE
    res.json(strandSubject);
  }

  // UPDATE
  async put(req, res) {
    const { strandSubjectID } = req.params;
    const { strand, subject } = req.body;

    // FIND SINGLE DATA
    const strandSubject = await StrandSubject.findById(strandSubjectID).exec();

    // UPDATE
    strandSubject.strand = strand || strandSubject.strand;
    strandSubject.subject = subject || strandSubject.subject;

    // SAVE
    await strandSubject.save();

    // RESPONSE
    res.json(strandSubject);
  }

  // DELETE
  async delete(req, res) {
    const { strandSubjectID } = req.params;

    // DELETE SINGLE DATA
    const strandSubject = await StrandSubject.deleteOne({
      _id: strandSubjectID,
    });

    // RESPONSE
    res.json(strandSubject);
  }

  // DELETE ALL
  async deleteAll(req, res) {
    // DELETE ALL DATA
    const deletedStrandSubject = await StrandSubject.deleteMany({});

    // RESPONSE
    res.json(deletedStrandSubject);
  }
}

module.exports = StrandSubjectController;
