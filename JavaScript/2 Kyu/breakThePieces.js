/*
const breakPieces = (shape) => {
    shape = shape.split('\n')
    let responseArray = []
    for (let y = 0; y < shape.length; y++){
        for (let x = 0; x < shape[y].length; x++){
            if (shape[y][x] === '+'){
                subShape = getShape(y,x,shape)
                if (subShape){
                    responseArray.push(subShape)
                }
            }
        }
    }
    return responseArray
}
//Given a '+' find a rectangle 
const getShape = (y, x, shape) => {
    //Starting point
    let top, len, height, str
    for (let i=1; i+x < shape[y].length; i++){
        if(shape[y][x+i] === '+'){
            top = shape[y].slice(x,x+i+1)
            len = top.length - 1
            break
        }
    }
    if (top){
        for (let i = 1; i+y < shape.length; i++){
            if (shape[y+i][x] === '+' && shape[y+i][x+len] === '+'){
                height = i - 1
                break
            }
        }
        if (height){
            str = top
            for (let i = 0; i < height; i++){
                str+='\n|' + ' '.repeat(len - 1) + '|'
            }
        } else {
            return false
        }
    } else {
        return false
    }
    return str + '\n' + top
}
*/

const breakPieces = (shape) => {
    shape =  shape.split('\n').map(x=>x.split(''))
    let count = 0
    for (let y = 0; y < shape.length; y++){
        for(let x = 0; x < shape[y].length; x++){
            if (x+1<shape[y].length && y+1<shape.length){
                if (shape[y+1][x+1] === ' '){
                    count++
                    shape = fillShape(y+1,x+1,shape,count)
                }
            }
        }
    }
    const shapeObject = getSubShape(shape, count)
    let res = Object.entries(shapeObject).map(([key, value])=>{
        minIndex = Object.entries(value).reduce((a,b)=>{
            if (b[1][0] < a){
                return b[1][0]
            }
            return a
        },Infinity)
        return Object.entries(value).map((x) => {
            let str = ''
            if (x[1][0] > minIndex){
                str = ' '.repeat(x[1][0] - minIndex)
            }
            let rightStr = x[1][1].replaceAll(/[0-9]/g, ' ')
            for (let i = 1; i < rightStr.length - 1; i++){
                if (rightStr[i] = '+'){
                    rightStr = rightStr.slice(0,i) + '-' + rightStr.slice(i+1)
                }
            }
            return str + rightStr
        })
    })
    return res.map(x=>x.join('\n'))
}

const fillShape = (y,x,shape,toFill) => {
    let newShape = [...shape]
    if (y < shape.length - 1 && x < shape[y].length - 1) {
        recursiveFill(y,x,newShape,toFill)
    }
    return newShape
}

const recursiveFill = (y,x,shape,toFill) => {
    if (shape[y][x] == ' '){
        shape[y][x] = toFill
    } else {return false}
    if (y+1 < shape.length){
        recursiveFill(y+1,x,shape,toFill)
    }
    if (y-1 >= 0){
        recursiveFill(y-1,x,shape,toFill)
    }
    if (x+1 < shape[y].length){
        recursiveFill(y,x+1,shape,toFill)
    }
    if (x-1 >= 0){
        recursiveFill(y,x-1,shape,toFill)
    }
}

const getSubShape = (shape, ids) => {
    let subShapes = {}
    for (let y = 0; y < shape.length; y++){
        for (let x = 0; x < shape[y].length; x++){
            for (let i = 1; i <= ids; i++){
                if (isItTouching(y,x,shape,i)){
                    if (subShapes[i]){
                        if (subShapes[i][y]){
                            subShapes[i][y][1] += shape[y][x].toString()
                        } else {
                            subShapes[i][y] = [x,shape[y][x].toString()]
                        }
                    } else {
                        subShapes[i] = {}
                        subShapes[i][y] = [x, shape[y][x].toString()]
                    }
                }
            }
        }
    }
    return subShapes
}

const isItTouching = (y,x,shape,id) => {
    if (shape[y][x] == id) return true
    let [left,right,up,down,uLeft,uRight,dLeft,dRight] = [false, false,false,false,false,false,false]
    if(x > 0){
        left = shape[y][x-1]
        if (left == id) return true
    }
    if (x < shape[y].length - 1){
        right = shape[y][x+1]
        if (right == id) return true
    }
    if (y > 0){
        up = shape[y-1][x]
        if (up == id) return true
    }
    if (y < shape.length - 1){
        down = shape[y+1][x]
        if (down == id) return true
    }
    if (up && left){
        uLeft = shape[y-1][x-1]
        if (uLeft == id) return true
    }
    if (up && right){
        uRight = shape[y-1][x+1]
        if (uRight == id) return true
    }
    if (down && left){
        dLeft = shape[y+1][x-1]
        if (dLeft == id) return true
    }
    if (down && right){
        dRight = shape[y+1][x+1]
        if (dRight == id) return true
    }
    return false
}

var shape = 
["+------------+",
"|            |",
"|            |",
"|            |",
"+------+-----+",
"|      |     |",
"|      |     |",
"+------+-----+"].join("\n")

  console.log(breakPieces(shape))