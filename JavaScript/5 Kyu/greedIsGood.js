/*
Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
*/

const score = (dice) => {
    const getScore = (rolls) => {
        const singleScore = (num, count) => {
            let score = 0
            if (count >= 3) {
                score += 100*num
                count -=3
            }
            if (num == 1 || num == 5) {
                score += num*count*10
            }
            return score
        }
        let score = 0
        for (let roll in rolls) {
            console.log('roll', roll)
            if (roll == 1) {
                console.log('here')
                score += 10 * singleScore(roll, rolls[roll])
            } else {
                score += singleScore(roll, rolls[roll])
            }
        }
      return score
    }
    let rolls = {}
    for (let roll of dice) {
        if (rolls[roll]){
            rolls[roll]++
        } else {
            rolls[roll] = 1
        }
    }
    return getScore(rolls)
}

console.log(score([1,2,3,4,5,6]))
