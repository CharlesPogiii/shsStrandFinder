const SubjectType = require("../model/subject_types");

class SubjectTypeController {
  /* CRUD ----------------------------------------------------------- */
  // CREATE
  async create(req, res) {
    const { name } = req.body;

    // Check if 'name' is missing
    if (!name) {
      throw new Error("Name field should be fill up!");
    }

    // Check if 'name' already exists in the database
    const existingSubjectType = await SubjectType.findOne({ name });

    if (existingSubjectType) {
      throw new Error("This subject type has already existed!");
    }

    // INIT
    const newSubjectType = new SubjectType({ name });

    // SAVE
    newSubjectType.save();

    // RESPONSE
    res.json({ name });
  }

  // AUTH
  async auth(req, res) {
    res.json({
      user: req.user,
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
    const subjectTypes = await SubjectType.find({}).exec();

    // RESPONSE
    res.json({ subjectTypes });
  }

  // READ BY ID
  async findById(req, res) {
    const { subjectTypeID } = req.params;

    // FIND SINGLE DATA
    const subjectType = await SubjectType.findById(subjectTypeID).exec();

    // RESPONSE
    res.json(subjectType);
  }

  // UPDATE
  async put(req, res) {
    const { subjectTypeID } = req.params;
    const { name } = req.body;

    // FIND SINGLE DATA
    const subjectType = await SubjectType.findById(subjectTypeID).exec();

    // UPDATE
    subjectType.name = name || subjectType.name;

    // SAVE
    await subjectType.save();

    // RESPONSE
    res.json(subjectType);
  }

  // DELETE
  async delete(req, res) {
    const { subjectTypeID } = req.params;

    // DELETE SINGLE DATA
    const subjectType = await SubjectType.deleteOne({ _id: subjectTypeID });

    // RESPONSE
    res.json(subjectType);
  }

  // DELETE ALL
  async deleteAll(req, res) {
    // DELETE ALL DATA
    const deletedSubjectType = await SubjectType.deleteMany({});

    // RESPONSE
    res.json(deletedSubjectType);
  }
}

module.exports = SubjectTypeController;
