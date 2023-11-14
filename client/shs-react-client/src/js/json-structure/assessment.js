import strand2 from "../../asset/strand/strand2.jpg";

import subject1 from "../../asset/subject/subject1.jpg";

const assessmentData = {
  // access token
  accessToken: "access-token",

  // user
  user: {
    id: "id123",
    email: "user@email.com",
  },

  // subject
  subject: {
    id: "subjectId123",
    name: "Subject Name 1",
    description: "This is a subject description.",
    imagePath: subject1,
    questions: [
      {
        id: "quesId123",
        question: "This is assessment question 1?",
        questionImagePath: null,
        answerKeys: [
          {
            id: "keyId123",
            value: "This is the correct answer 1",
            imagePath: null,
            correct: false,
          },
          {
            id: "keyId456",
            value: "This is the correct answer 2",
            imagePath: null,
            correct: true,
          },
          {
            id: "keyId789",
            value: "This is the correct answer 3",
            imagePath: null,
            correct: false,
          },
        ],
      },
      {
        id: "quesId456",
        question: "This is assessment question 2?",
        questionImagePath: null,
        answerKeys: [
          {
            id: "keyId101",
            value: "This is the correct answer 1",
            imagePath: null,
            correct: true,
          },
          {
            id: "keyId112",
            value: "This is the correct answer 2",
            imagePath: null,
            correct: false,
          },
          {
            id: "keyId113",
            value: "This is the correct answer 3",
            imagePath: null,
            correct: false,
          },
        ],
      },
      {
        id: "quesId789",
        question: "This is assessment question 3?",
        questionImagePath: null,
        answerKeys: [
          {
            id: "keyId114",
            value: "This is the correct answer 1",
            imagePath: null,
            correct: false,
          },
          {
            id: "keyId115",
            value: "This is the correct answer 2",
            imagePath: null,
            correct: false,
          },
          {
            id: "keyId116",
            value: "This is the correct answer 3",
            imagePath: null,
            correct: true,
          },
        ],
      },
    ],
  },

  // SIDEBAR
  // selected strand
  selectedStrand: {
    id: "id123",
    name: "Strand Name 3",
    description:
      "1 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imagePath: strand2,
  },

  preferredStrand: {
    id: "id321",
    name: "Strand Name Preferred",
    description:
      "Preferred 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imagePath: strand2,
  },

  // personal engagements
  personalEngagements: [
    {
      id: "peId123",
      question: "this is a question 1?",
      yes: true,
    },
    {
      id: "peId456",
      question: "this is a question 2?",
      yes: false,
    },
    {
      id: "peId789",
      question: "this is a question 3?",
      yes: true,
    },
  ],

  // subjects
  subjects: [
    {
      id: "subjectId123",
      name: "Subject 1",
      description: "This is subject description.",
      imagePath: subject1,
      score: 78,
      totalScore: 100,
      duration: 1000,
    },
    {
      id: "subjectId101",
      name: "Subject 4",
      description: "This is subject description.",
      imagePath: subject1,
      score: 60,
      totalScore: 79,
      duration: 790,
    },
  ],

  // subjects unfinished
  pendingSubjects: [
    {
      id: "subjectId456",
      name: "Subject 2",
      description: "This is subject description.",
      imagePath: subject1,
    },
    {
      id: "subjectId789",
      name: "Subject 3",
      description: "This is subject description.",
      imagePath: subject1,
    },
  ],
};

export { assessmentData };
