// CHALLENGE: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'

// SOLUTION: hashMap
// Using object as a hashmap(key: character, value: count)
// Then returning the char which is most common.

const maxCharacter = (str) => {
  let hashMap = {};

  str.split("").forEach((chr) => {
    if (!hashMap.hasOwnProperty(chr)) {
      hashMap[chr] = 1;
    } else {
      hashMap[chr]++;
    }
  });

  // Object.keys returns key values as an array
  // we need to initialize as 0 in reduce function.

  const max = Object.keys(hashMap).reduce((a, k) => Math.max(a, hashMap[k]), 0);

  const resultMap = Object.keys(hashMap).filter((k) => hashMap[k] === max);

  return resultMap;
};

console.log(maxCharacter("javascript"));
console.log(maxCharacter("javascriptisawesome"));
