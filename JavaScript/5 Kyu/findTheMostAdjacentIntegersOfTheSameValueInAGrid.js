const findMostAdjacent = (grid) => {
    const checked = {}
    const getAgeacent = (x, y) => {
        const upCheck = (x, y, value) => {
            if(x < 1) {
                return false
            } else {
                if (grid[x-1][y] === value) {
                    return true
                } else {
                    return false
                }
            }
        }
        const downCheck = (x, y, value) => {
            if (x === grid.length - 1) {
                return false
            } else {
                if (grid[x + 1][y] === value) {
                    return true
                } else {
                    return false
                }
            }
        }
        const leftCheck = (x, y, value) => {
            if (y < 1) {
                return false
            } else {
                if (grid[x][y - 1] === value) {
                    return true
                } else {
                    return false
                }
            }
        }
        const rightCheck = (x, y, value) => {
            if (y >= grid[x].length) {
                return false
            } else {
                if (grid[x][y + 1] === value) {
                    return true
                } else {
                    return false
                }
            }
        }
        const deduplicate = (array) => {
            const seen = new Map()
            return array.filter((subArray) => {
                const key = JSON.stringify(subArray)
                if (!seen.has(key)) {
                    seen.set(key, true)
                    return true
                }
                return false
            })
        }
        const startingValue = grid[x][y]
        let nextCheck = [[x,y]]
        let flag = true
        while (flag) {
            let tempCheck = []
            for (let i = 0; i < nextCheck.length; i++) {
                if (!checked[`${nextCheck[i][0]}:${nextCheck[i][1]}`]){
                    checked[`${nextCheck[i][0]}:${nextCheck[i][1]}`] = true
                    const up = upCheck(nextCheck[i][0], nextCheck[i][1], startingValue)
                    const down = downCheck(nextCheck[i][0], nextCheck[i][1], startingValue)
                    const left = leftCheck(nextCheck[i][0], nextCheck[i][1], startingValue)
                    const right = rightCheck(nextCheck[i][0], nextCheck[i][1], startingValue)

                    if (up) {
                        tempCheck.push([nextCheck[i][0] - 1, nextCheck[i][1]])
                    }
                    if (down) {
                        tempCheck.push([nextCheck[i][0] + 1, nextCheck[i][1]])
                    }
                    if (left) {
                        tempCheck.push([nextCheck[i][0], nextCheck[i][1] - 1])
                    }
                    if (right) {
                        tempCheck.push([nextCheck[i][0], nextCheck[i][1] + 1])
                    }
                }
            }
            if (tempCheck.length > 0) {
                nextCheck = deduplicate([...nextCheck, ...tempCheck])
            } else {
                flag = false
            }
        }
        return [startingValue, nextCheck.length]
    }
    const returnValues = []
    for(let i = 0; i < grid[0].length; i++) {
        for (let j = 0; j < grid.length; j++) {
            const returnValue = getAgeacent(i,j)
            returnValues.push(returnValue)
        }
    }
    const max = Math.max(...returnValues.map(subArray => subArray[1]))
    return returnValues.filter(subArray => subArray[1] === max).sort((a, b) => a[0] - b[0])[0]
}

const testCases = [
    [
      [[1,0,1],
       [1,1,0],
       [0,0,2]],  [1,3]
    ],
    [
      [[2,2,1],
	     [2,2,1],
	     [3,1,1]],  [1,4]
    ],
    [
      [[1,0,1,0],
	     [1,1,0,0],
	     [0,0,0,0],
	     [1,1,0,0]],  [0,9]
    ],
    [
      [[7,2,5,1],
       [7,2,5,8],
       [7,2,5,8],
       [7,2,5,1]],  [2,4]
    ]
]

  for (let i = 0; i < testCases.length; i++) {
    console.log('Test Case', testCases[i][0], "should equal", testCases[i][testCases[i].length - 1])
    const result = findMostAdjacent(testCases[i][0])

    if (result[0] === testCases[i][1][0] && result[1] === testCases[i][1][1]){
        console.log('TEST PASSED')
    } else {
        console.log("TEST FAILD WITH RESULT:", result)
    }
  }