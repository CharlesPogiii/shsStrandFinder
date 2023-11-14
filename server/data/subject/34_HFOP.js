const HRS = require("../strand/HRS");

const MARKETING = require("../subjectType/MARKETING");

const HFOP = {
  associatedSubjectType: MARKETING.name,
  associatedStrands: [HRS.name],

  name: "Hotel Front Office Procedures",
  description:
    "A comprehensive understanding of the front office operations in the hotel and hospitality industry. This subject is crucial for individuals pursuing careers in hotel management, guest services, and front desk operations.",
  imagePath: "uploads\\prod\\subject\\34.webp",

  questions: [
    // question no. 1
    {
      question:
        'In the hotel industry, what does the term "check-in" refer to?',
      answerKeys: [
        {
          value: "The process of guests leaving the hotel",
          correct: false,
        },
        {
          value: "The process of guests arriving and registering at the hotel",
          correct: true,
        },
        {
          value: "The final bill given to guests",
          correct: false,
        },
        {
          value: "The cleaning of hotel rooms",
          correct: false,
        },
      ],
    },
    // question no. 2
    {
      question: 'What is a "no-show" in hotel reservations?',
      answerKeys: [
        {
          value: "A guest who arrives without a reservation",
          correct: false,
        },
        {
          value: "A guest who cancels their reservation in advance  ",
          correct: false,
        },
        {
          value:
            "A guest who has a reservation but does not arrive without prior cancellation",
          correct: true,
        },
        {
          value: "A guest who pays in cash",
          correct: false,
        },
      ],
    },
    // question no. 3
    {
      question:
        'What is the primary function of a "concierge" in a hotel\'s front office?',
      answerKeys: [
        {
          value: "Managing the hotel's finances",
          correct: false,
        },
        {
          value: "Overseeing housekeeping",
          correct: false,
        },
        {
          value:
            "Assisting guests with various services, such as making reservations and providing information about the local area",
          correct: true,
        },
        {
          value: "Preparing guest rooms",
          correct: false,
        },
      ],
    },
    // question no. 4
    {
      question: 'What does the term "room rate" mean in the hotel industry?',
      answerKeys: [
        {
          value: "The price for in-room dining services",
          correct: false,
        },
        {
          value: "The cost of using the hotel's fitness center",
          correct: false,
        },
        {
          value: "The cost of renting a guest room or accommodation",
          correct: true,
        },
        {
          value: "The fee for valet parking",
          correct: false,
        },
      ],
    },
    // question no. 5
    {
      question: 'What is the primary purpose of a "key card" in a hotel?',
      answerKeys: [
        {
          value: "Ordering room service",
          correct: false,
        },
        {
          value: "Accessing the hotel's website",
          correct: false,
        },
        {
          value: "Unlocking and securing a guest's room",
          correct: true,
        },
        {
          value: "Making phone calls",
          correct: false,
        },
      ],
    },
    // question no. 6
    {
      question: 'In hotel management, what does "yield management" involve?',
      answerKeys: [
        {
          value: "Managing the hotel's landscaping and aesthetics",
          correct: false,
        },
        {
          value: "Optimizing room rates and occupancy to maximize revenue",
          correct: true,
        },
        {
          value: "Providing entertainment for guests",
          correct: false,
        },
        {
          value: "Managing guest complaints",
          correct: false,
        },
      ],
    },
    // question no. 7
    {
      question: 'What is the role of a "bellhop" or "bellman" in a hotel?',
      answerKeys: [
        {
          value: "Managing the hotel's finances",
          correct: false,
        },
        {
          value: "Assisting guests with luggage and providing information",
          correct: true,
        },
        {
          value: "Preparing guest meals",
          correct: false,
        },
        {
          value: "Overseeing housekeeping operations",
          correct: false,
        },
      ],
    },
    // question no. 8
    {
      question: 'What does the term "check-out" mean in a hotel context?',
      answerKeys: [
        {
          value: "The process of guests arriving and registering at the hotel",
          correct: false,
        },
        {
          value: "The process of guests leaving the hotel",
          correct: true,
        },
        {
          value: "The final bill given to guests",
          correct: false,
        },
        {
          value: "The inspection of guest rooms",
          correct: false,
        },
      ],
    },
    // question no. 9
    {
      question: 'What is the "front desk" in a hotel?',
      answerKeys: [
        {
          value: "The area where guests dine",
          correct: false,
        },
        {
          value:
            "The area where guests check in, check out, and inquire about hotel services",
          correct: true,
        },
        {
          value: "The kitchen where food is prepared",
          correct: false,
        },
        {
          value: "The hotel's administrative office",
          correct: false,
        },
      ],
    },
    // question no. 10
    {
      question: 'In hotel front office procedures, what is a "folio"?',
      answerKeys: [
        {
          value: "A type of room key",
          correct: false,
        },
        {
          value: "A guest's personal diary",
          correct: false,
        },
        {
          value:
            "An itemized statement of a guest's account, including charges and payments",
          correct: true,
        },
        {
          value: "A guest's passport    ",
          correct: false,
        },
      ],
    },
    // question no. 11
    {
      question:
        'In the hotel industry, what is the primary purpose of the "front desk" or "reception" area?',
      answerKeys: [
        {
          value: "Serving meals to guests",
          correct: false,
        },
        {
          value: "Handling guest check-ins, check-outs, and inquiries",
          correct: true,
        },
        {
          value: "Managing housekeeping operations",
          correct: false,
        },
        {
          value: "Booking tours and activities",
          correct: false,
        },
      ],
    },
    // question no. 12
    {
      question: 'What is the role of a "concierge" in a hotel\'s front office?',
      answerKeys: [
        {
          value: "Cleaning guest rooms",
          correct: false,
        },
        {
          value:
            "Assisting guests with various services and information, such as booking tours, making dinner reservations, and providing local recommendations",
          correct: true,
        },
        {
          value: "Managing the hotel's finances",
          correct: false,
        },
        {
          value: "Overseeing the hotel's marketing",
          correct: false,
        },
      ],
    },
    // question no. 13
    {
      question:
        'What does "yield management" refer to in hotel front office operations?',
      answerKeys: [
        {
          value: "Managing the hotel's landscaping and outdoor spaces",
          correct: false,
        },
        {
          value: "Adjusting room rates and availability to optimize revenue",
          correct: true,
        },
        {
          value: "Selecting and training the hotel's staff",
          correct: false,
        },
        {
          value: "Handling guest complaints",
          correct: false,
        },
      ],
    },
    // question no. 14
    {
      question:
        'What is the purpose of a "registration card" in hotel check-in procedures?',
      answerKeys: [
        {
          value: "Providing guests with directions to local attractions",
          correct: false,
        },
        {
          value:
            "Gathering essential guest information, such as name, contact details, and payment method",
          correct: true,
        },
        {
          value: "Ordering room service",
          correct: false,
        },
        {
          value: "Confirming room reservations",
          correct: false,
        },
      ],
    },
    // question no. 15
    {
      question:
        'In the context of hotel front office procedures, what is a "no-show"?',
      answerKeys: [
        {
          value: "A guest who arrives at the hotel without a reservation",
          correct: false,
        },
        {
          value: "A guest who cancels their reservation in advance",
          correct: false,
        },
        {
          value: "A guest who fails to arrive and check in as scheduled",
          correct: true,
        },
        {
          value: "A guest who pays in advance for their stay",
          correct: false,
        },
      ],
    },
    // question no. 16
    {
      question:
        'What is the primary purpose of a "bell desk" or "luggage service" in a hotel?',
      answerKeys: [
        {
          value: "Providing room service",
          correct: false,
        },
        {
          value:
            "Assisting guests with luggage and other services, such as storage and transportation",
          correct: true,
        },
        {
          value: "Handling guest reservations",
          correct: false,
        },
        {
          value: "Managing the hotel's marketing efforts",
          correct: false,
        },
      ],
    },
    // question no. 17
    {
      question:
        'What is the role of the "night auditor" in hotel front office operations?',
      answerKeys: [
        {
          value: "Overseeing the hotel's daytime operations",
          correct: false,
        },
        {
          value:
            "Handling the accounting and financial aspects of the hotel's daily transactions and preparing reports",
          correct: true,
        },
        {
          value: "Assisting guests with check-in and check-out",
          correct: false,
        },
        {
          value: "Managing the hotel's inventory",
          correct: false,
        },
      ],
    },
    // question no. 18
    {
      question:
        'In hotel front office procedures, what is the purpose of a "folio"?',
      answerKeys: [
        {
          value: "A folder for storing guest feedback",
          correct: false,
        },
        {
          value: "A list of available room rates",
          correct: false,
        },
        {
          value:
            "A detailed record of a guest's charges, payments, and overall account during their stay",
          correct: true,
        },
        {
          value: "A menu of restaurant offerings",
          correct: false,
        },
      ],
    },
    // question no. 19
    {
      question:
        'What is the primary responsibility of the "reservations department" in a hotel?',
      answerKeys: [
        {
          value: "Cleaning guest rooms",
          correct: false,
        },
        {
          value: "Handling guest check-ins",
          correct: false,
        },
        {
          value: "Managing advance bookings and room reservations",
          correct: true,
        },
        {
          value: "Overseeing housekeeping operations",
          correct: false,
        },
      ],
    },
    // question no. 20
    {
      question:
        'In hotel front office procedures, what does "overbooking" refer to?',
      answerKeys: [
        {
          value: "Booking a room for a guest who arrives without a reservation",
          correct: false,
        },
        {
          value:
            "Booking more rooms than the hotel has available, anticipating some cancellations or no-shows",
          correct: true,
        },
        {
          value: "Providing extra amenities to guests",
          correct: false,
        },
        {
          value: "Adjusting room rates based on demand",
          correct: false,
        },
      ],
    },
  ],
};

module.exports = HFOP;
