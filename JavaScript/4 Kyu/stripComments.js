/*
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
*/

/* MY SOLUTION */
const solution = (input, markers) => {
    const endLine = new RegExp ('\n')
    for (let i = 0; i < markers.length; i++){
      let marker = new RegExp (markers[i])
      console.log(marker)
      if (marker == '/$/'){
        marker = new RegExp('\\$')
        console.log(marker)
      }
      while (input.includes(markers[i])){
        console.log(input)
        console.log(markers[i])
        let str1 = input.substring(0, input.search(marker))
        let str2 = input.substring(input.search(marker) + 1, input.length)
        if (str2.includes('\n')){
          str2 = str2.substring(str2.search(endLine), str2.length)
        } else {
          str2 = ''
        }
        while (str1.endsWith(" ")){
          str1 = str1.slice(0, str1.length - 1)
        }
        input = str1 + str2
      }
    }
    return input
  }