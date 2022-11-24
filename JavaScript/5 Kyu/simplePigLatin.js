/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/
// MY SOLUTION

const pigIt = (str) => {
    let string = str.split(' ').map(x=>{
        let thisBool = true
        for (let i = 0; i < x.length; i++){
            if(!'abcdefghijklmnopqrstuvwxyz'.includes(x[i].toLowerCase())){
                thisBool = false
            }
        }
        if (thisBool){
            return x.slice(1) + x[0] + 'ay'
        }
        return x
    })
    return string.join(' ')
}