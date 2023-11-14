require("dotenv").config();
const Connect = require("./database/Connection");

// CONNECTION
const DB_URL = process.env.SHS_DATABASE_URL;
const connection = new Connect(DB_URL);

// MIGRATION
const {
  user_rollback,
  user_migrate,
} = require("./database/migration/01_user_migration");
const {
  strand_types_rollback,
  strand_types_migrate,
} = require("./database/migration/02_strand_type_migration");
const {
  blocklist_token_rollback,
  blocklist_token_migrate,
} = require("./database/migration/03_blocklist_token_migration");
const {
  subject_type_rollback,
  subject_type_migrate,
} = require("./database/migration/04_subject_type_migration");
const {
  strand_rollback,
  strand_migrate,
} = require("./database/migration/05_strand_migration");
const {
  subject_rollback,
  subject_migrate,
} = require("./database/migration/06_subject_migration");
const {
  selected_strand_rollback,
  selected_strand_migrate,
} = require("./database/migration/07_selected_strand_migration");
const {
  strand_subject_rollback,
  strand_subject_migrate,
} = require("./database/migration/08_strand_subject_migration");

// CONNECT
connection.connectOnMigration(
  async () => {
    // ROLLBACK
    await user_rollback();
    await strand_types_rollback();
    await blocklist_token_rollback();
    await subject_type_rollback();
    await strand_rollback();
    await subject_rollback();
    await selected_strand_rollback();
    await strand_subject_rollback();
    console.log("DATA SUCCESSFULLY ROLLBACKED");

    // MIGRATE
    await user_migrate();
    await strand_types_migrate();
    await blocklist_token_migrate();
    await subject_type_migrate();
    await strand_migrate();
    await subject_migrate();
    await selected_strand_migrate();
    await strand_subject_migrate();
    console.log("MIGRATION SUCCESSFULLY DONE");
  },
  async () => {
    console.log("TRIGGER THIS CALLBACK ONCE THE DATABASE CAUSED AN ERROR!");
  }
);
