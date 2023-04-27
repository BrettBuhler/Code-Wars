/*
Task
You are given a digital number written down on a sheet of paper.

Your task is to figure out if you rotate the given sheet of paper by 180 degrees would the number still look exactly the same.

Example
For number = "1", the result should be false

For number = "29562", the result should be true.

For number = "77", the result should be false.
*/

const rotatePaper = (str) => {
    for (let i = 0; i < str.length; i++){
        if ('1347'.includes(str[i])) return false
        if (str[i] === '9'){
            let temp = str.split('').reverse()
            if (temp[i] !== '6') return false
        } else if (str[i] === '6'){
            let temp = str.split('').reverse()
            if (temp[i] !== '9') return false
        }
    }
    return true
}

console.log(rotatePaper('6889'))