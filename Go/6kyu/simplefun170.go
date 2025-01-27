package main

import "fmt"

func main() {
	numbers := []int{1, 1, 1, 1, 2, 3, 4, 4, 4, 4}
	full_res := SumGroups(numbers)
	fmt.Println("full_res", full_res)
}

func SumGroups(arr []int) int {
	flag := false
	i := 0
	sum := 0
	count := 0
	ret_arr := []int{}
	for i < len(arr) {
		even_or_odd := arr[i]%2 == 0
		for j := i; j < len(arr)-1; j++ {
			if even_or_odd == (arr[j+1]%2 == 0) {
				sum += arr[j+1]
				count++
			} else {
				break
			}
		}
		if count > 0 {
			flag = true
			sum += arr[i]
			ret_arr = append(ret_arr, sum)
			i += count + 1
		} else {
			ret_arr = append(ret_arr, arr[i])
			i++
		}
		sum = 0
		count = 0
	}
	if flag {
		return SumGroups(ret_arr)
	} else {
		return len(ret_arr)
	}
}
