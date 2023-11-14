const mongoose = require("mongoose");

const blocklistTokenSchema = new mongoose.Schema({
  accessToken: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const BlocklistToken = mongoose.model("blocklist_tokens", blocklistTokenSchema);

module.exports = BlocklistToken;
