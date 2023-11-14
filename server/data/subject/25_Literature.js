const STEM = require("../strand/STEM");
const HUMSS = require("../strand/HUMSS");
const ABM = require("../strand/ABM");

const ENGLISHST = require("../subjectType/ENGLISH");

const Literature = {
  associatedSubjectType: ENGLISHST.name,
  associatedStrands: [STEM.name, HUMSS.name, ABM.name],

  name: "Literature",
  description:
    "Focuses on the study of literary works, including prose, poetry, drama, and various forms of written expression. It delves into the analysis of literary techniques, themes, styles, and historical contexts.",
  imagePath: "uploads\\prod\\subject\\25.jpg",

  questions: [
    // question no. 1
    {
      question: 'Who wrote the novel "1984"?',
      answerKeys: [
        {
          value: "George Orwell",
          correct: true,
        },
        {
          value: "F. Scott Fitzgerald",
          correct: false,
        },
        {
          value: "Jane Austen",
          correct: false,
        },
        {
          value: "Charles Dickens",
          correct: false,
        },
      ],
    },
    // question no. 2
    {
      question:
        "What is the term for the time and place in which a story unfolds?",
      answerKeys: [
        {
          value: "Theme",
          correct: false,
        },
        {
          value: "Plot",
          correct: false,
        },
        {
          value: "Setting",
          correct: true,
        },
        {
          value: "Conflict",
          correct: false,
        },
      ],
    },
    // question no. 3
    {
      question:
        'In the play "Romeo and Juliet," which family is Romeo a member of?',
      answerKeys: [
        {
          value: "Capulet",
          correct: false,
        },
        {
          value: "Montague",
          correct: true,
        },
        {
          value: "Verona",
          correct: false,
        },
        {
          value: "Tybalt",
          correct: false,
        },
      ],
    },
    // question no. 4
    {
      question:
        "What is the term for a humorous play on words, often involving words with similar sounds but different meanings?",
      answerKeys: [
        {
          value: "Simile",
          correct: false,
        },
        {
          value: "Pun",
          correct: true,
        },
        {
          value: "Oxymoron",
          correct: false,
        },
        {
          value: "Allegory",
          correct: false,
        },
      ],
    },
    // question no. 5
    {
      question: 'In the novel "Pride and Prejudice," who is the author?',
      answerKeys: [
        {
          value: "George Orwell",
          correct: false,
        },
        {
          value: "Jane Austen",
          correct: true,
        },
        {
          value: "William Shakespeare",
          correct: false,
        },
        {
          value: "Charles Dickens",
          correct: false,
        },
      ],
    },
    // question no. 6
    {
      question:
        'In William Golding\'s novel "Lord of the Flies," who is the character known for representing civilization and order?',
      answerKeys: [
        {
          value: "Jack",
          correct: false,
        },
        {
          value: "Piggy",
          correct: false,
        },
        {
          value: "Ralph",
          correct: false,
        },
        {
          value: "Simon",
          correct: false,
        },
      ],
    },
    // question no. 7
    {
      question:
        "What is the term for a narrative technique where the events of a story are presented out of chronological order?",
      answerKeys: [
        {
          value: "Simile",
          correct: false,
        },
        {
          value: "Alliteration",
          correct: false,
        },
        {
          value: "Flashback",
          correct: true,
        },
        {
          value: "Foreshadowing ",
          correct: false,
        },
      ],
    },
    // question no. 8
    {
      question:
        'In the play "Macbeth," who is known for the famous soliloquy that begins with "To be or not to be"?',
      answerKeys: [
        {
          value: "Hamlet",
          correct: true,
        },
        {
          value: "Othello",
          correct: false,
        },
        {
          value: "Lady Macbeth",
          correct: false,
        },
        {
          value: "King Duncan",
          correct: false,
        },
      ],
    },
    // question no. 9
    {
      question:
        "What is the term for a recurring theme, character, or symbol in literature?",
      answerKeys: [
        {
          value: "Allegory",
          correct: false,
        },
        {
          value: "Motif",
          correct: false,
        },
        {
          value: "Anecdote",
          correct: false,
        },
        {
          value: "Parody",
          correct: false,
        },
      ],
    },
    // question no. 10
    {
      question:
        'In "The Great Gatsby" by F. Scott Fitzgerald, who is the title character of the novel?',
      answerKeys: [
        {
          value: "Daisy Buchanan",
          correct: false,
        },
        {
          value: "Tom Buchanan",
          correct: false,
        },
        {
          value: "Nick Carraway",
          correct: false,
        },
        {
          value: "Jay Gatsby",
          correct: true,
        },
      ],
    },
  ],
};

module.exports = Literature;
