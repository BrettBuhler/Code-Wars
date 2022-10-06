/*
Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
*/
// MY SOLUTION
const minSum=(nums)=>nums.sort((a,b)=>a-b).map(x=>x*nums.pop()).reduce((a,b)=>a+b)