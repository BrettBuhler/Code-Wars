/*
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/
// MY SOLUTION

function cleanString (str) {
    let returnStr = []
    str.split('').map(x=>x == '#'?returnStr.pop():returnStr.push(x))
    return returnStr.join('')
  }