require("dotenv").config();
const Connect = require("./database/Connection");

// CONNECTION
const DB_URL = process.env.SHS_DATABASE_URL;
const connection = new Connect(DB_URL);

// MIGRATION
const {
  pe_rollback,
  pe_migrate,
} = require("./database/migration/09_pe_migration");
const {
  question_rollback,
  question_migrate,
} = require("./database/migration/11_question_migration");

// CONNECT
connection.connectOnMigration(
  async () => {
    // ROLLBACK
    await pe_rollback();
    await question_rollback();
    console.log("DATA SUCCESSFULLY ROLLBACKED");

    // MIGRATE
    await pe_migrate();
    await question_migrate();
    console.log("MIGRATION SUCCESSFULLY DONE");
  },
  async () => {
    console.log("TRIGGER THIS CALLBACK ONCE THE DATABASE CAUSED AN ERROR!");
  }
);
