// FAKER
const Faker = require("../../facade/Faker");

// MODEL
const AnswerKey = require("../../model/answer_keys");
const Question = require("../../model/questions");

// FACTORY
const AnswerKeyFactory = require("../../factory/AnswerKeyFactory");

const answer_key_rollback = async () => {
  await AnswerKey.deleteMany({});
};

const answer_key_migrate = async () => {
  const questions = await Question.find({}).exec();

  console.log("\n\nTEST ANSWER KEY TO QUESTION RELATIONSHIP");

  await questions.forEach(async (question, i) => {
    // INIT
    const boolArr = [false, false, false, false];
    const randomIndex = Faker.generateRandomNumber(0, boolArr.length - 1);
    boolArr[randomIndex] = true;

    console.log(
      "QUESTION " + i + " (" + randomIndex + "): " + question.question
    );

    boolArr.forEach(async (bool) => {
      console.log("\tANSWER KEY " + i + " ANSWER IS " + bool);
      // MIGRATE
      await new AnswerKeyFactory(new AnswerKey()).make(
        question._id.toString(),
        `ANSWER KEY IS ${bool}`,
        Faker.image(),
        bool
      );
    });
  });
};

module.exports = { answer_key_rollback, answer_key_migrate };
