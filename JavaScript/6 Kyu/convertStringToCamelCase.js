/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/
// MY SOLUTION

const toCamelCase = (str) => str === '' ? '' : str.split(/[-_]/).map((x,i) => i == 0? x: x.split('').map((a,b)=>b==0 ? a.toUpperCase(): a).join('')).join('')

console.log(toCamelCase('the-man-man'))