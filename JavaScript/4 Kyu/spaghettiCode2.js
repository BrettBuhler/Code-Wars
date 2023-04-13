/*
Hooray - It's "Spaghetti Night" again !
Spaghetti is my favourite meal, so I always like to save the longest piece for last...

But since my last "Spaghetti Night" the price of my special ID spaghetti has really gone through the roof and so I have changed to a cheaper brand.

Unfortunately, this cheaper spaghetti only has a SINGLE ID somewhere on each piece of spaghetti.

Oh well, at least it tastes the same.

Task
Write some spaghetti code to help me know which piece of spaghetti is the longest.

Try NOT to write spaghetti code that looks like spaghetti code !

NOTES

Spaghetti pieces all look the same ("S") except for a single uppercase letter unique ID somewhere on the piece (which may also be "S")
Spaghetti pieces do not touch each other, or themselves
Spaghetti pieces twist only up, down, left, right (not diagonally)
If multiple spaghetti pieces are longest, just return any one of them (all spaghetti tastes the same)
If the plate has no spaghetti then return empty string
All of my plates are rectangular
Plates can have any (non alphabetic) background pattern on them
Examples
Ex1

SSSSSASS____
____________
SSSSSSBSSSS_
____________
SSSSSC______
Answer: B

Ex2

SSSSSSSSS______   
________S__SSS_
 S   S  A    S 
_S___S__S____S_
 B   S       S 
_S___SSSSSCSSS_
Answer: C
*/

const spaghettiCode = (plate) => {
    let long = [0, false]
    for (let i = 0; i < plate.length; i++){
        for (let j = 0; j < plate[i].length; j++){
            if(plate[i][j] == 'S'){
                if(isStartOfStrand(i,j,plate)){
                    let temp = followTrailDeleteAndReturn(i,j,plate)
                    if (temp[0] > long[0]){
                        long = temp
                    }
                }
            }
        }
    }
    return long[1]
}
const isStartOfStrand = (y, x, plate) => {
    let numberOfTrails = 0
    if (x+1 < plate[0].length){
        let x1 = plate[y][x+1].charCodeAt(0)
        if (x1 > 64 && x1 < 91){
            numberOfTrails++
        }
    }
    if (y+1 < plate.length){
        let x2 = plate[y+1][x].charCodeAt(0)
        if (x2 > 64 && x2 < 91){
            numberOfTrails++
        }
    }
    if (y-1 >= 0){
        let x3 = plate[y-1][x].charCodeAt(0)
        if (x3 > 64 && x3 < 91){
            numberOfTrails++
        }
    }
    if (x-1 >= 0){
        let x4 = plate[y][x-1].charCodeAt(0)
        if (x4 > 64 && x4 < 91){
            numberOfTrails++
        }
    }
    return numberOfTrails <= 1 ? true : false
}
const followTrailDeleteAndReturn = (y, x, plate) => {
    let count = 1
    let last = plate[y][x].charCodeAt(0)
    let id = 'S'
    while (last > 64 && last < 91){
        if (x + 1 < plate[0].length){
            let xRight = plate[y][x+1].charCodeAt(0)
            if (xRight > 64 && xRight < 91){
                if (xRight !== 83){
                    id = String.fromCharCode(xRight)
                }
                plate[y][x] = '_'
                x++
                count++
                last = plate[y][x].charCodeAt(0)
                continue
            }
        }
        if (y + 1 < plate.length){
            let xDown = plate[y+1][x].charCodeAt(0)
            if (xDown > 64 && xDown < 91){
                if (xDown !== 83){
                    id = String.fromCharCode(xDown)
                }
                plate[y][x] = '_'
                y++
                count++
                last = plate[y][x].charCodeAt(0)
                continue
            }
        }
        if (y - 1 >= 0){
            let xUp = plate[y-1][x].charCodeAt(0)
            if (xUp > 64 && xUp < 91){
                if (xUp !== 83){
                    id = String.fromCharCode(xUp)
                }
                plate[y][x] = '_'
                y--
                count++
                last = plate[y][x].charCodeAt(0)
                continue
            }
        }
        if (x - 1 >= 0){
            let xLeft = plate[y][x-1].charCodeAt(0)
            if (xLeft > 64 && xLeft < 91){
                if (xLeft !== 83){
                    id = String.fromCharCode(xLeft)
                }
                plate[y][x] = '_'
                x--
                count++
                last = plate[y][x].charCodeAt(0)
                continue
            }
        }
        break
    }
    return [count, id]
}

console.log(spaghettiCode([
    'SSSSSSSSS      '.split(''),
    '________S__SSS_'.split(''),
    ' S   S  A    S '.split(''),
    '_S___S__S____S_'.split(''),
    ' B   S       S '.split(''),
    '_S___SSSSSCSSS_'.split('')
  ]))