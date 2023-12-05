const FISH_REPRODUCTION_CYCLE = 6;
const NEWBORN_MATURITY = 2;

function iterate(input: number[]) {
  const length = input.length;

  for (let i = 0; i < length; i++) {
    const fishCycle = input[i];

    if (fishCycle === 0) {
      input[i] = FISH_REPRODUCTION_CYCLE;
      input.push(FISH_REPRODUCTION_CYCLE + NEWBORN_MATURITY);
    } else {
      input[i] = fishCycle - 1;
    }
  }
}

const fish = [3, 4, 3, 1, 2];

for (let i = 0; i < 2000; i++) {
  iterate(fish);
  console.log(i, fish.length);
}
