class AnswerKeyFactory {
  constructor(answerKey) {
    this.answerKey = answerKey;
  }

  async make(question, value, imagePath, correct) {
    // INIT
    this.answerKey.question = question;
    this.answerKey.value = value;
    this.answerKey.imagePath = imagePath;
    this.answerKey.correct = correct;

    // SAVE
    await this.answerKey.save();
  }
}

module.exports = AnswerKeyFactory;
