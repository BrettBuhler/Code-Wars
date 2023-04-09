/*
You are given a square that has a height of n.

Each 1 × 1 square has two diagonals as shown below:



Count the number of triangles formed by the squares sides and diagonals.

Input/Output
[input] integer n

1 ≤ n ≤ 100

[output] an integer

The number of triangles.

Example
For n = 1, the output shoule be 8.

There are 4 small triangles (one at each side of the square) and 4 large ones, each consists of two small triangles. 4 + 4 = 8
*/

/*
//FIRST ATTEMPT
const countTriangles = (n) => {
    return getShapes(n).map(x=>fromShapeGetTriangles(x,n)).reduce((a,b)=>a+b) + getDiag(n) * 4 + (8*Math.pow(n,2)) + getReverseDiag(n)*4
}

const getShapes = (n) => {
    let arr = [[2,1]]
    let j = 2
    let phase = false
    for (let i = 3; i <=n; i++){
        arr.push([i,j])
        if (phase){
            j++
        }
        phase = !phase
    }
    return arr
}

const fromShapeGetTriangles = (shape, n) => {
    let x = n - (shape[0] - 1)
    let y = n - (shape[1] - 1)
    return (x * y) * 2 * 2
}

const getDiag = (n) => {
    let arr = []
    let sum = 0
    for (let i = 1; i <= n; i++){
        arr.push(i)
    }
    for (let i = arr.length - 1; i > 0; i--){
        sum += arr.slice(0,i).reduce((a,b) => a+b)
        if (i < arr.length-1){
            
        }
    }
    return sum
}

const getReverseDiag = (n) => {
    n--
    let sum = 0
    while (n >= 2){
        sum+=getDiag(n)
        n--
    }
    return sum
}
*/

// First attempt worked for trianlges where n < 4, but not for n > 4 Updated solution works for all values of n

const countTriangles = (n) => {
    if (n === 1) return getSingles(n)
    let arr = []
    for (let i = 2; i <= n; i++){
        let x = getCountOfLenTriangles(n,i)
        let y = getCountOfLenTriangles(n,getHeight(i))
        arr.push(x * y)
    }
    arr = arr.concat(getDiag(n))
    return arr.map(x=>4*x).reduce((a,b)=>a+b) + getSingles(n)
}

const getHeight = (len) => {
    return Math.ceil(len/2)
}

const getCountOfLenTriangles = (n, len) => {
    return (n - (len - 1))
}

const getDiag = (n) => {
    let arr = []
    for (let i = n; i > 1; i--){
        arr.push(i)
    }
    for (let i = n - 1; i > 1; i--){
        arr.unshift(i)
    }
    return arr.map(x=>{
        let count = 0
        for (let i = 2; i <= x; i++){
            let x1 = getCountOfLenTriangles(x, i)
            count += x1
        }
        return count
    })
}

const getSingles = (n) => {
    return n**2*8
}
console.log(countTriangles(100))