/*
Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
*/
// MY SOLUTION

const  snail = (array) => {
    if (array.length == 1) return array[0]
    const outside = (array) => {
      let top = array[0]
      let right = array.map(x=>x[x.length-1]).slice(1,array.length-1)
      let bottom = array[array.length -1]
      let left = array.map(x=>x[0]).slice(1,array.length-1)
      return top.concat(right.concat(bottom.reverse().concat(left.reverse())))
    }
    const removeOutside = (array) => {
        const newArray = [...array]
        newArray.pop()
        newArray.shift()
        for (let i = 0; i < newArray.length; i++){
            newArray[i].pop()
            newArray[i].shift()
        }
        newArray.filter(x=>x != [])
        return newArray
    }
    let outSide = outside(array)
    let inSide = removeOutside(array)
    if (inSide.length == 0) return outSide
    return outSide.concat(snail(inSide))
  }

  console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]))