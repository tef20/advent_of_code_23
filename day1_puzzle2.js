// Advent of Code Day 1, Puzzle 2: 
//  🎄 visit https://adventofcode.com/2023/day/1/input for the input data
//  🎄 pop the below code in your browser console 
//  🎄 press enter!

// regular expression using positive look ahead to handle cases where values overlap
// eg. "oneight" includes "one" and "eight": (on(e)ight)!
// resulting group also captured 
// use of lazy and greedy matching to isolate first and last groups
const numPattern = "(?=([0-9]|one|two|three|four|five|six|seven|eight|nine))";
const matchFirstAndLast = new RegExp(`^.*?${numPattern}.*${numPattern}`);

const nums = {
  one: 1, two: 2, three: 3, 
  four: 4, five: 5, six: 6, 
  seven: 7, eight: 8, nine: 9
};

// console must be open on the input data page linked above!
const sum = document
  .body
  .querySelector('pre')
  .textContent
  .trim()
  .split(/\n/)
  .reduce((acc, cur) => {
   [, first, last] = cur.match(matchFirstAndLast);

    // first and last nums are concatenated 
    // if num is a word, it will be mapped using the nums object, else use the digit
    const res = +`${nums[first] ?? first}${nums[last] ?? last}`;

    return acc + res;
  }, 0);

console.log(`*** Result: ${sum} ***`);
