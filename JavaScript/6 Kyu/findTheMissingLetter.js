/* 
#Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
*/

/* MY SOLUTION */
function findMissingLetter(array){
    let isUpper = false;
    if (array[0] == array[0].toUpperCase()){
        isUpper = true;
    }
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    if (isUpper){
        alphabet = alphabet.toUpperCase();
    }
    let next = alphabet.indexOf(array[0]);
    for (i = 0; i < array.length; i++){
        if (alphabet[next] == array[i]){
            next ++;
        } else {
            return alphabet[next];
        }
    }
}