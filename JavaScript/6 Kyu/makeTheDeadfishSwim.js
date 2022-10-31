/*
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]
*/
// MY SOLUTION

const parse = (str) => {
    let value = 0
    let returnArray = []
    for (let i = 0; i < str.length; i++){
        switch(str[i]){
            case 'i':
                value = value + 1
                break
            case 'd':
                value = value - 1
                break
            case 's':
                value *= value
                break
            case 'o':
                returnArray.push(value)
                break
        }

    }
    return returnArray
} 