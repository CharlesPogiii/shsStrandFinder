require("dotenv").config();
const Connect = require("./database/Connection");

// CONNECTION
const DB_URL = process.env.SHS_DATABASE_URL;
const connection = new Connect(DB_URL);

// MIGRATION
const {
  answer_key_rollback,
  answer_key_migrate,
} = require("./database/migration/12_answer_key_migration");

// CONNECT
connection.connectOnMigration(
  async () => {
    // ROLLBACK
    await answer_key_rollback();
    console.log("DATA SUCCESSFULLY ROLLBACKED");

    // MIGRATE
    await answer_key_migrate();
    console.log("MIGRATION SUCCESSFULLY DONE");
  },
  async () => {
    console.log("TRIGGER THIS CALLBACK ONCE THE DATABASE CAUSED AN ERROR!");
  }
);
