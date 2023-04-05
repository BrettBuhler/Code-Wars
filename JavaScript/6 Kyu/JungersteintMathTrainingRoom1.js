const countZeros = (n) => {
    let number = 0
    let isEven
    if (n % 2 === 0) {
        isEven = true
    } else {
        isEven = false
    }
    let init = 1
    if (isEven){
        init += 1
    } else {
        return 0
    }
    for (let i = init; i <= n; i += 2){
        if (i % 5 === 0) number++
        if (i % 25 === 0) number++
        if (i % 125 === 0) number++
        if (i % 625 === 0) number++
    }
    return number
}

console.log(countZeros(11))