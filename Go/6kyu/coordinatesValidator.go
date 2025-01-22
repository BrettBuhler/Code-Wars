package main

import (
	"fmt"
	"strconv"
	"strings"
	"unicode"
)

func IsValidCoordinates(c string) bool {
	for _, char := range c {
		if unicode.IsLetter(char) {
			return false
		}
	}
	split_string := strings.Split(c, ", ")
	if len(split_string) != 2 {
		return false
	}
	float_1, err_1 := strconv.ParseFloat(split_string[0], 2)
	float_2, err_2 := strconv.ParseFloat(split_string[1], 2)
	if err_1 != nil || err_2 != nil || float_1 > 90 || float_1 < -90 || float_2 > 180 || float_2 < -180 {
		return false
	}
	return true
}

func main() {
	input := "43.91343345, 143"
	output := IsValidCoordinates(input)
	fmt.Printf("OUTPUT OF %v = %v", input, output)
}
