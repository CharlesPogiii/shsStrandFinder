class BlocklistTokenFactory {
  constructor(blocklistToken) {
    this.blocklistToken = blocklistToken;
  }

  async make(accessToken) {
    // INIT
    this.blocklistToken.accessToken = accessToken;

    // SAVE
    await this.blocklistToken.save();
  }
}

module.exports = BlocklistTokenFactory;
