/*
DESCRIPTION:
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/
/* MY SOLUTION */
function findShort(s){
    let s_array = s.split(' ');
    short_word = s_array[0];
    for (let i = 0; i < s_array.length; i++){
      if (short_word.length > s_array[i].length){
        short_word = s_array[i];
      }
    }
    return short_word.length;
  }