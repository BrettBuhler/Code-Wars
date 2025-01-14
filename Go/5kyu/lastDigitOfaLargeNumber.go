package main

import (
	"fmt"
	"strconv"
)

func main() {
	test := LastDigit("24", "12")
	fmt.Println("test =", test)
}
func LastDigit(b, p string) int {
	sequences := map[int][]int{
		1: {1},
		2: {4, 8, 6, 2},
		3: {9, 7, 1, 3},
		4: {6, 4},
		5: {5},
		6: {6},
		7: {9, 3, 1, 7},
		8: {4, 2, 6, 8},
		9: {9, 1},
	}
	base_str := b[len(b)-1:]
	base, err := strconv.Atoi(base_str)
	if err != nil {
		fmt.Println("Error Generating Base Int", err)
	}
	if p == "1" {
		return base
	} else if base == 0 {
		return 0
	}
	sequence_length := len(sequences[base])
	var pow_str string
	if len(p) > 2 {
		pow_str = p[len(p)-2:]
	} else {
		pow_str = p
	}
	power, err := strconv.Atoi(pow_str)
	if err != nil {
		fmt.Println("Error Generating Power Int", err)
	}
	remainder := power % sequence_length
	if remainder == 0 {
		return sequences[base][0]
	}

	last_digit := sequences[base][remainder_index(base, remainder)]
	return last_digit
}
func remainder_index(b, r int) int {
  fmt.Println("base and r",b,r)
	if b == 2 || b == 3 || b == 7 || b == 8 {
		if r == 3 {
			return 1
		} else if r == 2 {
			return 0
		} else if r == 1 {
			return 3
		} else {
			return 2
		}
	} else if b == 4 || b == 9 {
		if r%2 == 0 {
			return 1
		} else {
			return 0
		}
	}
	return 0
}
