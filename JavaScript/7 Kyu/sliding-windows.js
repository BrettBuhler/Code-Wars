const window = (len, off, li) => {
    const ret = []
    for (let i = 0; i <= li.length; i += off){
	const slice_of_li = li.slice(i, i + len)
	if (slice_of_li.length == len){
	    ret.push(slice_of_li)
	}
    }
    return ret
}
const example_len = 2
const example_off = 1
const example_li = [0, 1, 2, 3, 4]
const example_result = window(example_len, example_off, example_li)
console.log(example_result)
for (ex in example_result)  {
    console.log(ex)
}

