const window = (len, off, li) => {
    const ret = []
    for (let i = 0; i < li.length; i+= off) {
	if (li[len + i] === undefined) {
	    console.log("undefined")
	    break
	}
	console.log(li.slice(i, i+len))
	ret.push(li.slice(i, i+len))
    }
    return ret
}
const example_len = 2
const example_off = 1
const example_li = [0, 1, 2, 3, 4]
console.log(`Test: ${window(example_len, example_off, example_li)}`)
