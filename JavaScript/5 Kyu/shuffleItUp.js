/*
We have an array of unique elements. A special kind of permutation is the one that has all of its elements in a different position than the original.

Let's see how many of these permutations may be generated from an array of four elements. We put the original array with square brackets and the wanted permutations with parentheses.

arr = [1, 2, 3, 4]
      (2, 1, 4, 3)
      (2, 3, 4, 1)
      (2, 4, 1, 3)
      (3, 1, 4, 2)
      (3, 4, 1, 2)
      (3, 4, 2, 1)
      (4, 1, 2, 3)
      (4, 3, 1, 2)
      (4, 3, 2, 1)
      _____________
A total of 9 permutations with all their elements in different positions than arr
The task for this kata would be to create a code to count all these permutations for an array of certain length.

Features of the random tests:

l = length of the array
10 ≤ l ≤ 5000
See the example tests.

Enjoy it!
*/

const allPermuted = (n) => {
    return derangements(n)
}
const derangements = (n) => {
    let count = BigInt(0)
    phase = BigInt(1)
    for (let i = BigInt(0); i <= n; i++){
        count = count * i + phase
        phase *= BigInt(-1)
    }
    return count
}

console.log(derangements(30))
