package main

import (
	"fmt"
)

func main() {
	ret := DigitalRoot(1239)
	fmt.Println("ret =", ret)
}

func DigitalRoot(n int) int {
	if n < 10 {
		return n
	}
	str := fmt.Sprint(n)
	sum := 0
	for i := range str {
		sum += int(str[i]) - '0'
	}
	if sum < 10 {
		return sum
	}
	return DigitalRoot(sum)
}
