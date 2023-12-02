// Advent of Code Day 2, Puzzle 2: 
//  🎄 visit https://adventofcode.com/2023/day/2/input for the input data
//  🎄 pop the below code in your browser console 
//  🎄 press enter!

const sumOfMinimumSetPowers = document
	.querySelector('pre')
	.textContent
	.trim()
	.split(/\n/)
	.reduce((acc, cur, ind) => {
  	const [, sample] = cur.split(": ");
		const minimumSet = {};
    
    // matchAll returns an iterator that produces arrays containing: 
    //  - the match, followed by
    //  - the capture groups for the count and colour 
		const draws = sample.matchAll(/(\d+) (\w+)/g);
		
		let draw = draws.next();

		while (!draw.done) {
			const [, count, colour] = draw.value;
      
			minimumSet[colour] = Math.max(minimumSet[colour] ?? 0, +count);

			draw = draws.next();
		}
		
		const power = Object.values(minimumSet).reduce((acc, cur) => acc * cur);
    
		return acc + power;
	}, 0);

console.log(`*** Result: ${sumOfMinimumSetPowers} ***`);
