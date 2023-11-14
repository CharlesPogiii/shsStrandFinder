// FAKER
const Faker = require("../../facade/Faker");

// MODEL
const Answer = require("../../model/answers");
const User = require("../../model/users");
const Question = require("../../model/questions");
const AnswerKey = require("../../model/answer_keys");

// FACTORY
const AnswerFactory = require("../../factory/AnswerFactory");

const answer_rollback = async () => {
  await Answer.deleteMany({});
};

const answer_migrate = async () => {
  // FIND ALL
  const users = await User.find({}).exec();
  const questions = await Question.find({}).exec();

  users.forEach(async (user) => {
    questions.forEach(async (question) => {
      // INIT
      const boolArr = [false, false, false, false];
      const randomIndex = Faker.generateRandomNumber(0, boolArr.length - 1);
      const randomLeave = Faker.generateRandomNumber(0, 2);
      boolArr[randomIndex] = true;

      // FIND SINGLE DATA
      const answerKeys = await AnswerKey.find({
        question: question._id.toString(),
      }).exec();

      answerKeys.forEach(async (answerKey, index) => {
        // console.log(index, boolArr[index], answerKey);

        if (boolArr[index]) {
          await new AnswerFactory(new Answer()).make(
            user._id.toString(),
            answerKey._id.toString(),
            answerKey.correct,
            randomLeave
          );
        }
      });
    });
  });
};

module.exports = { answer_rollback, answer_migrate };
