const solve = (arr) => {
    return arr.map((el) => {
	return new Set([...el]).size
    })
    .reduce((a, b) => a * b, 1)
}
const test_arr = [[1,2],[4],[5,6]]
console.log(solve(test_arr))
