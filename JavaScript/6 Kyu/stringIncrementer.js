/*
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/
// MY SOLUTION

const incrementString = (str) => {
    let numbers = []
    for (let i = 0; i < str.length; i++){
        if (parseInt(str[i]) >= 0){
            numbers.push(parseInt(str[i]))
        } else {
            numbers = []
        }
    }
    if (numbers.length == 0) return str + '1'
    numbers[numbers.length - 1] += 1
    str = str.slice(0, str.length - numbers.length)
    while (true){
        let greaterThanNine = false
        for (let i = 0; i < numbers.length; i++){
            if (numbers[i] > 9){
                greaterThanNine = true
                if (i === 0){
                    numbers[i] -= 10
                    numbers.unshift(1)
                } else {
                    numbers[i] -= 10
                    numbers[i-1] += 1
                }
            }
        }
        if (!greaterThanNine) break
    }
    return str + numbers.join('')
}


console.log(incrementString('foobar99'))