const SMAW = require("../strand/SMAW");
const ICT = require("../strand/ICT");

const TECHNICAL = require("../subjectType/TECHNICAL");

const ICTs = {
  associatedSubjectType: TECHNICAL.name,
  associatedStrands: [SMAW.name, ICT.name],

  name: "Information and Communication Technology (ICT)",
  description:
    "Focuses on the use of technology, particularly computers and digital systems, for processing, managing, and communicating information. ICT education provides students with a broad range of practical skills and knowledge related to technology, as well as an understanding of its applications in various fields.",
  imagePath: "uploads\\prod\\subject\\30.jpg",

  questions: [
    // question no. 1
    {
      question: "What does ICT stand for?",
      answerKeys: [
        {
          value: "Internet and Computer Technology",
          correct: false,
        },
        {
          value: "Information and Communication Technology",
          correct: true,
        },
        {
          value: "Interactive Computing Tools",
          correct: false,
        },
        {
          value: "Information and Creative Thinking",
          correct: false,
        },
      ],
    },
    // question no. 2
    {
      question: "Which of the following is an example of input device in ICT?",
      answerKeys: [
        {
          value: "Printer",
          correct: false,
        },
        {
          value: "Monitor",
          correct: false,
        },
        {
          value: "Keyboard",
          correct: true,
        },
        {
          value: "Speaker",
          correct: false,
        },
      ],
    },
    // question no. 3
    {
      question: "What is a computer network?",
      answerKeys: [
        {
          value: "A collection of web pages",
          correct: false,
        },
        {
          value: "A group of interconnected computers",
          correct: true,
        },
        {
          value: "A software application",
          correct: false,
        },
        {
          value: "An online chat room",
          correct: false,
        },
      ],
    },
    // question no. 4
    {
      question: "What is the primary function of a router in a network?",
      answerKeys: [
        {
          value: "To connect the computer to the internet",
          correct: false,
        },
        {
          value: "To store files and documents",
          correct: false,
        },
        {
          value: "To direct data between devices on a network",
          correct: true,
        },
        {
          value: "To display web pages",
          correct: false,
        },
      ],
    },
    // question no. 5
    {
      question: 'What does "URL" stand for in the context of the internet?',
      answerKeys: [
        {
          value: "Uniform Resource Locator",
          correct: true,
        },
        {
          value: "Universal Routing Link",
          correct: false,
        },
        {
          value: "Unified Registration List",
          correct: false,
        },
        {
          value: "Universal Reference Language",
          correct: false,
        },
      ],
    },
    // question no. 6
    {
      question: "What is a computer network topology?",
      answerKeys: [
        {
          value: "A way to represent data using symbols",
          correct: false,
        },
        {
          value: "The arrangement of devices and connections in a network",
          correct: true,
        },
        {
          value: "A programming language",
          correct: false,
        },
        {
          value: "The physical size of a computer",
          correct: false,
        },
      ],
    },
    // question no. 7
    {
      question: "What is the role of a firewall in network security?",
      answerKeys: [
        {
          value: "To provide internet access",
          correct: false,
        },
        {
          value: "To block unauthorized access and threats",
          correct: true,
        },
        {
          value: "To enhance network speed",
          correct: false,
        },
        {
          value: "To store data",
          correct: false,
        },
      ],
    },
    // question no. 8
    {
      question:
        "Which component of a computer system stores data and programs even when the computer is turned off?",
      answerKeys: [
        {
          value: "CPU",
          correct: false,
        },
        {
          value: "RAM",
          correct: false,
        },
        {
          value: "Hard Drive",
          correct: true,
        },
        {
          value: "Monitor",
          correct: false,
        },
      ],
    },
    // question no. 9
    {
      question: 'What does "HTTP" stand for in web addresses?',
      answerKeys: [
        {
          value: "High Traffic Transfer Protocol",
          correct: false,
        },
        {
          value: "Hyperlink Transfer Technology",
          correct: false,
        },
        {
          value: "Hypertext Transfer Protocol",
          correct: true,
        },
        {
          value: "Hyper Transfer Technique",
          correct: false,
        },
      ],
    },
    // question no. 10
    {
      question:
        "What is the term for a piece of software that is designed to cause damage to a computer system?",
      answerKeys: [
        {
          value: "Cookie",
          correct: false,
        },
        {
          value: "Firewall",
          correct: false,
        },
        {
          value: "Virus",
          correct: true,
        },
        {
          value: "Browser ",
          correct: false,
        },
      ],
    },
  ],
};

module.exports = ICTs;
