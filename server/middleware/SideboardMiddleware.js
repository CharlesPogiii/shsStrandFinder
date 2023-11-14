// MODEL
const Strand = require("../model/strands");
const PE = require("../model/personal_engagements");
const SelectedStrand = require("../model/selected_strands");
const SelectedPE = require("../model/selected_personal_engagements");
const Subject = require("../model/subjects");
const Question = require("../model/questions");
const Answer = require("../model/answers");
const AnswerKey = require("../model/answer_keys");

// LODASH
const _ = require("lodash");

class SideboardMiddleware {
  async middleware(req, res, next) {
    const userID = req.user.id;

    // INIT
    const strands = await Strand.find({}).exec();

    // FIND SINGLE USER DATA
    const answers = await Answer.find({ user: userID }).exec();

    // FIND SINGLE SELECTED STRAND DATA
    const selectedStrand = await SelectedStrand.findOne({
      user: userID,
    }).exec();

    const subjects = await Subject.find({}).exec();
    const selectedPEs = await SelectedPE.find({ user: userID }).exec();
    const allPE = await PE.find().exec();

    let _strand = null;

    if (selectedStrand) {
      _strand = await Strand.findById(selectedStrand.strand.toString()).exec();
    }

    let mappedSubjects = [];

    if (answers.length != 0) {
      const answerKeyIDs = _.map(answers, "answerKey");
      const mappedAnswers = answers.map((answer) => {
        return { ...answer.toObject(), answerKey: answer.answerKey.toString() };
      });

      // Find AnswerKeys with specific IDs
      const answerKeys = await AnswerKey.find({
        _id: { $in: answerKeyIDs },
      }).exec();
      const questionIDs = _.map(answerKeys, "question");
      const uniqueQuestionIDs = _.uniq(questionIDs.map((id) => id.toString()));

      // Find Questions with specific IDs
      let questions = await Question.find({
        _id: { $in: uniqueQuestionIDs },
      }).exec();

      // Map question to w/ User answers
      questions = questions.map((question) => {
        const userAnswers = answerKeys
          .filter(
            (answerKey) =>
              answerKey.question.toString() === question._id.toString()
          )
          .map((answerKey) => answerKey._id.toString())
          .map((id) => _.find(mappedAnswers, { answerKey: id }));

        return {
          subject: question.subject,
          createdAt: userAnswers[0].createdAt,
          updatedAt: question.updatedAt,
          correct: userAnswers[0].correct,
          noOfUnVisit: userAnswers[0].noOfUnVisit,
        };
      });

      // FIND ALL SUBJECT DATA
      // const questions = await Question.find({}).exec();
      mappedSubjects = await Promise.all(
        subjects.map(async (subject) => {
          let corrects = 0;
          let mistakes = 0;
          let totalNoOfUnVisit = 0;

          const totalQuestions = await Question.find({
            subject: subject._id,
          }).exec();

          const subjectQuestions = questions.filter(
            (question) => subject._id.toString() === question.subject.toString()
          );

          subjectQuestions.forEach((question) => {
            if (!question.correct) mistakes++;
            else corrects++;
            totalNoOfUnVisit += question.noOfUnVisit;
          });

          let orderedQuestions = [];

          if (subjectQuestions.length) {
            orderedQuestions = _.orderBy(
              subjectQuestions,
              ["createdAt"],
              ["asc"]
            );
          }

          const oldestQuestion = orderedQuestions.length
            ? orderedQuestions[0]
            : null;
          const latestQuestion = orderedQuestions.length
            ? orderedQuestions[orderedQuestions.length - 1]
            : null;
          const oldestDate = orderedQuestions.length
            ? new Date(oldestQuestion.createdAt)
            : null;
          const latestDate = orderedQuestions.length
            ? new Date(latestQuestion.createdAt)
            : null;

          const differenceInMilliseconds = latestDate - oldestDate;

          return {
            ...subject.toObject(),
            totalScore: subjectQuestions.length,
            answered: totalQuestions.length == subjectQuestions.length,
            score: corrects,
            mistakes,
            duration: (differenceInMilliseconds / 60000).toFixed(2), // convert to min
            noOfUnVisit: totalNoOfUnVisit,
          };
        })
      );

      mappedSubjects = mappedSubjects.filter((subject) => subject.answered);
    }

    // FIND PREFFERED STRAND BY PE

    // Create a mapping of group.no to their corresponding values
    let mappedPEs = [];
    let orderedStrands = [];
    const userPECount = selectedPEs.length;
    const peCount = allPE.length;

    if (selectedPEs.length != 0 && userPECount == peCount) {
      mappedPEs = await Promise.all(
        selectedPEs.map(async (selectedPE) => {
          const pe = await PE.findById(selectedPE.pe.toString()).exec();

          return {
            ...selectedPE.toObject(),
            question: pe.question,
            strand: pe.strand,
          };
        })
      );

      const groupMap = new Map();
      const newStrands = [];

      mappedPEs.forEach((mappedPE) => {
        const strandID = mappedPE.strand.toString();
        delete mappedPE.strand;

        if (!groupMap.has(strandID)) {
          groupMap.set(strandID, []);
        }

        groupMap.get(strandID).push({
          ...mappedPE,
        });
      });

      // Convert the mapping into the desired format
      groupMap.forEach((values, strandID) => {
        let yes = 0;
        let no = 0;
        const strand = strands.filter(
          (strand) => strand._id.toString() === strandID
        );

        values.forEach((value) => {
          if (value.yes) yes++;
          else no++;
        });

        const prob = (yes / values.length) * 100;

        newStrands.push({
          ...strand[0].toObject(),
          total: values.length,
          yes,
          no,
          prob,
          // personalEngagements: values,
        });
      });

      orderedStrands = _.orderBy(newStrands, ["prob"], ["desc"]);
    }

    // SET PENDING SUBJECTS
    // Find the difference between s1 and s2 based on the 'id' property
    const subjectDifference = _.differenceWith(
      subjects,
      mappedSubjects,
      (s1, s2) => s1._id.toString() === s2._id.toString()
    );

    // REQ BIND
    req.selectedStrand = _strand;
    req.pes = mappedPEs;
    req.subjects = mappedSubjects;
    req.pendingSubjects = subjectDifference;
    req.preferredStrand = orderedStrands.length != 0 ? orderedStrands[0] : null;
    req.peStrandResults = orderedStrands.length != 0 ? orderedStrands : null;

    next();
  }
}

module.exports = SideboardMiddleware;
