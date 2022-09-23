const checkWord = (board, word) => {
    const checkBoggle = (i, j, word, board) => {
        let newWord = word.substring(1,word.length)
        if (newWord.length == 0){
            return true
        }
        let newBoard = [...board]
        let boggleArr = []
        try {
            boggleArr.push(board[i][j-1])
            if (board[i][j-1] == newWord[0]) {
                newBoard[i][j-1] = '!'
                let isT = checkBoggle(i, j-1, newWord, newBoard)
                if (isT){
                    return true
                }
            }
        } catch{
            
        }
        try {
            boggleArr.push(board[i][j+1])
            if (board[i][j+1] == newWord[0]) {
                newBoard[i][j+1] = '!'
                let isT = checkBoggle(i, j+1, newWord, newBoard)
                if (isT){
                    return true
                }
            }
        } catch {
            
        }
        try {
            boggleArr.push(board[i-1][j+1])
            if (board[i-1][j+1] == newWord[0]) {
                newBoard[i-1][j+1] = '!'
                let isT = checkBoggle(i-1, j+1, newWord, newBoard)
                if (isT){
                    return true
                }
            }
        } catch {

        }
        try {
            boggleArr.push(board[i-1][j])
            if (board[i-1][j] == newWord[0]) {
                newBoard[i-1][j] = '!'
                let isT = checkBoggle(i-1, j, newWord, newBoard)
                if (isT){
                    return true
                }
            }
        } catch {
            
        }try {
            boggleArr.push(board[i-1][j-1])
            if (board[i-1][j-1] == newWord[0]) {
                newBoard[i-1][j-1] = '!'
                let isT = checkBoggle(i-1, j-1, newWord, newBoard)
                if (isT){
                    return true
                }
            }
        } catch {

        }
        try {
            boggleArr.push(board[i+1][j+1])
            if (board[i+1][j+1] == newWord[0]) {
                newBoard[i+1][j+1] = '!'
                let isT = checkBoggle(i+1, j+1, newWord, newBoard)
                if (isT){
                    return true
                }
            }
        } catch {
            
        }
        try {
            boggleArr.push(board[i+1][j])
            if (board[i+1][j] == newWord[0]) {
                newBoard[i+1][j] = '!'
                let isT = checkBoggle(i+1, j, newWord, newBoard)
                if (isT){
                    return true
                }
            }
        } catch {

        }
        try {
            boggleArr.push(board[i+1][j-1])
            if (board[i+1][j-1] == newWord[0]) {
                newBoard[i+1][j-1] = '!'
                let isT = checkBoggle(i+1, j-1, newWord, newBoard)
                if (isT){
                    return true
                }
            }
        } catch {
            
        }
        return false
    }

    for (let i = 0; i < board.length; i++){
        for (j = 0; j < board[i].length; j++){
            if (board[i][j] == word[0]){
                if(checkBoggle(i,j,word,board)){
                    return true
                }
            }
        }
    }
    return false
}

var testBoard = [
    ["E","A","R","A"],
    ["N","L","E","C"],
    ["I","A","I","S"],
    ["B","Y","O","R"]
  ]

  console.log(checkWord(testBoard, "CEREAL"))