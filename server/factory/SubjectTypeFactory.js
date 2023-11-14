class SubjectTypeFactory {
  constructor(subjectType) {
    this.subjectType = subjectType;
  }

  async make(name) {
    // INIT
    this.subjectType.name = name;

    // SAVE
    await this.subjectType.save();
  }
}

module.exports = SubjectTypeFactory;
