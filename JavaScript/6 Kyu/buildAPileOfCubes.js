/*
Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n3 n^3n 
3
 , the cube above will have volume of (n−1)3 (n-1)^3(n−1) 
3
  and so on until the top which will have a volume of 13 1^31 
3
 .

You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n3+(n−1)3+...+13=m n^3 + (n-1)^3 + ... + 1^3 = mn 
3
 +(n−1) 
3
 +...+1 
3
 =m if such a n exists or -1 if there is no such n.

Examples:
findNb(1071225) --> 45

findNb(91716553919377) --> -1
*/
// MY SOLUTION
const findNb = (m) => {
    let index = 1
    let total = m
    while (total > 0){
        total -= Math.pow(index, 3)
        index ++
    }
    return total == 0 ? index - 1 : -1
}
