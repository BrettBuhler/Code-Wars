/*
No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!
*/
// MY SOLUTION

const testit = (arr) => {
    let max, min
    max = Math.max(...arr)
    min = Math.min(...arr)
    arr = [...arr.filter(x=>x !== max && x !== min)]
    return arr.length > 0 ? Math.round(arr.reduce((a,b)=>a + b) / arr.length * 100) / 100 : 0
}