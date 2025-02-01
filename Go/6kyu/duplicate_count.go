package main

import "fmt"

func main() {
	res := duplicate_count("AAAZZZaaazzz")
	fmt.Println("RES:", res)
}
func duplicate_count(s1 string) int {
	char_map := make(map[rune]int)
	for _, char := range s1 {
		char_case := 0
		if char >= 65 && char <= 90 {
			char_case = int(char) + 32
		} else {
			char_case = int(char)
		}
		char_map[rune(char_case)]++
	}
	sum := 0
	for _, v := range char_map {
		if v > 1 {
			sum++
		}
	}
	return sum
}
