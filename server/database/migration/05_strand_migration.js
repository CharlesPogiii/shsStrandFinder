// FAKER
const Faker = require("../../facade/Faker");

// MODEL
const Strand = require("../../model/strands");
const StrandType = require("../../model/strand_types");

// FACTORY
const StrandFactory = require("../../factory/StrandFactory");

const strand_rollback = async () => {
  await Strand.deleteMany({});
};

const strand_migrate = async () => {
  const size = 8;
  const strandTypes = await StrandType.find({}).exec();

  for (let i = 0; i < size; i++) {
    // MIGRATE
    await new StrandFactory(new Strand())
      .setStrandTypes(
        strandTypes.map((strandType) => strandType._id.toString())
      )
      .make(
        `Strand ${Faker.word(4)} ${i + 1}`,
        Faker.sentence(),
        Faker.image()
      );
  }
};

module.exports = { strand_rollback, strand_migrate };
