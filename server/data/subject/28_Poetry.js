const STEM = require("../strand/STEM");
const HUMSS = require("../strand/HUMSS");
const ABM = require("../strand/ABM");

const ENGLISHST = require("../subjectType/ENGLISH");

const Poetry = {
  associatedSubjectType: ENGLISHST.name,
  associatedStrands: [STEM.name, HUMSS.name, ABM.name],

  name: "Poetry",
  description:
    "Designed to help students develop and refine their Poetry skills across various genres and styles. It focuses on the principles of effective communication, creative expression, and persuasive Poetry.",
  imagePath: "uploads\\prod\\subject\\28.webp",

  questions: [
    // question no. 1
    {
      question:
        "What is a group of lines in a poem that share a common pattern of rhyme and meter called?",
      answerKeys: [
        {
          value: "Stanza",
          correct: true,
        },
        {
          value: "Rhyme scheme",
          correct: false,
        },
        {
          value: "Line",
          correct: false,
        },
        {
          value: "Verse",
          correct: false,
        },
      ],
    },
    // question no. 2
    {
      question:
        "What is the repetition of vowel sounds within a line of poetry called?",
      answerKeys: [
        {
          value: "Consonance",
          correct: false,
        },
        {
          value: "Assonance",
          correct: true,
        },
        {
          value: "Alliteration",
          correct: false,
        },
        {
          value: "Rhyme",
          correct: false,
        },
      ],
    },
    // question no. 3
    {
      question:
        "Which literary term refers to the use of words and phrases to create mental images in poetry?",
      answerKeys: [
        {
          value: "Rhyme",
          correct: false,
        },
        {
          value: "Simile",
          correct: false,
        },
        {
          value: "Imagery",
          correct: true,
        },
        {
          value: "Onomatopoeia",
          correct: false,
        },
      ],
    },
    // question no. 4
    {
      question:
        "What is the term for a three-line Japanese poem with a 5-7-5 syllable pattern?",
      answerKeys: [
        {
          value: "Haiku",
          correct: true,
        },
        {
          value: "Sonnet",
          correct: false,
        },
        {
          value: "Limerick",
          correct: false,
        },
        {
          value: "Ode",
          correct: false,
        },
      ],
    },
    // question no. 5
    {
      question:
        "What is the term for a brief poem that expresses personal thoughts or feelings and is often written in the first person?",
      answerKeys: [
        {
          value: "Haiku",
          correct: false,
        },
        {
          value: "Sonnet",
          correct: false,
        },
        {
          value: "Limerick",
          correct: false,
        },
        {
          value: "Lyric",
          correct: true,
        },
      ],
    },
  ],
};

module.exports = Poetry;
