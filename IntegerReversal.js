// CHALLENGE: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125
// if the number is negative, reverseInt(-122) === -221
// if there is 000 in the reversed, reverseInt(5200) = 25

// SOLUTION
// converting it to string and swapping using two pointers.
// returning integer with the correct sign.

const reverseInt = (input) => {
  let arr = input.toString().split("");
  let p1 = 0;
  let p2 = arr.length - 1;
  while (p1 < p2) {
    let temp = arr[p1];
    arr[p1] = arr[p2];
    arr[p2] = temp;
    p1++;
    p2--;
  }
  let resStr = arr.join("").replace(/^0+/, "");
  return parseInt(resStr) * Math.sign(input);
};

console.log(reverseInt(521));
console.log(reverseInt(-122));
console.log(reverseInt(5200));
