const arrayManip = (array) => {
  const return_array = [];
  for (let i = 0; i < array.length; i++) {
    const sorted = array.slice(i + 1).sort((a, b) => a - b);
    let num = 0;
    for (let j = 0; j < sorted.length; j++) {
      if (sorted[j] > array[i]) {
        num = sorted[j];
        break;
      }
    }
    if (num) return_array.push(num);
    if (!num) return_array.push(-1);
  }
  return return_array;
};
