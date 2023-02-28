/*
The integer 64 is the first integer that has all of its digits even and furthermore, is a perfect square.

The second one is 400 and the third one 484.

Give the numbers of this sequence that are in the range [a,b] (both values inclusive)

Examples:

Even digit squares between 100 to 1000:  [400, 484]  (the output should be sorted)
Even digit squares between 1000 to 4000: []
Features of the random tests:

number of tests = 167
maximum value for a = 1e10
maximum value for b = 1e12
You do not have to check the entries; a and b are always positive integers and a < b.
*/
//MY SOLUTION

const evenDigitSquares = (a, b) => {
    if (a % 2 !== 0) a++
    let array = []
    for (let i = a; i <= b; i++){
        if (Math.sqrt(i) % 1 === 0){
            if (areDigitsEven(i)){
                array.push(i)
            }
            i = Math.pow(Math.sqrt(i) + 1, 2) - 1
        }
    }
    return array
}

const areDigitsEven = (n) => {
    str = n.toString()
    for (let i = 0; i < str.length; i++){
        if (parseInt(str[i]) % 2 !== 0) return false
    }
    return true
}

console.log(evenDigitSquares(100,40000))