/*
Task
Two teams are playing a game of tennis. The team sizes are the same and each player from the first team plays against the corresponding player from the second team.



Each player has a certain power level. If a player has a higher power level than her opponent, she is guaranteed to win and her team would get 1 point for that win while the opponents get a 0.

You are the coach of the first team and you know the power levels of all the players before the game starts. You want to rearrange the players in your team to earn the highest possible total score.

Input/Output
[input] integer array team1
The power levels of the players in the first team. Teams have less than 100 players and each power level is less than 100.

[input] integer array team2
Array of the same length as team1, the power levels of the players of the second team.

[output] an integer
The maximum number of points the first team can get.
*/

const maximizePoints = (t1, t2) => {
    let newOrder = []
    for (let i = 0; i < t2.length; i++){
        let largerThan = []
        for (let j = 0; j < t1.length; j++){
            if (t1[j] > t2[i]){
                largerThan.push(t1[j])
            }
        }
        if (largerThan.length === 0){
            let temp = [...t1]
            temp = temp.sort((a,b)=>a-b)
            newOrder.push(temp[0])
            t1 = t1.slice(0,t1.indexOf(temp[0])).concat(t1.slice(t1.indexOf(temp[0])+1))
        } else {
            largerThan = largerThan.sort((a,b)=>a-b)
            newOrder.push(largerThan[0])
            t1 = t1.slice(0, t1.indexOf(largerThan[0])).concat(t1.slice(t1.indexOf(largerThan[0])+1))
        }
    }
    return newOrder.map((x,i)=> x > t2[i] ? 1 : 0).reduce((a,b)=>a+b)
}

console.log(maximizePoints([25, 7, 26, 48],[1, 36, 5, 33]))