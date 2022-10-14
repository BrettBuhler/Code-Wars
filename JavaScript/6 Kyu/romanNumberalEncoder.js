/*
Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.
*/
//MY SOLUTION
const solution = (number) => {
    if (number <= 0){
        return ''
    }
    let romanString = ''
    let nums = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    let dict = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
    }
    for (let i in nums){
        if (nums[i] <= number){
            romanString += dict[nums[i]]
            number -= nums[i]
            break
        }
    }
    return romanString + solution(number)
}

