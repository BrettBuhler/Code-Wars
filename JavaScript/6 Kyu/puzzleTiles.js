/*
Puzzle Tiles
You will get two Integer n(width) and m (height) and your task is to draw following pattern. Each line is seperated with '\n'.

Both integers are equal or greater than 1. No need to check for invalid parameters.
There are no whitespaces at the end of each line.
For example, for width = 4 and height = 3, you should draw the following pattern:

   _( )__ _( )__ _( )__ _( )__
 _|     _|     _|     _|     _|
(_   _ (_   _ (_   _ (_   _ (_
 |__( )_|__( )_|__( )_|__( )_|
 |_     |_     |_     |_     |_
  _) _   _) _   _) _   _) _   _)
 |__( )_|__( )_|__( )_|__( )_|
 _|     _|     _|     _|     _|
(_   _ (_   _ (_   _ (_   _ (_
 |__( )_|__( )_|__( )_|__( )_|
*/

const puzzleTiles = (w, h) => {
    let p1 = '   ' + '_( )__ '.repeat(w)
    p1 = p1.slice(0, p1.length - 1)
    let p2 = ' _|' + '     _|'.repeat(w)
    let p2Odd = ' |_' + '     |_'.repeat(w)
    let p3 = '(_' + '   _ (_'.repeat(w)
    let p3Odd = '  _)' + ' _   _)'.repeat(w)
    let p4 = ' |' + '__( )_|'.repeat(w)
    let res = ''
    for (let i = 0; i < h; i++){
        if (i === 0) res += p1 + '\n'
        if (i % 2 !== 0){
            res += p2Odd + '\n'
            res += p3Odd + '\n'
        } else {
            res += p2 + '\n'
            res += p3 + '\n'
        }
        if (i === h - 1){
            res += p4
        } else {
            res += p4 + '\n'
        }
    }
    return res
}

console.log(puzzleTiles(4,3))