/*
DESCRIPTION:
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/
/* MY SOLUTION */
function getCount(str) {
    let count = 0;
    const vowels = "aeiou";
    for (i = 0; i < str.length; i++){
      if (vowels.indexOf(str[i]) >= 0){
        count ++;
      }
    }
    return count;
  }