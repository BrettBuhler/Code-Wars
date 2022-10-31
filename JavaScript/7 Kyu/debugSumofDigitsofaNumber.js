/*
Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

Example
123  => 6
223  => 7
1337 => 14
*/
// MY SOLUTION

const getSumOfDigits = (int) => [...int.toString()].reduce((a, b)=> a + parseInt(b), 0)