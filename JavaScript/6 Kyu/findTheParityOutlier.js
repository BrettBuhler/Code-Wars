/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/
// MY SOLUTION
function findOutlier(integers){
    const isOdd = (x) => x%2==0||x==0?false:true
    let lastNum = integers[1]
    let hold = integers[2]
    if (isOdd(lastNum) == isOdd(hold)){
        for (let i = 0; i < integers.length; i++){
      if (isOdd(integers[i]) != isOdd(lastNum)){
        return integers[i]
      }
    }
    } else {
      if (isOdd(integers[0]) == isOdd(integers[1])){
        return integers[2]
      } else if (isOdd(integers[1]) == isOdd(integers[2])){
        return integers[3]
      } else {
        return integers[1]
      }
    }
  }