const ICT = require("../strand/ICT");

const PROGRAMMING = require("../subjectType/PROGRAMMING");

const Animation = {
  associatedSubjectType: PROGRAMMING.name,
  associatedStrands: [ICT.name],

  name: "Animation",
  description:
    "Provide students with the skills and knowledge to create compelling and visually engaging animations for various applications, from film and television to video games and web design. They emphasize both the technical aspects of animation and the artistic and creative elements that make animations captivating and memorable.",
  imagePath: "uploads\\prod\\subject\\16.webp",

  questions: [
    // question no. 1
    {
      question: "What is the primary purpose of keyframes in animation?",
      answerKeys: [
        {
          value: "To create 3D effects",
          correct: false,
        },
        {
          value: "To add sound to animations",
          correct: false,
        },
        {
          value:
            "To define specific points in an animation sequence where an object's properties are set",
          correct: true,
        },
        {
          value: "To control the frame rate of animations",
          correct: false,
        },
      ],
    },
    // question no. 2
    {
      question:
        "Which animation technique involves creating the illusion of motion by displaying a rapid sequence of images?",
      answerKeys: [
        {
          value: "Stop-motion",
          correct: false,
        },
        {
          value: "Flash animation",
          correct: false,
        },
        {
          value: "Frame-by-frame animation",
          correct: true,
        },
        {
          value: "Tweening",
          correct: false,
        },
      ],
    },
    // question no. 3
    {
      question: 'In animation, what is the "frame rate"?',
      answerKeys: [
        {
          value: "The rate at which sound is played in an animation",
          correct: false,
        },
        {
          value: "The number of keyframes in an animation",
          correct: false,
        },
        {
          value: "The number of frames displayed per second",
          correct: false,
        },
        {
          value: "The resolution of an animation",
          correct: false,
        },
      ],
    },
    // question no. 4
    {
      question:
        "What is the term for the process of creating smooth transitions between keyframes in animation?",
      answerKeys: [
        {
          value: "Staging",
          correct: false,
        },
        {
          value: "Inbetweening",
          correct: true,
        },
        {
          value: "Keyframing",
          correct: false,
        },
        {
          value: "Rendering",
          correct: false,
        },
      ],
    },
    // question no. 5
    {
      question:
        "Which animation technique involves moving an object in small increments between keyframes?",
      answerKeys: [
        {
          value: "Stop-motion",
          correct: false,
        },
        {
          value: "Flash animation",
          correct: false,
        },
        {
          value: "Tweening",
          correct: true,
        },
        {
          value: "Frame-by-frame animation",
          correct: false,
        },
      ],
    },
    // question no. 6
    {
      question: 'In animation, what does the term "onion skinning" refer to?',
      answerKeys: [
        {
          value: "A technique for adding texture to 3D models",
          correct: false,
        },
        {
          value: "A method for controlling audio in animations",
          correct: false,
        },
        {
          value:
            "A feature that shows a faded version of the previous and next frames to help with object positioning",
          correct: true,
        },
        {
          value: "A style of drawing characters in animation",
          correct: false,
        },
      ],
    },
    // question no. 7
    {
      question:
        'What is the primary function of the "timeline" in animation software?',
      answerKeys: [
        {
          value: "To create soundtracks for animations",
          correct: false,
        },
        {
          value:
            "To display a visual representation of the animation's keyframes and their timing",
          correct: true,
        },
        {
          value: "To render final animations",
          correct: false,
        },
        {
          value: "To create 3D models",
          correct: false,
        },
      ],
    },
    // question no. 8
    {
      question:
        "Which animation term refers to the process of creating the illusion of movement for inanimate objects, like furniture or toys?",
      answerKeys: [
        {
          value: "Character animation",
          correct: false,
        },
        {
          value: "Object animation",
          correct: true,
        },
        {
          value: "3D animation",
          correct: false,
        },
        {
          value: "Frame animation",
          correct: false,
        },
      ],
    },
    // question no. 9
    {
      question: 'What is "easing" in animation?',
      answerKeys: [
        {
          value: "A technique for adding sound effects to animations",
          correct: false,
        },
        {
          value: "A method for controlling animation speed and acceleration",
          correct: true,
        },
        {
          value: "A way to draw characters in animation",
          correct: false,
        },
        {
          value: "A type of animation style",
          correct: false,
        },
      ],
    },
    // question no. 10
    {
      question: 'What does the term "rigging" refer to in 3D animation?',
      answerKeys: [
        {
          value: "Creating complex character designs",
          correct: false,
        },
        {
          value:
            "The process of creating a digital skeleton or framework for a character",
          correct: true,
        },
        {
          value: "Adding visual effects to animations",
          correct: false,
        },
        {
          value: "Applying textures to 3D models",
          correct: false,
        },
      ],
    },
  ],
};

module.exports = Animation;
