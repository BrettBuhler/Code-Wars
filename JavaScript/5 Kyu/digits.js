/*
The code consists of four unique digits (from 0 to 9).
Tests will call your solution; you should answer with an array of four digits.
Your input is number of matches (the same digit in the same place) with your previous answer. For the first call input value is -1 (i.e. each new test starts with input -1)
You have to find the code in 16 calls or less. You are the best. Do it.

For example
The code is [1, 2, 3, 4]
1 call return [1, 3, 4, 5] will give 1 match in next input
2 call return [1, 2, 3, 0] will give 3 matches in next input
3 call return [1, 2, 3, 4] will not give 4 matches in next input, because you're the champion!
*/
const game = (m) => {
    if (m === -1){
        lastPass = false
        isFull = false
        index1 = 0
        index2 = 0
        numbers = []
        returnArray = []
        last = [0,0,0,0]
        return last
    }
    if (lastPass){
        return [returnArray[0],returnArray[1],numbers[1],numbers[0]]
    }
    if (!isFull){
        if (m === 1) {
            numbers.push(last[0])
        } else if (m === 0 && last[0] == 8){
            numbers.push(9)
        }
        last = last.map(x=>x+1)
        if (numbers.length === 4) {
            isFull = true
            index1++
            return [numbers[0],11,11,11]
        } else {
            return last
        }
    }
    if (m === returnArray.length + 1){
        returnArray.push(numbers[index1 - 1])
        numbers = numbers.slice(0,index1-1).concat(numbers.slice(index1,numbers.length))
        index1 = 0
        if (numbers.length == 2 && returnArray.length == 2){
            lastPass = true
            return [returnArray[0],returnArray[1],numbers[0],numbers[1]]
        }
    } else if (index1 == numbers.length - 1){
        returnArray.push(numbers[index1])
        numbers = numbers.slice(0,numbers.length - 1)
        index1 = 0
        if (numbers.length == 2 && returnArray.length == 2){
            lastPass = true
            return [returnArray[0],returnArray[1],numbers[0],numbers[1]]
        }
    }
    let temp = []
    for (let i = 0; i < numbers.length; i++){
        if (i === index2){
            temp.push(numbers[index1])
        } else {
            temp.push(11)
        }
    }
    index1++
    return returnArray.concat(temp)
}

