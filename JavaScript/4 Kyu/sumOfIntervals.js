/*
Write a function called sumIntervals/sum_intervals that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

Intervals
Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

Overlapping Intervals
List containing overlapping intervals:

[
   [1, 4],
   [7, 10],
   [3, 5]
]
The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

Examples:
sumIntervals( [
   [1, 2],
   [6, 10],
   [11, 15]
] ) => 9

sumIntervals( [
   [1, 4],
   [7, 10],
   [3, 5]
] ) => 7

sumIntervals( [
   [1, 5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ) => 19

sumIntervals( [
   [0, 20],
   [-100000000, 10],
   [30, 40]
] ) => 100000030
Tests with large intervals
Your algorithm should be able to handle large intervals. All tested intervals are subsets of the range [-1000000000, 1000000000].
*/

/*
ATTEMPT 1 
const sumIntervals = (intervals) => {
    return reduceArr(intervals).map(x=>x[1]-x[0]).reduce((a,b)=>a+b)
}

const reduceArr = (arr) => {
    for (let i = 0; i < arr.length; i++){
        let subArr = arr.slice(0,i).concat(arr.slice(i+1))
        for (let j = 0; j < subArr.length; j++){
            if (arr[i][0] <= subArr[j][1] && arr[i][0] >= subArr[j][0]){
                let big
                if (arr[i][1] > subArr[j][1]){
                    big = arr[i][1]
                } else {
                    big = subArr[j][1]
                }
                let newArr = [subArr[j][0], big]
                let oldArr = subArr.filter(x=>x!=subArr[j])
                oldArr.push(newArr)
                return reduceArr(oldArr)
            }
        }
    }
    return arr
}
*/

const sumIntervals = (intervals) =>{
    let range = []
    for (let i = 0; i < intervals.length; i++){
        if (i === 0){
            range.push(intervals[i])
        } else {
            let outOfRange = true
            for (let j = 0; j < range.length; j++){
                if (isOverlap(range[j], intervals[i])){
                    let min, max
                    range[j][0] < intervals[i][0] ? min = range[j][0] : min = intervals[i][0]
                    range[j][1] > intervals[i][1] ? max = range[j][1] : max = intervals[i][1]
                    range[j] = [min, max]
                    outOfRange = false
                }
            }
            if (outOfRange){
                range.push(intervals[i])
            }
            if (range.length > 1){
                range = clean(range)
            }
        }
    }
    return range.map(x=>Math.abs(x[1] - x[0])).reduce((a,b)=>a+b)
}

const clean = (intervals) =>{
    let range = []
    for (let i = 0; i < intervals.length; i++){
        if (i === 0){
            range.push(intervals[i])
        } else {
            let outOfRange = true
            for (let j = 0; j < range.length; j++){
                if (isOverlap(range[j], intervals[i])){
                    let min, max
                    range[j][0] < intervals[i][0] ? min = range[j][0] : min = intervals[i][0]
                    range[j][1] > intervals[i][1] ? max = range[j][1] : max = intervals[i][1]
                    range[j] = [min, max]
                    outOfRange = false
                }
            }
            if (outOfRange){
                range.push(intervals[i])
            }
        }
    }
    return range
}

const isOverlap = (arr1, arr2) => {
    if (arr1[1] >= arr2[0] && arr1[0] <= arr2[1]){
        return true
    }
    return false
}


console.log(sumIntervals([
    [1, 5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11]
]))
