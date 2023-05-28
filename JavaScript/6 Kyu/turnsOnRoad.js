/*
Task
There's a wolf who lives in the plane forest, which is located on the Cartesian coordinate system. When going on the hunt, the wolf starts at point (0, 0) and goes spirally as shown in the picture below:



The wolf finally found something to eat at point (x, y). Your task is to calculate the number of turns he had to make to get to that point.

Input/Output
[input] integer x

x coordinate of the final point.

-1000000 ≤ x ≤ 1000000

[input] integer y

y coordinate of the final point.

-1000000 ≤ y ≤ 1000000

[output] an integer

The number of turns.

Example
For x = 1 and y = 1, the output should be 1.

Path:(0,0) --> (1,0) --> (1,1), 1 turn at (1,0)

For x = 1 and y = -1, the output should be 4.

Path:(0,0) --> (1,0) --> (1,1) --> (-1,1) --> (-1,-1) --> (1,-1),

4 turns at (1,0), (1,1), (-1,1), (-1,-1)
*/

const turnsOnRoad = (x, y) => {
    if ((x == 0 || x == 1) && y == 0){
        return 0
    }
    const max = Math.abs(x) > Math.abs(y) ? Math.abs(x) : Math.abs(y)
    const baseTurns = 1 + ((max - 1) * 4)
    if (x == max && y == max) {
        return baseTurns
    }
    if (x == y){
        return baseTurns + 2
    }
    if (y == (-1 * max)){
        return baseTurns + 3
    }
    if (x == max){
        if (y == ((-1 * max) + 1)){
            return baseTurns - 1
        }
        return baseTurns
    }
    if (y == max){
        return baseTurns + 1
    }
    if (x == (-1 * max)){
        return baseTurns + 2
    }
}

console.log(turnsOnRoad(2,-2))
console.log(turnsOnRoad(2,-1))
