/*
Remove the parentheses
In this kata you are given a string for example:

"example(unwanted thing)example"
Your task is to remove everything inside the parentheses as well as the parentheses themselves.

The example above would return:

"exampleexample"
Notes
Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
There can be multiple parentheses.
The parentheses can be nested.
*/

const removeParentheses = (s) =>{
    let start = false
    let leftCount = 0
    let rightCount = 0
    let arr = []
    for (let i = 0; i < s.length; i++){
        if (s[i] == '('){
            if (leftCount == 0){
                start = i
            }
            leftCount++
        }
        if(s[i] == ')'){
            rightCount++
        }
        if (leftCount == rightCount && start !== false){
            arr.push(s.substring(start,i+1))
            start = false
            leftCount = 0
            rightCount = 0
        }
    }
    for (let i = 0; i < arr.length; i++){
        s = s.replace(arr[i], '')
    }
    return s
}

console.log(removeParentheses("example(unwanted thing)example"))