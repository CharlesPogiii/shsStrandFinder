const STEM = require("../strand/STEM");

const MATH = require("../subjectType/MATH");

const BasicCalculus = {
  associatedSubjectType: MATH.name,
  associatedStrands: [STEM.name],

  name: "Basic Calculus",
  description:
    "An introductory course that provides students with a fundamental understanding of the principles and techniques of calculus. It covers the foundational concepts in differential and integral calculus, which are essential for various fields of science, engineering, mathematics, and economics.",
  imagePath: "uploads\\prod\\subject\\20.webp",

  questions: [
    // question no. 1
    {
      question:
        "Calculate the derivative of the function f(x) = 3x^2 - 4x + 7 with respect to x.",
      answerKeys: [
        {
          value: "6x + 4",
          correct: false,
        },
        {
          value: "6x - 4",
          correct: false,
        },
        {
          value: "3x^2 - 4x + 7",
          correct: false,
        },
        {
          value: "6x - 2",
          correct: true,
        },
      ],
    },
    // question no. 2
    {
      question:
        "Determine the integral of the function g(x) = 2x^3 - 3x^2 + 5x - 1 with respect to x.",
      answerKeys: [
        {
          value: "x^4 - x^3 + (5/2)x^2 - x + C",
          correct: false,
        },
        {
          value: "x^3 - x^2 + (5/2)x - x + C",
          correct: false,
        },
        {
          value: "x^4 - x^3 + (5/2)x^2 - x + C",
          correct: true,
        },
        {
          value: "x^4 - x^3 + (5/2)x^2 - x^2 + C",
          correct: false,
        },
      ],
    },
    // question no. 3
    {
      question: "What is the limit of (e^x - 1) / x as x approaches 0?",
      answerKeys: [
        {
          value: "0",
          correct: false,
        },
        {
          value: "1",
          correct: true,
        },
        {
          value: "e",
          correct: false,
        },
        {
          value: "∞",
          correct: false,
        },
      ],
    },
    // question no. 4
    {
      question:
        "In calculus, what is the derivative of the natural logarithm function, ln(x)?",
      answerKeys: [
        {
          value: "1/x",
          correct: true,
        },
        {
          value: "x",
          correct: false,
        },
        {
          value: "0",
          correct: false,
        },
        {
          value: "-1/x",
          correct: false,
        },
      ],
    },
    // question no. 5
    {
      question:
        "Calculate the integral of the function h(x) = 4x^4 - 2x^3 + 3x^2 - 5x + 2 with respect to x.",
      answerKeys: [
        {
          value: "x^5 - (1/2)x^4 + x^3 - (5/2)x^2 + 2x + C",
          correct: true,
        },
        {
          value: "2x^5 - x^4 + 3x^3 - 5x^2 + 2x + C",
          correct: false,
        },
        {
          value: "4x^5 - 2x^4 + 3x^3 - 5x^2 + 2x + C",
          correct: false,
        },
        {
          value: "x^5 - x^4 + x^3 - x^2 + 2x + C",
          correct: false,
        },
      ],
    },
    // question no. 6
    {
      question:
        "What is the derivative of the function k(x) = √x with respect to x?",
      answerKeys: [
        {
          value: "1/(2√x)",
          correct: false,
        },
        {
          value: "√x",
          correct: true,
        },
        {
          value: "1/(2√x",
          correct: false,
        },
        {
          value: "1/√x",
          correct: false,
        },
      ],
    },
    // question no. 7
    {
      question:
        "Calculate the integral of the function m(x) = e^(3x) with respect to x.",
      answerKeys: [
        {
          value: "(1/3)e^(3x) + C",
          correct: false,
        },
        {
          value: "e^(3x)",
          correct: true,
        },
        {
          value: "3e^(3x) + C",
          correct: false,
        },
        {
          value: "e^(3x)/3 + C",
          correct: false,
        },
      ],
    },
    // question no. 8
    {
      question: "Find the limit of (sin(2x)/x) as x approaches 0.",
      answerKeys: [
        {
          value: "1",
          correct: false,
        },
        {
          value: "2",
          correct: true,
        },
        {
          value: "0",
          correct: false,
        },
        {
          value: "∞",
          correct: false,
        },
      ],
    },
  ],
};

module.exports = BasicCalculus;
