/*
In this kata you have to create all permutations of a non empty input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

Examples:

* With input 'a'
* Your function should return: ['a']
* With input 'ab'
* Your function should return ['ab', 'ba']
* With input 'aabb'
* Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
The order of the permutations doesn't matter.


*/
// MY SOLUTION
const permutations = (str) => {
    if (str.length < 2) {
        return [str]
    }
    let perms = []
    for (let i = 0; i < str.length; i++){
        let char = str[i]
        if(str.indexOf(char) != i){
            continue
        }
        let remainder = str.slice(0,i) + str.slice(i+1)
        for (let subStr of permutations(remainder)){
            perms.push(char + subStr)
        }
    }
    return perms
}
console.log(permutations('abc'))