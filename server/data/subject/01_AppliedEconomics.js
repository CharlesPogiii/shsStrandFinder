const ABM = require("../strand/ABM");

const MARKETING = require("../subjectType/MARKETING");

const AppliedEconomics = {
  associatedSubjectType: MARKETING.name,
  associatedStrands: [ABM.name],

  name: "Applied Economics",
  description:
    "A subfield of economics that focuses on the practical application of economic theories and principles to real-world issues and problems. It involves the use of economic analysis and tools to understand and address various economic and policy-related challenges.",
  imagePath: "uploads\\prod\\subject\\01.webp",

  questions: [
    // question no. 1
    {
      question: "What is the primary focus of macroeconomics?",
      answerKeys: [
        {
          value: "Micro-level decision-making by individuals",
          correct: false,
        },
        {
          value: "Study of individual firms and industries",
          correct: false,
        },
        {
          value: "Overall behavior of the economy",
          correct: true,
        },
        {
          value: "International trade patterns",
          correct: false,
        },
      ],
    },
    // question no. 2
    {
      question: "In economics, what does GDP stand for?",
      answerKeys: [
        {
          value: "Gross Domestic Profit",
          correct: false,
        },
        {
          value: "General Development Program",
          correct: false,
        },
        {
          value: "Gross Domestic Product",
          correct: true,
        },
        {
          value: "Growth and Distribution Principle",
          correct: false,
        },
      ],
    },
    // question no. 3
    {
      question: "Which of the following is an example of a regressive tax?",
      answerKeys: [
        {
          value: "Income tax",
          correct: false,
        },
        {
          value: "Property tax",
          correct: false,
        },
        {
          value: "Sales tax",
          correct: true,
        },
        {
          value: "Corporate tax",
          correct: false,
        },
      ],
    },
    // question no. 4
    {
      question: "What is the main goal of fiscal policy in economics?",
      answerKeys: [
        {
          value: "Regulating the money supply",
          correct: false,
        },
        {
          value: "Controlling inflation",
          correct: false,
        },
        {
          value: "Managing government revenue and expenditure",
          correct: true,
        },
        {
          value: "Promoting international trade",
          correct: false,
        },
      ],
    },
    // question no. 5
    {
      question:
        "Which economic indicator measures the average change in prices paid by consumers for a basket of goods and services?",
      answerKeys: [
        {
          value: "Inflation rate",
          correct: true,
        },
        {
          value: "GDP growth rate",
          correct: false,
        },
        {
          value: "Unemployment rate",
          correct: false,
        },
        {
          value: "Exchange rate",
          correct: false,
        },
      ],
    },
    // question no. 6
    {
      question:
        "What term is used in economics to describe the maximum amount that a consumer is willing to pay for a product or service?",
      answerKeys: [
        {
          value: "Marginal cost",
          correct: false,
        },
        {
          value: "Price floor",
          correct: false,
        },
        {
          value: "Consumer surplus",
          correct: true,
        },
        {
          value: "Elasticity",
          correct: false,
        },
      ],
    },
    // question no. 7
    {
      question: "In economics, what is the law of demand?",
      answerKeys: [
        {
          value:
            "As the price of a good increases, the quantity demanded increases.",
          correct: false,
        },
        {
          value:
            "As the price of a good decreases, the quantity demanded decreases",
          correct: false,
        },
        {
          value:
            "As the price of a good increases, the quantity demanded decreases.",
          correct: true,
        },
        {
          value:
            "As the price of a good decreases, the quantity demanded remains constant.",
          correct: false,
        },
      ],
    },
  ],
};

module.exports = AppliedEconomics;
