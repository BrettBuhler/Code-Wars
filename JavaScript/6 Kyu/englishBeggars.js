const beggars = (values, n) => {
  if (n == 0) return [];
  const beggars_array = Array(n).fill(0);
  let index = 0;
  for (let i = 0; i < values.length; i++) {
    beggars_array[index] += values[i];
    if (index < beggars_array.length - 1) {
      index++;
    } else {
      index = 0;
    }
  }
  return beggars_array;
};
console.log(`BEGGARS=${beggars([1, 2, 3, 4, 5], 2)}`);
