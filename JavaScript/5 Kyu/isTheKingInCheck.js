/*
You have to write a function that takes for input a 8x8 chessboard in the form of a bi-dimensional array of chars (or strings of length 1, depending on the language) and returns a boolean indicating whether the king is in check.

The array will include 64 squares which can contain the following characters :

'♔' for the black King;
'♛' for a white Queen;
'♝' for a white Bishop;
'♞' for a white Knight;
'♜' for a white Rook;
'♟' for a white Pawn;
' ' (a space) if there is no piece on that square.
Note : these are actually inverted-color chess Unicode characters because the codewars dark theme makes the white appear black and vice versa. Use the characters shown above.

There will always be exactly one king, which is the black king, whereas all the other pieces are white.
The board is oriented from Black's perspective.
Remember that pawns can only move and take forward.
Also be careful with the pieces' lines of sight ;-) .

The input will always be valid, no need to validate it. To help you visualize the position, tests will print a chessboard to show you the problematic cases. Looking like this :

|---|---|---|---|---|---|---|---|
|   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|
|   |   |   | ♜ |   |   |   |   |
|---|---|---|---|---|---|---|---|
|   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|
|   |   |   | ♔ |   |   |   |   |
|---|---|---|---|---|---|---|---|
|   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|
|   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|
|   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|
|   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|
*/

const kingIsInCheck = (chessboard) => {
    for (let i = 0; i < chessboard.length; i++){
        for (let j = 0; j < chessboard[i].length; j++){
            if (chessboard[i][j] == '♟') {
                if (pawnCheck(chessboard, j, i)){
                    return true
                }
            }
            if (chessboard[i][j] == '♜') {
                if (rookCheck(chessboard, j, i)){
                    return true
                }
            }
            if (chessboard[i][j] == '♝') {
                if (bishopCheck(chessboard, j, i)){
                    return true
                }
            }
            if (chessboard[i][j] == '♛') {
                if (queenCheck(chessboard, j, i)){
                    return true
                }
            }
            if (chessboard[i][j] == '♞') {
                if (knightCheck(chessboard, j, i)){
                    return true
                }
            }
        }
    }
    return false
}

const pawnCheck = (chessboard, x, y) => {
    if (chessboard[y+1][x-1] == '♔') return true
    if (chessboard[y+1][x+1] == '♔') return true
    return false
}

const rookCheck = (chessboard, x, y) => {
    for (let i = x - 1; i >= 0; i--){
        if (chessboard[y][i] !== ' '){
            if (chessboard[y][i] == '♔'){
                return true
            } else {
                break
            }
        }
    }
    for (let i = x + 1; i <= 7; i++){
        if (chessboard[y][i] !== ' '){
            if (chessboard[y][i] == '♔'){
                return true
            } else {
                break
            }
        }
    }
    for (let i = y - 1; i >= 0; i--){
        if (chessboard[i][x] !== ' '){
            if (chessboard[i][x] == '♔') {
                return true
            } else {
                break
            }
        }
    }
    for (let i = y + 1; i <= 7; i++){
        if (chessboard[i][x] !== ' '){
            if (chessboard[i][x] == '♔') {
                return true
            } else {
                break
            }
        }
    }
    return false
}

const knightCheck = (chessboard, x, y) => {
    if (y+2 <= 7 && x - 1 >= 0){
        if (chessboard[y+2][x-1] == '♔') return true
    }
    if (y+2 <= 7 && x + 1 <= 7){
        if (chessboard[y+2][x+1] == '♔') return true
    }
    if (y-2 >= 0 && x - 1 >= 0){
        if (chessboard[y-2][x-1] == '♔') return true
    }
    if (y - 2 >= 0 && x + 1 <= 7){
        if (chessboard[y-2][x+1] == '♔') return true
    }
    if (y+1 <= 7 && x-2 >= 0){
        if (chessboard[y+1][x-2] == '♔') return true
    }
    if (y+1 <= 7 && x+2 <= 7){
        if (chessboard[y+1][x+2] == '♔') return true
    }
    if (y-1 >= 0 && x-2 >= 0){
        if (chessboard[y-1][x-2] == '♔') return true
    }
    if (y-1 >= 0 && x+2 <= 7){
        if (chessboard[y-1][x+2] == '♔') return true
    }
    return false
}

const bishopCheck = (chessboard, x, y) => {
    let x1 = x + 1
    let y1 = y - 1
    while (x1 <= 7 && y1 >= 0){
        if (chessboard[y1][x1] !== ' '){
            if (chessboard[y1][x1] == '♔'){
                return true
            } else {
                break
            }
        }
        x1++
        y1--
    }
    x1 = x - 1
    y1 = y + 1
    while (x1 >= 0 && y1 <= 7){
        if (chessboard[y1][x1] !== ' '){
            if (chessboard[y1][x1] == '♔'){
                return true
            } else {
                break
            }
        }
        x1--
        y1++
    }
    x1 = x - 1
    y1 = y - 1
    while (x1 >= 0 && y1 >= 0){
        if (chessboard[y1][x1] !== ' '){
            if (chessboard[y1][x1] == '♔'){
                return true
            } else {
                break
            }
        }
        x1--
        y1--
    }
    x1 = x + 1
    y1 = y + 1
    while (x1 <= 7 && y1 <= 7){
        if (chessboard[y1][x1] !== ' '){
            if (chessboard[y1][x1] == '♔'){
                return true
            } else {
                break
            }
        }
        x1++
        y1++
    }
    return false
}

const queenCheck = (chessboard, x, y) => {
    if (bishopCheck(chessboard, x, y) || rookCheck(chessboard, x, y)){
        return true
    }
    return false
}

console.log(kingIsInCheck([
    [
      ' ', ' ', ' ',
      ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ',
      ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ',
      ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ',
      ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ',
      ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', '♔', ' ',
      ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      ' ', ' ', ' ',
      ' ', ' ', ' ',
      ' ', ' '
    ],
    [
      '♞', ' ', ' ',
      ' ', ' ', ' ',
      ' ', ' '
    ]
  ]))