/*
Task
If possible, divide the integers 1,2,…,n into two sets of equal sum.

Input
A positive integer n <= 1,000,000.

Output
If it's not possible, return [ ] (Javascript and Python) or ( ) (Python) or None (Scala). If it's possible, return two disjoint sets. Each integer from 1 to n must be in one of them. The integers in the first set must sum up to the same value as the integers in the second set. The sets can be returned in a tuple, list, or array, depending on language.

Examples:
For n = 8, valid answers include:

[1, 3, 6, 8], [2, 4, 5, 7] (or [[1, 3, 6, 8], [2, 4, 5, 7] ])

[8, 1, 3, 2, 4], [5, 7, 6]

[7, 8, 3], [6, 1, 5, 4, 2], and others.

For n = 9 it is not possible. For example, try [6, 8, 9] and [1, 2, 3, 4, 5, 7], but the first sums to 23 and the second to 22. No other sets work either.

Source: CSES (Code Submission Evaluation System) - https://cses.fi/problemset/task/1092
*/

const createTwoSetsOfEqualSum = (n) => {
    let numArray = Array.from({length: n}, (_, i) => i + 1)
    let sum = numArray.reduce((a,b)=>a+b)
    return sum % 2 === 0 ? getArrays(numArray, sum) : []
}

const getArrays = (array, sum) => {
    let array1 = []
    let array2 = []
    let sum1 = 0
    let sum2 = 0
    for (let i = array.length; i > 0; i--){
        if (sum1 + i <= sum / 2){
            array1.push(i)
            sum1 += i
        } else {
            array2.push(i)
            sum2 += i
        }
    }
    return sum1 === sum2 ? [array1, array2] : []
}

console.log(createTwoSetsOfEqualSum(8))