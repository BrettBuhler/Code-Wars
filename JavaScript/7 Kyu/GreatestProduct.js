/*
 * Rick wants a faster way to get the product of the largest pair in an array. Your task is to create a performant solution to find the product of the largest two integers in an array of positive numbers.

Rick is only interested in solutions that are faster than his, which has a running time of O(n log n).

[2, 6, 3]                      => 18 = 6 * 3
[2, 1, 5, 0, 4, 3]             => 20 = 5 * 4
[7, 8, 9]                      => 72 = 8 * 9
[33, 231, 454, 11, 9, 99, 57]  => 104874 = 231 * 454
*/
function maxProduct(a) {
  let max = 0
  let max2 = 0
  for (let i = 0; i < a.length; i++){
    const val = a[i]
    if (val > max) {
      max2 = max
      max = val 
    } else if (val > max2){
      max2 = val
    }
  }
  return max * max2
}

function maxProduct(a) {
  return a.sort((a, b) => b - a).slice(0,1).reduce((a,b)=> a*b)
}
