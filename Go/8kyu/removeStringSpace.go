package main

import (
	"fmt"
	"strings"
)

func main() {
	str := "a b c "
	var noSpaceStr = NoSpace(str)
	fmt.Println(noSpaceStr)
}

func NoSpace(word string) string {
	var builder strings.Builder
	for _, char := range word {
		if char != 32 {
			builder.WriteRune(char)
		}
	}
	return builder.String()
}
