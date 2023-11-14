// FAKER
const Faker = require("../../facade/Faker");

// MODEL
const SelectedPE = require("../../model/selected_personal_engagements");
const User = require("../../model/users");
const PE = require("../../model/personal_engagements");

// FACTORY
const SelectedPEFactory = require("../../factory/SelectedPEFactory");

const selected_pe_rollback = async () => {
  await SelectedPE.deleteMany({});
};

const selected_pe_migrate = async () => {
  const users = await User.find({}).exec();
  const pes = await PE.find({}).exec();

  console.log("\n\nUSER ANSWERING PE RELATIONSHIP");

  await users.forEach(async (user) => {
    console.log(
      "USER " +
        user.email +
        " answer PE question w/ a total items of " +
        pes.length +
        "."
    );

    await pes.forEach(async (pe) => {
      // MIGRATE
      await new SelectedPEFactory(new SelectedPE()).make(
        user._id.toString(),
        pe._id.toString(),
        Faker.boolean()
      );
    });
  });
};

module.exports = { selected_pe_rollback, selected_pe_migrate };
