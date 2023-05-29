/*&
Description
Given a string representing an integer, return a string with every sequence of ascending or descending digits reversed.

Examples:

123456  --->  654321  // ascending sequence 123456
654321  --->  123456  // descending sequence 654321 
135246  --->  531642  // ascending sequence 135, ascending sequence 246
642531  --->  246135  // descending sequence 642, descending sequence 531
Such sequences are not required to be strictly ascending / descending:

12333  ---> 33321     // ascending sequence 12333
66654  ---> 45666     // descending sequence 66654
133555224466  ---> 555331664422   // ascending sequence 133555, ascending sequence 224466 
If a digit (or several of the same consecutive digits) is at the junction part of ascending and descending sequence, it should belong to the left part of the junction:

12321  ---> 32112  
digit 3 may be part of an ascending order(123)
It can also be a part of a descending order(321)

135642  --->  653124
digit 6 may be part of an ascending order(1356)
It can also be a part of a descending order(642)

13555432  ---> 55531234
consecutive digits 555 may be part of an ascending order(13555)
It can also be a part of a descending order(555432)
If the number is a negative number, the symbol - does not reverse:

-123  ---> -321
-123321  --->  -332112
After reverse, if the digit 0 is in the first place (ignoring the sign), it should be removed:

420135  ---> 024531  ---> 24531
-520025  ---> -002552  --->  -2552
Task
Complete function reverseNumber() that accepts a arguments n(given by string format).

Returns the number that reverse in accordance with the rules(string format).
*/

const reverseNumber = (number) => {
    let interval = 0
    let lastStr = ''
    let res = []
    let isNegative = number[0] === '-' ? true : false
    let startingBool = false
    if (isNegative) {
        number = number.split('').slice(1)
    } else {
        number = number.split('')
    }
    for (let i = 0; i < number.length; i++){
        if (lastStr.length === 0){
            lastStr += number[i]
        } else {
            if (lastStr.length === 1 || startingBool){
                if (lastStr[lastStr.length - 1] === number[i]){
                    startingBool = true
                    lastStr += number[i]
                } else {
                    if (parseInt(lastStr[lastStr.length - 1]) - parseInt(number[i]) > 0){
                        interval = 1
                    } else {
                        interval = 2
                    }
                    lastStr += number[i]
                    startingBool = false
                }
            } else {
                if (interval === 1){
                    if (parseInt(lastStr[lastStr.length - 1]) >= parseInt(number[i])){
                        lastStr += number[i]
                    } else {
                        res.push(lastStr)
                        lastStr = number[i]
                        interval = 0
                    }
                } else if (interval === 2){
                    if (parseInt(lastStr[lastStr.length - 1]) <= parseInt(number[i])){
                        lastStr += number[i]
                    } else {
                        res.push(lastStr)
                        lastStr = number[i]
                        interval = 0
                    }
                } else {
                    console.log('error with interval')
                }
            }
        }
    }
    if (lastStr.length > 0){
        res.push(lastStr)
    }
    let returnString = res.map(x=>x.split('').reverse().join('')).join('')
    returnString = returnString.replace(/^0+/, '')
    return isNegative ? '-' + returnString : returnString
}

console.log(reverseNumber('-244969809067815868079677501805063264427988149853'))
console.log(reverseNumber('88149853'))