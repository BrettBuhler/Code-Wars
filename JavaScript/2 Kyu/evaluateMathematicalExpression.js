/*
Parentheses
You need to support multiple levels of nested parentheses, ex. (2 / (2 + 3.33) * 4) - -6

Whitespace
There may or may not be whitespace between numbers and operators.

An addition to this rule is that the minus sign (-) used for negating numbers and parentheses will never be separated by whitespace. I.e all of the following are valid expressions.

1-1    // 0
1 -1   // 0
1- 1   // 0
1 - 1  // 0
1- -1  // 2
1 - -1 // 2
1--1   // 2

6 + -(4)   // 2
6 + -( -4) // 10
And the following are invalid expressions

1 - - 1    // Invalid
1- - 1     // Invalid
6 + - (4)  // Invalid
6 + -(- 4) // Invalid
Validation
You do not need to worry about validation - you will only receive valid mathematical expressions following the above rules.

Restricted APIs
NOTE: Both eval and Function are disabled.
*/
// MY SOLUTION
const calc = (str) => {
    str = str.split('').filter(x=> x!=" ").join('')
    let opArr = toArr(str)
    opArr = clean(opArr)
    return Number(doMath(opArr))
}

const doMath = (arr) => {
    const doOpp = (a, b, opp) => {
        a = Number(a)
        b = Number(b)
        return  opp == '*' ? a * b :
                opp == '/' ? a / b :
                opp == '+' ? a + b :
                opp == '-' ? a - b :
                'ERR'
    }
    const doOpps = (arr, opps) => {
        let oppsCopy = [...arr]
        for (let i = 0; i < oppsCopy.length; i++){
            if (opps.includes(oppsCopy[i])){
                let left = oppsCopy.slice(0,i-1)
                let right = oppsCopy.slice(i+2, oppsCopy.length)
                let mid = doOpp(oppsCopy[i-1], oppsCopy[i+1], oppsCopy[i])
                oppsCopy = left.concat(mid).concat(right)
            }
        }
        return oppsCopy
    }
    let copy = [...arr]
    if (copy.length == 1) return Number(copy[0])

    while(copy.includes('*') || copy.includes('/')){
        copy = doOpps(copy, '*/')
    }
    while(copy.includes('-') || copy.includes('+')){
        copy = doOpps(copy, '-+')
    }
    return copy
    
}

const toArr = (str) => {
    let temp = ''
    let returnArr = []
    for (let i = 0; i < str.length; i++){
        if (str[i] == '('){
            let parenthAndIndex = removeP(str, i)
            if (!parenthAndIndex[0].includes('(')){
                returnArr.push(calc(parenthAndIndex[0]).toString())
            } else {
                returnArr.push(parenthAndIndex[0])
            }
            i = parenthAndIndex[1]
        }
        else if ('+-*/'.includes(str[i])){
            if (temp != '') returnArr.push(temp)
            returnArr.push(str[i])
            temp = ''
        } else {
            temp += str[i]
        }
    }
    if (temp != ''){
        returnArr.push(temp)
    }
    for (let i = 0; i < returnArr.length; i++){
        if (returnArr[i].includes('(')){
            let left = returnArr.slice(0,i)
            let mid = returnArr[i]
            let right = returnArr.slice(i+1, returnArr.length)
            mid = calc(mid)
            returnArr = left.concat(mid).concat(right)
        }
    }
    return returnArr
}

const removeP = (str, index) => {
    let left = 0
    let right = 0
    let pos
    for (let i = index; i < str.length; i++){
        if ('()'.includes(str[i])){
            str[i] == '(' ? left++ : right ++
        }
        if (left == right){
            pos = i
            break
        }
    }
    let returnStr = str.slice(index+1,pos)

    return [returnStr, pos]
}

const clean = (arr) => {
    let copy = [...arr]
    let count = 0
    while (copy[0] == '-'){
        count++
        copy.shift()
        if (copy[0] != '-' && typeof Number(copy[0]) == 'number' && count % 2 != 0){
            copy[0] *= -1
        }
    }
    for (let i = 0; i < copy.length; i++){
        if (copy[i] == '-' && '-+*/'.includes(copy[i-1]) && typeof Number(copy[i+1]) == 'number'){
            let left = copy.slice(0, i)
            let right = copy.slice(i+1,copy.length)
            right[0] *= -1
            copy = left.concat(right)
        }
    }
    return copy
}
