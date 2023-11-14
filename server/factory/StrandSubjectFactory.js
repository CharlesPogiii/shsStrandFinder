class StrandSubjectFactory {
  constructor(strandSubject) {
    this.strandSubject = strandSubject;
  }

  setStrands(strands) {
    this.strands = strands;
    return this;
  }

  async make(strand, subject) {
    // INIT
    this.strandSubject.strand = strand;
    this.strandSubject.subject = subject;

    // SAVE
    await this.strandSubject.save();
  }
}

module.exports = StrandSubjectFactory;
