const PE = require("../model/personal_engagements");
const Subject = require("../model/subjects");
const Question = require("../model/questions");
const AnswerKey = require("../model/answer_keys");

class ViewableController {
  // VIEWABLE FUNCTION
  async viewPE(req, res) {
    const pes = await PE.find({}).exec();

    res.json({
      user: req.user,
      pes,
      selectedStrand: req.selectedStrand,
      preferredStrand: req.preferredStrand,
      personalEngagements: req.pes,
      subjects: req.subjects,
      pendingSubjects: req.pendingSubjects,
    });
  }

  async viewSubject(req, res) {
    const subjects = await Subject.find({}).exec();

    // MAPPED SUBJECTS
    const mappedSubjects = await Promise.all(
      subjects.map(async (subject) => {
        const questions = await Question.find({ subject: subject._id }).exec();

        // MAPPED QUESTIONS
        const mappedQuestion = await Promise.all(
          questions.map(async (question) => {
            const answerKeys = await AnswerKey.find({
              question: question._id,
            }).exec();

            const answerKeyMap = new Map();
            const newAnswerKeys = [];

            answerKeys.forEach(async (answerKey) => {
              const questionID = answerKey.question.toString();

              if (!answerKeyMap.has(questionID)) {
                answerKeyMap.set(questionID, []);
              }

              answerKeyMap.get(questionID).push({
                ...answerKey.toObject(),
              });
            });

            // Convert the mapping into the desired format
            answerKeyMap.forEach((values) => newAnswerKeys.push(...values));

            return {
              ...question.toObject(),
              answerKeys: newAnswerKeys,
            };
          })
        );

        const groupMap = new Map();
        const newQuestions = [];

        mappedQuestion.forEach(async (mappedQuestion) => {
          const subjectID = mappedQuestion.subject.toString();

          if (!groupMap.has(subjectID)) {
            groupMap.set(subjectID, []);
          }

          groupMap.get(subjectID).push({
            ...mappedQuestion,
          });
        });

        // Convert the mapping into the desired format
        groupMap.forEach((values, subjectID) => {
          const subject = subjects.filter(
            (subject) => subject._id.toString() === subjectID
          );

          newQuestions.push({
            ...subject[0].toObject(),
            questions: values,
            // personalEngagements: values,
          });
        });

        return {
          ...subject.toObject(),
          questions: mappedQuestion,
        };
      })
    );

    res.json({
      user: req.user,
      viewableSubjects: mappedSubjects,
      selectedStrand: req.selectedStrand,
      preferredStrand: req.preferredStrand,
      personalEngagements: req.pes,
      subjects: req.subjects,
      pendingSubjects: req.pendingSubjects,
    });
  }
}

module.exports = ViewableController;
