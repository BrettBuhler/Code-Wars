const knapsackLight = (v1, w1, v2, w2, maxW) => {
  return w1 + w2 <= maxW ? v1 + v2 : w1 <= maxW && v1 > v2 ? v1 : w2 <= maxW && v2 >= v1 ? v2 : w1 <= maxW ? v1 : w2 <= maxW ? v2 : 0
};
