const ABM = require("../strand/ABM");

const MATH = require("../subjectType/MATH");

const BusinessMath = {
  associatedSubjectType: MATH.name,
  associatedStrands: [ABM.name],

  name: "Business Math",
  description:
    "A specialized branch of mathematics that focuses on mathematical concepts and techniques that are commonly used in various business and financial contexts. This field of mathematics is specifically tailored to meet the quantitative needs of businesses, organizations, and individuals involved in commerce, finance, and economics.",
  imagePath: "uploads\\prod\\subject\\03.jpg",

  questions: [
    // question no. 1
    {
      question:
        "What is the formula for calculating the compound interest on an investment or loan?",
      answerKeys: [
        {
          value: "P = A(1 + rt)",
          correct: false,
        },
        {
          value: "A = P(1 + rt)",
          correct: false,
        },
        {
          value: "A = P(1 + r/n)^(nt)",
          correct: true,
        },
        {
          value: "P = A(1 + r/n)^(nt)",
          correct: false,
        },
      ],
    },
    // question no. 2
    {
      question:
        "Which of the following is a measure of a company's profitability?",
      answerKeys: [
        {
          value: "Accounts receivable turnover",
          correct: false,
        },
        {
          value: "Gross profit margin",
          correct: false,
        },
        {
          value: "Debt-to-equity ratio",
          correct: false,
        },
        {
          value: "Return on equity",
          correct: true,
        },
      ],
    },
    // question no. 3
    {
      question:
        "In a business context, what does ROI (Return on Investment) represent?",
      answerKeys: [
        {
          value: "Revenue generated from sales",
          correct: false,
        },
        {
          value: "The profit margin of a company",
          correct: false,
        },
        {
          value: "The percentage return on an investment",
          correct: true,
        },
        {
          value: "The cost of acquiring new customers",
          correct: false,
        },
      ],
    },
    // question no. 4
    {
      question:
        "What is the formula for calculating the break-even point in units for a business?",
      answerKeys: [
        {
          value:
            "Break-even units = Fixed costs / (Selling price per unit - Variable cost per unit)",
          correct: true,
        },
        {
          value:
            "Break-even units = Variable cost per unit / Selling price per unit",
          correct: false,
        },
        {
          value: "Break-even units = Fixed costs / Selling price per unit",
          correct: false,
        },
        {
          value: "Break-even units = Total costs / Selling price per unit",
          correct: false,
        },
      ],
    },
    // question no. 5
    {
      question:
        "What financial ratio measures a company's ability to meet its short-term financial obligations?",
      answerKeys: [
        {
          value: "Debt-to-equity ratio",
          correct: false,
        },
        {
          value: "Return on assets",
          correct: false,
        },
        {
          value: "Current ratio",
          correct: true,
        },
        {
          value: "Inventory turnover",
          correct: false,
        },
      ],
    },
    // question no. 6
    {
      question:
        "In business math, what is the formula for calculating the net profit of a company?",
      answerKeys: [
        {
          value: "Net profit = Gross profit - Operating expenses",
          correct: true,
        },
        {
          value: "Net profit = Revenue - Cost of goods sold",
          correct: false,
        },
        {
          value: "Net profit = Gross profit + Taxes",
          correct: false,
        },
        {
          value: "Net profit = Operating expenses - Revenue",
          correct: false,
        },
      ],
    },
    // question no. 7
    {
      question: "What is the purpose of a cash flow statement in business?",
      answerKeys: [
        {
          value: "To show a company's net profit for a specific period",
          correct: false,
        },
        {
          value: "To analyze the market share of a company",
          correct: false,
        },
        {
          value: "To track the movement of cash into and out of a business",
          correct: true,
        },
        {
          value: "To calculate the return on investment (ROI)",
          correct: false,
        },
      ],
    },
  ],
};

module.exports = BusinessMath;
