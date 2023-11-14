// FAKER
const Faker = require("../../facade/Faker");

// MODEL
const SubjectType = require("../../model/subject_types");

// FACTORY
const SubjectTypeFactory = require("../../factory/SubjectTypeFactory");

const subject_type_rollback = async () => {
  await SubjectType.deleteMany({});
};

const subject_type_migrate = async () => {
  const size = 6;

  for (let i = 0; i < size; i++) {
    // MIGRATE
    await new SubjectTypeFactory(new SubjectType()).make(
      `Subject Type ${Faker.word(4)} ${i + 1}`
    );
  }
};

module.exports = { subject_type_rollback, subject_type_migrate };
