/*
Write a function that takes an integer n and returns the nth iteration of the fractal known as Sierpinski's Gasket.

Here are the first few iterations. The fractal is composed entirely of L and white-space characters; each character has one space between it and the next (or a newline).

0
L
1
L
L L
2
L
L L
L   L
L L L L
3
L
L L
L   L
L L L L
L       L
L L     L L
L   L   L   L
L L L L L L L L
*/
// MY SOLUTION

const sierpinski = (n) => {
    let root = 'L'
    let sierArr = getSierpinski([[root, root + ' ' + root]], n-1)
    return n === 0 ? root : sierArr[sierArr.length - 1].join('\n')
}

const genLayer = (last) => {
    space = last[last.length - 1]. length
    let arr = []
    for (let i = 0; i < last.length; i++){
        arr.push(last[i] + ' '.repeat(space) + last[i])
        space -=2
    }
    return last.concat(arr)
}

const getSierpinski = (arr, n) => {
    while (n > 0){
        n--
        arr.push(genLayer(arr[arr.length - 1]))
    }
    return arr
}


console.log(sierpinski(0))