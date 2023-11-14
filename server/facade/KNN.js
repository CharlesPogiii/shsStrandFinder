function euclideanDistance(point1, point2) {
  if (point1.length !== point2.length) {
    throw new Error("Points must have the same dimensions");
  }

  let sumOfSquares = 0;
  for (let i = 0; i < point1.length; i++) {
    const diff = point1[i] - point2[i];
    sumOfSquares += diff * diff;
  }

  return Math.sqrt(sumOfSquares);
}

class KNN {
  static predict(points, referencePoint, k) {
    // Calculate the Euclidean distance from the reference point to each point
    const distances = points.map((point) => ({
      point,
      distance: euclideanDistance(referencePoint, [
        point.mistakes,
        point.duration / 3600000, // convert to hrs
        point.noOfUnVisit,
      ]),
    }));

    // Sort the points by distance in ascending order
    distances.sort((a, b) => a.distance - b.distance);

    // Get the k nearest points
    const nearestPoints = distances.slice(0, k);

    return nearestPoints;
  }
}

module.exports = KNN;
