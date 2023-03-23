/*
Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

Return as a number.
*/
const divCon = (x) => x.reduce((a,b)=> typeof b == 'number' ? a + b : a - parseInt(b),0)

console.log(divCon([1,2,3,'3']))