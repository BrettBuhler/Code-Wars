/*
ask
You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

Input:

If, you can read?

Output:

India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

Note:

There are preloaded dictionary you can use, named NATO
The set of used punctuation is ,.!?.
Punctuation should be kept in your return string, but spaces should not.
Xray should not have a dash within.
Every word and punctuation mark should be seperated by a space ' '.
There should be no trailing whitespace
*/

const to_nato = (words) => {
    words = words.split('').map(x=>{
        if ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(x.toUpperCase())){
            return NATO[x.toLowerCase()]
        } else if (x !== ' ') {
            return x
        } else {
          return ''
        }
    })
  return words.filter(x=>x!=='').join(' ')
}