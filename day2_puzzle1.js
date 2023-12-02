// Advent of Code Day 1, Puzzle 2: 
//  🎄 visit https://adventofcode.com/2023/day/2/input for the input data
//  🎄 pop the below code in your browser console 
//  🎄 press enter!

const colours = { red: 12, green: 13, blue: 14 };

const sumOfMatchingIds = document
	.querySelector('pre')
	.textContent
	.trim()
	.split(/\n/)
	.reduce((acc, cur, ind) => {
  	const [, sample] = cur.split(": ");
    
    // matchAll returns an iterator that produces arrays containing the 
    // match followed by the capture groups
		const draws = sample.matchAll(/(\d+) (\w+)/g);
		
		let draw = draws.next();

		while (!draw.done) {
			const [, count, colour] = draw.value;
      
      // if invalid, quit iteration for the whole sample
			if (+count > colours[colour]) return acc;

			draw = draws.next();
		}

		return acc + ind + 1;
	}, 0);

console.log(`*** Result: ${sumOfMatchingIds} ***);
