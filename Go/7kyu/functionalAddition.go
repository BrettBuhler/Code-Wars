package main

import "fmt"

func main() {
  var one int = 3
  var two int = 5
  var res = Add(one)(two)
  fmt.Println("Result = ", res)
}
func Add (n int) func(int) int {
  return func(x int) int {
    return n + x
  }
}
