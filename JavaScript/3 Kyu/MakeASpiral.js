/*
our task, is to create a NxN spiral with a given size.

For example, spiral with size 5 should look like this:

00000
....0
000.0
0...0
00000
and with the size 10:

0000000000
.........0
00000000.0
0......0.0
0.0000.0.0
0.0..0.0.0
0.0....0.0
0.000000.0
0........0
0000000000
Return value should contain array of arrays, of 0 and 1, with the first row being composed of 1s. For example for given size 5 result should be:

[[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
Because of the edge-cases for tiny spirals, the size will be at least 5.

General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself.
*/

const spiralize = (n) => {
    let arr = []
    for (let i = 0; i < n; i++){
        arr.push('0'.repeat(n))
    }
    arr = arr.map(x=>x.split('').map(y=>parseInt(y)))
    let phase = 0
    let y = 0
    let x = 0
    let around = false
    while (true){
        if (phase === 0){
            if (isValid(arr, y, x, phase)){
                arr[y][x] = 1
                if (!endTest(arr,y,x,around)){
                    break
                }
                x++
            } else {
                phase++
                x--
                y++
                if(!isPhaseTransitionValid(arr, y, x, phase, around)){
                    break
                }
            }
        }
        if (phase === 1){
            if (isValid(arr, y, x, phase)){
                arr[y][x] = 1
                if (!endTest(arr,y,x,around)){
                    break
                }
                y++
            } else {
                phase++
                x--
                y--
                if(!isPhaseTransitionValid(arr, y, x, phase, around)){
                    break
                }
            }
        }
        if (phase === 2){
            if (isValid(arr, y, x, phase)){
                arr[y][x] = 1
                if (!endTest(arr,y,x,around)){
                    break
                }
                x--
            } else {
                phase++
                x++
                y--
                if(!isPhaseTransitionValid(arr, y, x, phase, around)){
                    break
                }
            }
        }
        if (phase === 3){
            if (isValid(arr, y, x, phase)){
                arr[y][x] = 1
                if (!endTest(arr,y,x,around)){
                    break
                }
                y--
            } else {
                phase = 0
                around = true
                y++
                x++
                if(!isPhaseTransitionValid(arr, y, x, phase, around)){
                    break
                }
            }
        }
    }
    return arr
}

const isValid = (arr, y, x, phase) => {
    if (phase == 0){
        if (x == arr[y].length - 1){
            return true
        } else if (x >= arr.length){
            return false
        } else if (arr[y][x+1] !== 1){
            return true
        } else {
            return false
        }
    }
    if (phase == 1){
        if (y >= arr.length){
            return false
        }
        if (y == arr.length - 1){
            return true
        } else if (arr[y+1][x] !== 1){
            return true
        } else {
            return false
        }
    }
    if (phase == 2){
        if (x == 0){
            return true
        } else if (x < 0){
            return false
        }
        if (arr[y][x-1] !== 1){
            return true
        } else {
            return false
        }
    }
    if (phase == 3){
        if (arr[y-1][x] != 1){
            return true
        } else {
            return false
        }
    }
}
const isPhaseTransitionValid = (arr, y, x, phase, around) => {
    if (!around){
        return true
    }
    if (phase == 0 || phase == 2){
        if (arr[y+1][x] == 1 || arr[y-1][x] == 1){
            return false
        }
        return true
    }
    if (arr[y][x+1] == 1 || arr[y][x-1] == 1){
        return false
    }
    return true
}

const endTest = (arr, y, x, around) => {
    if (!around){
        return true
    }
    if (arr[y+2][x] == 1 && arr[y-2][x] == 1 && arr[y][x+2] == 1 && arr[y][x-2] == 1){
        return false
    }
    return true
}

console.log(spiralize(5).map(x=>x.join('')).join('\n'))