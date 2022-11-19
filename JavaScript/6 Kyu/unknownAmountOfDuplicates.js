/*
They were introduced an unknown amount of duplicates in this sequence and we know that there is an only missing value such that all the duplicate values and the missing value are between a and b, but never coincide with them.

Find the missing number with the duplicate numbers (duplicates should be output in a sorted array).

Let's see an example:

arr = [10,9,8,9,6,1,2,4,3,2,5,5,3]

find_dups_miss([10,9,8,9,6,1,2,4,3,2,5,5,3]) == [7,[2,3,5,9]]

The code should be fast to process long arrays (maximum length aprox. = 1.000.000). The values for the randon tests:

500 <= a <= 50000
a + k <= b and 100 <= k <= 1000000
amount of duplicates variable, according to the length of the array
*/
// MY SOLUTION

const findDupsMiss = (arr) => {
    let [min, max] = [arr[0], arr[0]]
    let numMap = {}
    let nums = []
    let dups = []
    let missing
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i]
        } else if (arr[i] > max){
            max = arr[i]
        }
        if (numMap[arr[i]]){
            numMap[arr[i]]++
        } else {
            numMap[arr[i]] = 1
            nums.push(arr[i])
        }
    }
    nums.sort((a,b)=>a - b)
    for (let i in numMap){
        if (numMap[i] == 2){
            dups.push(parseInt(i))
        }
    }
    for (let i = 0; i < nums.length - 1; i++){
        if (nums[i] != nums[i+1] - 1){
            missing = nums[i] + 1
            break
        }
    }
    return [missing, dups]
}

console.log(findDupsMiss([10,9,8,9,6,1,2,4,3,2,5,5,3]))