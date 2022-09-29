/*
Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.

At long last, we need a way to unscramble what these pirates are saying.

Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant.

For example:

grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )
Should return ["sport", "ports"].

Return matches in the same order as in the dictionary. Return an empty array if there are no matches.

Good luck!
*/
// MY SOLUTION
function grabscrab(anagram, dictionary) {
    anagram = anagram.split('')
    const possibleWords = []
    for (let i = 0; i < dictionary.length; i++){
      let copy = [...anagram]
      for (let j = 0; j < dictionary[i].length; j++){
        if (copy == [])copy=['3','5345']
        if (copy.includes(dictionary[i][j])){
          copy.splice(copy.indexOf(dictionary[i][j]),1)
        }
      }
      if (copy.length == 0) {
        possibleWords.push(dictionary[i])
      }
    }
    return possibleWords
  }