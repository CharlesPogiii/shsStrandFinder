const ABM = require("../strand/ABM");

const MARKETING = require("../subjectType/MARKETING");

const BusinessFinance = {
  associatedSubjectType: MARKETING.name,
  associatedStrands: [ABM.name],

  name: "Business Finance",
  description:
    "A specialized area of finance that focuses on the financial management and decision-making aspects of businesses and organizations. It deals with the acquisition, allocation, and management of financial resources to achieve the goals and objectives of a business.",
  imagePath: "uploads\\prod\\subject\\02.jpg",

  questions: [
    // question no. 1
    {
      question:
        "What is the term for the cost of borrowing money in the financial world?",
      answerKeys: [
        {
          value: "Investment yield",
          correct: false,
        },
        {
          value: "Interest rate",
          correct: true,
        },
        {
          value: "Stock dividend",
          correct: false,
        },
        {
          value: "Capital gain",
          correct: false,
        },
      ],
    },
    // question no. 2
    {
      question:
        "Which financial metric is used to evaluate a company's ability to pay its long-term debt?",
      answerKeys: [
        {
          value: "Earnings per share",
          correct: false,
        },
        {
          value: "Debt-to-equity ratio",
          correct: true,
        },
        {
          value: "Inventory turnover",
          correct: false,
        },
        {
          value: "Gross profit margin",
          correct: false,
        },
      ],
    },
    // question no. 3
    {
      question:
        "What is the primary function of a financial manager in a company?",
      answerKeys: [
        {
          value: "Product development",
          correct: false,
        },
        {
          value: "Asset management",
          correct: false,
        },
        {
          value: "Maximizing shareholder value",
          correct: true,
        },
        {
          value: "Marketing and advertising",
          correct: false,
        },
      ],
    },
    // question no. 4
    {
      question: 'What does the term "liquidity" refer to in finance?',
      answerKeys: [
        {
          value:
            "The ease with which an asset can be quickly converted into cash",
          correct: true,
        },
        {
          value: "The total value of a company's assets",
          correct: false,
        },
        {
          value: "The interest rate on a loan",
          correct: false,
        },
        {
          value: "The stability of a stock's price",
          correct: false,
        },
      ],
    },
    // question no. 5
    {
      question:
        "Which financial statement provides a snapshot of a company's financial position at a specific point in time?",
      answerKeys: [
        {
          value: "Income statement",
          correct: false,
        },
        {
          value: "Statement of cash flows",
          correct: false,
        },
        {
          value: "Balance sheet",
          correct: true,
        },
        {
          value: "Statement of retained earnings",
          correct: false,
        },
      ],
    },
    // question no. 6
    {
      question:
        "What is the formula for calculating the present value of a future cash flow?",
      answerKeys: [
        {
          value: "PV = FV / (1 + r)^t",
          correct: false,
        },
        {
          value: "PV = FV * (1 + r)^t",
          correct: false,
        },
        {
          value: "PV = FV / (1 + r)^t",
          correct: true,
        },
        {
          value: "PV = FV * (1 - r)^t",
          correct: false,
        },
      ],
    },
    // question no. 7
    {
      question: "In finance, what is the concept of diversification?",
      answerKeys: [
        {
          value: "Investing in a single asset to maximize returns",
          correct: false,
        },
        {
          value: "Reducing risk by investing in a variety of assets",
          correct: true,
        },
        {
          value: "Borrowing money to finance investments",
          correct: false,
        },
        {
          value: "Predicting future market trends",
          correct: false,
        },
      ],
    },
  ],
};

module.exports = BusinessFinance;
