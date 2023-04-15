/*
You are given a ASCII diagram, comprised of minus signs -, plus signs +, vertical bars | and whitespaces   . Your task is to write a function which breaks the diagram in the minimal pieces it is made of.

For example, if the input for your function is this diagram:

+------------+
|            |
|            |
|            |
+------+-----+
|      |     |
|      |     |
+------+-----+
the returned value should be the list of:

+------------+
|            |
|            |
|            |
+------------+
(note how it lost a + sign in the extraction)

as well as

+------+
|      |
|      |
+------+
and

+-----+
|     |
|     |
+-----+
The diagram is given as an ordinary multiline string. There are no borders touching each others.

The pieces should not have trailing spaces at the end of the lines. However, it could have leading spaces if the figure is not a rectangle. For instance:

    +---+
    |   |
+---+   |
|       |
+-------+
However, it is not allowed to use more leading spaces than necessary. It is to say, the first character of some of the lines should be different than a space.

Finally, note that only the explicitly closed pieces are considered. Spaces "outside" of the shape are part of the background . Therefore the diagram above has a single piece.

Have fun!

Note : in C++ you are provided with two utility functions :

std::string join(const std::string &sep, const std::vector<std::string> &to_join); // Returns the concatenation of all the strings in the vector, separated with sep 

std::vector<std::string> split_lines(const std::string &to_split); // Splits a string, using separator '\n'
Harder version of the kata available here: Break the Pieces (evilized edition)
*/

/*
First attempt (Only works for rectangles, some of the test cases were not rectangles.)
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
                if (rightStr[i] == '+' && rightStr[i-1] != ' ' && rightStr[i+1] != ' '){
                    rightStr = rightStr.slice(0,i) + '-' + rightStr.slice(i+1)
                }
            }
            return str + rightStr
        })
    })
    return res.filter(x=>{
        let numberOfPlus = x[0].split('').reduce((a,b)=>{
            if(b == '+'){
                return a+1
            }
            return a
        },0)
        if (numberOfPlus >= 2){
            return true
        }
        return false
    }).map(x=>x.join('\n'))
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
var pyr =
['           +-+             ',
 '           | |             ',
 '         +-+-+-+           ',
 '         |     |           ',
 '      +--+-----+--+        ',
 '      |           |        ',
 '   +--+-----------+--+     ',
 '   |                 |     ',
 '   +-----------------+     '].join('\n')


  console.log(breakPieces(pyr)[3])