const ABM = require("../strand/ABM");

const MATH = require("../subjectType/MATH");

const FundamentalABM = {
  associatedSubjectType: MATH.name,
  associatedStrands: [ABM.name],

  name: "Fundamentals of Accountancy, Business and Management",
  description:
    "A set of subjects or courses commonly offered as part of the academic curriculum in the Philippines, particularly in the Senior High School (SHS) program. These courses are designed to provide students with a foundational understanding of key concepts related to accounting, business, and management.",
  imagePath: "uploads\\prod\\subject\\04.jpg",

  questions: [
    // question no. 1
    {
      question:
        "What financial statement provides an overview of a company's financial position at a specific point in time?",
      answerKeys: [
        {
          value: "Income statement",
          correct: false,
        },
        {
          value: "Cash flow statement",
          correct: false,
        },
        {
          value: " Balance sheet",
          correct: true,
        },
        {
          value: "Statement of retained earnings",
          correct: false,
        },
      ],
    },
    // question no. 2
    {
      question:
        "What does ROI stand for in the context of business and finance?",
      answerKeys: [
        {
          value: "Return on Investment",
          correct: true,
        },
        {
          value: "Revenue of Income",
          correct: false,
        },
        {
          value: "Rate of Inflation",
          correct: false,
        },
        {
          value: "Risk of Investment",
          correct: false,
        },
      ],
    },
    // question no. 3
    {
      question:
        "Which of the following is an example of a fixed cost for a business?",
      answerKeys: [
        {
          value: "Employee wages",
          correct: false,
        },
        {
          value: "Rent for office space",
          correct: true,
        },
        {
          value: "Utility bills",
          correct: false,
        },
        {
          value: "Cost of raw materials",
          correct: false,
        },
      ],
    },
    // question no. 4
    {
      question: "What is the primary purpose of a business plan?",
      answerKeys: [
        {
          value: "Record daily transactions",
          correct: false,
        },
        {
          value: "Secure a bank loan",
          correct: false,
        },
        {
          value: "Outline the company's goals and strategies",
          correct: true,
        },
        {
          value: "Pay taxes",
          correct: false,
        },
      ],
    },
    // question no. 5
    {
      question:
        "In accounting, which financial statement shows a company's revenues and expenses over a specific period?",
      answerKeys: [
        {
          value: "Balance sheet",
          correct: false,
        },
        {
          value: "Income statement",
          correct: true,
        },
        {
          value: "Statement of cash flows",
          correct: false,
        },
        {
          value: "Statement of changes in equity",
          correct: false,
        },
      ],
    },
    // question no. 6
    {
      question: "What does SWOT analysis stand for in business management?",
      answerKeys: [
        {
          value: "Strengths, Weaknesses, Opportunities, Threats",
          correct: true,
        },
        {
          value: "Sales, Workforce, Operations, Trends",
          correct: false,
        },
        {
          value: "Shareholders, Wealth, Organizational Tactic",
          correct: false,
        },
        {
          value: "Service, Waste, Orders, Taxes",
          correct: false,
        },
      ],
    },
    // question no. 7
    {
      question:
        "What is the main function of human resource management in a business?",
      answerKeys: [
        {
          value: "Marketing and advertising",
          correct: false,
        },
        {
          value: "Product development",
          correct: false,
        },
        {
          value: "Recruitment, training, and employee management",
          correct: true,
        },
        {
          value: "Financial analysis and planning",
          correct: false,
        },
      ],
    },
  ],
};

module.exports = FundamentalABM;
