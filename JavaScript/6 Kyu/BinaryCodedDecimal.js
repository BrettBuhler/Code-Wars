/*
Convert a number to a binary coded decimal (BCD).

You can assume input will always be an integer. If it is a negative number then simply place a minus sign in front of the output string. Output will be a string with each digit of the input represented as 4 bits (0 padded) with a space between each set of 4 bits.

Ex.

n =  10 -> "0001 0000"
n = -10 -> "-0001 0000"
*/

const toBcd = (number) => {
    let num = number
    if (number < 0){
        number *= -1
    }
    number = number.toString().split('').map(x => {
        let str = parseInt(x).toString(2)
        while (str.length < 4){
            str = '0' + str
        }
        return str
    }).join(' ')
    return num < 0 ? '-' + number : number
}

console.log(toBcd(133))