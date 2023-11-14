const HUMSS = require("../strand/HUMSS");

const PHILOSOPHY = require("../subjectType/PHILOSOPHY");

const CESC = {
  associatedSubjectType: PHILOSOPHY.name,
  associatedStrands: [HUMSS.name],

  name: "Community Engagement, Solidarity, and Citizenship",
  description:
    "Focuses on the principles of active citizenship, community involvement, and social responsibility. This course encourages students to become engaged, responsible, and empathetic members of their communities and society as a whole.",
  imagePath: "uploads\\prod\\subject\\11.png",

  questions: [
    // question no. 1
    {
      question:
        'In the context of community engagement, what does the acronym "NGO" stand for?',
      answerKeys: [
        {
          value: "National Government Office",
          correct: false,
        },
        {
          value: "Non-Governmental Organization",
          correct: true,
        },
        {
          value: "Neighborhood Gathering Opportunity",
          correct: false,
        },
        {
          value: "New Governance Order",
          correct: false,
        },
      ],
    },
    // question no. 2
    {
      question:
        "What term describes the act of actively participating in the betterment of one's community or society?",
      answerKeys: [
        {
          value: "Civic engagement",
          correct: true,
        },
        {
          value: "Political apathy",
          correct: false,
        },
        {
          value: "Community isolation",
          correct: false,
        },
        {
          value: "Social distancing",
          correct: false,
        },
      ],
    },
    // question no. 3
    {
      question:
        "Which of the following is an example of a social issue that often requires community engagement to address?",
      answerKeys: [
        {
          value: "Best-selling novels",
          correct: false,
        },
        {
          value: "The latest fashion trends",
          correct: false,
        },
        {
          value: "Poverty and homelessness",
          correct: true,
        },
        {
          value: "Celebrity gossip",
          correct: false,
        },
      ],
    },
    // question no. 4
    {
      question:
        'What is the concept of "solidarity" in the context of community engagement and citizenship?    ',
      answerKeys: [
        {
          value: "Isolating oneself from the community",
          correct: false,
        },
        {
          value:
            "Unity and cooperation among community members in pursuing common goals",
          correct: true,
        },
        {
          value:
            "Supporting only one's own interests without concern for others",
          correct: false,
        },
        {
          value: "Ignoring social issues",
          correct: false,
        },
      ],
    },
    // question no. 5
    {
      question:
        "What is the term for the process of giving one's time and skills voluntarily to help others or the community?",
      answerKeys: [
        {
          value: "Social distancing",
          correct: false,
        },
        {
          value: "Philanthropy",
          correct: true,
        },
        {
          value: "Apathy",
          correct: false,
        },
        {
          value: "Xenophobia",
          correct: false,
        },
      ],
    },
  ],
};

module.exports = CESC;
