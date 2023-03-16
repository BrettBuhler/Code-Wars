/*
Checkerboard Resolution
In this kata we will be counting the the black squares on a special checkerboard. It is special because it has a resolution which determines how the black and white squares are laid out.

The resolution refers to the dimensions of squares of a single colour. See below for an example with dimensions 11x6:

With resolution = 1:



Number of black squares = 33

And now with resolution = 2:



Number of black squares = 32

And one more example, resolution = 5:



Number of black squares = 31

Credit to awesomead for the pretty images!

As you may have noticed the top left square is always white, and we are counting the individual black squares on the board.

Task
You are required to write a function that will take in three parameters:

width -> The width of the board
height -> The height of the board
resolution -> The size of the coloured squares on the checkerboard (as shown above)
And returns the total count of all individual black squares.

Additional Info
All inputs will be valid
0 <= width <= 10**32
0 <= height <= 10**32
1 <= resolution <= 10**32
Good luck!
*/


const countCheckerboard = (width, height, resolution) => {
    let black = false
    let num = BigInt(0)
    for (let i = BigInt(0); i < height; i += resolution){
        let temp = BigInt(0)
        if (!black){
            if (resolution == 1n){
                if (width > resolution){
                    temp = width / BigInt(2)
                }
            } else {
                if ((width / resolution) % BigInt(2) == BigInt(0)){
                    temp = ((width / resolution) * resolution) / BigInt(2)
                } else {
                    temp = width / resolution / BigInt(2) * resolution + width % resolution
                }
            }
        } else {
            if (resolution == 1n){
                if (width % BigInt(2) != BigInt(0)){
                    temp = width / BigInt(2) + resolution
                } else {
                    if (width > resolution){
                        temp = width / BigInt(2)
                    } else {
                        temp = width
                    }
                }
            } else {
                if ((width / resolution) % BigInt(2) == BigInt(0)){
                    temp = (((width / resolution) * resolution) / BigInt(2)) + width % resolution
                } else {
                    temp = width / resolution / BigInt(2) * resolution + resolution
                }
            }
        }
        if (i + resolution > height){
            num += (height - i) * temp
            return num
        } else {
            num += resolution * temp
        }
        black = !black
    }
    return num
}

console.log(countCheckerboard(11n, 6n, 1n))
console.log(countCheckerboard(11n, 6n, 2n))
console.log(countCheckerboard(11n, 6n, 5n))
console.log(countCheckerboard(100n, 100n, 20n))