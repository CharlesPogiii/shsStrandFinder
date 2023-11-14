const SMAW = require("../strand/SMAW");

const TECHNICAL = require("../subjectType/TECHNICAL");

const NC2 = {
  associatedSubjectType: TECHNICAL.name,
  associatedStrands: [SMAW.name],

  name: "Shielded Metal Arc Welding 2 (NC 2)",
  description:
    "An advanced level subject that builds upon the foundational knowledge and skills acquired in Shielded Metal Arc Welding 1 (NC 1). This course is typically part of vocational and technical education programs in welding and is designed for students who have already mastered the basics of Shielded Metal Arc Welding (SMAW).",
  imagePath: "uploads\\prod\\subject\\36.jpg",

  questions: [
    // question no. 1
    {
      question:
        "What is the primary purpose of a welding procedure specification (WPS)?",
      answerKeys: [
        {
          value: "To test welding equipment",
          correct: false,
        },
        {
          value: "To create decorative patterns in the weld",
          correct: false,
        },
        {
          value:
            "To ensure that welds are produced to a consistent quality and standard",
          correct: true,
        },
        {
          value: "To provide electrical power for welding",
          correct: false,
        },
      ],
    },
    // question no. 2
    {
      question: 'In SMAW, what is "post-weld inspection" used for?',
      answerKeys: [
        {
          value: "To improve the weld's appearance",
          correct: false,
        },
        {
          value:
            "To check the weld's quality, integrity, and compliance with standards",
          correct: true,
        },
        {
          value: "To create decorative patterns",
          correct: false,
        },
        {
          value: "To add filler material to the weld",
          correct: false,
        },
      ],
    },
    // question no. 3
    {
      question:
        'What is "annealing" in the context of metalworking and welding?',
      answerKeys: [
        {
          value: "A welding defect",
          correct: false,
        },
        {
          value: "A type of electrode coating",
          correct: false,
        },
        {
          value:
            "A heat treatment process used to relieve stress and improve the metal's properties",
          correct: true,
        },
        {
          value: "A welding position",
          correct: false,
        },
      ],
    },
    // question no. 4
    {
      question: 'What does the term "duty cycle" mean in welding?',
      answerKeys: [
        {
          value: "The lifespan of a welding electrode",
          correct: false,
        },
        {
          value: "The maximum temperature a weld can reach",
          correct: false,
        },
        {
          value:
            "The percentage of time a welding machine can operate within a 10-minute period without overheating",
          correct: true,
        },
        {
          value: "The angle of the welding rod",
          correct: false,
        },
      ],
    },
    // question no. 5
    {
      question: 'In SMAW, what is "preventing porosity" a technique for?',
      answerKeys: [
        {
          value: "Creating decorative patterns in the weld",
          correct: false,
        },
        {
          value: "Eliminating the need for a ground clamp",
          correct: false,
        },
        {
          value: "Reducing the risk of gas pockets forming in the weld",
          correct: true,
        },
        {
          value: "Increasing the welding speed",
          correct: false,
        },
      ],
    },
    // question no. 6
    {
      question: "What is the role of a welding inspector in SMAW?",
      answerKeys: [
        {
          value: "To operate the welding machine",
          correct: false,
        },
        {
          value: "To assess and ensure the quality of welded joints",
          correct: true,
        },
        {
          value: "To create decorative patterns in the weld",
          correct: false,
        },
        {
          value: "To remove slag from the weld bead",
          correct: false,
        },
      ],
    },
    // question no. 7
    {
      question: 'What does "welding distortion" refer to in SMAW?',
      answerKeys: [
        {
          value: "A type of electrode coating",
          correct: false,
        },
        {
          value: "A welding defect",
          correct: false,
        },
        {
          value:
            "The changes in the shape and size of a metal workpiece due to the welding process",
          correct: true,
        },
        {
          value: "A specialized welding tool",
          correct: false,
        },
      ],
    },
    // question no. 8
    {
      question: 'In SMAW, what is "penetration"?',
      answerKeys: [
        {
          value:
            "The depth to which a weld extends below the surface of the base metal",
          correct: true,
        },
        {
          value: "The welding machine's power source",
          correct: false,
        },
        {
          value: "A type of welding position",
          correct: false,
        },
        {
          value: "A heat treatment process",
          correct: false,
        },
      ],
    },
    // question no. 9
    {
      question: 'What is "welding fume extraction" used for?',
      answerKeys: [
        {
          value: "To provide electrical power for welding",
          correct: false,
        },
        {
          value:
            "To remove hazardous welding fumes and gases from the work area",
          correct: true,
        },
        {
          value: "To create decorative patterns in the weld",
          correct: false,
        },
        {
          value: "To add filler material to the weld",
          correct: false,
        },
      ],
    },
    // question no. 10
    {
      question: 'In welding, what is "tensile strength"?',
      answerKeys: [
        {
          value: "The ability to withstand heat",
          correct: false,
        },
        {
          value: "The resistance of a material to being pulled apart",
          correct: true,
        },
        {
          value: "The measure of a weld's quality",
          correct: false,
        },
        {
          value: "The ability to conduct electricity",
          correct: false,
        },
      ],
    },
    // question no. 11
    {
      question: 'What is the primary purpose of "welding consumables" in SMAW?',
      answerKeys: [
        {
          value: "To keep the welding machine cool",
          correct: false,
        },
        {
          value: "To supply electrical power for welding",
          correct: false,
        },
        {
          value:
            "To provide the materials needed for welding, including electrodes, filler metals, and shielding gases",
          correct: true,
        },
        {
          value: "To create decorative patterns in the weld",
          correct: false,
        },
      ],
    },
    // question no. 12
    {
      question: 'What is "post-weld cleaning" used for in SMAW?',
      answerKeys: [
        {
          value: "To remove slag and spatter from the weld bead",
          correct: false,
        },
        {
          value: "To add strength to the weld",
          correct: false,
        },
        {
          value: "To test the quality of the welding equipment",
          correct: false,
        },
        {
          value: "To increase the size of the weld bead",
          correct: true,
        },
      ],
    },
    // question no. 13
    {
      question: 'What does the term "back purging" refer to in welding?',
      answerKeys: [
        {
          value: "Using a purging valve for ventilation during welding",
          correct: false,
        },
        {
          value:
            "Protecting the backside of a weld joint from atmospheric contamination by using inert gases",
          correct: true,
        },
        {
          value: "Ensuring proper weld penetration",
          correct: false,
        },
        {
          value: "Creating decorative patterns in the weld",
          correct: false,
        },
      ],
    },
    // question no. 14
    {
      question: 'What is "pre-weld preparation" used for in SMAW?',
      answerKeys: [
        {
          value: "To ensure proper ventilation in the welding area",
          correct: false,
        },
        {
          value:
            "To prepare the workpieces, cleaning and setting them up for welding",
          correct: true,
        },
        {
          value: "To create decorative patterns in the weld",
          correct: false,
        },
        {
          value: "To monitor the welding process",
          correct: false,
        },
      ],
    },
    // question no. 15
    {
      question: 'In SMAW, what does the term "inclusion" mean?',
      answerKeys: [
        {
          value: "A type of welding position",
          correct: false,
        },
        {
          value: "A heat treatment process",
          correct: false,
        },
        {
          value:
            "Non-metallic materials, such as slag, that have become trapped within the weld",
          correct: true,
        },
        {
          value: "A type of electrode coating",
          correct: false,
        },
      ],
    },
    // question no. 16
    {
      question: 'What is "welding sequence" used for in welding?',
      answerKeys: [
        {
          value: "To control the temperature of the welding machine",
          correct: false,
        },
        {
          value:
            "To specify the order in which welds are to be made in multi-pass welding",
          correct: true,
        },
        {
          value: "To create decorative patterns in the weld",
          correct: false,
        },
        {
          value: "To test the quality of the welding equipment",
          correct: false,
        },
      ],
    },
    // question no. 17
    {
      question: 'In SMAW, what is "undercut" a type of?',
      answerKeys: [
        {
          value: "A welding defect",
          correct: true,
        },
        {
          value: "A welding position",
          correct: false,
        },
        {
          value: "A specialized welding tool",
          correct: false,
        },
        {
          value: "A welding electrode",
          correct: false,
        },
      ],
    },
    // question no. 18
    {
      question:
        'What is "tempering" in the context of metalworking and welding?',
      answerKeys: [
        {
          value: "A type of electrode coating",
          correct: false,
        },
        {
          value: "A welding position",
          correct: false,
        },
        {
          value:
            "A heat treatment process used to improve the toughness and reduce brittleness of the metal",
          correct: true,
        },
        {
          value: "The process of creating decorative patterns in the weld",
          correct: false,
        },
      ],
    },
    // question no. 19
    {
      question: 'What is "root reinforcement" in welding?',
      answerKeys: [
        {
          value: "A type of welding position",
          correct: false,
        },
        {
          value:
            "The strengthening of the root pass by adding extra weld metal",
          correct: true,
        },
        {
          value: "A heat treatment process",
          correct: false,
        },
        {
          value: "The process of testing welds",
          correct: false,
        },
      ],
    },
    // question no. 20
    {
      question: 'What is the purpose of "welding distortion control" in SMAW?',
      answerKeys: [
        {
          value: "To create decorative patterns in the weld",
          correct: false,
        },
        {
          value: "To monitor the welding process",
          correct: false,
        },
        {
          value:
            "To minimize the distortion and bending of the workpiece due to welding",
          correct: true,
        },
        {
          value: "To increase the weld's strength",
          correct: false,
        },
      ],
    },
  ],
};

module.exports = NC2;
