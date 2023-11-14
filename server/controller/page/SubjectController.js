// MODEL
const SubjectType = require("../../model/subject_types");
const Subject = require("../../model/subjects");
const Strand = require("../../model/strands");
const StrandSubject = require("../../model/strand_subjects");
const Question = require("../../model/questions");
const AnswerKey = require("../../model/answer_keys");
const Answer = require("../../model/answers");

// LODASH
const _ = require("lodash");

class SubjectPController {
  // GET ALL STRAND TYPES
  async readAll(req, res) {
    // Find all SubjectType documents
    const subjectTypes = await SubjectType.find({}).exec();
    const subjects = await Subject.find({}).exec();
    const strands = await Strand.find({}).exec();

    const mappedSubjects = await Promise.all(
      subjects.map(async (subject) => {
        const count = await Question.countDocuments({ subject: subject._id });
        return {
          ...subject.toObject(),
          count,
          subjectType: subject.subjectType.toString(),
        };
      })
    );

    const mappedStrands = await Promise.all(
      strands.map(async (strand) => {
        const searchedStrandSubjects = await StrandSubject.find({
          strand: strand._id,
        });

        const mappedStrandSubjects = searchedStrandSubjects.map((sss) => {
          return sss.subject.toString();
        });

        let searchedSubjects = await Subject.find({
          _id: { $in: mappedStrandSubjects },
        }).exec();

        return {
          ...strand.toObject(),
          subjects: searchedSubjects,
        };
      })
    );

    // Populate the 'subjects' field for each SubjectType
    const resultSubjectTypes = subjectTypes.map((subjectType) => {
      return {
        id: subjectType._id.toString(),
        name: subjectType.name,
        subjects: _.filter(
          mappedSubjects,
          (mappedSubject) =>
            mappedSubject.subjectType === subjectType._id.toString()
        ),
      };
    });

    res.json({
      user: req.user,
      subjectTypes: resultSubjectTypes,
      strands: mappedStrands,
      selectedStrand: req.selectedStrand,
      preferredStrand: req.preferredStrand,
      personalEngagements: req.pes,
      subjects: req.subjects,
      pendingSubjects: req.pendingSubjects,
    });
  }

  async findByIdAssessment(req, res) {
    const { subjectID } = req.params;
    const user = req.user;
    const userSubject = await Subject.findOne({ _id: subjectID }).exec();
    let currentQuestions = await Question.find({ subject: subjectID }).exec();
    const shuffledQuestions = _.shuffle(currentQuestions);
    let mappedQuestions = shuffledQuestions.map((ques) => ({
      ...ques.toObject(),
    }));

    // FIND THE CURRENT UNANSWERED QUESTION
    const userAnswered = await Answer.find({ user: user.id.toString() }).exec();
    let userAnsweredQuestion = await Promise.all(
      userAnswered.map(async (ua) => {
        const uaAnswerKey = await AnswerKey.findById(
          ua.answerKey.toString()
        ).exec();
        const uaQuestion = await Question.findById(
          uaAnswerKey.question.toString()
        ).exec();
        return uaQuestion;
      })
    );
    userAnsweredQuestion = userAnsweredQuestion.filter(
      (uaq) => uaq.subject.toString() === subjectID
    );

    mappedQuestions = _.differenceWith(
      mappedQuestions,
      userAnsweredQuestion,
      (q1, q2) => q1._id.toString() === q2._id.toString()
    );

    if (mappedQuestions.length == 0) {
      return res.json({
        user: user,
        error: "Already answered!",
        selectedStrand: req.selectedStrand,
        preferredStrand: req.preferredStrand,
        personalEngagements: req.pes,
        subjects: req.subjects,
        pendingSubjects: req.pendingSubjects,
      });
    }

    mappedQuestions = mappedQuestions.map((mq, index) => ({
      index: userAnsweredQuestion.length + index + 1,
      ...mq,
    }));

    // GET THE CURRENT POSITION
    currentQuestions = mappedQuestions;
    currentQuestions = await Promise.all(
      currentQuestions.map(async (cq, index) => {
        let searchedAnswerKeys = await AnswerKey.find({
          question: cq._id,
        }).exec();

        return {
          ...cq,
          answerKeys: searchedAnswerKeys,
        };
      })
    );

    res.json({
      user: user,
      isLast: mappedQuestions.length == 1,
      subject: userSubject,
      questions: currentQuestions,
      selectedStrand: req.selectedStrand,
      preferredStrand: req.preferredStrand,
      personalEngagements: req.pes,
      subjects: req.subjects,
      pendingSubjects: req.pendingSubjects,
    });
  }
}

module.exports = SubjectPController;
