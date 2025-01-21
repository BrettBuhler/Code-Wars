package main

import "fmt"

func main() {
	fmt.Println("Hello World!")
	fmt.Println("TESTER", GenerateDiagonal(3, 7))
}
func GenerateDiagonal(n, l int) []int {
	ret := make([]int, l)
	for i := 0; i < l; i++ {
		ret[i] = ncr(n+i, i)
	}
	return ret
}
func ncr(a, b int) int {
	if b > a {
		return 0
	}
	if b == 0 || a == b {
		return 1
	}
	if b > (a - b) {
		b = a - b
	}
	res := 1
	for i := 0; i < b; i++ {
		res *= (a - i)
		res /= (i + 1)
	}
	return res
}
