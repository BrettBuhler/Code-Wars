/*
*/
// MY SOLUTION

const validBraces = (str) => {
    let newStr = removeBrace(str)
    while (newStr != str){
        str = newStr
        newStr = removeBrace(str)
    }
    return str == ''
}
const removeBrace = (str) => {
    braceMap = {
        '{' : '}',
        '[' : ']',
        '(' : ')'
    }
    for (let i = 0; i < str.length - 1; i ++){
        if ('{(['.includes(str[i])){
            if (str[i+1] == braceMap[str[i]]){
                return str.slice(0,i) + str.slice(i+2, str.length)
            }
        }
    }
    return str
}


console.log(validBraces('{(()))}'))