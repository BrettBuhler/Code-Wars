package main

import "fmt"

func main () {
  res := MaxMultiple(2,7) 
  fmt.Printf("Result is %v\n", res)
}

func MaxMultiple(d, b int) int {
  return b/d*d
}
