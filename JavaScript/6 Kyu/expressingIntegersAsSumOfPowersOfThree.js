/*
Problem
All integers can be uniquely expressed as a sum of powers of 3 using each power of 3 at most once.

For example:

17 = (-1) +   0  + (-9) + 27 = (-1 * 3^0) + ( 0 * 3^1) + (-1 * 3^2) + (1 * 3^3)
-8 =   1  +   0  + (-9)      = ( 1 * 3^0) + ( 0 * 3^1) + (-1 * 3^2)
25 =   1  + (-3) +   0  + 27 = ( 1 * 3^0) + (-1 * 3^1) + ( 0 * 3^2) + (1 * 3^3)
We can use the string +-0+ to represent 25 as the sum of powers of 3:

Symbols      :   "+"   "-"   "0"   "+"
Powers of 3  :    1     3     9    27
Values       :    1    -3     0    27
Given an integer n (not necessarily strictly positive), we want to write a function that expresses n as a sum of powers of 3 using the symbols -0+:

n = 17 -> "-0-+"
n = -8 -> "+0-"
Note: The last symbol in the solution string represents the largest power of 3 used (added + or subtracted -) and will never be 0, except if the integer is 0 itself.

ATTEMPT 1

const asSumOfPowersOf3 = (n) => {
    if (n == 0) return '0'
    if (n == 1) return '+'
    let x = 2
    while (true){
        let arr = getCombo(x)
        let powers = []
        for (let i = 0; i < x; i++){
            powers.push(Math.pow(3,i))
        }
        let possibleSums = arr.map(x=>x.map((y,i)=>{
            switch(y) {
                case 0:
                    return 0
                case 1:
                    return powers[i]
                case 2:
                    return powers[i] * -1
            }
        }))
        for (let i = 0; i < possibleSums.length; i++){
            if (possibleSums[i].reduce((a,b)=>a+b) == n){
                return arr[i].map(x=>{
                    switch(x) {
                        case 0:
                            return '0'
                        case 1:
                            return '+'
                        case 2:
                            return '-'
                    }
                }).join('')
            }
        }
        x++
    }
}


const getCombo = (n) => {
    if (n == 1) return [0,1,2]
    let arr = []
    for (let i = 0 ; i < 3; i++){
        getCombo(n-1).map(x=>arr.push([i].concat(x)))
    }
    return arr
}
*/

/*
ATTEMPT 2
const asSumOfPowersOf3 = (n) => {
    console.log(n)
    if (n == 0n){
        return '0'
    } else if (n == 1n){
        return '+'
    }
    let len = 2
    while (true){
        let arr = getCombo(len)
        let sums = arr.map(x=>x.reduce((a,b,i)=>{
            switch(b){
                case 0:
                    return a
                case 1:
                    return a + BigInt(Math.pow(3,i))
                case 2:
                    return a - BigInt(Math.pow(3,i))
            }
        },BigInt(0)))
        for (let i = 0; i < sums.length; i++){
            if (sums[i] == n){
                return arr[i].map(x=>{
                    switch(x){
                        case 0:
                            return '0'
                        case 1:
                            return '+'
                        case 2:
                            return '-'
                    }
                }).join('')
            }
        }
        len++
    }
}

const getCombo = (n) => {
    if (n == 1) return [0,1,2]
    let arr = []
    for (let i = 0 ; i < 3; i++){
        getCombo(n-1).map(x=>arr.push([i].concat(x)))
    }
    return arr
}
*/

/*
const getCombo = (n) => {
    if (n == 1) return [0,1,2]
    let arr = []
    for (let i = 0 ; i < 3; i++){
        getCombo(n-1).map(x=>arr.push([i].concat(x)))
    }
    return arr
}

const asSumOfPowersOf3 = (n) => {
    if (n == 0){
        return '0'
    }
    let isPos = n > 0
    n = BigInt(Math.abs(Number(n)))
    let powerArr = []
    while (powerArr.reduce((a,b)=>a+b,BigInt(0)) < n){
        powerArr.push(BigInt(Math.pow(3,powerArr.length)))
    }
    let combos = getCombo(powerArr.length)
    let sums = combos.map(x=>x.reduce((a,b,i) =>{
        switch(b){
            case 0:
                return BigInt(Number(a))
            case 1:
                return BigInt(Number(a) + Math.pow(3,i))
            case 2:
                return BigInt(Number(a) - Math.pow(3,i))
        }
    }))
    for (let i = 0; i < sums.length; i++){
        if (sums[i] == n){
            return combos[i].map(x=>{
                switch(x){
                    case 0:
                        return '0'
                    case 1:
                        return isPos ? '+' : '-'
                    case 2:
                        return isPos ? '-' : '+'
                }
            }).join('')
        }
    }
}
*/

const asSumOfPowersOf3 = (n) => {
    if (n == 0n){
        return '0'
    }
    let str = ''
    let isPos = n >= 0n
    if (!isPos){
        n *= -1n
    }
    while(true){
        if (n == 1n){
            str+='+'
            break
        } else if (n % 3n == 2n){
            str += '-'
            n++
            n /= 3n
        } else if (n % 3n == 1n){
            str += '+'
            n--
            n /= 3n
        } else {
            str += '0'
            n /= 3n
        }
    }
    if (!isPos){
        for (let i = 0; i < str.length; i++){
            if (str[i] == '-'){
                str = str.slice(0,i) + '+' + str.slice(i+1)
            } else if (str[i] == '+'){
                str = str.slice(0,i) + '-' + str.slice(i+1)
            }
        }
    }
    return str
}


console.log(asSumOfPowersOf3(-360n))