/*
If you were given only 5 cubes, the lower layer would have 4 cubes and the top 1 cube would sit right in the middle of them, where the lower 4 cubes meet.

If you were given 14 cubes, you could build a pyramid of 3 layers, but 13 wouldn't be enough as you would be missing one cube, so only 2 layers would be complete and some cubes left over!

What is the tallest pyramid possible we can build from the given number of cubes? Simply return the number of complete layers.

Examples
 4  -->  1
 5  -->  2
13  -->  2
14  -->  3
*/
// MY SOLUTION

const pyramidHeight = (x) => {
    const square = (num) => {
        return num*num
    }
    let count = 1
    while (x > 0){
        x -= square(count)
        if (x == 0){
            return count
        } else if (x < 0){
            return count -1
        }
        count ++
    }
}
console.log(pyramidHeight(5))