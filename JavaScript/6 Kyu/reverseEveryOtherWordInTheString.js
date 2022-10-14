/*
Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
*/
// MY SOLUTION

reverse=(str)=>str.split(' ').map((x,i) => i == 0 || i % 2 == 0 ? x : x.split('').reverse().join('')).join(' ').trim()