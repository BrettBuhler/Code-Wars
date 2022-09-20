/*
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives
*/
/* NOTE: kata does not allow the use of BigInt() despite not explicitly stating so */
/* MY SOLUTION */
const add = (a, b) => {
    a = a.split('').reverse()
    b = b.split('').reverse()
    if (b.length > a.length) {
        let tempA = a
        a = b
        b = tempA
    }
    a = a.map((x, i) => {
        if (b[i]){
            return Number(x) + Number(b[i])
        } else {
            return Number(x)
        }
    })
    let pushOne = false
    for (let i = 0; i < a.length; i++){
        if (a[i] > 9) {
            if (i == a.length -1){
                pushOne = true
                a[i] -= 10
            } else {
                a[i] -= 10
                a[i+1] ++
            }
        }
    }
    if (pushOne){
        a.push(1)
        pushOne = false
    }
    return a.reverse().join('').toString()
}
