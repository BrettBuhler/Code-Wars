/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

const isPangram = (string) => {
    let abc = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < string.length; i++){
        if (abc.includes(string[i].toLowerCase())){
            abc = abc.substring(0,abc.indexOf(string[i].toLowerCase())) + abc.substring(abc.indexOf(string[i].toLowerCase())+1,abc.length)
        }
    }
    return abc.length == 0
}