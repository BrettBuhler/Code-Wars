/*
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
Go challenge Build Tower Advanced once you have finished this :)
*/

const towerBuilder = (n) => {
    let arr = []
    let num = 1
    while (n > 0){
        n--
        arr.push('*'.repeat(num))
        num+=2
    }
    num = arr.length - 1
    for (let i = 0; i < arr.length; i++){
        arr[i] = " ".repeat(num) + arr[i] + " ".repeat(num)
        num--
    }
    return arr
}

console.log(towerBuilder(3))