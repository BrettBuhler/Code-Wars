const isSolved = (board) => {
    const diag = (board) => {
        if (board[0][0] == board[1][1] && board[1][1] == board[2][2] || 
            board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
                return board[1][1]
            } else {
                return 0
            }
    }
    const horizontal = (board) => {
        if(board[0][0] == board[0][1] && board[0][1] == board[0][2]) {
            return board[0][0]
        }
        if(board[1][0] == board[1][1] && board[1][1] == board[1][2]) {
            return board[1][1]
        }
        if(board[2][0] == board[2][1] && board[2][1] == board[2][2]) {
            return board[2][1]
        }
        return 0
    }
    const vertical = (baord) => {
        if (board[0][0] == board[1][0] && board[1][0] == board[2][0]) {
            return board[1][0]
        }
        if (board[0][1] == board[1][1] && board[1][1] == board[2][1]) {
            return board[1][1]
        }
        if (board[0][2] == board[1][2] && board[1][2] == board[2][2]) {
            return board[1][2]
        }
        return 0
    }
    if (diag(board)) return board[1][1]
    const vertical_check = vertical(board)
    if (vertical_check) return vertical_check
    const horizontal_check = horizontal(board)
    if (horizontal_check) return horizontal_check
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++){
            if (board[i][j] === 0) return - 1
        }
    }
    return 0
}

console.log(isSolved([[1, 2, 1],
                      [2, 2, 1],
                      [1, 1, 2]]))