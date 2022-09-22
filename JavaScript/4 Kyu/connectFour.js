/*
Take a look at wiki description of Connect Four game:

Wiki Connect Four

The grid is 6 row by 7 columns, those being named from A to G.

You will receive a list of strings showing the order of the pieces which dropped in columns:

  piecesPositionList = ["A_Red",
                        "B_Yellow",
                        "A_Red",
                        "B_Yellow",
                        "A_Red",
                        "B_Yellow",
                        "G_Red",
                        "B_Yellow"]
The list may contain up to 42 moves and shows the order the players are playing.

The first player who connects four items of the same color is the winner.

You should return "Yellow", "Red" or "Draw" accordingly.
*/

// MY SOLUTION

const whoIsWinner = (moves) => {
    const checkWin = (board) => {
        const checkHorizontal = (board) => {
           for (let i = 0; i < board.length; i++){
            let line = board[i]
            let prev = {
                element: null,
                count: 0
            }
            for (let j = 0; j < line.length; j++){
                if (line[j] == prev.element && line[j] != '0'){
                    prev.count ++
                } else {
                    prev.element = line[j]
                    prev.count = 0
                }
                if (prev.count == 3){
                    return prev.element
                }
            }
           }
           return false
        }
        const checkVertical = (board) => {
            const verts = []
            for (let i = 0; i < board[0].length; i ++){
                let tempArr = []
                board.forEach(x => {
                    tempArr.push(x[i])
                })
                verts.push(tempArr)
            }
            for (let i = 0; i < verts.length; i++){
                const prev = {
                    element: null,
                    count: 0
                }
                for (let j = 0; j < verts[i].length; j++){
                    if (prev.element == verts[i][j] && verts[i][j] != '0'){
                        prev.count++
                    } else {
                        prev.element = verts[i][j]
                        prev.count = 0
                    }
                    if (prev.count === 3){
                        return verts[i][j]
                    }
                }
            }
            return false
        }
        const checkDiag = (board) => {
            const diags = []
            for (let y = 0; y < board.length; y++){
                for (let x = 0; x < board[0].length; x++){
                    let thisDiag = []
                    if (y < 3 && x > 2){
                        let y1 = y
                        let x1 = x
                        while (y1 < board.length && x >= 0){
                            thisDiag.push(board[y1][x1])
                            y1++
                            x1--
                        }
                        diags.push(thisDiag)
                    }
                }
            }
            for (let i = 0; i < diags.length; i++){
                let prev = {
                    element: null,
                    count: 0
                }
                for (let j = 0; j < diags[i].length; j++){
                    if (diags[i][j] == prev.element && diags[i][j] != '0'){
                        prev.count ++
                    } else {
                        prev.element = diags[i][j]
                        prev.count = 0
                    }
                    if (prev.count == 3){
                        return prev.element[0]
                    }
                }
            }
            return false
        }
        let h = checkHorizontal(board)
        let v = checkVertical(board)
        let d = checkDiag(board)
        let dF = checkDiag([...board].reverse())
        if (h) {
            return h
        } else if (v) {
            return v
        } else if (d) {
            return d
        } else if (dF) {
            return dF
        } else {
            return false
        }
    }
    const printBoard = (board) => {
        board.map(x =>{
            console.log(x.join(' '))
        })
    }
    const nameToNum = (move) => {
        const letters = {
            "A": 0,
            "B": 1,
            "C": 2,
            "D": 3,
            "E": 4,
            "F": 5,
            "G": 6
        }
        move = move.split('_')
        move[0] = letters[move[0]]
        return move
    }
    const makeMove = (board, move) => {
        const col = move[0]
        const player = move[1]
        getIndex = [false, 0]
        while (!getIndex[0] && getIndex[1] < 6){
            if (board[getIndex[1]][col] != '0'){
                getIndex[0] = true
            } else {
                getIndex[1] +=1
            }
        }
        getIndex[1] -= 1
        board[getIndex[1]][col] = player[0]
        return board
    }
    moves = moves.map(x => {
        return  nameToNum(x)
    })
    gameBoard = [
        ['0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0']
    ]
    console.log(moves)
    for (let i = 0; i < moves.length; i++){
        gameBoard = makeMove(gameBoard, moves[i])
        let didWin = checkWin(gameBoard)
        if (didWin){
            printBoard(gameBoard)
            if (didWin == "R"){
                return "Red"
            } else {
                return "Yellow"
            }
        }
    }
    printBoard(gameBoard)
    return 'Draw'
}

console.log(whoIsWinner(["A_Red",
"A_Red",
"A_Red",
"D_Red",
"A_Yellow",
"B_Yellow",
"G_Red",
"B_Yellow",
"C_Yellow",
"C_Yellow",
"D_Yellow",
"D_Yellow",
"E_Yellow",
"E_Red",
"E_Red",
"E_Red",
"E_Yellow",
"F_Red",
"G_Red",
"F_Red",
"F_Red",
"D_Red",
"D_Red"
]))