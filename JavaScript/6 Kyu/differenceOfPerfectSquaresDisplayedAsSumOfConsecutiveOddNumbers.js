/*
This kata will return a string that represents the difference of two perfect squares as the sum of consecutive odd numbers.

Specifications:

• The first input minus the second input reveals the exact number of consecutive odd numbers required for the solution - you can check this in the examples below.

• The first input will always be larger than the second.

• All inputs will be valid so no need for error checking.

• Outputs will always be positive.

• Inputs will range between 0 and 200, (inclusive).

• In the returned string there are spaces before and after the plus sign, the minus sign and the equals sign but nowhere else.

Examples:

squaresToOdd(9, 5) --> "9^2 - 5^2 = 11 + 13 + 15 + 17 = 56"

squaresToOdd(10, 7) --> "10^2 - 7^2 = 15 + 17 + 19 = 51"

squaresToOdd(100, 98) --> "100^2 - 98^2 = 197 + 199 = 396"

squaresToOdd(100, 99) --> "100^2 - 99^2 = 199 = 199"
*/
// MY SOLUTION

const squaresToOdd = (sqr1, sqr2) => {
    let len = sqr1 - sqr2
    let num = sqr1 ** 2 - sqr2 ** 2
    let index = 1
    let sequence = []
    while (index <= num){
        sequence.push(index)
        index += 2
    }
    sequence = getOddSum(sequence, num, len)
    return `${sqr1}^2 - ${sqr2}^2 = ${sequence.join(' + ')} = ${num}`
}

const getOddSum = (sequence, num, len) => {
    for (let i = sequence.length - 1; i >= 0; i--){
        let sum = 0
        for (let j = i; j < sequence.length; j++){
            sum += sequence[j]
            if (sum == num && sequence.slice(i,j + 1).length == len){
                return sequence.slice(i,j + 1)
            }
        }
    }
    return 'error'
}

console.log(squaresToOdd(63,57))
