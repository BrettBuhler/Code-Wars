package main

import (
	"fmt"
)

func Collatz(n int) int {
  var numbers []int
  numbers = append(numbers, n)
  for (n > 1) {
    if n % 2 == 0 {
      n /= 2
    } else {
      n *= 3
      n++
    }
    numbers = append(numbers,n)
  }
	return len(numbers) 
}

func main() {
  fmt.Println(Collatz(20))
}
