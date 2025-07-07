const sum = (n_array) => {
    return n_array.reduce((a, b) => a + b, 0)
}
const test_arr = [1, 2, 3, 4, 5]
console.log(sum(test_arr))
console.log(`Empty: ${sum([])}`)
