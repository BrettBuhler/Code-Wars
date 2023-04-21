/*
Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial
*/

const factorial = (n) => {
    for (let i = n - 1; i > 1; i--){
        n *= i
    }
    return n > 0 ? n : 1
}

console.log(factorial(0))