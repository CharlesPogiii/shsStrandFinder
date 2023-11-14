const STEM = require("../strand/STEM");

const SCIENCE = require("../subjectType/SCIENCE");

const GeneralChemistry = {
  associatedSubjectType: SCIENCE.name,
  associatedStrands: [STEM.name],

  name: "General Chemistry",
  description:
    "Provides students with a comprehensive understanding of the fundamental principles and concepts of chemistry. It serves as a foundation for more advanced studies in chemistry and related scientific fields.",
  imagePath: "uploads\\prod\\subject\\23.jpg",

  questions: [
    // question no. 1
    {
      question:
        "What is stoichiometry in chemistry and how is it used to determine the relationship between reactants and products in a chemical reaction?",
      answerKeys: [
        {
          value:
            "Stoichiometry is the study of the quantitative relationships between reactants and products in a chemical reaction. It involves balancing chemical equations and calculating reactant and product quantities based on the mole ratios.",
          correct: true,
        },
        {
          value:
            "Stoichiometry is the study of the physical properties of substances.",
          correct: false,
        },
        {
          value: "Stoichiometry is unrelated to chemistry.",
          correct: false,
        },
        {
          value: "Stoichiometry is the study of chemical reactions in space.",
          correct: false,
        },
      ],
    },
    // question no. 2
    {
      question:
        "Define the concept of a chemical reaction in chemistry. How are chemical equations used to represent these reactions?",
      answerKeys: [
        {
          value:
            "A chemical reaction is a process where substances are converted into new substances with different properties. Chemical equations represent reactions by showing the reactants on the left and products on the right, with balanced coefficients.",
          correct: true,
        },
        {
          value:
            "A chemical reaction is the conversion of solids into liquids. Chemical equations represent reactions with symbols.",
          correct: false,
        },
        {
          value:
            "A chemical reaction involves the separation of molecules into individual atoms. Chemical equations show reactants on the right and products on the left.",
          correct: false,
        },
        {
          value:
            "A chemical reaction is a process where substances are converted into new substances with the same properties, and chemical equations are not used to represent them.",
          correct: false,
        },
      ],
    },
    // question no. 3
    {
      question:
        "Under which conditions do ideal gases behave most like real gases?",
      answerKeys: [
        {
          value:
            "Ideal gases behave most like real gases at high temperatures and low pressures.",
          correct: true,
        },
        {
          value:
            "Ideal gases behave most like real gases at low temperatures and high pressures.",
          correct: false,
        },
        {
          value:
            "Ideal gases behave most like real gases at all temperatures and pressures.",
          correct: false,
        },
        {
          value: "Ideal gases never behave like real gases.",
          correct: false,
        },
      ],
    },
    // question no. 4
    {
      question:
        "What are acids and bases defined as, and how is pH measured in aqueous solutions?",
      answerKeys: [
        {
          value:
            "Acids are substances that increase hydrogen ion concentration (H+) and have a pH below 7, while bases decrease H+ concentration and have a pH above 7. pH is measured on a scale from 0 to 14, with 7 being neutral.",
          correct: true,
        },
        {
          value:
            "Acids are substances that decrease H+ concentration and have a pH above 7, while bases increase H+ concentration and have a pH below 7. pH is measured on a scale from 1 to 10.",
          correct: false,
        },
        {
          value:
            "Acids are substances with a pH above 7, while bases have a pH below 7. pH is measured on a scale from 0 to 100.",
          correct: false,
        },
        {
          value:
            "Acids are substances that have a pH of exactly 7, and bases have a pH of exactly 14.",
          correct: false,
        },
      ],
    },
    // question no. 5
    {
      question:
        "What is a redox reaction, and how does it involve the transfer of electrons between substances? Provide an example of a redox reaction.",
      answerKeys: [
        {
          value:
            "A redox reaction involves the transfer of electrons from a reducing agent to an oxidizing agent. An example is the rusting of iron, where iron (Fe) loses electrons to oxygen (O2) to form iron oxide (Fe2O3).",
          correct: true,
        },
        {
          value:
            "A redox reaction involves the transfer of protons between substances. An example is the formation of water from hydrogen and oxygen.",
          correct: false,
        },
        {
          value: "A redox reaction has no electron transfer involved.",
          correct: false,
        },
        {
          value:
            "A redox reaction involves the transfer of neutrons between substances, and an example is the decay of radioactive isotopes.",
          correct: false,
        },
      ],
    },
    // question no. 6
    {
      question:
        "How are elements arranged in the periodic table, and what do the rows and columns represent?",
      answerKeys: [
        {
          value:
            "Elements are arranged by atomic mass, and rows represent elements with the same chemical properties, while columns represent elements with the same number of protons.",
          correct: false,
        },
        {
          value:
            "Elements are arranged by atomic number, and rows represent elements with the same chemical properties, while columns represent elements with the same number of neutrons.",
          correct: false,
        },
        {
          value:
            "Elements are arranged by atomic number, and rows represent elements with the same number of electron shells, while columns represent elements with similar chemical properties.",
          correct: true,
        },
        {
          value:
            "Elements are arranged by atomic mass, and rows represent elements with the same atomic number, while columns represent elements with similar atomic masses.",
          correct: false,
        },
      ],
    },
    // question no. 7
    {
      question:
        "What type of bond involves the sharing of electrons between atoms, and what type involves the transfer of electrons from one atom to another?",
      answerKeys: [
        {
          value:
            "Covalent bonds involve the transfer of electrons, while ionic bonds involve electron sharing.",
          correct: false,
        },
        {
          value:
            "Covalent bonds involve electron sharing, while ionic bonds involve the transfer of electrons.",
          correct: true,
        },
        {
          value:
            "Covalent and ionic bonds are the same in terms of electron interaction.",
          correct: false,
        },
        {
          value:
            "Covalent bonds involve the transfer of protons, while ionic bonds involve the transfer of electrons.",
          correct: false,
        },
      ],
    },
    // question no. 8
    {
      question:
        "Define molarity in chemistry and how it is used to prepare solutions. Provide an equation for calculating molarity.",
      answerKeys: [
        {
          value:
            "Molarity is a measure of the concentration of a solution, expressed as moles of solute per liter of solution (M = moles of solute / liters of solution).",
          correct: false,
        },
        {
          value: "Molarity is a measure of the temperature of a solution.",
          correct: false,
        },
        {
          value:
            "Molarity is a measure of the volume of a solution, expressed as moles of solute per liter of solution (M = moles of solute / liters of solution).",
          correct: true,
        },
        {
          value:
            "Molarity is a measure of the pressure in a solution, expressed as moles of solute per liter of solution (M = moles of solute / liters of solution).",
          correct: false,
        },
      ],
    },
  ],
};

module.exports = GeneralChemistry;
