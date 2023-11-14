const HUMSS = require("../strand/HUMSS");

const ENGLISHST = require("../subjectType/ENGLISH");

const CreativeWriting = {
  associatedSubjectType: ENGLISHST.name,
  associatedStrands: [HUMSS.name],

  name: "Creative Writing",
  description:
    "Focuses on developing students' abilities to express themselves creatively through the written word. It encourages imagination, self-expression, and the exploration of various writing styles and techniques.",
  imagePath: "uploads\\prod\\subject\\07.jpg",

  questions: [
    // question no. 1
    {
      question:
        "Which of the following is an example of a literary device used in poetry and prose?",
      answerKeys: [
        {
          value: "Algorithm",
          correct: false,
        },
        {
          value: "Metaphor",
          correct: true,
        },
        {
          value: "Spreadsheet",
          correct: false,
        },
        {
          value: "Hypertext",
          correct: false,
        },
      ],
    },
    // question no. 2
    {
      question:
        "In creative writing, what is the term for a play on words where similar-sounding but different words are used for a humorous effect?",
      answerKeys: [
        {
          value: "Alliteration",
          correct: false,
        },
        {
          value: "Simile",
          correct: false,
        },
        {
          value: "Pun",
          correct: true,
        },
        {
          value: "Onomatopoeia",
          correct: false,
        },
      ],
    },
    // question no. 3
    {
      question:
        "What literary genre typically features a story set in a distant and imaginary world with elements of magic and fantasy?",
      answerKeys: [
        {
          value: "Science fiction",
          correct: false,
        },
        {
          value: "Realism",
          correct: false,
        },
        {
          value: "Fantasy",
          correct: true,
        },
        {
          value: "Biography",
          correct: false,
        },
      ],
    },
    // question no. 4
    {
      question:
        "What is the term for the central message or idea in a literary work?",
      answerKeys: [
        {
          value: "Plot",
          correct: false,
        },
        {
          value: "Theme",
          correct: true,
        },
        {
          value: "Protagonist",
          correct: false,
        },
        {
          value: "Setting",
          correct: false,
        },
      ],
    },
    // question no. 5
    {
      question:
        "Which of the following is a famous example of an epic poem in literature?",
      answerKeys: [
        {
          value: "Romeo and Juliet",
          correct: false,
        },
        {
          value: "Beowulf",
          correct: true,
        },
        {
          value: "Moby-Dick",
          correct: false,
        },
        {
          value: "Pride and Prejudice",
          correct: false,
        },
      ],
    },
  ],
};

module.exports = CreativeWriting;
