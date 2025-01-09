package main

import "fmt"

func Solve(st string, k int) int {
  var chunk_length = len(st) - k
  var chumk_nums = len(st) - chunk_length + 1
  for i := 0; i <chumk_nums; i++ {
    fmt.Println(st[i:i+chunk_length])
  }
  return 1
}

func main() {
 Solve("1234",1) 
}
