const StrandType = require("../model/strand_types");

class StrandTypeController {
  /* CRUD ----------------------------------------------------------- */
  // CREATE
  async create(req, res) {
    const { name } = req.body;

    // Check if 'name' is missing
    if (!name) {
      throw new Error("Name field should be fill up!");
    }

    // Check if 'name' already exists in the database
    const existingStrandType = await StrandType.findOne({ name });

    if (existingStrandType) {
      throw new Error("This strand type has already existed!");
    }

    // INIT
    const newStrandType = new StrandType({ name });

    // SAVE
    newStrandType.save();

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
    const strandTypes = await StrandType.find({}).exec();

    // RESPONSE
    res.json({ strandTypes });
  }

  // READ BY ID
  async findById(req, res) {
    const { strandTypeID } = req.params;

    // FIND SINGLE DATA
    const strandType = await StrandType.findById(strandTypeID).exec();

    // RESPONSE
    res.json(strandType);
  }

  // UPDATE
  async put(req, res) {
    const { strandTypeID } = req.params;
    const { name } = req.body;

    // FIND SINGLE DATA
    const strandType = await StrandType.findById(strandTypeID).exec();

    // UPDATE
    strandType.name = name || strandType.name;

    // SAVE
    await strandType.save();

    // RESPONSE
    res.json(strandType);
  }

  // DELETE
  async delete(req, res) {
    const { strandTypeID } = req.params;

    // DELETE SINGLE DATA
    const strandType = await StrandType.deleteOne({ _id: strandTypeID });

    // RESPONSE
    res.json(strandType);
  }

  // DELETE ALL
  async deleteAll(req, res) {
    // DELETE ALL DATA
    const deletedStrandType = await StrandType.deleteMany({});

    // RESPONSE
    res.json(deletedStrandType);
  }
}

module.exports = StrandTypeController;
