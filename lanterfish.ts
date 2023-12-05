const FISH_REPRODUCTION_CYCLE = 6;
const NEWBORN_MATURITY = 2;

function iterate(input: Record<number, number>) {
  const result = {};

  for (let i = 0; i <= FISH_REPRODUCTION_CYCLE + NEWBORN_MATURITY; i++) {
    if (i !== 0) {
      result[i - 1] = input[i] ?? 0;
    }
  }

  result[FISH_REPRODUCTION_CYCLE] += input[0] ?? 0;
  result[FISH_REPRODUCTION_CYCLE + NEWBORN_MATURITY] = input[0];
  return result;
}

function groupFish(fish: number[]) {
  const result = {};

  for (const entry of fish) {
    result[entry] = (result[entry] ?? 0) + 1;
  }

  return result;
}

const fish = [3, 4, 3, 1, 2];
let grouppedFish = groupFish(fish);
console.log(0, grouppedFish);

for (let i = 0; i < 2000; i++) {
  grouppedFish = iterate(grouppedFish);
  console.log(i, grouppedFish);
}
