class PEFactory {
  constructor(pe) {
    this.pe = pe;
  }

  async make(strand, question) {
    // INIT
    this.pe.strand = strand;
    this.pe.question = question;

    // SAVE
    await this.pe.save();
  }
}

module.exports = PEFactory;
