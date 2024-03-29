/*
Modify the kebabize function so that it converts a camel case string into a kebab case.

"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"
Notes:

the returned string should only contain lowercase letters
*/

const kebabize = (str) => {
    let kebabStr = ''
    for (let i = 0; i < str.length; i++){
        if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(str[i])){
            kebabStr += `-${str[i].toLowerCase()}`
        } else if ("abcdefghijklmnopqrstuvwxyz".includes(str[i])){
            kebabStr += str[i]
        }
    }
    return kebabStr[0] == "-" ? kebabStr.slice(1,kebabStr.length) : kebabStr
}