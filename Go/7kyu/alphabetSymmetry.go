package main

import "fmt"

func main() {
	var me = []string{"ABC"}
	test := solve(me)
	fmt.Println(test)
}

func solve(slice []string) []int {
	var ret = []int{}
	for _, v := range slice {
		count := 0
		for i, v2 := range v {
			if int(v2)-97 == i {
				count++
			} else if int(v2)-65 == i {
				count++
			}
		}
		ret = append(ret, count)
	}
	return ret
}
