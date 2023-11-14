const HRS = require("../strand/HRS");

const MARKETING = require("../subjectType/MARKETING");

const FBS = {
  associatedSubjectType: MARKETING.name,
  associatedStrands: [HRS.name],

  name: "Food & Beverage Services",
  description:
    "Focuses on the principles, practices, and skills involved in providing food and beverage services in various hospitality and culinary settings, such as restaurants, hotels, catering, and other food service establishments. This subject is designed to train students for careers in the food and beverage industry, including roles as waitstaff, servers, and hosts.",
  imagePath: "uploads\\prod\\subject\\33.jpg",

  questions: [
    // question no. 1
    {
      question: 'What is the primary purpose of a "sommelier" in a restaurant?',
      answerKeys: [
        {
          value: "To design the restaurant's interior",
          correct: false,
        },
        {
          value: "To create marketing materials",
          correct: false,
        },
        {
          value:
            "To assist customers in choosing and pairing wines with their meals",
          correct: true,
        },
        {
          value: "To prepare the food dishes",
          correct: false,
        },
      ],
    },
    // question no. 2
    {
      question: 'In a restaurant, what is the role of a "sous chef"?',
      answerKeys: [
        {
          value: "Greeting guests and taking orders",
          correct: false,
        },
        {
          value: "Overseeing the front-of-house operations",
          correct: false,
        },
        {
          value: "Assisting the head chef in the kitchen",
          correct: true,
        },
        {
          value: "Managing the restaurant's finances",
          correct: false,
        },
      ],
    },
    // question no. 3
    {
      question: 'What is the "mise en place" in food and beverage service?',
      answerKeys: [
        {
          value: "A special menu for the day",
          correct: false,
        },
        {
          value:
            "The preparation and organization of all ingredients and equipment before cooking",
          correct: true,
        },
        {
          value: "The reservation system for guests",
          correct: false,
        },
        {
          value: "A type of wine list",
          correct: false,
        },
      ],
    },
    // question no. 4
    {
      question: 'When serving wine, what does "decanting" mean?',
      answerKeys: [
        {
          value: "Mixing different types of wine",
          correct: false,
        },
        {
          value:
            "Pouring wine into a decanter or carafe to separate it from any sediment and allow it to breathe",
          correct: true,
        },
        {
          value: "Reducing the alcohol content of wine",
          correct: false,
        },
        {
          value: "Adding spices to wine",
          correct: false,
        },
      ],
    },
    // question no. 5
    {
      question: 'In a restaurant, what is "table d\'hôte"?',
      answerKeys: [
        {
          value: "A table for special guests",
          correct: false,
        },
        {
          value: "A type of dessert",
          correct: false,
        },
        {
          value:
            "A fixed-price menu offering a complete meal with several courses for a single price",
          correct: true,
        },
        {
          value: "A type of table setting",
          correct: false,
        },
      ],
    },
    // question no. 6
    {
      question:
        'What is the role of a "sommelier" in food and beverage service?',
      answerKeys: [
        {
          value: "Greeting guests at the entrance",
          correct: false,
        },
        {
          value: "Managing the restaurant's finances",
          correct: false,
        },
        {
          value:
            "Assisting customers in choosing and pairing wines with their meals",
          correct: true,
        },
        {
          value: "Preparing the food dishes",
          correct: false,
        },
      ],
    },
    // question no. 7
    {
      question: 'In food and beverage service, what is the "cover"?',
      answerKeys: [
        {
          value: "A type of menu",
          correct: false,
        },
        {
          value: "A customer's order",
          correct: false,
        },
        {
          value:
            "A term used to describe the space set for one guest at a table",
          correct: true,
        },
        {
          value: "A table reserved for special guests",
          correct: false,
        },
      ],
    },
    // question no. 8
    {
      question:
        'What is the primary role of a "maitre d\'hotel" in a restaurant?',
      answerKeys: [
        {
          value: "Preparing the daily specials",
          correct: false,
        },
        {
          value:
            "Greeting and seating guests, overseeing the dining room, and ensuring smooth service",
          correct: true,
        },
        {
          value: "Managing the bar",
          correct: false,
        },
        {
          value: "Handling marketing and promotions",
          correct: false,
        },
      ],
    },
    // question no. 9
    {
      question: 'When discussing wine, what does "terroir" refer to?',
      answerKeys: [
        {
          value: "The type of glass used for serving wine",
          correct: false,
        },
        {
          value:
            "The combination of factors, including soil, climate, and environment, that influence the flavor of wine",
          correct: true,
        },
        {
          value: "A wine's alcohol content",
          correct: false,
        },
        {
          value: "The type of grape used in winemaking",
          correct: false,
        },
      ],
    },
    // question no. 10
    {
      question: 'What is the "front-of-house" in a restaurant?',
      answerKeys: [
        {
          value: "The kitchen area",
          correct: false,
        },
        {
          value: "The dining area where guests are received and served",
          correct: true,
        },
        {
          value: "The area for food preparation",
          correct: false,
        },
        {
          value: "The office where restaurant finances are managed",
          correct: false,
        },
      ],
    },
    // question no. 11
    {
      question:
        'In the food and beverage industry, what is a "sommelier" responsible for?',
      answerKeys: [
        {
          value: "Preparing cocktails and mixed drinks",
          correct: false,
        },
        {
          value: "Selecting and serving wines",
          correct: true,
        },
        {
          value: "Managing the kitchen staff",
          correct: false,
        },
        {
          value: "Ordering food supplies",
          correct: false,
        },
      ],
    },
    // question no. 12
    {
      question:
        'What is the primary role of a "maitre d\'hotel" in a restaurant?',
      answerKeys: [
        {
          value: "Cooking and preparing dishes",
          correct: false,
        },
        {
          value:
            "Greeting and seating guests, supervising the waitstaff, and ensuring a smooth flow of service",
          correct: true,
        },
        {
          value: "Managing the bar area",
          correct: false,
        },
        {
          value: "Handling food deliveries",
          correct: false,
        },
      ],
    },
    // question no. 13
    {
      question: 'In a restaurant, what is the purpose of a "menu card"?',
      answerKeys: [
        {
          value: "Providing the guest's contact information",
          correct: false,
        },
        {
          value: "Listing the daily specials",
          correct: false,
        },
        {
          value: "Presenting the available dishes and their prices",
          correct: true,
        },
        {
          value: "Collecting guest feedback",
          correct: false,
        },
      ],
    },
    // question no. 14
    {
      question: 'What does the term "à la carte" mean in a restaurant menu?',
      answerKeys: [
        {
          value: "A fixed-price menu with limited choices",
          correct: false,
        },
        {
          value: "A buffet-style dining option",
          correct: false,
        },
        {
          value:
            "Dishes listed and priced separately, allowing guests to order individual items",
          correct: true,
        },
        {
          value: "A special discount for large groups",
          correct: false,
        },
      ],
    },
    // question no. 15
    {
      question:
        'In the context of restaurant service, what is "tableside service"?',
      answerKeys: [
        {
          value: "Guests serving themselves from a buffet",
          correct: false,
        },
        {
          value: "Preparing dishes in the kitchen",
          correct: false,
        },
        {
          value:
            "Preparing and serving certain dishes or desserts at the guest's table",
          correct: true,
        },
        {
          value: "A type of self-service ordering system",
          correct: false,
        },
      ],
    },
    // question no. 16
    {
      question: 'What does the term "cover" refer to in a restaurant?',
      answerKeys: [
        {
          value: "The tableware and utensils",
          correct: false,
        },
        {
          value: "The number of guests served during a specific time period",
          correct: true,
        },
        {
          value: "A type of table setting",
          correct: false,
        },
        {
          value: "A food dish",
          correct: false,
        },
      ],
    },
    // question no. 17
    {
      question: 'What is the role of a "sous-chef" in a restaurant kitchen?',
      answerKeys: [
        {
          value: "Managing the front of the house",
          correct: false,
        },
        {
          value: "Overseeing restaurant reservations",
          correct: false,
        },
        {
          value: "Assisting the head chef and supervising kitchen staff",
          correct: true,
        },
        {
          value: "Preparing beverages",
          correct: false,
        },
      ],
    },
    // question no. 18
    {
      question: 'What is the "mise en place" in culinary terms?',
      answerKeys: [
        {
          value: "A type of restaurant service",
          correct: false,
        },
        {
          value: "The process of cleaning dishes and utensils",
          correct: false,
        },
        {
          value:
            "The preparation and organization of ingredients and equipment before cooking",
          correct: true,
        },
        {
          value: "A formal dining setting",
          correct: false,
        },
      ],
    },
    // question no. 19
    {
      question:
        'In food and beverage service, what does the "waitstaff" typically refer to?',
      answerKeys: [
        {
          value: "The guests at the restaurant",
          correct: false,
        },
        {
          value:
            "The individuals responsible for serving food and beverages to guests",
          correct: true,
        },
        {
          value: "The kitchen staff",
          correct: false,
        },
        {
          value: "The restaurant's management team",
          correct: false,
        },
      ],
    },
    // question no. 20
    {
      question: 'What is the purpose of a "reservation book" in a restaurant?',
      answerKeys: [
        {
          value: "A book for taking notes about the daily specials",
          correct: false,
        },
        {
          value:
            "A record of guest reservations, including names, party size, and arrival times",
          correct: true,
        },
        {
          value: "A menu of desserts",
          correct: false,
        },
        {
          value: "A book for tracking kitchen inventory",
          correct: false,
        },
      ],
    },
  ],
};

module.exports = FBS;
