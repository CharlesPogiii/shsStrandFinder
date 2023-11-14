const SMAW = require("../strand/SMAW");
const ICT = require("../strand/ICT");

const TECHNICAL = require("../subjectType/TECHNICAL");

const SMAWICTSafety = {
  associatedSubjectType: TECHNICAL.name,
  associatedStrands: [SMAW.name, ICT.name],

  name: "SMAW and ICT Safety",
  description:
    "A specialized subject that focuses on ensuring the safe and secure use of technology in welding processes. Safety is paramount in welding, and the integration of ICT introduces additional considerations for protecting both personnel and digital assets.",
  imagePath: "uploads\\prod\\subject\\32.png",

  questions: [
    // question no. 1
    {
      question:
        "In the context of ICT and SMAW integration, how can proper data security measures help protect welding-related information?",
      answerKeys: [
        {
          value: "By making information accessible to everyone",
          correct: false,
        },
        {
          value: "By preventing unauthorized access and data breaches",
          correct: true,
        },
        {
          value: "By using older versions of software",
          correct: false,
        },
        {
          value: "By increasing internet speed",
          correct: false,
        },
      ],
    },
    // question no. 2
    {
      question:
        "How can ICT tools be used to promote safety in SMAW operations?",
      answerKeys: [
        {
          value: "By sharing welding photos on social media",
          correct: false,
        },
        {
          value: "By conducting safety training sessions online",
          correct: true,
        },
        {
          value: "By welding in crowded areas",
          correct: false,
        },
        {
          value: "By disabling safety alarms",
          correct: false,
        },
      ],
    },
    // question no. 3
    {
      question:
        "What is the primary reason for using safety gloves in SMAW, especially when using ICT tools?",
      answerKeys: [
        {
          value: "To type faster",
          correct: false,
        },
        {
          value: "To reduce data entry errors",
          correct: false,
        },
        {
          value: "To protect hands from heat and sparks",
          correct: true,
        },
        {
          value: "To improve internet connectivity",
          correct: false,
        },
      ],
    },
    // question no. 4
    {
      question:
        "How can ICT systems help manage and monitor the safety of welding operations in real-time?",
      answerKeys: [
        {
          value: "By sending postcards",
          correct: false,
        },
        {
          value: "By creating paper-based safety manuals",
          correct: false,
        },
        {
          value: "By using safety sensors and alarms",
          correct: true,
        },
        {
          value: "By playing safety videos",
          correct: false,
        },
      ],
    },
    // question no. 5
    {
      question:
        "What is the main purpose of safety glasses in the context of SMAW and ICT integration?",
      answerKeys: [
        {
          value: "To improve screen resolution",
          correct: false,
        },
        {
          value: "To protect eyes from welding sparks and debris",
          correct: false,
        },
        {
          value: "To connect to the internet",
          correct: false,
        },
        {
          value: "To increase typing speed",
          correct: false,
        },
      ],
    },
    // question no. 6
    {
      question:
        "Why is data encryption important for protecting welding-related information in ICT systems?",
      answerKeys: [
        {
          value: "To increase the use of filler material",
          correct: false,
        },
        {
          value: "To make welding helmets brighter",
          correct: false,
        },
        {
          value: "To prevent unauthorized access and data breaches",
          correct: true,
        },
        {
          value: "To improve the color quality of displays",
          correct: false,
        },
      ],
    },
    // question no. 7
    {
      question:
        "How can ICT tools be used to promote safety in SMAW operations?",
      answerKeys: [
        {
          value: "By sharing welding photos on social media",
          correct: false,
        },
        {
          value: "By conducting safety training sessions online",
          correct: true,
        },
        {
          value: "By welding in crowded areas",
          correct: false,
        },
        {
          value: "By disabling safety alarms",
          correct: false,
        },
      ],
    },
    // question no. 8
    {
      question:
        "What is the primary purpose of welding gloves in the context of SMAW and ICT integration?",
      answerKeys: [
        {
          value: "To increase typing speed",
          correct: false,
        },
        {
          value: "To enhance data entry accuracy",
          correct: false,
        },
        {
          value: "To protect hands from heat and sparks",
          correct: true,
        },
        {
          value: "To improve internet connectivity",
          correct: false,
        },
      ],
    },
    // question no. 9
    {
      question:
        "How can safety sensors and alarms integrated with ICT systems enhance the safety of welding operations?",
      answerKeys: [
        {
          value: "By sending telegrams",
          correct: false,
        },
        {
          value: "By creating paper-based safety manuals",
          correct: false,
        },
        {
          value: "By enabling video conferencing",
          correct: false,
        },
        {
          value: "By providing real-time safety alerts and notifications",
          correct: true,
        },
      ],
    },
    // question no. 10
    {
      question:
        "In an integrated SMAW-ICT environment, why is it important to wear safety glasses?",
      answerKeys: [
        {
          value: "To reduce data entry errors",
          correct: false,
        },
        {
          value: "To improve screen resolution",
          correct: false,
        },
        {
          value: "To protect eyes from welding sparks and debris",
          correct: true,
        },
        {
          value: "To increase typing speed",
          correct: false,
        },
      ],
    },
  ],
};

module.exports = SMAWICTSafety;
