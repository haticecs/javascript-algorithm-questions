// CHALLENGE: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

//SOLUTION
// The opposite directional two-pointer approach. (i and j)
// Swapping the letters whose sum of indexes is sum of string length - 1.
// To replace one word in the str, we need to conver it to array by split and vice versa.

const reverseString = (str) => {
  str = str.split("");
  for (let i = 0; i < str.length / 2; i++) {
    //Swapping
    j = str.length - i - 1;
    let temp = str[i];
    str[i] = str[j];
    str[j] = temp;
  }
  return str.join("");
};

console.log(reverseString("hello")); //olleh
console.log(reverseString("hatice")); //ecitah
console.log(reverseString("javascript")); //tpircsavaj
