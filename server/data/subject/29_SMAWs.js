const SMAW = require("../strand/SMAW");
const ICT = require("../strand/ICT");

const TECHNICAL = require("../subjectType/TECHNICAL");

const SMAWs = {
  associatedSubjectType: TECHNICAL.name,
  associatedStrands: [SMAW.name, ICT.name],

  name: "SMAW (Shielded Metal Arc Welding)",
  description:
    "Equips students with practical welding skills that are in demand in various industries. It provides a strong foundation for those pursuing careers as welders, fabricators, metalworkers, and inspectors. Safety, precision, and quality are emphasized throughout the subject to ensure that students produce strong and reliable welds in their future professional endeavors.",
  imagePath: "uploads\\prod\\subject\\29.png",

  questions: [
    // question no. 1
    {
      question:
        "What is the primary function of the electrode coating in SMAW?",
      answerKeys: [
        {
          value: "To conduct electricity",
          correct: false,
        },
        {
          value: "To provide the welding material",
          correct: false,
        },
        {
          value: "To protect the weld pool from contaminants",
          correct: true,
        },
        {
          value: "To increase the welding speed",
          correct: false,
        },
      ],
    },
    // question no. 2
    {
      question:
        "What type of current is typically used in SMAW for welding steel?",
      answerKeys: [
        {
          value: "Direct Current (DC)",
          correct: true,
        },
        {
          value: "Alternating Current (AC)",
          correct: false,
        },
        {
          value: "Magnetic Current (MC)",
          correct: false,
        },
        {
          value: "High-Frequency Current (HFC)",
          correct: false,
        },
      ],
    },
    // question no. 3
    {
      question: 'In SMAW, what does the term "polarity" refer to?',
      answerKeys: [
        {
          value: "The direction of the Earth's magnetic field",
          correct: false,
        },
        {
          value: "The direction of current flow in the welding circuit",
          correct: true,
        },
        {
          value: "The type of metal being welded",
          correct: false,
        },
        {
          value: "The angle at which the electrode is held",
          correct: false,
        },
      ],
    },
    // question no. 4
    {
      question: "Which safety equipment is essential for welders using SMAW?",
      answerKeys: [
        {
          value: "Keyboard and mouse",
          correct: false,
        },
        {
          value: "Safety glasses and hard hat",
          correct: false,
        },
        {
          value: "Welding helmet and gloves",
          correct: true,
        },
        {
          value: "Flash drive and monitor",
          correct: false,
        },
      ],
    },
    // question no. 5
    {
      question: "What is the purpose of preheating the base metal in SMAW?",
      answerKeys: [
        {
          value: "To make the metal softer",
          correct: false,
        },
        {
          value: "To remove rust and scale",
          correct: false,
        },
        {
          value: "To increase welding speed",
          correct: false,
        },
        {
          value: "To reduce the risk of cracking",
          correct: true,
        },
      ],
    },
    // question no. 6
    {
      question:
        "In SMAW, what is the purpose of the welding electrode's core wire?",
      answerKeys: [
        {
          value: "To protect the weld from contamination",
          correct: false,
        },
        {
          value: "To provide electrical conductivity",
          correct: true,
        },
        {
          value: "To create a shielding gas",
          correct: false,
        },
        {
          value: "To improve welding speed",
          correct: false,
        },
      ],
    },
    // question no. 7
    {
      question:
        "Which of the following is a common electrode used in SMAW for welding mild steel?",
      answerKeys: [
        {
          value: "E6010",
          correct: false,
        },
        {
          value: "E7018",
          correct: false,
        },
        {
          value: "E6013",
          correct: true,
        },
        {
          value: "E7024",
          correct: false,
        },
      ],
    },
    // question no. 8
    {
      question:
        "What is the term for the process of joining two pieces of metal by melting them and adding a filler material?",
      answerKeys: [
        {
          value: "Soldering",
          correct: false,
        },
        {
          value: "Brazing",
          correct: false,
        },
        {
          value: "Welding",
          correct: true,
        },
        {
          value: "Forging",
          correct: false,
        },
      ],
    },
    // question no. 9
    {
      question:
        "How does proper ventilation contribute to safety in SMAW operations?",
      answerKeys: [
        {
          value: "It reduces welding speed",
          correct: false,
        },
        {
          value: "It prevents electrode overheating",
          correct: false,
        },
        {
          value: "It removes fumes and gases",
          correct: true,
        },
        {
          value: "It increases the use of filler material",
          correct: false,
        },
      ],
    },
    // question no. 10
    {
      question: "What is the purpose of the flux coating on SMAW electrodes?",
      answerKeys: [
        {
          value: "To provide electrical conductivity",
          correct: false,
        },
        {
          value: "To create a shielding gas",
          correct: false,
        },
        {
          value: "To protect the weld from contamination",
          correct: false,
        },
        {
          value: "To increase welding speed",
          correct: false,
        },
      ],
    },
  ],
};

module.exports = SMAWs;
