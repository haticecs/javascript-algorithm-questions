// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100.
// For multiples of 3, instead of the number, print "Fizz",
// For multiples of 5 print "Buzz".
// For numbers which are multiples of both 3 and 5, print "FizzBuzz".

const fizzBuzz = () => {
  const isDividedBy3 = (i) => i % 3 === 0;
  const isDividedBy5 = (i) => i % 5 === 0;
  let res;
  for (let i = 0; i <= 100; i++) {
    if (isDividedBy3(i) && isDividedBy5(i)) res = "FizzBuzz";
    else if (isDividedBy3(i)) res = "Fizz";
    else if (isDividedBy5(i)) res = "Buzz";
    else res = i;
    console.log(res);
  }
};

fizzBuzz();
