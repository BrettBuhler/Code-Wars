/*
In this kata you will be given a sequence of the dimensions of rectangles ( sequence with width and length ) and circles ( radius - just a number ).
Your task is to return a new sequence of dimensions, sorted ascending by area.

For example,

const array = [ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]; // [ rectangle, circle, circle, rectangle ]
sortByArea(array) => [ [ 1.342, 3.212 ], 1.23, [ 4.23, 6.43 ], 3.444 ]
*/
// MY SOLUTION
const sortByArea = (array) => {
    const getArea = (x) => {
      return typeof x != 'number' ? x[0] * x[1] : x * x * Math.PI
    }
    return [...array].sort((a,b)=>{
      let one = getArea(a)
      let two = getArea(b)
      return one > two ? 1 : -1
    })
  }