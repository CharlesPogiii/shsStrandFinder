class AnswerFactory {
  constructor(answer) {
    this.answer = answer;
  }

  async make(user, answerKey, correct, noOfUnVisit) {
    // INIT
    this.answer.user = user;
    this.answer.answerKey = answerKey;
    this.answer.correct = correct;
    this.answer.noOfUnVisit = noOfUnVisit;

    // SAVE
    await this.answer.save();
  }
}

module.exports = AnswerFactory;
