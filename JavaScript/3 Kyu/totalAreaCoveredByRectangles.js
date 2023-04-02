/*
First Attempt

const calculate = (recs) => {
    return recs.length == 0 ? 0 : getOverLap(recs).reduce((a,b)=>a + b.reduce((x,y)=>x+y),0)
}
getOverLap = (recs) => {
    let yMax = recs[0][1]
    let xMax = recs[0][0]
    for (let i = 0; i < recs.length; i++){
        if (recs[i][0] > xMax){
            xMax = recs[i][0]
        }
        if (recs[i][1] > yMax){
            yMax = recs[i][1]
        }
        if (recs[i][2] > xMax){
            xMax = recs[i][2]
        }
        if (recs[i][3] > yMax){
            yMax = recs[i][3]
        }
    }
    let space = []
    space.push([])
    for (let i = 0; i <= xMax; i++){
        space[0].push(0)
    }
    for (let i = 0; i <= yMax - 1; i++){
        space.push([...space[0]])
    }
    for (let i = 0; i < recs.length; i++){
        space = fillSpace(recs[i], space)
    }
    return space
}
const fillSpace = (rect, arr) => {
    let space = [...arr]
    let xMin = rect[0]
    let xMax = rect[2]
    let yMin = rect[1]
    let yMax = rect[3]
    for (let y = yMin; y < yMax; y++){
        for (let x = xMin; x < xMax; x++){
            if (space[y][x] == 0){
                space[y][x] = 1
            }
        }
    }
    return space
}
*/

/*
second attempt
function calculate(recs) {
    if (recs.length == 0) return 0
    let xMax = 0
    let yMax = 0
    for (let i = 0; i < recs.length; i++){
        if (recs[i][2] > xMax){
            xMax = recs[i][2]
        }
        if(recs[i][3] > yMax){
            yMax = recs[i][3]
        }
    }
    let space = []
    for (let i = 0; i < yMax; i++){
        space.push([])
        for (let j = 0; j < xMax; j++){
            space[i].push(0)
        }
    }
    for (let i = 0; i < recs.length; i++){
        let x = recs[i][0]
        let y = recs[i][1]
        for (let j = 0; j < recs[i][3] - recs[i][1]; j++){
            for (let k = 0; k < recs[i][2] - recs[i][0]; k++){
                space[y+j][x+k] = 1
            }
        }
    }
    return space.flat().reduce((a,b)=>a+b)
}
*/

/*
attempt 3

function calculate (rects) {
    let count = 0
    let xMax = 0
    let yMax = 0
    let yMin = Infinity
    let xMin = Infinity
    for (let i = 0; i < rects.length; i++){
        if (rects[i][2] > xMax){
            xMax = rects[i][2]
        }
        if(rects[i][3] > yMax){
            yMax = rects[i][3]
        }
        if (rects[i][0] < xMin){
            xMin = rects[i][0]
        }
        if (rects[i][1] < yMin){
            yMin = rects[i][1]
        }
    }
    for (let y = yMin; y < yMax; y++){
        for (let x = xMin; x < xMax; x++){
            for (let i = 0; i < rects.length; i++){
                if (isInside(rects[i], x, y)){
                    let num = rects[i][2] - x
                    count += num
                    x += num - 1
                    break
                }
            }
        }
    }
    return count
}

function isInside (rect, x, y){
    if (x >= rect[0] && x < rect[2]){
        if (y >= rect[1] && y < rect[3]){
            return true
        }
    }
    return false
}
*/
/*
const calculate = (arr) => {
    let count = 0
    let newCoord = new Set()
    for (let i = 0; i < arr.length; i++){
        for (let y = arr[i][1]; y < arr[i][3]; y++){
            for (let x = arr[i][0]; x < arr[i][2];x++){
                newCoord.add(`${x},${y}`)
            }
        }
    }
    return newCoord.size
}
*/

/*
const calculate = (arr, phase = true) => {
    if (arr.length == 0) return 0
    let overlaps = []
    for (let i = 0; i < arr.length; i++){
        for (let j = i+1; j < arr.length; j++){      
                let overlap = getOverLap(arr[i],arr[j])
                if (overlap){
                    if (JSON.stringify(arr[i]) !== JSON.stringify(arr[j])){
                        overlaps.push(overlap)
                    }
                }
        }
    }
    if (phase){
        return arr.map(x=>getArea(x)).reduce((a,b)=>a+b) - calculate(overlaps, phase = false)
    }
    return arr.map(x=>getArea(x)).reduce((a,b)=>a+b) + calculate(overlaps, phase = true)
}

const getOverLap = (r1, r2) => {
    const Left = Math.max(r1[0], r2[0])
    const Right = Math.min(r1[2], r2[2])
    const Bottom = Math.max(r1[1], r2[1])
    const Top = Math.min(r1[3], r2[3])
    return Left >= Right || Bottom > Top ? 0 : [Left, Bottom, Right, Top]
}

const getArea = (arr) => {
    return (arr[2] - arr[0]) * (arr[3] - arr[1])
}
*/

const calculate = (rects) => {
    let dict = {}
    for (let i = 0; i < rects.length; i++){
        for (let y = rects[i][1]; y < rects[i][3]; y++){
            for (let x = rects[i][0]; x < rects[i][2]; x++){
                if (dict[`${x},${y}`]){
                    dict[`${x},${y}`]++
                } else {
                    dict[`${x},${y}`] = 1
                }
            }
        }
    }
    return Object.keys(dict).length
}


console.log(calculate([[0,0,1,1], [0,0,2,2]]))