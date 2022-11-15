/*
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
Don't forget to rate this kata! Thanks :)
*/
// MY SOLUTION

String.prototype.camelCase = function() {
    if (this == ''){
        return this.toString()
    }
    let str = this.trim()
    let arr = str.split(' ')
    return arr.map(x=> x[0].toUpperCase() + x.slice(1,x.length).toLowerCase()).join('')
}

console.log(''.camelCase())