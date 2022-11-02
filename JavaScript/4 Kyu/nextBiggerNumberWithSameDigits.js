/*
Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

12 ==> 21
513 ==> 531
2017 ==> 2071
nextBigger(num: 12)   // returns 21
nextBigger(num: 513)  // returns 531
nextBigger(num: 2017) // returns 2071
If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

9 ==> -1
111 ==> -1
531 ==> -1
nextBigger(num: 9)   // returns nil
nextBigger(num: 111) // returns nil
nextBigger(num: 531) // returns nil
*/
// MY SOLUTION

/*

My first solution solves the problem by calculating all permutations of the given number, this is not time efficient.

const nextBigger = (n) => {
    if (n < 10) return - 1
    let arr = getBiggerArr(n.toString()).map(x=>parseInt(x))
    let value = arr.find((el, i) => arr[i+1] == n)
    return value == undefined ? -1 : value
}

const getBiggerArr = (n) => {
    if (n.length == 1) return n
    let arr = []
    for (let i = 0; i < n.length; i++){
        arr.push(n[i] + getBiggerArr(n.slice(0,i) + n.slice(i+1)))
    }
    return arr.map(x=>strFormat(x)).reduce((a,b) => a.concat(b), []).sort((a,b)=> b - a)
}

const strFormat = (str) => {
    arr = str.split(',')
    let base = arr[0]
    return arr.map(x => {
        if (x.length == base.length){
            return x
        } else {
            return base.slice(0,base.length - x.length) + x
        }
    })
}
*/
/*
const nextBigger = (n) => {
    let str = n.toString()
    for (let i = str.length - 1; i >= 0; i--){
        if (parseInt(str[i]) > parseInt(str[i-1])){
            return parseInt(str.slice(0,i-1) + str[i] + str[i-1] + str.slice(i+1))
        }
    }
    return -1
}
*/

const nextBigger = (n) => {
    let arr = n.toString().split('').map(x=>parseInt(x))
    let index = -1
    for (let i = arr.length -1; i >= 1; i--){
        if (arr[i] > arr[i-1]){
            index = i - 1
            break
        }
    }
    if (index === -1) return -1
    let left = arr.slice(0,index)
    let right = arr.slice(index + 1, arr.length)
    let middle = arr.slice(index, index + 1)
    let max = Math.max(...right) + 1
    let temp = [-1, max]
    for (let i = 0; i < right.length; i++){
        if (right[i] > middle && right[i] < temp[1]){
            temp = [i, right[i]]
        }
    }
    right[temp[0]] = middle[0]
    middle[0] = temp[1]
    return parseInt(left.concat(middle).concat(right.sort((a,b)=>a-b)).join(''))
}



console.log(nextBigger(2017))
// 132261206593
// SOULD EQUAL
// 132261206935