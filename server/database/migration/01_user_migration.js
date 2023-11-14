// FAKER
const Faker = require("../../facade/Faker");

// MODEL
const User = require("../../model/users");

// FACTORY
const UserFactory = require("../../factory/UserFactory");

// BYCRYPT
const bcrypt = require("bcryptjs");

const user_rollback = async () => {
  await User.deleteMany({});
};

const saltRounds = 10;

const user_migrate = async () => {
  const size = 4;

  // ENCRYPT
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash("password", salt);

  for (let i = 0; i < size; i++) {
    // MIGRATE
    await new UserFactory(new User()).make(
      Faker.email(),
      hashedPassword,
      false
    );
  }
};

module.exports = { user_rollback, user_migrate };
