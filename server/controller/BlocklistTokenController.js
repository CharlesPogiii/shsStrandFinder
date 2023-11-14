const BlocklistToken = require("../model/blocklist_tokens");

class BlocklistTokenController {
  /* CRUD ----------------------------------------------------------- */
  // CREATE
  async create(req, res) {
    const { accessToken } = req.body;

    // INIT
    const newBlocklistToken = new BlocklistToken({ accessToken });

    // SAVE
    newBlocklistToken.save();

    // RESPONSE
    res.json({ accessToken });
  }

  // READ ALL
  async findAll(req, res) {
    // FIND ALL
    const blocklistTokens = await BlocklistToken.find({}).exec();

    // RESPONSE
    res.json(blocklistTokens);
  }

  // READ BY ID
  async findById(req, res) {
    const { blocklistTokenID } = req.params;

    // FIND SINGLE DATA
    const blocklistToken = await BlocklistToken.findById(
      blocklistTokenID
    ).exec();

    // RESPONSE
    res.json(blocklistToken);
  }

  // UPDATE
  async put(req, res) {
    const { blocklistTokenID } = req.params;
    const { accessToken } = req.body;

    // FIND SINGLE DATA
    const blocklistToken = await BlocklistToken.findById(
      blocklistTokenID
    ).exec();

    // UPDATE
    blocklistToken.accessToken = accessToken || blocklistToken.accessToken;

    // SAVE
    await blocklistToken.save();

    // RESPONSE
    res.json(blocklistToken);
  }

  // DELETE
  async delete(req, res) {
    const { blocklistTokenID } = req.params;

    // DELETE SINGLE DATA
    const blocklistToken = await BlocklistToken.deleteOne({
      _id: blocklistTokenID,
    });

    // RESPONSE
    res.json(blocklistToken);
  }

  // DELETE ALL
  async deleteAll(req, res) {
    // DELETE ALL DATA
    const deletedBlocklistToken = await BlocklistToken.deleteMany({});

    // RESPONSE
    res.json(deletedBlocklistToken);
  }
}

module.exports = BlocklistTokenController;
