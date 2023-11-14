const ABM = require("./strand/ABM");
const HRS = require("./strand/HRS");
const HUMSS = require("./strand/HUMSS");
const ICT = require("./strand/ICT");
const SMAW = require("./strand/SMAW");
const STEM = require("./strand/STEM");

const QuesPE = [
  {
    question: "Do you enjoy reading books or engaging in creative activities?",
    associatedStrand: HUMSS.name,
  },
  {
    question: "Are you interested in hands-on projects and building things?",
    associatedStrand: SMAW.name,
  },
  {
    question: "Do you find scientific experiments and research intriguing?",
    associatedStrand: STEM.name,
  },
  {
    question: "Are you good with numbers and interested in financial planning?",
    associatedStrand: ABM.name,
  },
  {
    question: "Do you like writing, storytelling, and expressing your ideas?",
    associatedStrand: HUMSS.name,
  },
  {
    question:
      "Are you comfortable with metalworking, welding, and fabrication?",
    associatedStrand: SMAW.name,
  },
  {
    question: "Do you have a knack for coding, IT, and digital skills?",
    associatedStrand: ICT.name,
  },
  {
    question: "Are you interested in business, economics, and finance?",
    associatedStrand: ABM.name,
  },
  {
    question: "Do you enjoy crafting, building, and hands-on work?",
    associatedStrand: SMAW.name,
  },
  {
    question: "Are you excited about advancements in science and technology?",
    associatedStrand: STEM.name,
  },
  {
    question: "Do you find joy in shaping the digital world through coding?",
    associatedStrand: ICT.name,
  },
  {
    question: "Are you passionate about creating memorable dining experiences?",
    associatedStrand: HRS.name,
  },
  {
    question: "Are you a good researcher and communicator?",
    associatedStrand: HUMSS.name,
  },
  {
    question:
      "Do you have experience with trade skills and hands-on techniques?",
    associatedStrand: SMAW.name,
  },
  {
    question: "Are you skilled in software development and troubleshooting?",
    associatedStrand: ICT.name,
  },
  {
    question: "Are you interested in social, cultural, or behavioral issues?",
    associatedStrand: HUMSS.name,
  },
  {
    question: "Can you handle culinary dilemmas and menu creation?",
    associatedStrand: HRS.name,
  },
  {
    question:
      "Are you proficient in metalwork, construction, and technical skills?",
    associatedStrand: SMAW.name,
  },
  {
    question:
      "Are you fascinated by computers, coding, and digital innovations?",
    associatedStrand: ICT.name,
  },
  {
    question: "Are you enthusiastic about culinary arts and food and beverage?",
    associatedStrand: HRS.name,
  },
  {
    question:
      "Are you drawn to working in publishing houses or creative agencies?",
    associatedStrand: HUMSS.name,
  },
  {
    question:
      "Are you comfortable in construction sites, workshops, or manufacturing plants?",
    associatedStrand: SMAW.name,
  },
  {
    question:
      "Do you aspire to work in tech startups, IT firms, or digital agencies?",
    associatedStrand: ICT.name,
  },
  {
    question: "Are you interested in banks, corporations, or startups?",
    associatedStrand: ABM.name,
  },
  {
    question: "Do you enjoy reading books and engaging in creative pursuits?",
    associatedStrand: HUMSS.name,
  },
  {
    question: "Do you like crafting, building, or hands-on projects?",
    associatedStrand: SMAW.name,
  },
  {
    question:
      "Are you motivated by solving math problems or conducting experiments?",
    associatedStrand: STEM.name,
  },
  {
    question: "Do you have a knack for managing finances and investments?",
    associatedStrand: ABM.name,
  },
  {
    question:
      "Are you inclined to work on artistic creations, literature, or cultural initiatives?",
    associatedStrand: HUMSS.name,
  },
  {
    question:
      "Are you interested in scientific experiments and research endeavors?",
    associatedStrand: STEM.name,
  },
  {
    question:
      "Do you see yourself working on technological innovations and software development?",
    associatedStrand: ICT.name,
  },
  {
    question:
      "Are entrepreneurial ventures and financial analysis appealing to you?",
    associatedStrand: ABM.name,
  },
  {
    question: "Do you find joy in cooking, baking, and culinary adventures?",
    associatedStrand: HRS.name,
  },
  {
    question: "Are you comfortable with budgeting and financial planning?",
    associatedStrand: ABM.name,
  },
  {
    question: "Do you enjoy reading, writing, and creative expression?",
    associatedStrand: HUMSS.name,
  },
  {
    question: "Are you motivated by experimenting and problem-solving?",
    associatedStrand: STEM.name,
  },
  {
    question: "Do you envision combining metalworks and welding in your work?",
    associatedStrand: SMAW.name,
  },
  {
    question:
      "Are you passionate about guiding people and providing hospitality?",
    associatedStrand: HRS.name,
  },
  {
    question:
      "Do you see yourself working inside a bank in financial management?",
    associatedStrand: ABM.name,
  },
  {
    question:
      "Are you excited about coding, programming, or digital exploration?",
    associatedStrand: ICT.name,
  },
  {
    question: "Are you in awe of financial planning and business acumen?",
    associatedStrand: ABM.name,
  },
  {
    question:
      "Is coding, software development, and IT solutions something you admire?",
    associatedStrand: ICT.name,
  },
  {
    question: "Are you inspired by culinary excellence and food service?",
    associatedStrand: HRS.name,
  },
  {
    question: "Do you prefer working in restaurants, hotels, or event venues?",
    associatedStrand: HRS.name,
  },
  {
    question:
      "Are laboratories, research centers, or tech companies your ideal work environment?",
    associatedStrand: STEM.name,
  },
  {
    question:
      "Are banks, corporations, or startups where you see yourself working?",
    associatedStrand: ABM.name,
  },
  {
    question:
      "Do you like tech startups, IT firms, or digital agencies as a work environment?",
    associatedStrand: ICT.name,
  },
  {
    question:
      "Are you more inclined to solve social issues and understand human behavior?",
    associatedStrand: HUMSS.name,
  },
  {
    question:
      "Are financial and business challenges what you naturally excel at solving?",
    associatedStrand: ABM.name,
  },
  {
    question:
      "Do you find satisfaction in solving software development and coding tasks?",
    associatedStrand: ICT.name,
  },
];

module.exports = QuesPE;
