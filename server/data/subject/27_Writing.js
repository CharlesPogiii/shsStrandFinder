const STEM = require("../strand/STEM");
const HUMSS = require("../strand/HUMSS");
const ABM = require("../strand/ABM");

const ENGLISHST = require("../subjectType/ENGLISH");

const Writing = {
  associatedSubjectType: ENGLISHST.name,
  associatedStrands: [STEM.name, HUMSS.name, ABM.name],

  name: "Writing",
  description:
    "Designed to help students develop and refine their writing skills across various genres and styles. It focuses on the principles of effective communication, creative expression, and persuasive writing.",
  imagePath: "uploads\\prod\\subject\\27.jpg",

  questions: [
    // question no. 1
    {
      question:
        "What is the term for a brief statement that summarizes the main points of a text?",
      answerKeys: [
        {
          value: "Introduction",
          correct: false,
        },
        {
          value: "Thesis",
          correct: true,
        },
        {
          value: "Conclusion",
          correct: false,
        },
        {
          value: "Topic sentence",
          correct: false,
        },
      ],
    },
    // question no. 2
    {
      question:
        "What is the process of checking and correcting spelling, grammar, and punctuation in writing?",
      answerKeys: [
        {
          value: "Revision",
          correct: false,
        },
        {
          value: "Proofreading",
          correct: true,
        },
        {
          value: "Editing",
          correct: false,
        },
        {
          value: "Brainstorming",
          correct: false,
        },
      ],
    },
    // question no. 3
    {
      question:
        "In a research paper, what should be included at the end to give credit to the sources of information used?",
      answerKeys: [
        {
          value: "Title",
          correct: false,
        },
        {
          value: "Bibliography",
          correct: true,
        },
        {
          value: "Introduction",
          correct: false,
        },
        {
          value: "Conclusion",
          correct: false,
        },
      ],
    },
    // question no. 4
    {
      question:
        "What is the term for the deliberate repetition of the first part of the sentence to create an artistic effect?",
      answerKeys: [
        {
          value: "Repetition",
          correct: false,
        },
        {
          value: "Rhetoric",
          correct: false,
        },
        {
          value: "Anaphora",
          correct: true,
        },
        {
          value: "Alliteration",
          correct: false,
        },
      ],
    },
    // question no. 5
    {
      question:
        "Which part of an essay or paper presents the main point or argument that the rest of the paper will support?",
      answerKeys: [
        {
          value: "Introduction",
          correct: true,
        },
        {
          value: "Conclusion",
          correct: false,
        },
        {
          value: "Body",
          correct: false,
        },
        {
          value: "Title",
          correct: false,
        },
      ],
    },
  ],
};

module.exports = Writing;
