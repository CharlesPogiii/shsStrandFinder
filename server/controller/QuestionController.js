const Subject = require("../model/subjects");
const Question = require("../model/questions");
const AnswerKey = require("../model/answer_keys");
const Answer = require("../model/answers");
const fs = require("fs");
const path = require("path");
const { devNull } = require("os");

class QuestionController {
  /* CRUD ----------------------------------------------------------- */
  // CREATE
  async create(req, res) {
    const { subjectID, question } = req.body;
    let questionImagePath = null;

    // Check if 'name' is missing
    if (!question) {
      throw new Error("Name field should be fill up!");
    }

    // Check if 'subject' is missing
    if (!subjectID) {
      throw new Error("Select a subject first!");
    }

    // Check if an image was uploaded
    if (req.file) {
      questionImagePath = req.file.path;
    }

    // INIT
    const newQuestion = new Question({
      subject: subjectID,
      question,
      questionImagePath,
    });

    // SAVE
    newQuestion.save();

    // RESPONSE
    res.json(newQuestion);
  }

  // AUTH
  async auth(req, res) {
    const subjects = await Subject.find({}).exec();

    res.json({
      user: req.user,
      subjects,
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
    const answerKeys = await AnswerKey.find({}).populate("question").exec();

    // Create a mapping of group.no to their corresponding values
    const groupMap = new Map();
    const mappedQuestions = new Map();
    const newQuestions = [];

    answerKeys.forEach((answerKey) => {
      const questionID = answerKey.question._id.toString();
      const question = answerKey.question;

      if (!groupMap.has(questionID)) {
        groupMap.set(questionID, []);
        mappedQuestions.set(questionID, question);
      }

      groupMap.get(questionID).push({
        _id: answerKey._id,
        value: answerKey.value,
        imagePath: answerKey.imagePath,
        correct: answerKey.correct,
        createdAt: answerKey.createdAt,
        updatedAt: answerKey.updatedAt,
      });
    });

    // Convert the mapping into the desired format
    groupMap.forEach((values, questionID) => {
      newQuestions.push({
        ...mappedQuestions.get(questionID).toObject(),
        answerKeys: values,
      });
    });

    // RESPONSE
    res.json(newQuestions);
  }

  // READ BY ID
  async findById(req, res) {
    const { questionID } = req.params;

    // FIND SINGLE DATA
    const question = await Question.findById(questionID).exec();

    if (question) {
      const answerKeys = await AnswerKey.find({
        question: question._id,
      }).exec();

      // RESPONSE
      return res.json({ ...question.toObject(), answerKeys });
    }

    // RESPONSE
    res.json(question);
  }

  // UPDATE
  async put(req, res) {
    const { questionID } = req.params;
    const { subject, question, questionImagePath } = req.body;

    // FIND SINGLE DATA
    const cQuestion = await Question.findById(questionID).exec();

    // UPDATE
    cQuestion.subject = subject || cQuestion.subject;
    cQuestion.question = question || cQuestion.question;
    cQuestion.questionImagePath =
      questionImagePath || cQuestion.questionImagePath;

    // SAVE
    await cQuestion.save();

    // RESPONSE
    res.json(cQuestion);
  }

  // DELETE
  async delete(req, res) {
    const { questionID } = req.params;

    // Find the Strand data first to get the imagePath
    const existingQuestion = await Question.findById(questionID);

    if (!existingQuestion) {
      throw new Error("Question not found.");
    }

    // DELETE IMAGE
    if (
      existingQuestion.imagePath &&
      !existingQuestion.imagePath.includes("uploads\\sample") &&
      !existingQuestion.imagePath.includes("uploads\\prod")
    ) {
      const imagePath = path.join(__dirname, "../", existingQuestion.imagePath);
      fs.unlinkSync(imagePath);
    }

    // DELETE SINGLE DATA
    const deletedQuestion = await Question.deleteOne({ _id: questionID });

    // DELETE ALL ANSWERS & ANSWER KEYS
    const dataToDelete = await AnswerKey.find({ question: questionID });
    let mappedDeletedData = null;

    let deleteResult = null;
    let deleteAnswerResult = null;

    // Delete the found data
    if (dataToDelete.length !== 0) {
      mappedDeletedData = dataToDelete.map((d) => d._id.toString());

      const dataDeleteAnsweyKeys = await Answer.find({
        answerKey: { $in: mappedDeletedData },
      });

      if (dataDeleteAnsweyKeys.length !== 0) {
        deleteAnswerResult = await Answer.deleteMany({
          answerKey: { $in: mappedDeletedData },
        });
      }

      dataToDelete.forEach((answerKey) => {
        if (
          answerKey.imagePath &&
          !answerKey.imagePath.includes("uploads\\sample") &&
          !answerKey.imagePath.includes("uploads\\prod")
        ) {
          const imagePath = path.join(__dirname, "../", answerKey.imagePath);
          fs.unlinkSync(imagePath);
        }
      });

      deleteResult = await AnswerKey.deleteMany({
        question: questionID,
      });
    }

    // RESPONSE
    res.json({ deletedQuestion, deleteResult, deleteAnswerResult });
  }

  // DELETE ALL
  async deleteAll(req, res) {
    // DELETE ALL DATA
    const deletedQuestion = await Question.deleteMany({});

    // RESPONSE
    res.json(deletedQuestion);
  }
}

module.exports = QuestionController;
