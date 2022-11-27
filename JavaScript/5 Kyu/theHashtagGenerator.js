/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/
// MY SOLUTION

const generateHashtag = (str) => {
    if (str.split('').filter(x=> x != ' ').join('') == '') return false
    const hashtag = '#' + str.split(' ').filter(x=>x !== '').map(x=>x[0].toUpperCase()+x.slice(1)).join('')
    return hashtag.length > 140 ? false : hashtag
}

console.log(generateHashtag("d d f"))