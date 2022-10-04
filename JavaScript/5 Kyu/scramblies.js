/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
*/
// MY SOLUTION

const scramble = (str1, str2) => {
    const dict = {}
    for (let i = 0; i < str1.length; i++){
        dict[str1[i]] ? dict[str1[i]]++ : dict[str1[i]] = 1
    }
    for (let i = 0; i < str2.length; i++){
        if (dict[str2[i]] > 0){
            dict[str2[i]] --
        } else {
            return false
        }
    }
    return true
}

console.log(scramble('aabbcamaomsccdd','commas'))