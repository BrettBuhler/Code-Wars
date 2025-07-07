const solve = (x, y) => {
    let count = 0
    for (let i = x; i < y; i++) {
        if (isUpsideDown(i)) {
            count++
        }
    }
    return count
}
const isUpsideDown = (num) => {
    const num_str = num.toString()
    const half = num_str.length / 2
    let j = num_str.length - 1
    for (let i = 0; i < half; i++) {
        if (!['8', '1', '0', '6', '9'].includes(num_str[i])) {
            return false
        } else if (!['6', '9'].includes(num_str[i])) {
            if (num_str[i] !== num_str[j]) {
                return false
            }
        } else {
            if (!((num_str[i] == '6' && num_str[j] == '9') || (num_str[i] == '9' && num_str[j] == '6'))) {
                return false
            }
        }
        j--
    }
    return true
}
console.log(solve(0, 10))
console.log(`isUpsideDown(1118111) = ${isUpsideDown(119611)}`)
