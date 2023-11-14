const HUMSS = require("../strand/HUMSS");

const PHILOSOPHY = require("../subjectType/PHILOSOPHY");

const DISS = {
  associatedSubjectType: PHILOSOPHY.name,
  associatedStrands: [HUMSS.name],

  name: "Disciplines and Ideas in the Social Sciences",
  description:
    "Overview of the diverse disciplines within the social sciences, as well as the fundamental ideas, theories, and methodologies that underpin these fields. It offers a multidisciplinary approach to understanding the complexities of human societies and behavior.",
  imagePath: "uploads\\prod\\subject\\12.jpg",

  questions: [
    // question no. 1
    {
      question:
        "Which social science discipline studies the distribution and consumption of goods and services?",
      answerKeys: [
        {
          value: "Sociology",
          correct: false,
        },
        {
          value: "Political Science",
          correct: false,
        },
        {
          value: "Economics",
          correct: true,
        },
        {
          value: "Anthropology",
          correct: false,
        },
      ],
    },
    // question no. 2
    {
      question:
        'What does the term "sociology" refer to in the social sciences?',
      answerKeys: [
        {
          value: "The study of past civilizations",
          correct: false,
        },
        {
          value: "The study of human societies and social behavior",
          correct: true,
        },
        {
          value: "The analysis of weather patterns",
          correct: false,
        },
        {
          value: "The study of geological formations",
          correct: false,
        },
      ],
    },
    // question no. 3
    {
      question:
        "In political science, what is the term for a system of government in which the citizens have the supreme power and make decisions through voting?",
      answerKeys: [
        {
          value: "Monarchy",
          correct: false,
        },
        {
          value: "Oligarchy",
          correct: false,
        },
        {
          value: "Democracy",
          correct: true,
        },
        {
          value: "Dictatorship",
          correct: false,
        },
      ],
    },
    // question no. 4
    {
      question:
        "What is the term for the scientific study of human origins, evolution, and culture?",
      answerKeys: [
        {
          value: "Psychology",
          correct: false,
        },
        {
          value: "Sociology",
          correct: false,
        },
        {
          value: "Anthropology",
          correct: true,
        },
        {
          value: "Political Science",
          correct: false,
        },
      ],
    },
    // question no. 5
    {
      question:
        "Which social science discipline focuses on the study of human behavior and the mind?",
      answerKeys: [
        {
          value: "Sociology",
          correct: false,
        },
        {
          value: "Political Science",
          correct: false,
        },
        {
          value: "Psychology",
          correct: true,
        },
        {
          value: "Economics",
          correct: false,
        },
      ],
    },
  ],
};

module.exports = DISS;
