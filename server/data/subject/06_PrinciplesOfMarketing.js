const ABM = require("../strand/ABM");

const MARKETING = require("../subjectType/MARKETING");

const PrinciplesOfMarketing = {
  associatedSubjectType: MARKETING.name,
  associatedStrands: [ABM.name],

  name: "Principles of Marketing",
  description:
    "A foundational course or subject in the field of marketing. It provides an introduction to the fundamental concepts, theories, and practices that underlie the discipline of marketing.",
  imagePath: "uploads\\prod\\subject\\06.jpg",

  questions: [
    // question no. 1
    {
      question:
        "What is the marketing mix, often referred to as the 4Ps in marketing?",
      answerKeys: [
        {
          value: "Price, Product, Promotion, Positioning",
          correct: false,
        },
        {
          value: "Price, Product, Promotion, Publicity",
          correct: false,
        },
        {
          value: "Product, Promotion, Place, Price",
          correct: true,
        },
        {
          value: "Product, Place, Positioning, Publicity",
          correct: false,
        },
      ],
    },
    // question no. 2
    {
      question:
        "Which marketing strategy involves setting a high initial price for a new product with the intention of lowering it in the future?",
      answerKeys: [
        {
          value: "Price skimming",
          correct: false,
        },
        {
          value: "Price penetration",
          correct: true,
        },
        {
          value: "Cost-plus pricing",
          correct: false,
        },
        {
          value: "Value-based pricing",
          correct: false,
        },
      ],
    },
    // question no. 3
    {
      question:
        "What is the term for the process of identifying and segmenting potential customers based on their characteristics and behaviors?",
      answerKeys: [
        {
          value: "Mass marketing",
          correct: false,
        },
        {
          value: "Target marketing",
          correct: true,
        },
        {
          value: "Niche marketing",
          correct: false,
        },
        {
          value: "Guerrilla marketing",
          correct: false,
        },
      ],
    },
    // question no. 4
    {
      question:
        "Which of the following is a key element of a company's marketing communication strategy?",
      answerKeys: [
        {
          value: "Product development",
          correct: false,
        },
        {
          value: "Employee recruitment",
          correct: false,
        },
        {
          value: "Advertising and promotion",
          correct: true,
        },
        {
          value: "Financial planning",
          correct: false,
        },
      ],
    },
    // question no. 5
    {
      question: "In marketing, what is the purpose of a market analysis?",
      answerKeys: [
        {
          value: "Identifying customer preferences and pricing strategies",
          correct: false,
        },
        {
          value: "Analyzing the company's organizational structure",
          correct: false,
        },
        {
          value: "Evaluating the financial performance of the company",
          correct: false,
        },
        {
          value: "Understanding market trends, customer needs, and competitors",
          correct: true,
        },
      ],
    },
    // question no. 6
    {
      question:
        "What is the term for the process of designing, developing, and maintaining a positive corporate image and brand reputation?",
      answerKeys: [
        {
          value: "Product development",
          correct: false,
        },
        {
          value: "Public relations",
          correct: true,
        },
        {
          value: "Advertising and promotion",
          correct: false,
        },
        {
          value: "Inventory management",
          correct: false,
        },
      ],
    },
    // question no. 7
    {
      question:
        "Which concept in marketing involves the process of creating and delivering superior customer value to gain a competitive advantage?",
      answerKeys: [
        {
          value: "Mass marketing",
          correct: false,
        },
        {
          value: "Customer relationship management",
          correct: false,
        },
        {
          value: "Value marketing",
          correct: true,
        },
        {
          value: "Transactional marketing",
          correct: false,
        },
      ],
    },
  ],
};

module.exports = PrinciplesOfMarketing;
