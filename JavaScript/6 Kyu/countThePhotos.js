/*
In a string we describe a road. There are cars that move to the right and we denote them with ">" and cars that move to the left and we denote them with "<". There are also cameras that are indicated by: " . ".
A camera takes a photo of a car if it moves to the direction of the camera.

Task
Your task is to write a function such that, for the input string that represents a road as described, returns the total number of photos that were taken by the cameras. The complexity should be strictly O(N) in order to pass all the tests.
*/
// MY SOLUTION

const countPhotos = (str) => {
    let count = 0
    let left = 0
    let carsPassed = 0
    for (let i = 0; i < str.length; i++){
        if (str[i] == '>') carsPassed ++
        if (str[i] == '.') {
            count += carsPassed
            left += 1
        }
        if (str[i] == '<'){
            count += left
        }
    }
    return count
}
console.log(countPhotos('>.>..<'))