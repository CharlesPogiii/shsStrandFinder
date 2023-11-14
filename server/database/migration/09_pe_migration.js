// FAKER
const Faker = require("../../facade/Faker");

// MODEL
const PE = require("../../model/personal_engagements");
const Strand = require("../../model/strands");

// FACTORY
const PEFactory = require("../../factory/PEFactory");

const pe_rollback = async () => {
  await PE.deleteMany({});
};

const pe_migrate = async () => {
  const size = 3;
  const strands = await Strand.find({}).exec();

  console.log("\n\nTEST PE TO STRAND RELATIONSHIP");

  await strands.forEach(async (strand, i) => {
    // INIT
    const randomLength = Faker.generateRandomNumber(1, size);

    console.log("STRAND " + i + " (" + randomLength + "): " + strand.name);

    for (let i = 0; i < randomLength; i++) {
      console.log("\tPE QUESTION " + i + " Associate by STRAND " + strand.name);

      // MIGRATE
      await new PEFactory(new PE()).make(
        strand._id.toString(),
        `PE Question ${Faker.word(4)} ${i + 1}?`
      );
    }
  });
};

module.exports = { pe_rollback, pe_migrate };
