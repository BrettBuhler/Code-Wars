package main

import (
	"fmt"
)

func main() {
	input1 := []int{2, 5, 3}
	input2 := []int{1, -2, -1}
	input3 := []int{1, 3, 4}
	input4 := [][]int{input1, input2, input3}
	c := Determinant(input4) //this will expload
	fmt.Println("I don't know if I'll make it here!, ", c)
}
func Determinant(m [][]int) int {
	leng := len(m)
	if leng == 1 {
		return m[0][0]
	} else if leng == 2 {
		return det(m[0], m[1])
	}
	phase := true
	var arr []int
	for i := 0; i < len(m); i++ {
		var val int
		if phase {
			val = twoByTwo(m, i)
		} else {
			val = twoByTwo(m, i) * -1
		}
		phase = !phase
		arr = append(arr, val*m[0][i])
	}
	return sumSlice(arr)
}

func sumSlice(slc []int) int {
	sum := 0
	for _, val := range slc {
		sum += val
	}
	return sum
}

func det(a, b []int) int {
	return a[0]*b[1] - a[1]*b[0]
}

func twoByTwo(m [][]int, index int) int {
	if len(m) == 2 {
		return det(m[0], m[1])
	}
	var ret [][]int
	for i := 1; i < len(m); i++ {
		var row []int
		for j := 0; j < len(m); j++ {
			if j != index {
				row = append(row, m[i][j])
			}
		}
		ret = append(ret, row)
	}
	return Determinant(ret)
}
