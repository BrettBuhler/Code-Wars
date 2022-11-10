/*
Johnny is a farmer and he annually holds a beet farmers convention "Drop the beet".

Every year he takes photos of farmers handshaking. Johnny knows that no two farmers handshake more than once. He also knows that some of the possible handshake combinations may not happen.

However, Johnny would like to know the minimal amount of people that participated this year just by counting all the handshakes.

Help Johnny by writing a function, that takes the amount of handshakes and returns the minimal amount of people needed to perform these handshakes (a pair of farmers handshake only once).
*/
// MY SOLUTION

const getParticipants = (n) => {
    if (n == 0){
        return 0
    }
    let num = 3
    let rep = 2
    let arr = [0,2]
    while (arr.length < n + 1){
        for (let i = 0; i < rep; i++){
            arr.push(num)
        }
        num++
        rep++
    }
    return arr[arr.length - 1]
}



