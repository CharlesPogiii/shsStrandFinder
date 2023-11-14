// MODEL
const Answer = require("../../model/answers");
const AnswerKey = require("../../model/answer_keys");
const Question = require("../../model/questions");
const SubjectType = require("../../model/subject_types");
const Subject = require("../../model/subjects");
const Strand = require("../../model/strands");
const StrandSubject = require("../../model/strand_subjects");

// lodash
const _ = require("lodash");

// KNN
const KNN = require("../../facade/KNN");

class ResultController {
  // READ THE RESULT BY USER ID
  async resultByUserId(req, res) {
    const user = req.user;

    // Find the user's answers
    const answers = await Answer.find({ user: user.id }).exec();
    const subjectTypes = await SubjectType.find({}).exec();
    const strands = await Strand.find({}).exec();
    const strandSubjects = await StrandSubject.find({}).exec();

    // Create a mapping of group.no to their corresponding values
    const groupMap = new Map();
    const newStrandSubjects = [];

    strandSubjects.forEach((strandSubject) => {
      const strandID = strandSubject.strand.toString();
      const subjectID = strandSubject.subject.toString();

      if (!groupMap.has(strandID)) {
        groupMap.set(strandID, []);
      }

      groupMap.get(strandID).push(subjectID);
    });

    // Convert the mapping into the desired format
    groupMap.forEach((values, strandID) => {
      newStrandSubjects.push({
        strandID,
        subjects: values,
      });
    });

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
        .map((id) => {
          // console.log(id, mappedAnswers);
          return _.find(mappedAnswers, { answerKey: id });
        });

      return {
        subject: question.subject,
        createdAt: userAnswers[0].createdAt,
        updatedAt: question.updatedAt,
        correct: userAnswers[0].correct,
        noOfUnVisit: userAnswers[0].noOfUnVisit,
      };
    });

    // FIND ALL SUBJECT DATA
    const subjects = await Subject.find({}).exec();
    const mappedSubjects = await await Promise.all(
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

    // KNN ALGORITHM
    const referencePoint = [0, 0, 0]; // STARTING reference point
    const k = mappedSubjects.length; // Number of nearest points to find

    // Predict using KNN
    const nearestPoints = KNN.predict(mappedSubjects, referencePoint, k);

    // Extract and order the _id along with the predicted values
    const results = nearestPoints.map((item, index) => ({
      _id: item.point._id.toString(),
      score: k - index,
      name: item.point.name,
      mistakes: item.point.mistakes,
      duration: item.point.duration,
      noOfUnVisit: item.point.noOfUnVisit,
      distance: item.distance,
    }));

    const finalResult = newStrandSubjects.map((newStrandSubject) => {
      const sum = newStrandSubject.subjects.reduce((accumulator, subject) => {
        return accumulator + _.find(results, { _id: subject.toString() }).score;
      }, 0);

      const setStrand = strands.filter(
        (strand) =>
          strand._id.toString() == newStrandSubject.strandID.toString()
      );

      return { ...setStrand[0].toObject(), sum };
    });

    const orderedFinalResult = _.orderBy(finalResult, ["sum"], ["desc"]);

    // CHANGE
    const subjectTypeMap = new Map();
    const newSubjectTypes = [];

    req.subjects.forEach((s) => {
      const subjectTypeID = s.subjectType.toString();

      if (!subjectTypeMap.has(subjectTypeID)) {
        subjectTypeMap.set(subjectTypeID, []);
      }

      subjectTypeMap.get(subjectTypeID).push({
        ...s,
      });
    });

    // Convert the mapping into the desired format
    subjectTypeMap.forEach((values, subjectTypeID) => {
      const subjectType = subjectTypes.filter(
        (st) => st._id.toString() === subjectTypeID
      );
      newSubjectTypes.push({
        ...subjectType[0].toObject(),
        subjects: values,
      });
    });

    // ADD PERCENTAGE
    const maxRankingPoints = orderedFinalResult.reduce((accumulator, r) => {
      return accumulator + r.sum;
    }, 0);

    const KNNResult = orderedFinalResult.map((ofr) => {
      const percentage = (ofr.sum / maxRankingPoints) * 100;
      return {
        ...ofr,
        maxRankingPoints,
        percentage: percentage.toFixed(2),
      };
    });

    // RESPONSE
    res.json({
      user,
      count: mappedSubjects.length,
      orderedSubjects: results,
      orderedFinalResult: KNNResult,
      subjectTypeResults: newSubjectTypes,
      selectedStrand: req.selectedStrand,
      preferredStrand: req.preferredStrand,
      predictedStrand: orderedFinalResult[0],
      peStrandResults: req.peStrandResults,
      personalEngagements: req.pes,
      subjects: req.subjects,
      pendingSubjects: req.pendingSubjects,
    });
  }
}

module.exports = ResultController;
