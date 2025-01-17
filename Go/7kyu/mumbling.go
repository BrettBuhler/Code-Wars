package main

import (
	"fmt"
	"strings"
)

func main() {

	test := Accum("abcd")
	fmt.Println(test)
}

func Accum(s string) string {
	var builder strings.Builder
	for i, char := range s {
		str := strings.Title(strings.ToLower(strings.Repeat(string(char), i+1)))
		builder.WriteString(str)
		if i != len(s)-1 {
			builder.WriteRune('-')
		}

	}
	return builder.String()
}
