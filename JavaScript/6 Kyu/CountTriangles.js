/*
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

const countTriangles = (n) => {
    console.log(getSingles(n))
    let count = 0
    for (let i = 2; i <=n; i++){
        count += 4 * countTrianglesOfXLength(i,n)
    }
    count += diagSweep(n).map(x=>4 * x).reduce((a,b)=>a+b)
    console.log(getSingles(n))
    count += getSingles(n)
    return count
}
const countTrianglesOfXLength = (len, n) => {
    let height = getHeightOfXLengthTriangle(len)
    return (n - (len - 1)) * (n - (height - 1))

}
const getHeightOfXLengthTriangle = (len) => {
    let height = 0
    for (let i = 1; i <= len; i++){
        if (i%2 !== 0){
            height++
        }
    }
    return height
}

const diagSweep = (n) => {
    let arr = []
    for (let i = 2; i <= n; i++){
        arr.push(i)
        if (i === n){
            for (let j = i - 1; j >=2; j--){
                arr.push(j)
            }
        }
    }
    return arr.map(x=>diagSum(x))
}

const diagSum = (n) => {
    let arr = []
    for (let i = n - 1; i > 0; i--){
        arr.push(i)
    }
    return arr.map((x,i)=>arr.slice(i).reduce((a,b)=>a+b)).reduce((a,b)=>a+b)
}

const getSingles = (n) => {
    let squares = Math.pow(n,2)
    return squares * 8
}
console.log(countTriangles(3))