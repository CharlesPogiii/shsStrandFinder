// MODEL
const StrandType = require("../../model/strand_types");
const Strand = require("../../model/strands");
const SubjectType = require("../../model/subject_types");
const Subject = require("../../model/subjects");
const StrandSubject = require("../../model/strand_subjects");
const Question = require("../../model/questions");
const AnswerKey = require("../../model/answer_keys");
const PE = require("../../model/personal_engagements");

// FACTORY
const StrandTypeFactory = require("../../factory/StrandTypeFactory");
const StrandFactory = require("../../factory/StrandFactory");
const SubjectTypeFactory = require("../../factory/SubjectTypeFactory");
const SubjectFactory = require("../../factory/SubjectFactory");
const StrandSubjectFactory = require("../../factory/StrandSubjectFactory");
const QuestionFactory = require("../../factory/QuestionFactory");
const AnswerKeyFactory = require("../../factory/AnswerKeyFactory");
const PEFactory = require("../../factory/PEFactory");

// DATA
// STRAND TYPE DATA
const GENERAL = require("../../data/strandType/GENERAL");
const SPECIAL = require("../../data/strandType/SPECIAL");
const strandTypeData = [GENERAL, SPECIAL];

// STRAND DATA
const ABM = require("../../data/strand/ABM");
const HRS = require("../../data/strand/HRS");
const HUMSS = require("../../data/strand/HUMSS");
const ICT = require("../../data/strand/ICT");
const SMAW = require("../../data/strand/SMAW");
const STEM = require("../../data/strand/STEM");
const strandData = [ABM, HRS, HUMSS, ICT, SMAW, STEM];

// SUBJECT TYPE DATA
const ENGLISHST = require("../../data/subjectType/ENGLISH");
const MARKETING = require("../../data/subjectType/MARKETING");
const MATH = require("../../data/subjectType/MATH");
const PHILOSOPHY = require("../../data/subjectType/PHILOSOPHY");
const PROGRAMMING = require("../../data/subjectType/PROGRAMMING");
const SCIENCE = require("../../data/subjectType/SCIENCE");
const TECHNICAL = require("../../data/subjectType/TECHNICAL");
const subjectTypeData = [
  ENGLISHST,
  MARKETING,
  MATH,
  PHILOSOPHY,
  PROGRAMMING,
  SCIENCE,
  TECHNICAL,
];

// SUBJECT DATA
const AppliedEconomics = require("../../data/subject/01_AppliedEconomics");
const BusinessFinance = require("../../data/subject/02_BusinessFinance");
const BusinessMath = require("../../data/subject/03_BusinessMath");
const FundamentalABM = require("../../data/subject/04_FundamentalABM");
const OrganizationAndManagement = require("../../data/subject/05_OrganizationAndManagement");
const PrinciplesOfMarketing = require("../../data/subject/06_PrinciplesOfMarketing");
const CreativeWriting = require("../../data/subject/07_CreativeWriting");
const WRBS = require("../../data/subject/08_WRBS");
const TNCT = require("../../data/subject/09_TNCT");
const PPG = require("../../data/subject/10_PPG");
const CESC = require("../../data/subject/11_CESC");
const DISS = require("../../data/subject/12_DISS");
const DIASS = require("../../data/subject/13_DIASS");
const ComputerProgramming1 = require("../../data/subject/14_ComputerProgramming1");
const ComputerProgramming2 = require("../../data/subject/15_ComputerProgramming2");
const Animation = require("../../data/subject/16_Animation");
const ComputerSystemsServicing = require("../../data/subject/17_ComputerSystemsServicing");
const Statistics = require("../../data/subject/18_Statistics");
const PreCalculus = require("../../data/subject/19_PreCalculus");
const BasicCalculus = require("../../data/subject/20_BasicCalculus");
const GeneralBiology = require("../../data/subject/21_GeneralBiology");
const GeneralPhysics = require("../../data/subject/22_GeneralPhysics");
const GeneralChemistry = require("../../data/subject/23_GeneralChemistry");
const English = require("../../data/subject/24_English");
const Literature = require("../../data/subject/25_Literature");
const LanguageAndGrammar = require("../../data/subject/26_LanguageAndGrammar");
const Writing = require("../../data/subject/27_Writing");
const Poetry = require("../../data/subject/28_Poetry");
const SMAWs = require("../../data/subject/29_SMAWs");
const ICTs = require("../../data/subject/30_ICTs");
const SMAWICTIntegration = require("../../data/subject/31_SMAWICTIntegration");
const SMAWICTSafety = require("../../data/subject/32_SMAWICTSafety");
const FBS = require("../../data/subject/33_FBS");
const HFOP = require("../../data/subject/34_HFOP");
const NC1 = require("../../data/subject/35_NC1");
const NC2 = require("../../data/subject/36_NC2");
const subjectData = [
  AppliedEconomics,
  BusinessFinance,
  BusinessMath,
  FundamentalABM,
  OrganizationAndManagement,
  PrinciplesOfMarketing,
  CreativeWriting,
  WRBS,
  TNCT,
  PPG,
  CESC,
  DISS,
  DIASS,
  ComputerProgramming1,
  ComputerProgramming2,
  Animation,
  ComputerSystemsServicing,
  Statistics,
  PreCalculus,
  BasicCalculus,
  GeneralBiology,
  GeneralPhysics,
  GeneralChemistry,
  English,
  Literature,
  LanguageAndGrammar,
  Writing,
  Poetry,
  SMAWs,
  ICTs,
  SMAWICTIntegration,
  SMAWICTSafety,
  FBS,
  HFOP,
  NC1,
  NC2,
];

