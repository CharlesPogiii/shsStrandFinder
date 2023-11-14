// FAKER
const Faker = require("../facade/Faker");

class StrandFactory {
  constructor(strand) {
    this.strand = strand;
  }

  setStrandTypes(strandTypes) {
    this.strandTypes = strandTypes;
    return this;
  }

  async make(name, description, imagePath) {
    // INIT
    this.strand.strandType =
      this.strandTypes[Faker.generateRandomNumber(0, this.strandTypes.length)];
    this.strand.name = name;
    this.strand.description = description;
    this.strand.imagePath = imagePath;

    // SAVE
    await this.strand.save();
  }

  async prodMake(strandType, name, description, imagePath) {
    // INIT
    this.strand.strandType = strandType;
    this.strand.name = name;
    this.strand.description = description;
    this.strand.imagePath = imagePath;

    // SAVE
    await this.strand.save();
  }
}

module.exports = StrandFactory;
