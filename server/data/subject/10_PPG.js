const HUMSS = require("../strand/HUMSS");

const PHILOSOPHY = require("../subjectType/PHILOSOPHY");

const PPG = {
  associatedSubjectType: PHILOSOPHY.name,
  associatedStrands: [HUMSS.name],

  name: "Philippine Politics and Governance",
  description:
    "Examines the contemporary cultural, social, and technological landscape. It focuses on the analysis of current trends, the impact of networks and connectivity, and the development of critical thinking skills to navigate the complex challenges and opportunities of the 21st century.",
  imagePath: "uploads\\prod\\subject\\10.png",

  questions: [
    // question no. 1
    {
      question:
        "In the Philippines, how often are presidential elections held?",
      answerKeys: [
        {
          value: "Every 4 years",
          correct: true,
        },
        {
          value: "Every 5 years",
          correct: false,
        },
        {
          value: "Every 6 years",
          correct: false,
        },
        {
          value: "Every 7 years",
          correct: false,
        },
      ],
    },
    // question no. 2
    {
      question:
        "What is the upper house of the Philippine Congress called, composed of 24 senators?",
      answerKeys: [
        {
          value: "House of Representatives",
          correct: false,
        },
        {
          value: "Senate",
          correct: true,
        },
        {
          value: "Presidential Cabinet",
          correct: false,
        },
        {
          value: "Supreme Court",
          correct: false,
        },
      ],
    },
    // question no. 3
    {
      question:
        "Who is the current President of the Philippines (as of my last knowledge update in January 2022)?",
      answerKeys: [
        {
          value: "Rodrigo Duterte",
          correct: true,
        },
        {
          value: "Benigno Aquino III",
          correct: false,
        },
        {
          value: "Gloria Macapagal-Arroyo",
          correct: false,
        },
        {
          value: "Ferdinand Marcos",
          correct: false,
        },
      ],
    },
    // question no. 4
    {
      question:
        "In the Philippines, which document serves as the fundamental law of the land and outlines the structure of the government?",
      answerKeys: [
        {
          value: "Magna Carta",
          correct: false,
        },
        {
          value: "Bill of Rights",
          correct: false,
        },
        {
          value: "Constitution",
          correct: true,
        },
        {
          value: "Declaration of Independence",
          correct: false,
        },
      ],
    },
    // question no. 5
    {
      question:
        "What is the term for the power of the Philippine President to pardon or commute sentences for crimes, subject to certain limitations?",
      answerKeys: [
        {
          value: "Martial law",
          correct: false,
        },
        {
          value: "Executive privilege",
          correct: false,
        },
        {
          value: "Pardon power",
          correct: true,
        },
        {
          value: "Checks and balances",
          correct: false,
        },
      ],
    },
  ],
};

module.exports = PPG;
