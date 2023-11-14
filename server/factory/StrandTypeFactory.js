class StrandTypeFactory {
  constructor(strandType) {
    this.strandType = strandType;
  }

  async make(name) {
    // INIT
    this.strandType.name = name;

    // SAVE
    await this.strandType.save();
  }
}

module.exports = StrandTypeFactory;
