require("dotenv").config();
const Connect = require("./database/Connection");

// CONNECTION
const DB_URL = process.env.SHS_DATABASE_URL;
const connection = new Connect(DB_URL);

// MIGRATION
const {
  selected_pe_rollback,
  selected_pe_migrate,
} = require("./database/migration/10_selected_pe_migration");
const {
  answer_rollback,
  answer_migrate,
} = require("./database/migration/13_answer_migration");

// CONNECT
connection.connectOnMigration(
  async () => {
    // ROLLBACK
    await selected_pe_rollback();
    await answer_rollback();
    console.log("DATA SUCCESSFULLY ROLLBACKED");

    // MIGRATE
    await selected_pe_migrate();
    await answer_migrate();
    console.log("MIGRATION SUCCESSFULLY DONE");
  },
  async () => {
    console.log("TRIGGER THIS CALLBACK ONCE THE DATABASE CAUSED AN ERROR!");
  }
);
