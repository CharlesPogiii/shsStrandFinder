require("dotenv").config();
const Connect = require("./database/Connection");

// CONNECTION
const DB_URL = process.env.SHS_DATABASE_URL;
const connection = new Connect(DB_URL);

// MIGRATION
const { user_rollback } = require("./database/migration/01_user_migration");
const {
  strand_types_rollback,
} = require("./database/migration/02_strand_type_migration");
const {
  blocklist_token_rollback,
} = require("./database/migration/03_blocklist_token_migration");
const {
  subject_type_rollback,
} = require("./database/migration/04_subject_type_migration");
const { strand_rollback } = require("./database/migration/05_strand_migration");
const {
  subject_rollback,
} = require("./database/migration/06_subject_migration");
const {
  selected_strand_rollback,
} = require("./database/migration/07_selected_strand_migration");
const {
  strand_subject_rollback,
} = require("./database/migration/08_strand_subject_migration");
const { pe_rollback } = require("./database/migration/09_pe_migration");
const {
  selected_pe_rollback,
} = require("./database/migration/10_selected_pe_migration");
const {
  question_rollback,
} = require("./database/migration/11_question_migration");
const {
  answer_key_rollback,
} = require("./database/migration/12_answer_key_migration");
const { answer_rollback } = require("./database/migration/13_answer_migration");

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
    await pe_rollback();
    await selected_pe_rollback();
    await question_rollback();
    await answer_key_rollback();
    await answer_rollback();
    console.log("DATA SUCCESSFULLY ROLLBACKED");
  },
  async () => {
    console.log("TRIGGER THIS CALLBACK ONCE THE DATABASE CAUSED AN ERROR!");
  }
);
