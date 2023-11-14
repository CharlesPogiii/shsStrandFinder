class QuestionFactory {
  constructor(question) {
    this.question = question;
  }

  async make(subject, question, questionImagePath) {
    // INIT
    this.question.subject = subject;
    this.question.question = question;
    this.question.questionImagePath = questionImagePath;

    // SAVE
    const data = await this.question.save();
    return data;
  }
}

module.exports = QuestionFactory;
