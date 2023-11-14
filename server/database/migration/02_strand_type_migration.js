// FAKER
const Faker = require("../../facade/Faker");

// MODEL
const StrandType = require("../../model/strand_types");

// FACTORY
const StrandTypeFactory = require("../../factory/StrandTypeFactory");

const strand_types_rollback = async () => {
  await StrandType.deleteMany({});
};

const strand_types_migrate = async () => {
  const size = 3;

  for (let i = 0; i < size; i++) {
    // MIGRATE
    await new StrandTypeFactory(new StrandType()).make(
      `Strand Type ${Faker.word(4)} ${i + 1}`
    );
  }
};

module.exports = { strand_types_rollback, strand_types_migrate };
