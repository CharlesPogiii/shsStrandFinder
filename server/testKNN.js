const KNN = require("./facade/KNN");

// Data
const data = [
  // 10269.05 3
  {
    _id: "65273e98aab67a0086ac5456",
    mistakes: 22,
    duration: 10269,
    noOfUnVisit: 21,
  },
  // 6080.04 0
  {
    _id: "65273e98aab67a0086ac5458",
    mistakes: 19,
    duration: 6080,
    noOfUnVisit: 12,
  },
  // 7981.03 1
  {
    _id: "65273e98aab67a0086ac545a",
    mistakes: 19,
    duration: 7981,
    noOfUnVisit: 9,
  },
  // 8809.04 2
  {
    _id: "65273e98aab67a0086ac545c",
    mistakes: 24,
    duration: 8809,
    noOfUnVisit: 11,
  },
];

const referencePoint = [0, 0, 0]; // Example reference point
const k = data.length; // Number of nearest points to find

// Predict using KNN
const nearestPoints = KNN.predict(data, referencePoint, k);

// Extract and order the _id along with the predicted values
const results = nearestPoints.map((item) => ({
  _id: item.point._id,
  mistakes: item.point.mistakes,
  duration: item.point.duration,
  noOfUnVisit: item.point.noOfUnVisit,
}));

console.log("Predicted Results:", results);
