const minimumAmount = (moves) => {
    let min1 = 0
    let min2 = 0
    let hold = [0,0]
    for (let i = 0; i < moves.length; i++){
        if (i % 2 == 0) {
            if (hold[0] < moves[i]){
                min1 += Math.abs(hold[0] - moves[i])
                hold[0] += Math.abs(hold[0] - moves[i])
            }
            hold[0] -= moves[i]
            hold[1] += moves[i]
        } else {
            if (hold[1] < moves[i]){
                min2 += Math.abs(hold[1] - moves[i])
                hold[1] += Math.abs(hold[1] - moves[i])
            }
            hold[1] -= moves[i]
            hold[0] += moves[i]
        }
    }

    return [min1, min2]
}

console.log(minimumAmount([]))