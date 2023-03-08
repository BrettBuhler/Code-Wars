/*
Solution string for N = 1 is therefore: 'wjw'. This solution is optimal and does indeed consist of N**2 + 2*N = 1+2 = 3 moves.

N = 2, optimal solution

WW_BB # initial state
W_WBB # state after performing move: 'w'
WBW_B # state after performing move: 'j'
WBWB_ # state after performing move: 'b'
WB_BW # state after performing move: 'j'
_BWBW # state after performing move: 'j'
B_WBW # state after performing move: 'b'
BBW_W # state after performing move: 'j'
BB_WW # state after performing move: 'w'
Solution string for N = 2 is therefore: 'wjbjjbjw'. This solution is optimal and does indeed consist of N**2 + 2*N = 4+4 = 8 moves.
*/

const whiteBlackFrogs = (n) => {
    let frogs = "w".repeat(n) + "_" + "b".repeat(n)
    let returnStr = ""
    while (frogs != 'b'.repeat(n) + '_' + 'w'.repeat(n)){
        if (canJump(frogs)){
            if (canJump(frogs) == "b"){
                frogs = frogs.replace("_wb", "bw_")
                returnStr += 'j'
            } else {
                frogs = frogs.replace("wb_", "_bw")
                returnStr += 'j'
            }
        } else {
            if (getMove(frogs) == 'b'){
                frogs = frogs.replace('_b', 'b_')
                returnStr += 'b'
            } else {
                frogs = frogs.replace('w_', '_w')
                returnStr += 'w'
            }
        }
    }
    return returnStr
}

const canJump = (str) => {
    if (str.includes('_wb')) {
        return "b"
    } else if (str.includes("wb_")){
        return "w"
    }
    return false
}


const getMove = (str) => {
    let w = 0
    let b = 0
    if (str.includes("w_")){
        w++
    }
    if (str.includes("_b")){
        b++
    }
    if (w === b){
        let left = str.substring(0, str.indexOf('_'))
        let right = str.substring(str.indexOf('_')+1, str.length)
        return left.length > right.length ? 'b' : 'w'
    }
    else {
        return w > b ? 'w' : 'b'
    }
}

console.log(whiteBlackFrogs(3))