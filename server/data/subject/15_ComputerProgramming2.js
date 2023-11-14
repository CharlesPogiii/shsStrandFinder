const ICT = require("../strand/ICT");

const PROGRAMMING = require("../subjectType/PROGRAMMING");

const ComputerProgramming2 = {
  associatedSubjectType: PROGRAMMING.name,
  associatedStrands: [ICT.name],

  name: "Computer Programming 1 (.NET)",
  description:
    "An intermediate-level programming course that builds on the foundations established in Computer Programming 1 (often using Java or another language) and introduces students to programming concepts and techniques using the .NET framework. .NET is a software framework developed by Microsoft and includes a wide range of tools and libraries for building various types of applications, making it a valuable skill for software development.",
  imagePath: "uploads\\prod\\subject\\15.jpg",

  questions: [
    // question no. 1
    {
      question:
        'In .NET programming, what is the purpose of the "using" directive?',
      answerKeys: [
        {
          value: "To create new variables",
          correct: false,
        },
        {
          value: "To include namespaces for the project",
          correct: true,
        },
        {
          value: "To declare classes",
          correct: false,
        },
        {
          value: "To define methods",
          correct: false,
        },
      ],
    },
    // question no. 2
    {
      question:
        "Which data type in .NET can hold decimal numbers with high precision?",
      answerKeys: [
        {
          value: "int",
          correct: false,
        },
        {
          value: "double",
          correct: false,
        },
        {
          value: "decimal",
          correct: true,
        },
        {
          value: "float",
          correct: false,
        },
      ],
    },
    // question no. 3
    {
      question:
        "What is the primary purpose of a constructor in .NET programming?",
      answerKeys: [
        {
          value: "To initialize variables",
          correct: true,
        },
        {
          value: "To declare methods",
          correct: false,
        },
        {
          value: "To define namespaces",
          correct: false,
        },
        {
          value: "To create objects",
          correct: false,
        },
      ],
    },
    // question no. 4
    {
      question: 'What does the acronym "GUI" stand for in .NET programming?',
      answerKeys: [
        {
          value: "General User Interaction",
          correct: false,
        },
        {
          value: "Graphical User Interface",
          correct: true,
        },
        {
          value: "Global User Integration",
          correct: false,
        },
        {
          value: "Grouped User Interface",
          correct: false,
        },
      ],
    },
    // question no. 5
    {
      question: "Which .NET class is used for handling exceptions and errors?",
      answerKeys: [
        {
          value: "System.Console",
          correct: false,
        },
        {
          value: "System.Data",
          correct: false,
        },
        {
          value: "System.Exception",
          correct: true,
        },
        {
          value: "System.Math",
          correct: false,
        },
      ],
    },
    // question no. 6
    {
      question: 'In .NET, what does the term "inheritance" refer to?',
      answerKeys: [
        {
          value: "The act of creating new objects",
          correct: false,
        },
        {
          value:
            "The process of one class acquiring the properties and methods of another class",
          correct: true,
        },
        {
          value: "The way data is stored in memory",
          correct: false,
        },
        {
          value: "The act of creating arrays",
          correct: false,
        },
      ],
    },
    // question no. 7
    {
      question:
        'What is the purpose of the "get" and "set" accessors in .NET properties?',
      answerKeys: [
        {
          value: "They are used to define the data type of a variable.",
          correct: false,
        },
        {
          value: "They are used to declare methods.",
          correct: false,
        },
        {
          value:
            "They are used to control the read and write access to a property.",
          correct: true,
        },
        {
          value: "They are used to create loops.",
          correct: false,
        },
      ],
    },
    // question no. 8
    {
      question: 'In .NET, what does "SQL" stand for?',
      answerKeys: [
        {
          value: "Structured Query Language",
          correct: true,
        },
        {
          value: "System Query Library",
          correct: false,
        },
        {
          value: "Script Query Language",
          correct: false,
        },
        {
          value: "Structured Question Language",
          correct: false,
        },
      ],
    },
    // question no. 9
    {
      question: "Which .NET data type is used to store text or characters?",
      answerKeys: [
        {
          value: "int",
          correct: false,
        },
        {
          value: "double",
          correct: false,
        },
        {
          value: "string",
          correct: false,
        },
        {
          value: "char",
          correct: false,
        },
      ],
    },
    // question no. 10
    {
      question:
        'What does the "async" and "await" keywords enable in .NET programming?',
      answerKeys: [
        {
          value: "Synchronous execution of code",
          correct: false,
        },
        {
          value: "Parallel processing of code",
          correct: false,
        },
        {
          value: "Asynchronous execution of code",
          correct: true,
        },
        {
          value: "Encryption of data",
          correct: false,
        },
      ],
    },
  ],
};

module.exports = ComputerProgramming2;
