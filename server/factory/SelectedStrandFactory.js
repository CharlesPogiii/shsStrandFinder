// FAKER
const Faker = require("../facade/Faker");

class SelectedStrandFactory {
  constructor(selectedStrand) {
    this.selectedStrand = selectedStrand;
  }

  setStrands(strands) {
    this.strands = strands;
    return this;
  }

  async make(user) {
    // INIT
    this.selectedStrand.user = user;
    this.selectedStrand.strand =
      this.strands[Faker.generateRandomNumber(0, this.strands.length)];

    // SAVE
    await this.selectedStrand.save();
  }
}

module.exports = SelectedStrandFactory;
