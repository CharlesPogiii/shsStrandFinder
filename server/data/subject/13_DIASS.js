const HUMSS = require("../strand/HUMSS");

const PHILOSOPHY = require("../subjectType/PHILOSOPHY");

const DIASS = {
  associatedSubjectType: PHILOSOPHY.name,
  associatedStrands: [HUMSS.name],

  name: "Disciplines and Ideas in the Applied Social Sciences",
  description:
    "An academic subject or course that provides students with a comprehensive overview of the various disciplines within the applied social sciences. It explores the practical and real-world applications of social science knowledge and methodologies to address contemporary social issues and challenges.",
  imagePath: "uploads\\prod\\subject\\13.jpg",

  questions: [
    // question no. 1
    {
      question:
        'What does the term "criminology" refer to in the applied social sciences?',
      answerKeys: [
        {
          value: "The study of plant biology",
          correct: false,
        },
        {
          value:
            "The study of criminal behavior and the criminal justice system",
          correct: true,
        },
        {
          value: "The study of celestial bodies",
          correct: false,
        },
        {
          value: "The study of ancient civilizations",
          correct: false,
        },
      ],
    },
    // question no. 2
    {
      question:
        'In the context of applied social sciences, what does "social work" involve?',
      answerKeys: [
        {
          value: "Engineering and technology development",
          correct: false,
        },
        {
          value:
            "Providing assistance and support to individuals and communities in need",
          correct: true,
        },
        {
          value: "The study of environmental conservation",
          correct: false,
        },
        {
          value: "Analyzing historical events",
          correct: false,
        },
      ],
    },
    // question no. 3
    {
      question:
        'What is the primary focus of "urban planning" in the applied social sciences?',
      answerKeys: [
        {
          value: "Agricultural practices",
          correct: false,
        },
        {
          value: "Designing efficient transportation systems",
          correct: false,
        },
        {
          value:
            "Planning and designing cities and communities for optimal use and functionality",
          correct: true,
        },
        {
          value: "The study of ancient architecture",
          correct: false,
        },
      ],
    },
    // question no. 4
    {
      question:
        'What is the primary goal of "environmental science" in the applied social sciences?',
      answerKeys: [
        {
          value: "The study of space exploration",
          correct: false,
        },
        {
          value:
            "Understanding and addressing environmental issues and sustainability",
          correct: true,
        },
        {
          value: "Exploring the history of art and culture",
          correct: false,
        },
        {
          value: "Analyzing political ideologies",
          correct: false,
        },
      ],
    },
    // question no. 5
    {
      question:
        'In the applied social sciences, what does "communication studies" focus on?',
      answerKeys: [
        {
          value: "Analyzing the behavior of insects",
          correct: false,
        },
        {
          value: "Understanding the dynamics of human communication and media",
          correct: true,
        },
        {
          value: "The study of ancient languages",
          correct: false,
        },
        {
          value: "Researching marine life",
          correct: false,
        },
      ],
    },
  ],
};

module.exports = DIASS;
