/*
DESCRIPTION:
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

/* MY SOLUTION */
function high(x){
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    x = x.split(' ');
    let word = 0;
    let highScore = 0;
    let highWord = ''
    for (let i = 0; i < x.length; i++){
      word = 0
      for (let j = 0; j < x[i].length; j++){
        word += alphabet.indexOf(x[i][j]) + 1
      }
      if (word > highScore){
        highScore = word;
        highWord = x[i];
      }
    }
    return highWord;
  }