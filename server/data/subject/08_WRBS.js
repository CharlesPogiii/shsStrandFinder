const HUMSS = require("../strand/HUMSS");

const PHILOSOPHY = require("../subjectType/PHILOSOPHY");

const WRBS = {
  associatedSubjectType: PHILOSOPHY.name,
  associatedStrands: [HUMSS.name],

  name: "Introduction to World Religions and Belief Systems",
  description:
    "Overview of the major religions and belief systems practiced around the world. It aims to promote a deeper understanding of the diversity of religious and philosophical traditions and their impact on culture, society, and individual beliefs.",
  imagePath: "uploads\\prod\\subject\\08.jpg",

  questions: [
    // question no. 1
    {
      question:
        "Which major world religion originated in India and follows the teachings of Siddhartha Gautama?",
      answerKeys: [
        {
          value: "Hinduism",
          correct: false,
        },
        {
          value: "Christianity",
          correct: false,
        },
        {
          value: "Buddhism",
          correct: true,
        },
        {
          value: "Islam",
          correct: false,
        },
      ],
    },
    // question no. 2
    {
      question:
        "What is the holy book of Islam, believed to be the word of God as revealed to Muhammad?",
      answerKeys: [
        {
          value: "Bible",
          correct: false,
        },
        {
          value: "Torah",
          correct: false,
        },
        {
          value: "Quran",
          correct: true,
        },
        {
          value: "Tripitaka",
          correct: false,
        },
      ],
    },
    // question no. 3
    {
      question:
        "In Hinduism, what is the cycle of birth, death, and rebirth called, determined by one's karma?",
      answerKeys: [
        {
          value: "Nirvana",
          correct: false,
        },
        {
          value: "Dharma",
          correct: false,
        },
        {
          value: "Samsara",
          correct: true,
        },
        {
          value: "Moksha",
          correct: false,
        },
      ],
    },
    // question no. 4
    {
      question:
        "Which religious tradition celebrates the annual festival of Passover, commemorating the liberation of the Israelites from slavery in Egypt?",
      answerKeys: [
        {
          value: "Buddhism",
          correct: false,
        },
        {
          value: "Judaism",
          correct: true,
        },
        {
          value: "Christianity",
          correct: false,
        },
        {
          value: "Sikhism",
          correct: false,
        },
      ],
    },
    // question no. 5
    {
      question:
        "In Sikhism, what is the central religious scripture that serves as a guide for Sikhs?",
      answerKeys: [
        {
          value: "Bible",
          correct: false,
        },
        {
          value: "Quran",
          correct: false,
        },
        {
          value: "Guru Granth Sahib",
          correct: true,
        },
        {
          value: "Bhagavad Gita",
          correct: false,
        },
      ],
    },
  ],
};

module.exports = WRBS;
