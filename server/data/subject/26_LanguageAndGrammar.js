const STEM = require("../strand/STEM");
const HUMSS = require("../strand/HUMSS");
const ABM = require("../strand/ABM");

const ENGLISHST = require("../subjectType/ENGLISH");

const LanguageAndGrammar = {
  associatedSubjectType: ENGLISHST.name,
  associatedStrands: [STEM.name, HUMSS.name, ABM.name],

  name: "Language and Grammar",
  description:
    "Focuses on the study of the English language, including its grammar, syntax, and usage. It provides students with a deep understanding of language structure, communication, and writing skills.",
  imagePath: "uploads\\prod\\subject\\26.jpg",

  questions: [
    // question no. 1
    {
      question: "Which of the following is a singular, third-person pronoun?",
      answerKeys: [
        {
          value: "I",
          correct: false,
        },
        {
          value: "We",
          correct: true,
        },
        {
          value: "He",
          correct: false,
        },
        {
          value: "They",
          correct: false,
        },
      ],
    },
    // question no. 2
    {
      question:
        "What is the term for a sentence that expresses strong feeling or emotion, often ending with an exclamation mark?",
      answerKeys: [
        {
          value: "Declarative",
          correct: false,
        },
        {
          value: "Interrogative",
          correct: false,
        },
        {
          value: "Imperative",
          correct: false,
        },
        {
          value: "Exclamatory",
          correct: true,
        },
      ],
    },
    // question no. 3
    {
      question:
        'What is the term for a word that imitates the sound it represents, such as "buzz" or "meow"?',
      answerKeys: [
        {
          value: "Alliteration",
          correct: false,
        },
        {
          value: "Simile",
          correct: false,
        },
        {
          value: "Onomatopoeia",
          correct: true,
        },
        {
          value: "Oxymoron",
          correct: false,
        },
      ],
    },
    // question no. 4
    {
      question: "Which of the following is a coordinating conjunction?",
      answerKeys: [
        {
          value: "However",
          correct: false,
        },
        {
          value: "And",
          correct: true,
        },
        {
          value: "Nevertheless",
          correct: false,
        },
        {
          value: "Furthermore",
          correct: false,
        },
      ],
    },
    // question no. 5
    {
      question:
        "What is the term for a verb tense that indicates an action that has been completed in the past?",
      answerKeys: [
        {
          value: "Past",
          correct: false,
        },
        {
          value: "Present",
          correct: false,
        },
        {
          value: "Future",
          correct: false,
        },
        {
          value: "Past Perfect",
          correct: true,
        },
      ],
    },
  ],
};

module.exports = LanguageAndGrammar;
