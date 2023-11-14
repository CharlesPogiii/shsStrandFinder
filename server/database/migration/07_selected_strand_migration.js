// FAKER
const Faker = require("../../facade/Faker");

// MODEL
const SelectedStrand = require("../../model/selected_strands");
const Strand = require("../../model/strands");
const User = require("../../model/users");

// FACTORY
const SelectedStrandFactory = require("../../factory/SelectedStrandFactory");

const selected_strand_rollback = async () => {
  await SelectedStrand.deleteMany({});
};

const selected_strand_migrate = async () => {
  const strands = await Strand.find({}).exec();
  const users = await User.find({}).exec();

  await users.forEach(async (user) => {
    // MIGRATE
    await new SelectedStrandFactory(new SelectedStrand())
      .setStrands(strands.map((strand) => strand._id.toString()))
      .make(user);
  });
};

module.exports = { selected_strand_rollback, selected_strand_migrate };
