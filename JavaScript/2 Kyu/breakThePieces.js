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