/*
Give the summation of all even numbers in a Fibonacci sequence up to, but not including, the number passed to your function. Or, in other words, sum all the even Fibonacci numbers that are lower than the given number n (n is not the nth element of Fibonnacci sequence) without including n.

The Fibonacci sequence is a series of numbers where the next value is the addition of the previous two values. The series starts with 0 and 1:

0 1 1 2 3 5 8 13 21...

For example:

fibonacci(0)==0
fibonacci(33)==10
fibonacci(25997544)==19544084
*/
// MY SOLUTION

const fibonacci = (n) => {
    let num1 = 0
    let num2 = 1
    let sum = 0
    let temp
    while (num2 < n){
        if(num2 % 2 == 0){
            sum+= num2
        }
        temp = num2
        num2 += num1
        num1 = temp
    }
    return sum
}

console.log(fibonacci(2147483647))