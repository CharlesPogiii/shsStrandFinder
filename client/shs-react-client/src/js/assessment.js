function numberToLetter(number) {
  if (number >= 1 && number <= 26) {
    // Assuming we're converting numbers 1 to 26 to A to Z
    return String.fromCharCode(64 + number);
  } else {
    return "Invalid input"; // Handle out-of-range numbers
  }
}

export { numberToLetter };
