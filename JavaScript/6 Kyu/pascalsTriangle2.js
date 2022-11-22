/*
Here you will create the classic Pascal's triangle.
Your function will be passed the depth of the triangle and your code has to return the corresponding Pascal's triangle up to that depth.

The triangle should be returned as a nested array. For example:

pascal(5) -> [ [1], [1,1], [1,2,1], [1,3,3,1], [1,4,6,4,1] ]
To build the triangle, start with a single 1 at the top, for each number in the next row you just take the two numbers above it and add them together, except for the edges, which are all 1. e.g.:

      1
    1   1
  1   2   1
1   3   3   1
*/
// MY SOLUTION

const pascal = (n) => {
    const triangle = []
    for (let i = 0; i < n; i++){
        if (triangle.length == 0){
            triangle.push([1])
        } else if (triangle.length == 1){
            triangle.push([1,1])
        } else {
            triangle.push(between(triangle[triangle.length - 1]))
        }
    }
    return triangle
}

const between = (arr) => {
    let newArr = []
    for (let i = 0; i < arr.length - 1; i++){
        newArr.push(arr[i]+arr[i+1])
    }
    newArr.unshift(1)
    newArr.push(1)
    return newArr
}

console.log(pascal(5))