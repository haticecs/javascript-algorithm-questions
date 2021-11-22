// CHALLENGE: LONGEST WORD
// Return the longest word of a string
// Only return an array if multiple words, otherwise return a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'
// ex. longestWord('Hello there, my name is Brad') === ['hello', 'there']

// SOLUTION: Using the hashmMap
const longestWord = (sen) => {
  const wordMap = {};
  const regex = /[0-9a-zA-Z]+/g;

  // storing the word and its length in the hashMap.
  // match returns an array
  sen.match(regex).forEach((word) => (wordMap[word] = word.length));

  // We need to find max count
  let max = Object.keys(wordMap).reduce(
    (max, key) => Math.max(max, wordMap[key]),
    0
  );

  // Then, push the ones with max count to the result array.
  let resArr = Object.keys(wordMap).reduce((arr, key) => {
    wordMap[key] === max && arr.push(key);
    return arr;
  }, []);

  return resArr.length === 1 ? resArr[0] : resArr;
};

console.log(longestWord("Hey there, my name is carrie"));
console.log(longestWord("Hello there, my name is Brad"));
console.log(longestWord("You told me you love me"));

// SOLUTION 2: using sort() fucntion

const longestWordWithSort = (sen) => {
  // filter the array
  const regex = /[0-9a-zA-Z]+/g;
  const wordArr = sen.match(regex);

  // sort array by length(sort is inplace function)
  wordArr.sort((a, b) => b.length - a.length);

  // if multiple words, put it into array
  let max = wordArr[0].length;
  let resArr = wordArr.filter((word) => word.length === max);

  return resArr.length === 1 ? resArr[0] : resArr;
};

console.log("******************************");
console.log(longestWordWithSort("Hey there, my name is carrie"));
console.log(longestWordWithSort("Hello there, my name is Brad"));
console.log(longestWordWithSort("You told me you love me"));
