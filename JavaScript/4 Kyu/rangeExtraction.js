/*
A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
*/
// MY SOLUTION

const solution = (list) => {
    let range = []
    let toReturn = []
    for (let i = 0; i < list.length; i++){
        if (range.length == 0){
            range.push(list[i])
        } else if (range[range.length - 1] + 1 == list[i]){
            range.push(list[i])
        } else {
            toReturn.push(getRange(range))
            range = [list[i]]
        }
    }
    toReturn.push(getRange(range))
    return toReturn.join(',')
}

const getRange = (arr) => {
    if (arr.length == 1){
        return arr[0]
    } else if (arr.length == 2){
        return arr[0].toString() + ',' + arr[1].toString()
    } else {
        return arr[0].toString() + '-' + arr[arr.length - 1].toString()
    }
}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))