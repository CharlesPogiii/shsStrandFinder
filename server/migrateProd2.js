require("dotenv").config();
const Connect = require("./database/Connection");

// CONNECTION
const DB_URL = process.env.SHS_DATABASE_URL;
const connection = new Connect(DB_URL);

// MIGRATION
const {
  prod_rollback02,
  prod_migrate02,
} = require("./database/migration/14_prod_migration");

// CONNECT
connection.connectOnMigration(
  async () => {
    // ROLLBACK
    await prod_rollback02();

    // MIGRATE
    await prod_migrate02();
  },
  async () => {
    console.log("TRIGGER THIS CALLBACK ONCE THE DATABASE CAUSED AN ERROR!");
  }
);
