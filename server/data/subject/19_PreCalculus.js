const STEM = require("../strand/STEM");

const MATH = require("../subjectType/MATH");

const Statistics = {
  associatedSubjectType: MATH.name,
  associatedStrands: [STEM.name],

  name: "Pre-Calculus",
  description:
    "An academic subject designed to prepare students for more advanced courses in calculus and other mathematical disciplines. It covers a range of mathematical topics and concepts that serve as foundational knowledge for higher-level math courses.",
  imagePath: "uploads\\prod\\subject\\19.jpg",

  questions: [
    // question no. 1
    {
      question:
        "Calculate the exact value of cos(60 degrees) without using a calculator.",
      answerKeys: [
        {
          value: "1/2",
          correct: false,
        },
        {
          value: "√3/2",
          correct: true,
        },
        {
          value: "1",
          correct: false,
        },
      ],
    },
    // question no. 2
    {
      question:
        "Simplify the expression (tan^2(x) + 1) / (sec^2(x)) to a single trigonometric function.",
      answerKeys: [
        {
          value: "cos(x)",
          correct: false,
        },
        {
          value: "sin(x)",
          correct: false,
        },
        {
          value: "tan(x)",
          correct: true,
        },
      ],
    },
    // question no. 3
    {
      question:
        "Determine the exact value of the sine function at π/6 radians.",
      answerKeys: [
        {
          value: "1",
          correct: false,
        },
        {
          value: "√2/2",
          correct: false,
        },
        {
          value: "1/2",
          correct: true,
        },
      ],
    },
    // question no. 4
    {
      question:
        "What is the limit of (3x^2 - 2x - 1) / (x^2 - 1) as x approaches 1?",
      answerKeys: [
        {
          value: "2",
          correct: false,
        },
        {
          value: "1/2",
          correct: false,
        },
        {
          value: "1",
          correct: true,
        },
      ],
    },
    // question no. 5
    {
      question: "Solve the equation 4e^(2x) = 20 for x.",
      answerKeys: [
        {
          value: "ln(5)",
          correct: false,
        },
        {
          value: "2ln(5)",
          correct: true,
        },
        {
          value: "ln(2)",
          correct: false,
        },
      ],
    },
    // question no. 6
    {
      question:
        "Calculate the derivative of f(x) = 5x^3 - 2x^2 + 4x - 1 with respect to x.",
      answerKeys: [
        {
          value: "15x^2 - 4x + 4",
          correct: false,
        },
        {
          value: "5x^3 - 2x^2 + 4x - 1",
          correct: false,
        },
        {
          value: "15x^2 - 4x + 4",
          correct: true,
        },
      ],
    },
    // question no. 7
    {
      question: "Differentiate the function g(x) = ln(3x) with respect to x.",
      answerKeys: [
        {
          value: "1/3x",
          correct: false,
        },
        {
          value: "3/x",
          correct: true,
        },
        {
          value: "3",
          correct: false,
        },
      ],
    },
    // question no. 8
    {
      question:
        "Find the second derivative of the function h(x) = e^(2x) with respect to x.",
      answerKeys: [
        {
          value: "2e^(2x)",
          correct: true,
        },
        {
          value: "e^(4x)",
          correct: false,
        },
        {
          value: "e^(2x)",
          correct: false,
        },
      ],
    },
  ],
};

module.exports = Statistics;
