const calc = (str) => {
    if (str[0] = '-' && str[1] == '-'){
        str = str.split('')
        str.shift()
        str.shift()
        str = str.join('')
    }
    console.log('starting New calc call with:', str)
    if (str.includes(' ')){
        str = str.split(' ').join('')
    }
    while (str.includes('--')){
        str = str.replace('--','+')
    }
    while (str.includes('(')){
        str = parentheses(str)
        console.log('after parenth:', str)
    }
    return Number(doMath(makeArr(str)))
}

const makeArr = (str) => {
    str = str.replace('--','+')
    str = str.replace('/+','/')
    if (str[0] == '+'){
        str = str.slice(1, str.length)
    }

    console.log(str)
    numArr = []
    let temp = ''
    for (let i = 0; i < str.length; i++){
        if ('*/=+-'.includes(str[i])){
            if (temp != ''){
                numArr.push(temp)
                temp = ''
            }
            numArr.push(str[i])
        } else {
            temp += str[i]
        }
    }
    numArr.push(temp)
    if (numArr[0] == '-'){
        numArr.shift()
        numArr[0] = Number(numArr[0]) * -1
    }
    for (let i = 0; i < numArr.length; i++){
        if (numArr[i] == '-' && '+-*/'.includes(numArr[i-1])){
            let left = numArr.slice(0,i)
            let right = numArr.slice(i+1,numArr.length)
            right[0] = Number(right[0] * - 1)
            numArr = left.concat(right)
        }
    }
    return numArr
}

const doOpps = (arr, ops) => {



    while (arr.includes(ops[0]) || arr.includes(ops[1])){
        for (let i = 0; i < arr.length; i++){
            if (ops.includes(arr[i])){
                let ans = doOpp(arr[i-1], arr[i+1], arr[i])
                let left = arr.slice(0, i-1)
                let right = arr.slice(i+2, arr.length)
                arr = left.concat(ans)
                if (right != undefined){
                    arr = arr.concat(right)
                }
            }
        }
    }
    return arr
}
const doOpp = (a, b, opp) => {
    a = Number(a)
    b = Number(b)
    switch (opp) {
        case '-':
            return a - b
        case '+':
            return a + b
        case '*':
            return a * b
        case '/':
            return a / b
    }
}

const doMath = (arr) => {
    arr = doOpps(arr, '*/')
    arr = doOpps(arr, '+-')
    return arr.join('')
}

const parentheses = (str) => {
    if (!str.includes('(')){
        return str
    }
    let left = 0
    let right = 0
    let trip = false
    let target
    for (let i = 0; i < str.length; i++){
        if (trip && str[i] == '(') left ++
        if (trip && str[i] == ')') right ++
        if (!trip && str[i] == '('){
            trip = true
            left ++
        } else if (trip && left == right){
            target = i
            break;
        }
    }
    let leftSide = str.slice(0, str.indexOf('('))
    let rightSide = str.slice (target + 1, str.length)
    let middle = str.slice(str.indexOf('(')+1, target)
    middle = calc(middle)
    return leftSide + middle + rightSide
}
console.log(calc('1-4'))
console.log(calc('(1-2)+ -(-(-(-4)))'))
