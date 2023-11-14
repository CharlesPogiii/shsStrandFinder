// FAKER
const Faker = require("../../facade/Faker");

// MODEL
const BlocklistToken = require("../../model/blocklist_tokens");

// FACTORY
const BlocklistTokenFactory = require("../../factory/BlocklistTokenFactory");

const blocklist_token_rollback = async () => {
  await BlocklistToken.deleteMany({});
};

const blocklist_token_migrate = async () => {
  const size = 4;

  for (let i = 0; i < size; i++) {
    // MIGRATE
    await new BlocklistTokenFactory(new BlocklistToken()).make(Faker.word(12));
  }
};

module.exports = { blocklist_token_rollback, blocklist_token_migrate };
