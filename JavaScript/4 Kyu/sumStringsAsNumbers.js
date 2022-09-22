/*
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
Note: The numbers are very large, and the kata does not allow the use of BigInt()
*/

// MY SOLUTION
const sumStrings = (a, b) => {
    if (b.length > a.length) {
        let tempA = a
        a = b
        b = tempA
    }
    a = a.split('').reverse()
    b = b.split('').reverse()
    if (b.length !== a.length){
        while(a.length > b.length){
            b.push('0')
        }
    }
    a = a.map((x, i) => {
        return Number(x) + Number(b[i])
    })
    for (let i = 0; i < a.length; i++){
        if (i == a.length - 1 && a[i] > 9){
            a.push(1)
            a[i] -= 10
        } else if (a[i] > 9){
            a[i + 1] += 1
            a[i] -= 10
        }
    }
    a= a.reverse()
    while (a[0] == '0'){
        a.shift()
    }
    return a.join('')
}


console.log(sumStrings("9999","1234342"))