const countCheckerboard = (width, height, resolution) => {
    let black = BigInt(0)
    let total = BigInt(0)
    let colour = false
    for (let i = BigInt(0); i < height; i += resolution){
        if (colour){
            if (width % resolution == 0 && width % BigInt(2) != 0){
                black += (width / BigInt(2)) + BigInt(1)
            } else {
                black += width % resolution  + (width - (width % resolution))/BigInt(2)
            }
        } else {
            black += (width - (width % resolution))/BigInt(2)
        }
        colour = !colour
        if (i + resolution > height){
            total += (height - i) * black
            black = BigInt(0)
        } else {
            total += resolution * black
            black = BigInt(0)
        }
    }
    return total
}

console.log(countCheckerboard(11n, 6n, 2n))