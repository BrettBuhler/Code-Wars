package main

import "fmt"

func main() {
  res := OverTheRoad(2,3)
  fmt.Println("res =", res)
}

func OverTheRoad(a, n int) int {
  var count int
  var isEven bool
  test := 0
  if a%2==0 {
    count = 2 
    isEven = true
  } else {
    count = 1
    isEven = false
  }
  for count != a {
    fmt.Println("count", count)
    count+=2
    test++
    if test > 10 {
      break
    }
  }
  if isEven {
    return (2* test)
  } else {
    return 2 + (2*count)
  }
}
