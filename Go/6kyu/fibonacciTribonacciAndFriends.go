package main

import "fmt"

func main() {
	input := []int{1, 1, 1, 1}
	num := 10
	res := Xbonacci(input, num)
	fmt.Printf("The results of Xbonacci are: %v\n", res)
}

func Xbonacci(sig []int, n int) []int {
	ret_arr := []int{}
	if n <= len(sig) {
		for i := 0; i < n; i++ {
			ret_arr = append(ret_arr, sig[i])
		}
		return ret_arr
	} else {
		for i := 0; i < len(sig); i++ {
			ret_arr = append(ret_arr, sig[i])
		}
	}
	for i := len(sig) - 1; i < n-1; i++ {
		sum := 0
		for j := i; j > i-len(sig); j-- {
			sum += ret_arr[j]
		}
		ret_arr = append(ret_arr, sum)
	}
	return ret_arr
}
