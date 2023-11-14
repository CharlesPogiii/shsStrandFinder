const HUMSS = require("../strand/HUMSS");

const PHILOSOPHY = require("../subjectType/PHILOSOPHY");

const TNCT = {
  associatedSubjectType: PHILOSOPHY.name,
  associatedStrands: [HUMSS.name],

  name: "Trends, Networks, and Critical Thinking in the 21st Century Culture",
  description:
    "Interdisciplinary subject or course that examines the contemporary cultural, social, and technological landscape. It focuses on the analysis of current trends, the impact of networks and connectivity, and the development of critical thinking skills to navigate the complex challenges and opportunities of the 21st century.",
  imagePath: "uploads\\prod\\subject\\09.jpg",

  questions: [
    // question no. 1
    {
      question:
        "What term describes the phenomenon of people being interconnected through the internet, allowing information and ideas to spread rapidly?",
      answerKeys: [
        {
          value: "Analog culture",
          correct: false,
        },
        {
          value: "Digital divide",
          correct: false,
        },
        {
          value: "Social networking",
          correct: true,
        },
        {
          value: "Information age",
          correct: false,
        },
      ],
    },
    // question no. 2
    {
      question:
        "Which 21st-century technology trend focuses on the interconnectivity of everyday objects, allowing them to collect and exchange data?",
      answerKeys: [
        {
          value: "Artificial intelligence",
          correct: false,
        },
        {
          value: "Virtual reality",
          correct: false,
        },
        {
          value: "Internet of Things (IoT)",
          correct: true,
        },
        {
          value: "Blockchain",
          correct: false,
        },
      ],
    },
    // question no. 3
    {
      question: "Critical thinking involves which of the following?",
      answerKeys: [
        {
          value: "Accepting information at face value",
          correct: false,
        },
        {
          value: "Evaluating information and forming reasoned judgments",
          correct: true,
        },
        {
          value: "Memorizing facts without question",
          correct: false,
        },
        {
          value: "Avoiding all forms of technology",
          correct: false,
        },
      ],
    },
    // question no. 4
    {
      question:
        "What term refers to the ability to identify, evaluate, and communicate information and ideas in various media formats?",
      answerKeys: [
        {
          value: "Digital literacy",
          correct: true,
        },
        {
          value: "Technological isolation",
          correct: false,
        },
        {
          value: "Cyberbullying",
          correct: false,
        },
        {
          value: "Social exclusion",
          correct: false,
        },
      ],
    },
    // question no. 5
    {
      question:
        'In the context of 21st-century culture, what does the acronym "STEM" stand for?',
      answerKeys: [
        {
          value: "Science, Technology, Engineering, and Mathematics",
          correct: true,
        },
        {
          value: "Society, Technology, Ethics, and Media",
          correct: false,
        },
        {
          value: "Social Trends and Entertainment Media",
          correct: false,
        },
        {
          value: "Science, Teaching, Education, and Mathematics",
          correct: false,
        },
      ],
    },
  ],
};

module.exports = TNCT;
