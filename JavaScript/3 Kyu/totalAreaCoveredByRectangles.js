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
    if (rects.length == 0){
        return 0
    }
    let xValues = uniqueX(rects)
    let xSplit = splitX(rects, xValues)
    return joinY(xSplit).map(x=>(x[2] - x[0]) * (x[3] - x[1])).reduce((a,b)=>(a+b))
}

const uniqueX = (rects) => {
    let x = new Set()
    for (let i of rects){
        x.add(i[0])
        x.add(i[2])
    }
    return Array.from(x).sort((a,b)=>a-b)
}

const splitX = (rects, xValues) => {
    let returnArr = []
    for (let i = 0; i < rects.length; i++){
        splitOne([rects[i]], xValues).map(x=>returnArr.push(x))
    }
    return returnArr
}

const splitOne = (arr, xValues) => {
    for (let i = 0; i < xValues.length; i++){
        for (let j = 0; j < arr.length; j++){
            if (xValues[i] > 0){
                if (xValues[i] > arr[j][0] && xValues[i] < arr[j][2]){
                    let left = [arr[j][0], arr[j][1], xValues[i], arr[j][3]]
                    let right = [xValues[i], arr[j][1], arr[j][2], arr[j][3]]
                    arr[j] = left
                    arr.push(right)
                }
            }
        }
    }
    return arr
}

const joinY = (rects) => {
    let joined = {}
    for (let i = 0; i < rects.length; i++){
        if (joined[`${rects[i][0]},${rects[i][2]}`]){
            let oldRects = joined[`${rects[i][0]},${rects[i][2]}`]
            let newRects = []
            for (let j = 0; j < oldRects.length; j++){
                let toAdd = getY(rects[i], oldRects[j])
                if (toAdd.length == 4){
                    newRects.push(toAdd)
                } else {
                    newRects.push(toAdd[0])
                    newRects.push(toAdd[1])
                }
            }
            joined[`${rects[i][0]},${rects[i][2]}`] = newRects
        } else {
            joined[`${rects[i][0]},${rects[i][2]}`] = [rects[i]]
        }
    }
    return Object.entries(joined).map(x=>x[1]).flat()
}

const getY = (rect1, rect2) => {
    if ((rect1[3] >= rect2[1] && rect1[3] <= rect2[3]) || rect2[3] >= rect1[1] && rect2[3] <= rect1[3]){
        let y1 = rect1[1] < rect2[1] ? rect1[1] : rect2[1]
        let y2 = rect1[3] > rect2[3] ? rect1[3] : rect2[3]
        return [rect1[0], y1, rect1[2], y2]
    }
    return [rect1, rect2]
}

//should be 38
console.log(calculate([
    [ 1, 4, 5, 6 ],
    [ 2, 5, 6, 7 ],
    [ 3, 6, 7, 8 ],
    [ 4, 7, 8, 9 ],
    [ 2, 3, 6, 5 ],
    [ 3, 2, 7, 4 ],
    [ 4, 1, 8, 3 ]
  ]))