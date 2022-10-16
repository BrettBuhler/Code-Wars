/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/
// MY SOLUTION
const solution = (str) => {
    if (str.length === 0) return []
    const splitByTwo = (str) => {
        let arr = []
        for (let i = 0; i < str.length; i++){
            if (i % 2 != 0){
                arr[arr.length - 1] += str[i]
            } else {
                arr.push(str[i])
            }
        }
        return arr
    }
    if (str.length % 2 === 0){
        return splitByTwo(str)
    } else {
        return splitByTwo(str.slice(0,str.length - 1)).concat(`${str[str.length - 1]}_`)
    }
}