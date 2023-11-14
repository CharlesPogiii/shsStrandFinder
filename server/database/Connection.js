const mongoose = require("mongoose");

class Connection {
  constructor(url) {
    this.url = url;
  }

  connect(errCb) {
    mongoose.connect(this.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    mongoose.connection.on("connected", () => {
      console.log("Connected to MongoDB: " + this.url);
    });

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
      errCb();
    });
  }

  connectOnMigration(onCb, errCb) {
    mongoose.connect(this.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    mongoose.connection.on("connected", () => {
      console.log("Connected to MongoDB: " + this.url);
      onCb();
    });

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
      errCb();
    });
  }
}

module.exports = Connection;
