// CHALLENGE: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

// SOLUTION: using slice() function
// slice(start, end) slices the array

const chunkArray = (arr, len) => {
  const chunkedArr = [];

  // starting from (0, len) -> indexes increase by len for chunked parts.
  // we can increase i by len.
  for (let i = 0; i < arr.length; i = i + len) {
    chunkedArr.push(arr.slice(i, i + len));
  }

  return chunkedArr;
};

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2));

// SOLUTION 2

const chunkArray2 = (arr, len) => {
  const chunkedArr = [];

  arr.forEach((val) => {
    // accessing the last element
    // to check if the chunked len is equal to len.
    // to modify the orinal array through last one
    const last = chunkedArr[chunkedArr.length - 1];

    // if the last len is reached, push new array with val.
    if (!last || last.length === len) {
      chunkedArr.push([val]);
    }
    // if not reached yet, add to the current array.
    else {
      last.push(val);
    }
  });

  return chunkedArr;
};

console.log("**************************************");
console.log(chunkArray2([1, 2, 3, 4, 5, 6, 7], 3));
console.log(chunkArray2([1, 2, 3, 4, 5, 6, 7], 2));
