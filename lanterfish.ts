const FISH_REPRODUCTION_CYCLE = 6;
const NEWBORN_MATURITY = 2;

function iterate(input) {
  const output: number[] = [];
  const newFish: number[] = [];

  for (const fishCycle of input) {
    if (fishCycle === 0) {
      output.push(FISH_REPRODUCTION_CYCLE);
      newFish.push(FISH_REPRODUCTION_CYCLE + NEWBORN_MATURITY);
    } else {
      output.push(fishCycle - 1);
    }
  }

  return [...output, ...newFish];
}

const generations = [[3, 4, 3, 1, 2]];

for (let i = 0; i < 2000; i++) {
  const last = generations.at(-1);
  const newGeneration = iterate(last);
  generations.push(newGeneration);
  console.log(newGeneration.length);
}
