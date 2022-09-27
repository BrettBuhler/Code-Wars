/*
I will give you an integer (N) and a string. Break the string up into as many substrings of N as you can without spaces. If there are leftover characters, include those as well.

Example: 

N = 5;

String = "This is an example string";

Return value:
Thisi
sanex
ample
strin
g

Return value as a string: 'Thisi'+'\n'+'sanex'+'\n'+'ample'+'\n'+'strin'+'\n'+'g
*/

// MY SOLUTION
function stringBreakers(n, string){
    string = string.split(' ').join('').split('')
    let return_arr = []
    for (let i = n; i < string.length + n; i+=n){
      return_arr.push(string.slice(i-n,i))
    }
    return return_arr.map(x=>x.join('')).join('\n')
  }