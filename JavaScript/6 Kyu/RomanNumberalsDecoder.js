/*
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

solution('XXI'); // should return 21
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
Courtesy of rosettacode.org
*/
// MY SOLUTION

const solution = (str) => {
    const dict = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    }
    str = str.split('')
    for (let i = 0; i < str.length - 1; i++){
      if (dict[str[i]] < dict[str[i+1]]){
        let left = str.slice(0,i)
        let right = str.slice(i+1, str.length)
        right[0] = dict[str[i+1]] - dict[str[i]]
        str = left.concat(right)
      }
    }
    return str.map(x=>typeof x == 'string' ? dict[x] : x).reduce((a,b) => a+b)
  }