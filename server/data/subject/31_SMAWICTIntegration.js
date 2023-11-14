const SMAW = require("../strand/SMAW");
const ICT = require("../strand/ICT");

const TECHNICAL = require("../subjectType/TECHNICAL");

const SMAWICTIntegration = {
  associatedSubjectType: TECHNICAL.name,
  associatedStrands: [SMAW.name, ICT.name],

  name: "SMAW and ICT Integration",
  description:
    "Focuses on the use of technology, particularly computers and digital systems, for processing, managing, and communicating information. ICT education provides students with a broad range of practical skills and knowledge related to technology, as well as an understanding of its applications in various fields.",
  imagePath: "uploads\\prod\\subject\\31.webp",

  questions: [
    // question no. 1
    {
      question:
        "How can ICT be used in the context of SMAW to improve efficiency?",
      answerKeys: [
        {
          value: "By welding using a keyboard and mouse",
          correct: false,
        },
        {
          value: "By analyzing welding data in real-time using software",
          correct: true,
        },
        {
          value: "By using a smartphone to control welding machines",
          correct: false,
        },
        {
          value: "By printing welding instructions",
          correct: false,
        },
      ],
    },
    // question no. 2
    {
      question:
        "In an integrated SMAW-ICT environment, what does real-time monitoring and control of welding parameters enable?",
      answerKeys: [
        {
          value: "Faster typing speed",
          correct: false,
        },
        {
          value: "Greater safety",
          correct: false,
        },
        {
          value: "Improved welding quality",
          correct: true,
        },
        {
          value: "Enhanced screen resolution",
          correct: false,
        },
      ],
    },
    // question no. 3
    {
      question:
        "How can ICT tools help with the documentation and reporting of welding projects in SMAW?",
      answerKeys: [
        {
          value: "By sending text messages to coworkers",
          correct: false,
        },
        {
          value: "By creating digital weld logs and reports",
          correct: true,
        },
        {
          value: "By installing new operating systems",
          correct: false,
        },
        {
          value: "By improving wireless connectivity",
          correct: false,
        },
      ],
    },
    // question no. 4
    {
      question:
        "Which type of software is commonly used in the integration of ICT with SMAW for welding simulations and training?",
      answerKeys: [
        {
          value: "Video editing software",
          correct: false,
        },
        {
          value: "Welding management software",
          correct: true,
        },
        {
          value: "Graphics design software",
          correct: false,
        },
        {
          value: "Web development software",
          correct: false,
        },
      ],
    },
    // question no. 5
    {
      question:
        "How can ICT contribute to remote troubleshooting and support for welding processes in SMAW?",
      answerKeys: [
        {
          value: "By enhancing the color quality of displays",
          correct: false,
        },
        {
          value: "By sending automatic text messages",
          correct: false,
        },
        {
          value: "By enabling video conferencing and remote access",
          correct: true,
        },
        {
          value: "By increasing printer speed",
          correct: false,
        },
      ],
    },
    // question no. 6
    {
      question:
        "In an integrated SMAW-ICT environment, how can remote welding quality control be achieved?",
      answerKeys: [
        {
          value: "By increasing welding speed",
          correct: false,
        },
        {
          value: "By using specialized welding gloves",
          correct: false,
        },
        {
          value: "By analyzing welding data using software",
          correct: true,
        },
        {
          value: "By sending text messages to coworkers",
          correct: false,
        },
      ],
    },
    // question no. 7
    {
      question:
        "What role can ICT play in recording and archiving welding inspection reports?",
      answerKeys: [
        {
          value: "By creating paper-based reports",
          correct: false,
        },
        {
          value: "By using typewriters",
          correct: false,
        },
        {
          value: "By scanning paper documents",
          correct: false,
        },
        {
          value: "By creating digital reports and storing them electronically",
          correct: true,
        },
      ],
    },
    // question no. 8
    {
      question:
        "What is the primary advantage of using welding management software in the integration of SMAW and ICT?",
      answerKeys: [
        {
          value: "To improve internet speed",
          correct: false,
        },
        {
          value: "To reduce welding speed",
          correct: false,
        },
        {
          value: "To enhance data analysis and quality control",
          correct: true,
        },
        {
          value: "To make welding machines quieter",
          correct: false,
        },
      ],
    },
    // question no. 9
    {
      question:
        "How can remote troubleshooting and support benefit from the integration of ICT with SMAW operations?",
      answerKeys: [
        {
          value: "By sending telegrams",
          correct: false,
        },
        {
          value: "By using telephones",
          correct: false,
        },
        {
          value: "By conducting video conferences and remote access",
          correct: true,
        },
        {
          value: "By using carrier pigeons",
          correct: false,
        },
      ],
    },
    // question no. 10
    {
      question:
        "What is the significance of real-time welding data analysis in an integrated SMAW-ICT system?",
      answerKeys: [
        {
          value: "To improve screen resolution",
          correct: false,
        },
        {
          value: "To adjust welding electrode composition",
          correct: false,
        },
        {
          value: "To enhance typing speed",
          correct: false,
        },
        {
          value: "To detect and address welding defects promptly",
          correct: true,
        },
      ],
    },
  ],
};

module.exports = SMAWICTIntegration;
