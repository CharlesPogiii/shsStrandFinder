const ABM = require("../strand/ABM");

const MARKETING = require("../subjectType/MARKETING");

const OrganizationAndManagement = {
  associatedSubjectType: MARKETING.name,
  associatedStrands: [ABM.name],

  name: "Organization and Management",
  description:
    "A field of study and practice that focuses on understanding, designing, and effectively running organizations, including businesses, government agencies, non-profit organizations, and various institutions. It involves the planning, coordination, and supervision of resources, processes, and people to achieve the goals and objectives of the organization.",
  imagePath: "uploads\\prod\\subject\\05.jpg",

  questions: [
    // question no. 1
    {
      question:
        "What is the purpose of a SWOT analysis in the context of organizational management?",
      answerKeys: [
        {
          value: "Evaluating employee performance",
          correct: true,
        },
        {
          value:
            "Identifying strengths, weaknesses, opportunities, and threats",
          correct: false,
        },
        {
          value: "Assessing financial statements",
          correct: false,
        },
        {
          value: "Setting sales targets",
          correct: false,
        },
      ],
    },
    // question no. 2
    {
      question:
        "What leadership style focuses on making decisions with minimal input from team members?",
      answerKeys: [
        {
          value: "Autocratic leadership",
          correct: true,
        },
        {
          value: "Transformational leadership",
          correct: false,
        },
        {
          value: "Laissez-faire leadership",
          correct: false,
        },
        {
          value: "Servant leadership",
          correct: false,
        },
      ],
    },
    // question no. 3
    {
      question:
        "Which of the following is a function of human resource management in an organization?",
      answerKeys: [
        {
          value: "Marketing and advertising",
          correct: false,
        },
        {
          value: "Employee recruitment and training",
          correct: true,
        },
        {
          value: "Product development",
          correct: false,
        },
        {
          value: "Financial analysis and planning",
          correct: false,
        },
      ],
    },
    // question no. 4
    {
      question:
        "What is the purpose of a mission statement for an organization?",
      answerKeys: [
        {
          value: "Outlining short-term financial goals",
          correct: false,
        },
        {
          value: "Defining the core purpose and values of the organization",
          correct: true,
        },
        {
          value: "Identifying potential customers",
          correct: false,
        },
        {
          value: "Setting sales targets",
          correct: false,
        },
      ],
    },
    // question no. 5
    {
      question: "What is the primary role of a manager in an organization?",
      answerKeys: [
        {
          value: "Completing day-to-day tasks",
          correct: false,
        },
        {
          value: "Inspiring employees to work harder",
          correct: false,
        },
        {
          value:
            "Achieving organizational goals through effective planning, organizing, and controlling",
          correct: true,
        },
        {
          value: "Overseeing financial transactions",
          correct: false,
        },
      ],
    },
    // question no. 6
    {
      question:
        "What is a key function of quality management in an organization?",
      answerKeys: [
        {
          value: "Increasing employee turnover",
          correct: false,
        },
        {
          value: "Reducing the cost of products or services",
          correct: false,
        },
        {
          value:
            "Ensuring that products or services meet or exceed customer expectations",
          correct: true,
        },
        {
          value: "Maximizing shareholder value",
          correct: false,
        },
      ],
    },
    // question no. 7
    {
      question:
        'What does the term "supply chain management" involve in the context of organization and management?',
      answerKeys: [
        {
          value:
            "Managing the flow of goods and services from the producer to the consumer",
          correct: true,
        },
        {
          value: "Setting sales targets",
          correct: false,
        },
        {
          value: "Employee training and development",
          correct: false,
        },
        {
          value: "Financial analysis and planning",
          correct: false,
        },
      ],
    },
  ],
};

module.exports = OrganizationAndManagement;
