/*
DESCRIPTION:
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/
/* MY SOLUTION */
function duplicateEncode(word){
    word = word.toLowerCase();
    let arr = word.split("");
    let return_arr = []
    let counter = 0;
    console.log(arr);
    for (let i =  0; i < word.length; i++){
      counter = 0
      for (let j = 0; j < word.length; j++){
        if (word[i] == arr[j]){
          counter ++;
        }
      }
      if (counter == 1){
        counter = '(';
      } else {
        counter = ")";
      }
      return_arr.push(counter);
    }
    console.log(return_arr);
    word = '';
    for (let i = 0; i < return_arr.length; i++){
      word += return_arr[i].toString();
    }
    console.log(word);
    return word;
    }