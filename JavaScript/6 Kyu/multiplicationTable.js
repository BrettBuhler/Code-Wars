/*
multiplicationTable = function(size) {
  let table = []
  for (let i = 1; i <= size; i++){
    table.push([])
    for (let j = 1; j <= size; j++){
      table[i-1].push(i * j)
    }
  }
  return table
}
*/

// MY SOLUTION

multiplicationTable = function(size) {
    let table = []
    for (let i = 1; i <= size; i++){
      table.push([])
      for (let j = 1; j <= size; j++){
        table[i-1].push(i * j)
      }
    }
    return table
  }