package main

import "fmt"

func FindOdd(seq []int) int {
	countMap := make(map[int]int)
	for _, v := range seq {
		countMap[v]++
	}
  for v, c := range countMap {
    if c%2 != 0 {
      return v
    }
  }
  return seq[0] 
}

func main() {
	arr := []int{1, 2, 4, 4, 4, 1, 2}
	returnNum := FindOdd(arr)
	fmt.Printf("Return Number = %d\n", returnNum)
}
