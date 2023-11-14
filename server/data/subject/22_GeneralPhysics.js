const STEM = require("../strand/STEM");

const SCIENCE = require("../subjectType/SCIENCE");

const GeneralPhysics = {
  associatedSubjectType: SCIENCE.name,
  associatedStrands: [STEM.name],

  name: "General Physics",
  description:
    "An essential course for students pursuing careers in physics, engineering, astronomy, and related scientific fields. It equips students with the knowledge and problem-solving skills necessary to address physical questions and challenges in various contexts. The course provides a strong foundation for advanced studies in physics and related disciplines.",
  imagePath: "uploads\\prod\\subject\\22.jpg",

  questions: [
    // question no. 1
    {
      question:
        "According to Newton's second law of motion, what is the relationship between force, mass, and acceleration?",
      answerKeys: [
        {
          value: "Force is inversely proportional to mass and acceleration.",
          correct: false,
        },
        {
          value: "Force is directly proportional to mass and acceleration.",
          correct: true,
        },
        {
          value: "Force is unrelated to mass and acceleration.",
          correct: false,
        },
        {
          value: "Force is proportional to mass but unrelated to acceleration.",
          correct: false,
        },
      ],
    },
    // question no. 2
    {
      question:
        "What is work in physics, and how is it calculated when a force acts on an object?",
      answerKeys: [
        {
          value:
            "Work is the energy an object possesses due to its position, and it is calculated as force times distance (W = Fd).",
          correct: true,
        },
        {
          value:
            "Work is the energy transferred to an object when it is at rest.",
          correct: false,
        },
        {
          value: "Work is unrelated to force or distance.",
          correct: false,
        },
        {
          value:
            "Work is the energy an object possesses due to its mass, and it is calculated as mass times acceleration (W = ma).",
          correct: false,
        },
      ],
    },
    // question no. 3
    {
      question:
        "Define the electromagnetic spectrum in physics and provide examples of electromagnetic waves.",
      answerKeys: [
        {
          value: "The electromagnetic spectrum includes visible light only.",
          correct: false,
        },
        {
          value:
            "The electromagnetic spectrum encompasses all types of electromagnetic waves, including radio waves, microwaves, infrared, visible light, ultraviolet, X-rays, and gamma rays.",
          correct: true,
        },
        {
          value:
            "The electromagnetic spectrum is limited to X-rays and gamma rays.",
          correct: false,
        },
        {
          value:
            "The electromagnetic spectrum consists of sound waves and visible light only.",
          correct: false,
        },
      ],
    },
    // question no. 4
    {
      question:
        "How does electric potential energy relate to the electric field in physics? Provide an equation for electric potential energy.",
      answerKeys: [
        {
          value:
            "Electric potential energy is the energy stored in an electric field due to the relative positions of charged objects. It is calculated using the formula U = k(q1q2/r), where k is the electrostatic constant, q1 and q2 are the charges, and r is the separation distance.",
          correct: true,
        },
        {
          value:
            "Electric potential energy has no connection to the electric field.",
          correct: false,
        },
        {
          value: "Electric potential energy is measured in volts.",
          correct: false,
        },
        {
          value:
            "Electric potential energy is the energy an object possesses due to its position in an electric field.",
          correct: false,
        },
      ],
    },
    // question no. 5
    {
      question:
        "According to Newton's third law of motion, for every action, there is an equal and opposite reaction. How does this law apply to a rocket launch?",
      answerKeys: [
        {
          value: "A rocket experiences no reaction force during launch.",
          correct: false,
        },
        {
          value:
            "The action is the expulsion of exhaust gases downward, and the reaction is the upward movement of the rocket.",
          correct: true,
        },
        {
          value:
            "The action and reaction forces in a rocket launch are not equal.",
          correct: false,
        },
        {
          value:
            "The action is the firing of the rocket's engines, and the reaction is the formation of a vacuum in space.",
          correct: false,
        },
      ],
    },
    // question no. 6
    {
      question:
        "Define power in physics and provide an equation for calculating power.",
      answerKeys: [
        {
          value:
            "Power is the work done on an object, and it is calculated as P = Fd.",
          correct: false,
        },
        {
          value:
            "Power is the rate of doing work, and it is calculated as P = W/t.",
          correct: true,
        },
        {
          value: "Power is the energy stored in an object.",
          correct: false,
        },
        {
          value:
            "Power is the rate of energy conversion and is unrelated to work or time.",
          correct: false,
        },
      ],
    },
    // question no. 7
    {
      question:
        "What is the relationship between electric potential energy and electric field strength in physics? Provide an equation for electric potential energy.",
      answerKeys: [
        {
          value:
            "Electric potential energy is the energy stored in an electric field due to the relative positions of charged objects. It is calculated using the formula U = k(q1q2/r), where k is the electrostatic constant, q1 and q2 are the charges, and r is the separation distance.",
          correct: true,
        },
        {
          value:
            "Electric potential energy has no connection to the electric field.",
          correct: false,
        },
        {
          value: "Electric potential energy is measured in volts.",
          correct: false,
        },
        {
          value:
            "Electric potential energy is directly proportional to the electric field strength and is calculated as U = E × d, where E is the electric field strength and d is the distance.",
          correct: false,
        },
      ],
    },
    // question no. 8
    {
      question:
        "According to Newton's third law of motion, for every action, there is an equal and opposite reaction. How does this law apply to a rocket launch?",
      answerKeys: [
        {
          value: "A rocket experiences no reaction force during launch.",
          correct: false,
        },
        {
          value:
            "The action is the expulsion of exhaust gases downward, and the reaction is the upward movement of the rocket.",
          correct: true,
        },
        {
          value:
            "The action and reaction forces in a rocket launch are not equal.",
          correct: false,
        },
        {
          value:
            "The action is the firing of the rocket's engines, and the reaction is the formation of a vacuum in space.",
          correct: false,
        },
      ],
    },
  ],
};

module.exports = GeneralPhysics;
