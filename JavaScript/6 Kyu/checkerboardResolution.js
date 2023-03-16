const countCheckerboard = (width, height, resolution) => {
    let temp = []
    let count = BigInt(0)
    let black = false
    for (let i = BigInt(0); i < height; i += resolution){
        if (!black){
            temp.push(whiteRow(width, resolution))
        } else {
            temp.push(blackRow(width, resolution))
        }
        black = !black
        if (i + resolution > height){
            count += temp[temp.length - 1] * (height - i)
        } else {
            count += temp[temp.length - 1] * resolution
        }
    }
    return count
}

const whiteRow = (width, resolution) => {
    if (width % resolution == BigInt(0)){
            return (width / resolution) / BigInt(2)
    }
    if ((width / resolution) % BigInt(2) == 0){
        return (width / resolution) * resolution / BigInt(2)
    } else {
        return (((width / resolution) / BigInt(2)) * resolution) + (width % resolution)
    }
}
const blackRow = (width, resolution) => {
    if (width % resolution == BigInt(0)){
        if (width % BigInt(2) != 0){
            return ((width / resolution) / BigInt(2)) + resolution
        } else {
            return (width / resolution) / BigInt(2)
        }
    }
    if ((width / resolution) % BigInt(2) == 0){
        return ((width / resolution) / BigInt(2)) * resolution + (width % resolution)
    } else {
        return (((width / resolution) / BigInt(2)) * resolution) + resolution
    }
}
console.log(countCheckerboard(11n, 6n, 1n))
console.log(countCheckerboard(11n, 6n, 2n))
console.log(countCheckerboard(11n, 6n, 5n))