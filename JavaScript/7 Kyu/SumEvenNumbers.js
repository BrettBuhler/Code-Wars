/*
Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

Only numbers without decimals like 4 or 4.0 can be even.

The input is a sequence of numbers: integers and/or floats.
*/

const sumEvenNumbers = (input) => {
    let counter = 0
    for (let i = 0; i < input.length; i++){
        if (input[i] % 2 === 0){
            counter += input[i]
        }
    }
    return counter
}