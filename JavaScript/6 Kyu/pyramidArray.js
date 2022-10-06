/*
Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
Note: the subarrays should be filled with 1s
*/
// MY SOLUTION
const pyramid = (num) => num == 0 ? [] : num == 1 ? [[1]] : pyramid(num-1).concat(['1'.repeat(num).split('').map(x=>parseInt(x))])