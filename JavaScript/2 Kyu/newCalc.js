const calc = (str) => {
    if(str.includes(' ')){
        str = str.split('').filter(x=>x!=" ").join('')
    }
    while (str.includes('--')){
        str = str.replace('--','+')
    }
    while (str.includes('++')){
        str = str.replace('++', '+')
    }
    while (str.includes('(')){
        str = doPars(str)
    }
    let arr = getArr(str)
    arr = mathFromArr(arr)
    return arr
}

const getArr = (str) => {
    let temp = ''
    let arr = []
    for (let i = 0; i < str.length; i++){
        if ('+-/*'.includes(str[i])){
            if (temp != '') {
                arr.push(temp)
            }
            arr.push(str[i])
            temp = ''
        } else {
            temp += str[i]
        }
    }
    arr.push(temp)
    return formatArr(arr)
}

const formatArr = (arr) => {
    let count = 0
    while(arr[0] == '-'){
        arr.shift()
        count++
    }
    if (count > 0 && count % 2 != 0){
        arr[0] *= -1
    }
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == '-' && '-+*/'.includes(arr[i-1])){
            let value = arr[i+1] * -1
            let left = arr.slice(0, i)
            let right = arr.slice(i+2, arr.length)
            arr = left.concat(value).concat(right)
        }
    }

    // Trying to solve for -(-(-(-(3)))) type problems
    arr = arr.filter(x => {
        if ('-+/*'.includes(x)) return true
        if (Number(x) >= 0 || Number(x) < 0) return true
        return false
    })
    console.log('formated arr:', arr)
    return arr
}

const doPars = (str) => {
    let left = 0
    let right = 0
    let index
    for (let i = str.indexOf('('); i < str.length; i++){
        if (str[i] == '(') left ++
        if (str[i] == ')') right ++
        if (left == right){
            index = i
            break
        }
    }
    leftStr = str.slice(0, str.indexOf('('))
    rightStr = str.slice(index + 1, str.length)
    middle = str.slice(str.indexOf('(') + 1, index)
    middle = calc(middle)
    return leftStr + middle + rightStr
}

const mathFromArr = (arr) => {
    const mathOpps = (arr, opps) => {
        for (let i = 0; i < arr.length; i++){
            if (opps.includes(arr[i])){
                let ans = doMath(arr[i-1], arr[i+1], arr[i])
                let left = arr.slice(0,i-1)
                let right = arr.slice(i+2,arr.length)
                arr = left.concat(ans).concat(right)
            }
        }
        return arr
    }
    while (arr.includes('*') || arr.includes('/')){
        arr = mathOpps(arr, '*/')
    }
    while (arr.includes('+') || arr.includes('-')){
        arr = mathOpps(arr, '+-')
    }
    return arr
}

const doMath = (a, b, opp) => {
    a = Number (a)
    b = Number (b)
    return opp == '+' ? a + b
        : opp == '-' ? a - b
        : opp == '/' ? a / b
        : opp == '*' ? a * b
        : 'ERROR'
}

console.log(calc('13 + ------(-1)'))
