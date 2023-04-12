/*
Task
Given a list of points, construct a graph that includes all of those points and the position (0, 0).

Points will be objects like so: {x: 1, y: -1}.

A graph should be represented as a 2d array.

Example:
Input:
constructGraph([{x: 2, y: 2}, {x: -2, y: -2}])

Output:
[
  [' ', ' ', '|', ' ', '*'],
  [' ', ' ', '|', ' ', ' '],
  ['-', '-', '+', '-', '-'],
  [' ', ' ', '|', ' ', ' '],
  ['*', ' ', '|', ' ', ' '],
]
Points on the graph are represented as '*', and the position (0, 0) is represented by a '+'.

All positions along the x axis should be '-', and all postions along the y axis should be '|'. The rest of the positions should be spaces: ' '.

Also, if a point is on the x or y axis, the default char should be replaced with the point char: '*'.

Example:
Input:
constructGraph([{x: 0, y: 0}, {x: 1, y: 4}]);

Output:
[
  ['|', '*']
  ['|', ' '],
  ['|', ' '],
  ['|', ' '],
  ['*', '-']
]// ^
 //this is (0, 0)
Graphs should be as minimal as posible while still retaining a rectangular shape. They should be just large enough to include all the points and the position (0, 0).

If no points are given, the graph should just include the position (0, 0). Points might have the same value sometimes.
*/

const constructGraph = (points) => {
    let xMin = 0
    let xMax = 0
    let yMin = 0
    let yMax = 0
    let pointsToFill = {}
    for (let item of points){
        if (item['x'] < xMin) xMin = item['x']
        if (item['x'] > xMax) xMax = item['x']
        if (item['y'] < yMin) yMin = item['y']
        if (item['y'] > yMax) yMax = item['y']
        pointsToFill[`${item['x']},${item['y']}`] = true
    }
    let arr = []
    for (let y = yMax; y >= yMin; y--){
        let row = []
        for (let x = xMin; x <= xMax; x++){
            if (pointsToFill[`${x},${y}`]){
                row.push('*')
            } else if (x === 0){
                if (y === 0){
                    row.push('+')
                } else {
                    row.push('|')
                }
            } else {
                if (y === 0){
                    row.push('-')
                } else {
                    row.push(' ')
                }
            }
        }
        arr.push(row)
    }
    return arr
}


console.log(constructGraph([{x: 2, y: 2}, {x: -2, y: -2}]))