/*
You'll be given a string of random characters (numbers, letters, and symbols). To decode this string into the key we're searching for:

(1) count the number occurences of each ascii lowercase letter, and

(2) return an ordered string, 26 places long, corresponding to the number of occurences for each corresponding letter in the alphabet.
*/
// MY SOLUTION

function decrypt(encryption) {
    const dict = {}
    const abc ='abcdefghijklmnopqrstuvwxyz'
    for (let i =  0; i < encryption.length; i++){
      if (abc.includes(encryption[i])){
        dict[encryption[i]] != null ? dict[encryption[i]] ++ : dict[encryption[i]] = 1
      }
    }
    return abc.split('').map(x=> dict[x] != null ? dict[x] : 0).join('')
  }