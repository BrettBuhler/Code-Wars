/*
Twelve cards with grades from 0 to 11 randomly divided among 3 players: Frank, Sam, and Tom, 4 cards each. The game consists of 4 rounds. The goal of the round is to move by the card with the most points.
In round 1, the first player who has a card with 0 points, takes the first turn, and he starts with that card. Then the second player (queue - Frank -> Sam -> Tom -> Frank, etc.) can move with any of his cards (each card is used only once per game, and there are no rules that require players to make only the best moves). The third player makes his move after the second player, and he sees the previous moves.
The winner of the previous round then makes the first move in the next round with any remaining card.
The player who wins 2 rounds first, wins the game.

Task
Return true if Frank has a chance of winning the game.
Return false if Frank has no chance.

Input
3 arrays of 4 unique numbers in each (numbers in array are sorted in ascending order). Input is always valid, no need to check.

Example
Round 1: Frank 2 5 8 11, Sam 1 4 7 10, Tom 0 3 6 9. Tom has to start from 0. Frank is risking nothing and goes 2. Sam gets lucky and wins round by throwing 4.

Round 2: Frank 5 8 11, Sam 1 7 10, Tom 3 6 9. Sam starts from 1. Tom goes 3, Frank wins with 5.

Round 3: Frank 5 11, Sam 7 10, Tom 6 9. Frank starts from 11 and wins the round either way.

Frank is the first to win 2 rounds and therefore wins the game, the answer is true.

One more example
Frank 0 1 2 3, Sam 6 7 8 11, Tom 4 5 9 10.
With these cards Frank has no chance, the answer is false.

Tip
Players can actually play DUMB moves, especially Sam and Tom.
*/
// MY SOLUTION

const solution = (frank, sam, tom) => {
    let fW = 0
    let sW = 0
    let tW = 0
    if (frank.includes(0)){
        frank = removeCard(frank, 0)
        let sMax = Math.max(...sam)
        let tMax = Math.max(...tom)
        sam = removeCard(sam, sMax)
        tom = removeCard(tom, tMax)
        if (sMax > tMax){
            sW++
        } else {
            tW++
        }
    }
    while (frank.length > 0){
        let thisRound = round(frank, sam, tom, fW, sW, tW)
        if (thisRound === false) return false
        frank = thisRound[0]
        sam = thisRound[1]
        tom = thisRound[2]
        fW = thisRound[3]
        sW = thisRound[4]
        tW = thisRound[5]
        if (fW >= 2){
            return true
        } else if (sW >=2 || tW >=2){
            return false
        }
    }
    return [frank, sam, tom]
}

const round = (frank, sam, tom, fW, sW, tW) => {
    let samMin = Math.min(...sam)
    let tomMin = Math.min(...tom)
    for (let i = 0; i < frank.length; i++){
        if (frank[i] > samMin && frank[i] > tomMin){
            frank = removeCard(frank, frank[i])
            fW++
            sam = removeCard(sam, findLargestSmallCard(sam, frank[i]))
            tom = removeCard(tom, findLargestSmallCard(tom, frank[i]))
            return [frank, sam, tom, fW, sW, tW]           
        }
    }
    let samMax = Math.max(...sam)
    let tomMax = Math.max(...tom)
    if (samMax > tomMax && sW < 1){
        frank = removeCard(frank, Math.min(...frank))
        sam = removeCard(sam, samMax)
        sW++
        tom = removeCard(tom, tomMax)
        return [frank, sam, tom, fW, sW, tW]  
    } else if (tomMax > samMax && tW < 1){
        frank = removeCard(frank, Math.min(...frank))
        sam = removeCard(sam, samMax)
        tW++
        tom = removeCard(tom, tomMax)
        return [frank, sam, tom, fW, sW, tW]
    }
    if (tW == 1 && tomMax > samMax){
        for (let i = tom.length - 1; i >= 0; i--){
            if (tom[i] < samMax){
                frank = removeCard(frank, Math.min(...frank))
                tom = removeCard(tom, tom[i])
                sam = removeCard(sam, samMax)
                sW ++
                return [frank, sam, tom, fW, sW, tW]
            }
        }
    }
    if (sW == 1 && samMax > tomMax){
        for (let i = sam.length - 1; i >= 0; i--){
            if (sam[i] < tomMax){
                frank = removeCard(frank, Math.min(...frank))
                tom = removeCard(tom, tomMax)
                sam = removeCard(sam, sam[i])
                tW ++
                return [frank, sam, tom, fW, sW, tW]
            }
        }
    }
    return false
}

const findLargestSmallCard = (player, large) => {
    for (let i = 0; i < player.length; i++){
        if (player[i] > large){
            return player[i-1]
        }
    }
    return player[player.length - 1]
}

const removeCard = (player, card) => {
    return player.slice(0, player.indexOf(card)).concat(player.slice(player.indexOf(card) + 1, player.length))
}

console.log(solution([2, 5, 8, 11], [1, 4, 7, 10] , [0, 3, 6, 9]))