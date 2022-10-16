/*
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100
*/
// MY SOLUTION
const validParentheses = (str) => {
    const removeValid = (str) => {
        if (!str.includes('(')) return str
        let left = 0
        let right = 0
        let index
        for (let i = str.indexOf('('); i < str.length; i++){
            if (str[i] == '(') left ++
            if (str[i] == ')') right ++
            if (left == right) {
                index = i
                break
            }
            if (i == str.length - 1) return str
        }
        let leftStr = str.slice(0, str.indexOf('('))
        let middle = str.slice(str.indexOf('(') + 1, index)
        let rightStr = str.slice(index + 1, str.length)
        return `${leftStr}${middle}${rightStr}`
    }
    let newStr = removeValid(str)
    while (str != newStr){
        str = newStr
        newStr = removeValid(str)
    }
    return str == ''
}
console.log(validParentheses('(()()d)'))