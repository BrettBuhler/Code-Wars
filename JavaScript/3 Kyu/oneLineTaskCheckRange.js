/*
Task
You're given an array of integers a and two integers x and y. Count the number of elements in the array such that `x ≤ a[i] ≤ y, where i is the 0-based index of the element.

Code Limit
Less than 48 characters.

Example
For a = [2, 5, 6, 7, 1, 3, 4, 11, 56, 49], x = 1 and y = 7,

the output should be 7.

elements 2, 5, 6, 7, 1, 3, 4 should be counted.
*/

// MY SOLUTION

checkRange=(a,x,y)=>a.map(n=>i+=x>n==n>y,i=0)|i