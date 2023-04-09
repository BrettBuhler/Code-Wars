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
    let singles = n**2 * 8
    if (n >= 2){

    } else {
        return singles
    }
}
console.log(countTriangles(3))