// PE
const QuesPE = require("../../data/QuesPE");

// ROLLBACK
const prod_rollback01 = async () => {
  await StrandType.deleteMany({});
  await Strand.deleteMany({});
  await SubjectType.deleteMany({});
  console.log("DATA SUCCESSFULLY ROLLBACKED");
};

const prod_rollback02 = async () => {
  await Subject.deleteMany({});
  await StrandSubject.deleteMany({});
  console.log("DATA SUCCESSFULLY ROLLBACKED");
};

const prod_rollback03 = async () => {
  await Question.deleteMany({});
  await AnswerKey.deleteMany({});
  console.log("DATA SUCCESSFULLY ROLLBACKED");
};

const prod_rollback04 = async () => {
  await PE.deleteMany({});
  console.log("DATA SUCCESSFULLY ROLLBACKED");
};

// COMMIT
const prod_migrate01 = async () => {
  // CREATE STRAND TYPE & SUBJECT TYPE
  strandTypeData.forEach(
    async (data) =>
      await new StrandTypeFactory(new StrandType()).make(data.name)
  );

  subjectTypeData.forEach(
    async (data) =>
      await new SubjectTypeFactory(new SubjectType()).make(data.name)
  );

  // CREATE STRAND
  strandData.forEach(async (data) => {
    const searchedStrandType = await StrandType.findOne({
      name: data.associatedStrandType,
    });

    await new StrandFactory(new Strand()).prodMake(
      searchedStrandType._id,
      data.name,
      data.description,
      data.imagePath
    );
  });
  console.log("MIGRATION SUCCESSFULLY DONE");
};

const prod_migrate02 = async () => {
  // CREATE SUBJECTS
  subjectData.forEach(async (data) => {
    const searchedSubjectType = await SubjectType.findOne({
      name: data.associatedSubjectType,
    });

    const searchedStrands = await Strand.find({
      name: data.associatedStrands,
    });

    const newSubject = await new SubjectFactory(new Subject()).prodMake(
      searchedSubjectType._id,
      data.name,
      data.description,
      data.imagePath
    );

    searchedStrands.forEach(async (searchedStrand) => {
      await new StrandSubjectFactory(new StrandSubject()).make(
        searchedStrand._id,
        newSubject._id
      );
    });
  });
  console.log("MIGRATION SUCCESSFULLY DONE");
};

const prod_migrate03 = async () => {
  // CREATE SUBJECTS
  subjectData.forEach(async (data) => {
    const searchedSubject = await Subject.findOne({ name: data.name });

    // CREATE QUESTIONS
    data.questions.forEach(async (question) => {
      const newQuestion = await new QuestionFactory(new Question()).make(
        searchedSubject._id,
        question.question,
        null
      );

      // CREATE ANSWER KEY
      question.answerKeys.forEach(async (answerKey) => {
        await new AnswerKeyFactory(new AnswerKey()).make(
          newQuestion._id,
          answerKey.value,
          null,
          answerKey.correct
        );
      });
    });
  });
  console.log("MIGRATION SUCCESSFULLY DONE");
};

const prod_migrate04 = async () => {
  // CREATE PE
  QuesPE.forEach(async (quesPE) => {
    const associatedStrand = await Strand.findOne({
      name: quesPE.associatedStrand,
    });

    await new PEFactory(new PE()).make(associatedStrand._id, quesPE.question);
  });
  console.log("MIGRATION SUCCESSFULLY DONE");
};

module.exports = {
  prod_rollback01,
  prod_rollback02,
  prod_rollback03,
  prod_rollback04,
  prod_migrate01,
  prod_migrate02,
  prod_migrate03,
  prod_migrate04,
};
