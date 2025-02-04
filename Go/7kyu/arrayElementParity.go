package main

import (
	"fmt"
)

func main() {
	input_arr := []int{1, -1, 2, -2, 3}
	res := Solve(input_arr)
	fmt.Println("res =", res)
}

func Solve(arr []int) int {
	nums := make(map[int]map[string]bool)
	for _, val := range arr {
		pos_val := val
		if val < 0 {
			pos_val *= -1
		}
		if nums[pos_val] == nil {
			nums[pos_val] = make(map[string]bool)
		}
		if val > 0 {
			nums[pos_val]["pos"] = true
		} else {
			nums[pos_val]["neg"] = true
		}
	}
	for key, val := range nums {
		if val["pos"] != true || val["neg"] != true {
			if val["pos"] == true {
				return key
			}
			return key * -1
		}
	}
	return -1
}
