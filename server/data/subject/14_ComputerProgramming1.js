const ICT = require("../strand/ICT");

const PROGRAMMING = require("../subjectType/PROGRAMMING");

const ComputerProgramming1 = {
  associatedSubjectType: PROGRAMMING.name,
  associatedStrands: [ICT.name],

  name: "Computer Programming 1 (JAVA)",
  description:
    "Foundational course that equips students with the knowledge and skills to write, test, and debug Java programs. It serves as a stepping stone for students who want to pursue further studies in computer science, software engineering, or other related fields and prepares them to tackle more complex programming challenges in the future.",
  imagePath: "uploads\\prod\\subject\\14.jpg",

  questions: [
    // question no. 1
    {
      question: "Which of the following is a fundamental data type in Java?",
      answerKeys: [
        {
          value: "int",
          correct: true,
        },
        {
          value: "string",
          correct: false,
        },
        {
          value: "float",
          correct: false,
        },
        {
          value: "array",
          correct: false,
        },
      ],
    },
    // question no. 2
    {
      question:
        'In Java, what is the purpose of the "public static void main(String[] args)" method?',
      answerKeys: [
        {
          value: "To declare variables",
          correct: false,
        },
        {
          value: "To print text to the console",
          correct: false,
        },
        {
          value: "To specify the entry point of a Java program",
          correct: true,
        },
        {
          value: "To create arrays",
          correct: false,
        },
      ],
    },
    // question no. 3
    {
      question: 'What is the result of the following Java code: "5 + 3 * 2"?',
      answerKeys: [
        {
          value: "10",
          correct: false,
        },
        {
          value: "16",
          correct: true,
        },
        {
          value: "26",
          correct: false,
        },
        {
          value: "11",
          correct: false,
        },
      ],
    },
    // question no. 4
    {
      question: 'In Java, what does the "if" statement do?',
      answerKeys: [
        {
          value: "It declares a variable.",
          correct: false,
        },
        {
          value: "It defines a class.",
          correct: false,
        },
        {
          value:
            "It allows conditional execution of code based on a condition.",
          correct: true,
        },
        {
          value: "It prints text to the console.",
          correct: false,
        },
      ],
    },
    // question no. 5
    {
      question: "Which keyword is used to create a subclass in Java?",
      answerKeys: [
        {
          value: "class ",
          correct: false,
        },
        {
          value: "super",
          correct: false,
        },
        {
          value: "extends ",
          correct: true,
        },
        {
          value: "this",
          correct: false,
        },
      ],
    },
    // question no. 6
    {
      question: 'In Java, what is the purpose of the "new" keyword?',
      answerKeys: [
        {
          value: "To delete objects",
          correct: false,
        },
        {
          value: "To create instances of a class",
          correct: true,
        },
        {
          value: "To print messages to the console",
          correct: false,
        },
        {
          value: "To declare variables",
          correct: false,
        },
      ],
    },
    // question no. 7
    {
      question:
        "Which loop in Java is used for iterating over a range of values?",
      answerKeys: [
        {
          value: "for",
          correct: true,
        },
        {
          value: "while",
          correct: false,
        },
        {
          value: "if",
          correct: false,
        },
        {
          value: "switch",
          correct: false,
        },
      ],
    },
    // question no. 8
    {
      question:
        "What is the default value of an instance variable in Java if it is not explicitly initialized?",
      answerKeys: [
        {
          value: "0",
          correct: false,
        },
        {
          value: "null",
          correct: true,
        },
        {
          value: "false",
          correct: false,
        },
        {
          value: "undefined",
          correct: false,
        },
      ],
    },
    // question no. 9
    {
      question:
        'What is the primary function of the "break" statement in Java?',
      answerKeys: [
        {
          value: "To exit a loop or switch statement",
          correct: true,
        },
        {
          value: "To create a new instance of a class",
          correct: false,
        },
        {
          value: "To declare a new method",
          correct: false,
        },
        {
          value: "To print a message to the console",
          correct: false,
        },
      ],
    },
    // question no. 10
    {
      question:
        "Which Java operator is used to compare two values for equality?",
      answerKeys: [
        {
          value: "==",
          correct: false,
        },
        {
          value: "=",
          correct: false,
        },
        {
          value: "!=",
          correct: false,
        },
        {
          value: ".equals()",
          correct: true,
        },
      ],
    },
  ],
};

module.exports = ComputerProgramming1;
