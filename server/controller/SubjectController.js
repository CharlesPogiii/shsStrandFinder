const SubjectType = require("../model/subject_types");
const Strand = require("../model/strands");
const Subject = require("../model/subjects");
const StrandSubject = require("../model/strand_subjects");
const fs = require("fs");
const path = require("path");

class SubjectController {
  /* CRUD ----------------------------------------------------------- */
  // CREATE
  async create(req, res) {
    const { subjectTypeID, name, description } = req.body;

    // Check if an image was uploaded
    if (!req.file) {
      throw new Error("Set an image first!");
    }

    const imagePath = req.file.path;

    // Check if 'name' is missing
    if (!name) {
      throw new Error("Name field should be fill up!");
    }

    // Check if 'subject type' is missing
    if (!subjectTypeID) {
      throw new Error("Select a subject type first!");
    }

    // Check if 'name' already exists in the database
    const existingSubject = await Subject.findOne({ name });

    if (existingSubject) {
      throw new Error("This subject has already existed!");
    }

    // INIT
    const newSubject = new Subject({
      subjectType: subjectTypeID,
      name,
      description,
      imagePath,
    });

    // SAVE
    newSubject.save();

    // RESPONSE
    res.json({
      subjectID: newSubject._id.toString(),
      name,
      description,
      imagePath,
    });
  }

  // AUTH
  async auth(req, res) {
    const strandTypes = await SubjectType.find({}).exec();
    const strands = await Strand.find({}).exec();

    res.json({
      user: req.user,
      strandTypes,
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
    const subjects = await Subject.find({}).exec();

    // RESPONSE
    res.json(subjects);
  }

  // READ BY ID
  async findById(req, res) {
    const { subjectID } = req.params;

    // FIND SINGLE DATA
    const subject = await Subject.findById(subjectID).exec();

    // RESPONSE
    res.json(subject);
  }

  // UPDATE
  async put(req, res) {
    const { subjectID } = req.params;
    const { subjectType, name, description, imagePath } = req.body;

    // FIND SINGLE DATA
    const subject = await Subject.findById(subjectID).exec();

    // UPDATE
    subject.subjectType = subjectType || subject.subjectType;
    subject.name = name || subject.name;
    subject.description = description || subject.description;
    subject.imagePath = imagePath || subject.imagePath;

    // SAVE
    await subject.save();

    // RESPONSE
    res.json(subject);
  }

  // DELETE
  async delete(req, res) {
    const { subjectID } = req.params;

    // Find the Strand data first to get the imagePath
    const subject = await Subject.findById(subjectID);

    if (!subject) {
      throw new Error("Subject not found.");
    }

    // DELETE IMAGE
    if (
      subject.imagePath &&
      !subject.imagePath.includes("uploads\\sample") &&
      !subject.imagePath.includes("uploads\\prod")
    ) {
      const imagePath = path.join(__dirname, "../", subject.imagePath);
      fs.unlinkSync(imagePath);
    }

    // DELETE SINGLE DATA
    const deletedSubject = await Subject.deleteOne({ _id: subjectID });

    // DELETE ALL STRAND SUBJECTS WITH SUBJECT ID
    const dataToDelete = await StrandSubject.find({ subject: subjectID });
    let deleteResult = null;

    // Delete the found data
    if (dataToDelete.length !== 0) {
      deleteResult = await StrandSubject.deleteMany({
        subject: subjectID,
      });
    }

    // RESPONSE
    res.json({ deletedSubject, deleteResult });
  }

  // DELETE ALL
  async deleteAll(req, res) {
    // DELETE ALL DATA
    const deletedSubject = await Subject.deleteMany({});

    // RESPONSE
    res.json(deletedSubject);
  }
}

module.exports = SubjectController;
