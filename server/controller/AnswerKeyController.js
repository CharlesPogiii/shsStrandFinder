const AnswerKey = require("../model/answer_keys");

class AnswerKeyController {
  /* CRUD ----------------------------------------------------------- */
  // CREATE
  async create(req, res) {
    const { questionID, value, correct } = req.body;
    let imagePath = null;

    // Check if 'value' is missing
    if (!value) {
      throw new Error("Value field should be fill up!");
    }

    // Check if 'question' is missing
    if (!questionID) {
      throw new Error("Select a question first!");
    }

    // Check if an image was uploaded
    if (req.file) {
      imagePath = req.file.path;
    }

    // INIT
    const newAnswerKey = new AnswerKey({
      question: questionID,
      value,
      imagePath,
      correct,
    });

    // SAVE
    newAnswerKey.save();

    // RESPONSE
    res.json({ question: questionID, value, imagePath, correct });
  }

  // READ ALL
  async findAll(req, res) {
    // FIND ALL
    const answerKeys = await AnswerKey.find({}).exec();

    // RESPONSE
    res.json(answerKeys);
  }

  // READ BY ID
  async findById(req, res) {
    const { answerKeyID } = req.params;

    // FIND SINGLE DATA
    const answerKey = await AnswerKey.findById(answerKeyID).exec();

    // RESPONSE
    res.json(answerKey);
  }

  // UPDATE
  async put(req, res) {
    const { answerKeyID } = req.params;
    const { question, value, imagePath, correct } = req.body;

    // FIND SINGLE DATA
    const answerKey = await AnswerKey.findById(answerKeyID).exec();

    // UPDATE
    answerKey.question = question || answerKey.question;
    answerKey.value = value || answerKey.value;
    answerKey.imagePath = imagePath || answerKey.imagePath;
    answerKey.correct = correct != null ? correct : answerKey.correct;

    // SAVE
    await answerKey.save();

    // RESPONSE
    res.json(answerKey);
  }

  // DELETE
  async delete(req, res) {
    const { answerKeyID } = req.params;

    // DELETE SINGLE DATA
    const answerKey = await AnswerKey.deleteOne({ _id: answerKeyID });

    // RESPONSE
    res.json(answerKey);
  }

  // DELETE ALL
  async deleteAll(req, res) {
    // DELETE ALL DATA
    const deletedAnswerKey = await AnswerKey.deleteMany({});

    // RESPONSE
    res.json(deletedAnswerKey);
  }
}

module.exports = AnswerKeyController;
