/*
Task
+----+----+----+
| a1 | a2 | a3 |
+----+----+----+
As shown above. There are three grids. Each grid fill in a number(let's call a1, a2 and a3). Such that 0 ≤ a1, a2, a3 ≤ n, where n is given, and meet the following rules:

- a1 + a2 is a multiple of 2;
- a2 + a3 is a multiple of 3;
- a1 + a2 + a3 is a multiple of 5;
Your task is to find a set of a1, a2, a3, which makes a1 + a2 + a3 maximum. Returns the sum of a1, a2, a3.

Input/Output
[input] integer n

A non-negative integer. It's the maximum possible value of a1, a2, a3.

0 ≤ n ≤ 10000

[output] an integer

The maximum sum of a1, a2, a3.

Example
For n = 0, the output should be 0.

The possible value of a1, a2, a3 can be a1 = 0, a2 = 0, a3 = 0.

For n = 3, the output should be 5.

The possible value of a1, a2, a3 can be a1 = 2, a2 = 2, a3 = 1.

For n = 5, the output should be 10.

The possible value of a1, a2, a3 can be a1 = 4, a2 = 2, a3 = 4.

For n = 9, the output should be 25.

The possible value of a1, a2, a3 can be a1 = 7, a2 = 9, a3 = 9.

For n = 30, the output should be 90.

The possible value of a1, a2, a3 can be a1 = 30, a2 = 30, a3 = 30.
*/
/*
FIRST ATTEMPT: TOO SLOW
const findMaxSum = (n) => {
    let [a,b,c] = [n,n,n]
    let max = 0
    while (c >= 0){
        if (rule1(a,b) && rule2(b,c) && rule3(a,b,c)){
            if ((a + b + c) > max){
                max = a + b + c
            }
        }
        if (a > 0){
            a--
        } else if (b > 0){
            a = n
            b--
        } else if (c > 0){
            a = n
            b = n
            c--
        } else {
            break
        }
    }
    return max
}

const rule1 = (a, b) => {
    return (a + b) % 2 === 0
}

const rule2 = (b, c) => {
    return (b + c) % 3 === 0
}

const rule3 = (a, b, c) => {
    return (a + b + c) % 5 === 0
}


const newFunction = (n) => {
    let pattern = '050505055050555'.repeat(Math.ceil((n-1)/15))
    return n > 1 ? pattern.split('').slice(0,pattern.length - Math.abs(n - pattern.length)).map(x=>parseInt(x)).reduce((a,b)=>a+b) : 0
}
*/

const findMaxSum = (n) => {
    let pattern = [0,   5,   5,  10,  10,  15,  15,  20,  25,  25,  30,
        30,  35,  40,  45,  45,  50,  50,  55,  55,  60,  60,  65,
        70,  70,  75,  75,  80,  85,  90]
    let sum = 0
    for (let i = n; i > 0; i-=pattern.length){
        if (i - pattern.length > 0){
            sum += pattern[pattern.length - 1]
        } else {
            sum+=pattern[i-1]
        }
    }
    return sum
}

