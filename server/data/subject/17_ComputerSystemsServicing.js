const ICT = require("../strand/ICT");

const TECHNICAL = require("../subjectType/TECHNICAL");

const ComputerSystemsServicing = {
  associatedSubjectType: TECHNICAL.name,
  associatedStrands: [ICT.name],

  name: "Computer Systems Servicing",
  description:
    "A vocational or technical subject that focuses on the installation, maintenance, and repair of computer systems and their components. This course is typically part of vocational or technical education programs and prepares students for careers in computer hardware and IT support.",
  imagePath: "uploads\\prod\\subject\\17.jpg",

  questions: [
    // question no. 1
    {
      question:
        'What does the acronym "CPU" stand for in the context of computer systems?',
      answerKeys: [
        {
          value: "Central Processing Unit",
          correct: true,
        },
        {
          value: "Computer Programming Unit",
          correct: false,
        },
        {
          value: "Central Power Unit",
          correct: false,
        },
        {
          value: "Computer Peripheral Unit",
          correct: false,
        },
      ],
    },
    // question no. 2
    {
      question:
        "In computer systems, what is the primary function of the BIOS (Basic Input/Output System)?",
      answerKeys: [
        {
          value: "To control the display settings",
          correct: false,
        },
        {
          value: "To store data files",
          correct: false,
        },
        {
          value:
            "To manage hardware initialization and provide essential instructions for the computer to start",
          correct: true,
        },
        {
          value: "To connect to the internet",
          correct: false,
        },
      ],
    },
    // question no. 3
    {
      question:
        "Which component in a computer is responsible for storing data even when the power is turned off?",
      answerKeys: [
        {
          value: "RAM",
          correct: false,
        },
        {
          value: "Hard Drive",
          correct: false,
        },
        {
          value: "CMOS Battery",
          correct: true,
        },
        {
          value: "CPU",
          correct: false,
        },
      ],
    },
    // question no. 4
    {
      question: 'What does the term "RAM" stand for in computer systems?',
      answerKeys: [
        {
          value: "Random Access Memory",
          correct: true,
        },
        {
          value: "Read-Only Memory",
          correct: false,
        },
        {
          value: "Rapid Access Module",
          correct: false,
        },
        {
          value: "Reliable Action Memory",
          correct: false,
        },
      ],
    },
    // question no. 5
    {
      question: 'In computer systems, what does the "operating system" do?',
      answerKeys: [
        {
          value:
            "It manages hardware resources and provides services for software",
          correct: true,
        },
        {
          value: "It runs office applications",
          correct: false,
        },
        {
          value: "It creates backups of data",
          correct: false,
        },
        {
          value: "It designs user interfaces",
          correct: false,
        },
      ],
    },
    // question no. 6
    {
      question: "What is the function of a graphics card in a computer system?",
      answerKeys: [
        {
          value: "To store text documents",
          correct: false,
        },
        {
          value: "To manage network connections",
          correct: false,
        },
        {
          value: "To process and render graphics and video",
          correct: true,
        },
        {
          value: "To run antivirus software",
          correct: false,
        },
      ],
    },
    // question no. 7
    {
      question:
        'What does the term "motherboard" refer to in a computer system?',
      answerKeys: [
        {
          value:
            "The main circuit board that houses the CPU, RAM, and other essential components",
          correct: true,
        },
        {
          value: "The case or enclosure of the computer",
          correct: false,
        },
        {
          value: "A device for printing documents",
          correct: false,
        },
        {
          value: "The operating system of the computer",
          correct: false,
        },
      ],
    },
    // question no. 8
    {
      question: 'In computer systems, what does the "peripheral" mean?',
      answerKeys: [
        {
          value: "An essential computer component",
          correct: false,
        },
        {
          value:
            "An external device connected to the computer, such as a printer or mouse",
          correct: true,
        },
        {
          value: "The CPU of the computer",
          correct: false,
        },
        {
          value: "A type of software",
          correct: false,
        },
      ],
    },
    // question no. 9
    {
      question:
        "What is the role of a power supply unit (PSU) in a computer system?",
      answerKeys: [
        {
          value: "To provide electrical power to the monitor",
          correct: false,
        },
        {
          value: "To cool down the CPU",
          correct: false,
        },
        {
          value:
            "To convert electrical energy from the outlet into the necessary voltages for the computer's components",
          correct: true,
        },
        {
          value: "To control the internet connection",
          correct: false,
        },
      ],
    },
    // question no. 10
    {
      question: "What is the purpose of the CMOS battery in a computer system?",
      answerKeys: [
        {
          value:
            "To maintain the computer's internal clock and BIOS settings even when the computer is turned off",
          correct: true,
        },
        {
          value: "To increase the computer's processing speed",
          correct: false,
        },
        {
          value: "To protect against viruses",
          correct: false,
        },
        {
          value: "To store application software",
          correct: false,
        },
      ],
    },
  ],
};

module.exports = ComputerSystemsServicing;
