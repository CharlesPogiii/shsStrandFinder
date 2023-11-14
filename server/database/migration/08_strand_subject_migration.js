const _ = require("lodash");

// FAKER
const Faker = require("../../facade/Faker");

// MODEL
const StrandSubject = require("../../model/strand_subjects");
const Strand = require("../../model/strands");
const Subject = require("../../model/subjects");

// FACTORY
const StrandSubjectFactory = require("../../factory/StrandSubjectFactory");

const strand_subject_rollback = async () => {
  await StrandSubject.deleteMany({});
};

const strand_subject_migrate = async () => {
  const strands = await Strand.find({}).exec();
  const subjects = await Subject.find({}).exec();

  console.log("TEST SUBJECT TO STRAND RELATIONSHIP");

  await subjects.forEach(async (subject, i) => {
    // INIT
    const randomLength = Faker.generateRandomNumber(1, strands.length);
    const shuffledStrands = _.shuffle(strands);
    const fetchStrands = shuffledStrands.slice(0, randomLength);

    console.log(
      "SUBJECT " +
        i +
        ": " +
        subject.name +
        " has " +
        randomLength +
        " associated STRANDS"
    );

    await fetchStrands.forEach(async (strand) => {
      console.log("\tASSOCIATED STRAND " + i + ": " + strand.name);

      // MIGRATE
      await new StrandSubjectFactory(new StrandSubject()).make(
        strand._id,
        subject._id
      );
    });
  });
};

module.exports = { strand_subject_rollback, strand_subject_migrate };
