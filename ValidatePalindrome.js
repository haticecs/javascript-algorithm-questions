// CHALLENGE: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === true, isPalindrome('hello') == false

//SOLUTION
// Two pointer approach from opposite directions.(p1 and p2, looks clearer with while loop)
// If not equal return false.
// We need to conver str to array with split then join them.

const isPalindrome = (str) => {
  str = str.split("");
  let p1 = 0;
  let p2 = str.length - 1;
  while (p1 < p2) {
    if (str[p1] !== str[p2]) {
      return false;
    }
    p1++;
    p2--;
  }
  return true;
};

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("bababab"));
console.log(isPalindrome("aaa"));
