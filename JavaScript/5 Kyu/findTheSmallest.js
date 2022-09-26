/*
You have a positive number n consisting of digits. You can do at most one operation: Choosing the index of a digit in the number, remove this digit at that index and insert it back to another or at the same place in the number in order to find the smallest number you can get.

Task:
Return an array or a tuple or a string depending on the language (see "Sample Tests") with

the smallest number you got
the index i of the digit d you took, i as small as possible
the index j (as small as possible) where you insert this digit d to have the smallest number.
Examples:
smallest(261235) --> [126235, 2, 0] or (126235, 2, 0) or "126235, 2, 0"
126235 is the smallest number gotten by taking 1 at index 2 and putting it at index 0

smallest(209917) --> [29917, 0, 1] or ...

[29917, 1, 0] could be a solution too but index `i` in [29917, 1, 0] is greater than 
index `i` in [29917, 0, 1].
29917 is the smallest number gotten by taking 2 at index 0 and putting it at index 1 which gave 029917 which is the number 29917.

smallest(1000000) --> [1, 0, 6] or ...
Note
Have a look at "Sample Tests" to see the input and output in each language
*/
// MY SOLUTION

const smallest = (b) => {
    const swaper = (a,i,j) => {
      let arr = a.toString().split('')
      let left = arr.slice(0,i)
      let right = arr.slice(i+1,arr.length)
      let newArr = left.concat(right)
      newArr.splice(j,0,arr[i])
      return [Number(newArr.join('')),i,j]
    }
    const n = b.toString()
    let small = b
    let temp = 0
    let arr = []
    for (let i = 0; i < n.length; i++){
      for (let j = 0; j < n.length; j++){
        arr.push(swaper(b,i,j))
      }
    }
    arr.sort((a,b)=>{
      if (b[0] < a[0]){
        return 1
      } else if (b[0] > a[0]) {
        return -1
      } else {
        if (b[1]<a[1]){
          return 1
        } else if (b[1]>a[1]){
          return -1
        } else {
          if (b[2] < a[2]){
            return 1
          } else if (b[2] > a[2]){
            return -1
          } else {
            return 0
          }
        }
      }
    })
    return arr[0]
}