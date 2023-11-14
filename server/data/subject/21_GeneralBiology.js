const STEM = require("../strand/STEM");

const SCIENCE = require("../subjectType/SCIENCE");

const GeneralBiology = {
  associatedSubjectType: SCIENCE.name,
  associatedStrands: [STEM.name],

  name: "General Biology",
  description:
    "Provides students with a comprehensive overview of the fundamental principles and concepts in biology. It serves as the foundation for more advanced studies in the life sciences and covers a wide range of topics related to living organisms, their structure, function, and interactions with the environment.",
  imagePath: "uploads\\prod\\subject\\21.jpg",

  questions: [
    // question no. 1
    {
      question: "What is the function of the Golgi apparatus in a cell?",
      answerKeys: [
        {
          value: "Energy production",
          correct: false,
        },
        {
          value: "Protein synthesis",
          correct: false,
        },
        {
          value: "Processing and packaging of molecules",
          correct: true,
        },
        {
          value: "DNA replication",
          correct: false,
        },
      ],
    },
    // question no. 2
    {
      question:
        "Define osmosis in the context of cellular biology. How does it influence the movement of water in and out of a cell?",
      answerKeys: [
        {
          value:
            "Osmosis is the movement of water from a higher concentration to a lower concentration, affecting cell hydration.",
          correct: true,
        },
        {
          value:
            "Osmosis is the active transport of water against its concentration gradient.",
          correct: false,
        },
        {
          value: "Osmosis has no impact on cell water movement.",
          correct: false,
        },
        {
          value:
            "Osmosis is the movement of water from a lower concentration to a higher concentration, affecting cell dehydration.",
          correct: false,
        },
      ],
    },
    // question no. 3
    {
      question: "Which of the following is an example of a eukaryotic cell?",
      answerKeys: [
        {
          value: "Bacteria",
          correct: false,
        },
        {
          value: "Human skin cell",
          correct: true,
        },
        {
          value: "Virus",
          correct: false,
        },
        {
          value: "Archaea",
          correct: false,
        },
      ],
    },
    // question no. 4
    {
      question:
        "In photosynthesis, what role do chloroplasts and pigments play?",
      answerKeys: [
        {
          value: "Chloroplasts convert carbon dioxide into oxygen.",
          correct: false,
        },
        {
          value: "Pigments are responsible for cellular respiration.",
          correct: false,
        },
        {
          value:
            "Chloroplasts contain pigments that capture light energy and convert it into chemical energy.",
          correct: true,
        },
        {
          value: "Pigments are only found in animal cells.",
          correct: false,
        },
      ],
    },
    // question no. 5
    {
      question: "What is the primary function of a cell membrane?",
      answerKeys: [
        {
          value: "Energy production",
          correct: false,
        },
        {
          value: "Protein synthesis",
          correct: false,
        },
        {
          value: "Regulating the passage of substances in and out of the cell",
          correct: true,
        },
        {
          value: "DNA replication",
          correct: false,
        },
      ],
    },
    // question no. 6
    {
      question:
        "Which of the following accurately describes the DNA double helix structure?",
      answerKeys: [
        {
          value: "DNA structure is a single-stranded helix.",
          correct: false,
        },
        {
          value:
            "DNA double helix allows for the easy separation of DNA strands during replication.",
          correct: true,
        },
        {
          value:
            "The DNA double helix provides a compact storage mechanism for genetic information.",
          correct: false,
        },
        {
          value: "DNA is only found in prokaryotic cells.",
          correct: false,
        },
      ],
    },
    // question no. 7
    {
      question:
        "What are enzymes, and how do they function in biochemical reactions?",
      answerKeys: [
        {
          value:
            "Enzymes are energy molecules that fuel biochemical reactions.",
          correct: false,
        },
        {
          value:
            "Enzymes are catalysts that speed up biochemical reactions by lowering the activation energy.",
          correct: true,
        },
        {
          value: "Enzymes are inhibitors that slow down biochemical reactions.",
          correct: false,
        },
        {
          value:
            "Enzymes are structural components of cells with no role in biochemical reactions.",
          correct: false,
        },
      ],
    },
    // question no. 8
    {
      question:
        "In Mendelian genetics, which of the following describes the concept of dominant and recessive traits?",
      answerKeys: [
        {
          value:
            "Dominant traits are always expressed in the presence of a recessive trait.",
          correct: true,
        },
        {
          value:
            "Recessive traits are always expressed in the presence of a dominant trait.",
          correct: false,
        },
        {
          value:
            "Dominant and recessive traits have equal influence on an organism's phenotype.",
          correct: false,
        },
        {
          value: "Dominant traits are only observed in females.",
          correct: false,
        },
      ],
    },
  ],
};

module.exports = GeneralBiology;
