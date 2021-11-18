// CHALLENGE: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

// SOLUTION
// Using higher order function 'MAP'.
// We can manipulate and return new array with map function.

const capitalizeLetters = (str) =>
  str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substr(1))
    .join(" ");

console.log(capitalizeLetters("Alo diyorum duyuyor musun"));
console.log(capitalizeLetters("i love javascript"));
console.log(capitalizeLetters("happy fridayy"));
