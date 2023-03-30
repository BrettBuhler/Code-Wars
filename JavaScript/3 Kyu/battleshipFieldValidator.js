/*
Write a method that takes a field for well-known board game "Battleship" as an argument and returns true if it has a valid disposition of ships, false otherwise. Argument is guaranteed to be 10*10 two-dimension array. Elements in the array are numbers, 0 if the cell is free and 1 if occupied by ship.

Battleship (also Battleships or Sea Battle) is a guessing game for two players. Each player has a 10x10 grid containing several "ships" and objective is to destroy enemy's forces by targetting individual cells on his field. The ship occupies one or more cells in the grid. Size and number of ships may differ from version to version. In this kata we will use Soviet/Russian version of the game.


Before the game begins, players set up the board and place the ships accordingly to the following rules:
There must be single battleship (size of 4 cells), 2 cruisers (size 3), 3 destroyers (size 2) and 4 submarines (size 1). Any additional ships are not allowed, as well as missing ships.
Each ship must be a straight line, except for submarines, which are just single cell.

The ship cannot overlap or be in contact with any other ship, neither by edge nor by corner.

This is all you need to solve this kata. If you're interested in more information about the game, visit this link.
*/

const validateBattlefield = (field) => {
    let bShip = battleshipCount(field)
    let cShip = cruisersCount(bShip[1])
    let dShip = destroyerCount(cShip[1])
    let sShip = subCount(dShip[1])
    for (let i = 0; i < sShip[1].length; i++){
        if (sShip[1][i].includes(1)){
            return false
        }
    }
    return bShip[0] == 1 && cShip[0] == 2 && dShip[0] == 3 && sShip[0] == 4
}

const battleshipCount = (field) => {
    let count = 0
    for (let i = 0; i < field.length; i++){
        for (let j = 0; j < field[i].length; j++){
            if (field[i][j] === 1 && j+3 < field[i].length){
                if (field[i][j+1] === 1 && field[i][j+2] === 1 && field[i][j+3] === 1){
                    if (checkContact(field,[i,j],[i,j+3])){
                        field[i][j] = 0
                        field[i][j+1] = 0
                        field[i][j+2] = 0
                        field[i][j+3] = 0
                        count++
                    }
                }
            }
            if (field[i][j] === 1 && i+3 < field.length){
                if (field[i+1][j] === 1 && field[i+2][j] === 1 && field[i+3][j] === 1){
                    if (checkContact(field,[i,j],[i+3,j])){
                        field[i][j] = 0
                        field[i+1][j] = 0
                        field[i+2][j] = 0
                        field[i+3][j] = 0
                        count++
                    }
                }
            }
        }
    }
    return ([count, field])
}

const cruisersCount = (field) => {
    let count = 0
    for (let i = 0; i < field.length; i++){
        for (let j = 0; j < field[i].length; j++){
            if (field[i][j] === 1 && j+2 < field[i].length){
                if (field[i][j+1] === 1 && field[i][j+2] === 1){
                    if (checkContact(field,[i,j],[i,j+2])){
                        field[i][j] = 0
                        field[i][j+1] = 0
                        field[i][j+2] = 0
                        count++
                    }
                }
            }
            if (field[i][j] === 1 && i+2 < field.length){
                if (field[i+1][j] === 1 && field[i+2][j] === 1){
                    if (checkContact(field,[i,j],[i+2,j])){
                        field[i][j] = 0
                        field[i+1][j] = 0
                        field[i+2][j] = 0
                        count++
                    }
                }
            }
        }
    }
    return ([count, field])
}


const destroyerCount = (field) => {
    let count = 0
    for (let i = 0; i < field.length; i++){
        for (let j = 0; j < field[i].length; j++){
            if (field[i][j] === 1 && j+1 < field[i].length){
                if (field[i][j+1] === 1){
                    if (checkContact(field,[i,j],[i,j+1])){
                        field[i][j] = 0
                        field[i][j+1] = 0
                        count++
                    }
                }
            }
            if (field[i][j] === 1 && i+1 < field.length){
                if (field[i+1][j] === 1){
                    if (checkContact(field,[i,j],[i+1,j])){
                        field[i][j] = 0
                        field[i+1][j] = 0
                        count++
                    }
                }
            }
        }
    }
    return ([count, field])
}

const subCount = (field) => {
    let count = 0
    for (let i = 0; i < field.length; i++){
        for (let j = 0; j < field[i].length; j++){
            if (field[i][j] === 1){
                if (checkContact(field, [i,j], [i,j])){
                    count++
                    field[i][j] = 0
                }
            }
        }
    }
    return [count, field]
}

const checkContact = (field, start, end) => {
    let arr = []
    let top = []
    let bottom = []
    let left = []
    let right = []
    if (start[1] < end[1]){
        if (start[0] === 0){
            top = false
        }
        if (start[0] === field.length - 1){
            bottom = false
        }
        if (end[1] === field.length - 1){
            right = false
        }
        if (start[1] === 0){
            left = false
        }
        if (top){
            if (left && right){
                arr = arr.concat(field[start[0]-1].slice(start[1] - 1, end[1] + 2))
            } else if (left){
                arr = arr.concat(field[start[0]-1].slice(start[1] - 1, end[1] + 1))
            } else if (right){
                arr = arr.concat(field[start[0]-1].slice(start[1], end[1] + 2))
            }
        }
        if (bottom){
            if (left && right){
                arr = arr.concat(field[start[0]+1].slice(start[1] - 1, end[1] + 2))
            } else if (left){
                arr = arr.concat(field[start[0]+1].slice(start[1] - 1, end[1] + 1))
            } else if (right){
                arr = arr.concat(field[start[0]+1].slice(start[1], end[1] + 2))
            }
        }
        if (left){
            arr = arr.concat(field[start[0]][start[1]-1])
        }
        if (right){
            arr = arr.concat(field[start[0]][end[1]+1])
        }
    } else {
        if (start[0] === 0){
            top = false
        }
        if (end[0] === field.length - 1){
            bottom = false
        }
        if (end[1] === field.length - 1){
            right = false
        }
        if (start[1] === 0){
            left = false
        }
        if (left){
            if (top && bottom){
                for (let i = 0; i < end[0] - start[0] + 3; i++){
                    arr.push(field[start[0] + i - 1][start[1] - 1])
                }
            } else if (top){
                for (let i = 0; i < end[0] - start[0] + 2; i++){
                    arr.push(field[start[0] + i - 1][start[1] - 1])
                }
            } else if (bottom){
                for (let i = 0; i < end[0] - start[0] + 2; i++){
                    arr.push(field[start[0] + i][start[1] - 1])
                }
            }
        }
        if (right){
            if (top && bottom){
                for (let i = 0; i < end[0] - start[0] + 3; i++){
                    arr.push(field[start[0] + i - 1][start[1] + 1])
                }
            } else if (top){
                for (let i = 0; i < end[0] - start[0] + 2; i++){
                    arr.push(field[start[0] + i - 1][start[1] + 1])
                }
            } else if (bottom){
                for (let i = 0; i < end[0] - start[0] + 2; i++){
                    arr.push(field[start[0] + i][start[1] + 1])
                }
            }
        }
        if (top){
            arr.push(field[start[0] - 1][start[1]])
        }
        if (bottom){
            arr.push(field[end[0] + 1][start[1]])
        }
    }
    return arr.includes(1) ? false : true
}


console.log(validateBattlefield([
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]))