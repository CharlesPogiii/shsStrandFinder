const SMAW = require("../strand/SMAW");

const TECHNICAL = require("../subjectType/TECHNICAL");

const NC1 = {
  associatedSubjectType: TECHNICAL.name,
  associatedStrands: [SMAW.name],

  name: "Shielded Metal Arc Welding 1 (NC 1)",
  description:
    "A specialized subject that provides students with fundamental knowledge and practical skills in the Shielded Metal Arc Welding (SMAW) process. This course is typically part of vocational and technical education programs in welding and prepares students for entry-level welding positions.",
  imagePath: "uploads\\prod\\subject\\35.jpg",

  questions: [
    // question no. 1
    {
      question: "What is the purpose of a flux coating on welding electrodes?",
      answerKeys: [
        {
          value: "To improve electrical conductivity",
          correct: false,
        },
        {
          value: "To increase the weight of the electrode",
          correct: false,
        },
        {
          value: "To shield the weld from atmospheric contamination",
          correct: true,
        },
        {
          value: "To add color to the weld",
          correct: false,
        },
      ],
    },
    // question no. 2
    {
      question: "What is the primary function of a welding helmet?",
      answerKeys: [
        {
          value: "Holding welding rods",
          correct: false,
        },
        {
          value: "Providing ventilation",
          correct: false,
        },
        {
          value: "Protecting the welder's eyes and face from arc radiation",
          correct: true,
        },
        {
          value: "Controlling the welding machine",
          correct: false,
        },
      ],
    },
    // question no. 31
    {
      question: 'In welding, what does the term "weaving" refer to?',
      answerKeys: [
        {
          value: "Creating decorative patterns in the weld",
          correct: false,
        },
        {
          value: "Melting the base metal",
          correct: false,
        },
        {
          value:
            "Moving the electrode in a zigzag pattern to ensure proper fusion",
          correct: true,
        },
        {
          value: "Measuring the weld's thickness",
          correct: false,
        },
      ],
    },
    // question no. 4
    {
      question:
        "What type of current is typically used in Shielded Metal Arc Welding (SMAW)?",
      answerKeys: [
        {
          value: "Direct current (DC)",
          correct: true,
        },
        {
          value: "Alternating current (AC)",
          correct: false,
        },
        {
          value: "High-frequency current",
          correct: false,
        },
        {
          value: "Low voltage current",
          correct: false,
        },
      ],
    },
    // question no. 5
    {
      question: "What is the purpose of the slag in a weld bead?",
      answerKeys: [
        {
          value: "To create a polished finish",
          correct: false,
        },
        {
          value: "To add strength to the weld",
          correct: false,
        },
        {
          value: "To shield the weld from contamination during solidification",
          correct: true,
        },
        {
          value: "To make the weld conductive",
          correct: false,
        },
      ],
    },
    // question no. 6
    {
      question: "What is the primary gas used in Gas Metal Arc Welding (GMAW)?",
      answerKeys: [
        {
          value: "Oxygen",
          correct: false,
        },
        {
          value: "Nitrogen",
          correct: false,
        },
        {
          value: "Argon",
          correct: true,
        },
        {
          value: "Helium",
          correct: false,
        },
      ],
    },
    // question no. 7
    {
      question: 'What does the term "welding position" refer to in SMAW?',
      answerKeys: [
        {
          value: "The angle of the welding rod",
          correct: false,
        },
        {
          value: "The orientation of the welding joint relative to gravity",
          correct: true,
        },
        {
          value: "The temperature of the welding machine",
          correct: false,
        },
        {
          value: "The welding helmet's settings",
          correct: false,
        },
      ],
    },
    // question no. 8
    {
      question: 'In SMAW, what does "arc length" mean?',
      answerKeys: [
        {
          value: "The total length of the weld",
          correct: false,
        },
        {
          value: "The distance between the electrode and the workpiece",
          correct: true,
        },
        {
          value: "The heat generated during welding",
          correct: false,
        },
        {
          value: "The diameter of the electrode",
          correct: false,
        },
      ],
    },
    // question no. 9
    {
      question: "What is the purpose of preheating the base metal in welding?",
      answerKeys: [
        {
          value: "To cool down the base metal",
          correct: false,
        },
        {
          value: "To make it easier to weld",
          correct: false,
        },
        {
          value: "To reduce the risk of cracking",
          correct: true,
        },
        {
          value: "To remove impurities",
          correct: false,
        },
      ],
    },
    // question no. 10
    {
      question: 'What is a "welding joint" in SMAW?',
      answerKeys: [
        {
          value: "A specialized welding tool",
          correct: false,
        },
        {
          value: "The point where two pieces of metal are joined by welding",
          correct: true,
        },
        {
          value: "A type of electrode",
          correct: false,
        },
        {
          value: "A welding position",
          correct: false,
        },
      ],
    },
    // question no. 11
    {
      question: "What is the role of a welding clamp or ground clamp in SMAW?",
      answerKeys: [
        {
          value: "To hold the welding rod",
          correct: false,
        },
        {
          value: "To provide electrical connection and ensure safety",
          correct: true,
        },
        {
          value: "To shape the weld",
          correct: false,
        },
        {
          value: "To measure the temperature of the weld",
          correct: false,
        },
      ],
    },
    // question no. 12
    {
      question:
        "What type of welding is typically used for thicker materials in SMAW?",
      answerKeys: [
        {
          value: "Fillet welding",
          correct: false,
        },
        {
          value: "Lap welding",
          correct: false,
        },
        {
          value: "Groove welding",
          correct: true,
        },
        {
          value: "Butt welding",
          correct: false,
        },
      ],
    },
    // question no. 13
    {
      question: 'In SMAW, what is "post-weld heat treatment" used for?',
      answerKeys: [
        {
          value: "To cool the weld faster",
          correct: false,
        },
        {
          value: "To prevent contamination of the weld",
          correct: false,
        },
        {
          value: "To relieve stress and improve the weld's properties",
          correct: true,
        },
        {
          value: "To create decorative patterns",
          correct: false,
        },
      ],
    },
    // question no. 14
    {
      question: 'What does the term "root pass" refer to in welding?',
      answerKeys: [
        {
          value: "The first layer of a multi-pass weld",
          correct: true,
        },
        {
          value: "The bottom of a weld",
          correct: false,
        },
        {
          value: "The welding machine's power source",
          correct: false,
        },
        {
          value: "A type of electrode",
          correct: false,
        },
      ],
    },
    // question no. 15
    {
      question: 'In SMAW, what is "arc blow"?',
      answerKeys: [
        {
          value: "A type of welding defect",
          correct: false,
        },
        {
          value:
            "A phenomenon where the arc wanders or deflects away from the desired path due to magnetic fields",
          correct: true,
        },
        {
          value: "A type of electrode coating",
          correct: false,
        },
        {
          value: "A technique for increasing welding speed",
          correct: false,
        },
      ],
    },
    // question no. 16
    {
      question: "What is the purpose of a welding rod or electrode in SMAW?",
      answerKeys: [
        {
          value: "To hold the welding helmet",
          correct: false,
        },
        {
          value: "To shield the weld from contamination",
          correct: false,
        },
        {
          value: "To provide filler material and create the weld",
          correct: true,
        },
        {
          value: "To measure the temperature of the base metal",
          correct: false,
        },
      ],
    },
    // question no. 17
    {
      question: 'In welding, what is "tack welding" used for?',
      answerKeys: [
        {
          value: "To create decorative patterns",
          correct: false,
        },
        {
          value:
            "To temporarily hold the workpieces in place before the final welding",
          correct: true,
        },
        {
          value: "To add strength to the weld",
          correct: false,
        },
        {
          value: "To protect the weld from atmospheric contamination",
          correct: false,
        },
      ],
    },
    // question no. 18
    {
      question: "What is the purpose of a chipping hammer in SMAW?",
      answerKeys: [
        {
          value: "To create decorative patterns",
          correct: false,
        },
        {
          value: "To measure the weld's thickness",
          correct: false,
        },
        {
          value: "To remove slag and spatter from the weld bead",
          correct: true,
        },
        {
          value: "To adjust the welding machine's settings",
          correct: false,
        },
      ],
    },
    // question no. 19
    {
      question: 'In SMAW, what is the "weld pool"?',
      answerKeys: [
        {
          value: "A specialized welding tool",
          correct: false,
        },
        {
          value: "A type of electrode coating",
          correct: false,
        },
        {
          value: "The area of molten metal where the welding takes place",
          correct: false,
        },
        {
          value: "A welding defect",
          correct: false,
        },
      ],
    },
    // question no. 20
    {
      question: "What is the primary purpose of a welding power source?",
      answerKeys: [
        {
          value: "Providing a source of electricity",
          correct: false,
        },
        {
          value: "Controlling the welding machine's speed",
          correct: false,
        },
        {
          value:
            "Supplying the necessary electrical current and voltage for welding",
          correct: true,
        },
        {
          value: "Measuring the weld's temperature",
          correct: false,
        },
      ],
    },
  ],
};

module.exports = NC1;
